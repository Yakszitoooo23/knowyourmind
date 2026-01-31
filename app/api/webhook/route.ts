import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature' },
      { status: 400 }
    )
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set')
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    )
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      const userId = session.metadata?.user_id
      const tier = session.metadata?.tier || 'tier_0'

      if (!userId) {
        console.error('No user_id in session metadata')
        return NextResponse.json(
          { error: 'No user_id in metadata' },
          { status: 400 }
        )
      }

      // Update payment status based on tier
      const updateData: any = {}
      
      if (tier === 'tier_0') {
        updateData.reveal_paid = true
      } else if (tier === 'tier_1') {
        updateData.report_paid = true
      } else if (tier === 'tier_2') {
        updateData.full_report_paid = true
      }

      const { error: updateError } = await supabase
        .from('users')
        .update(updateData)
        .eq('id', userId)

      if (updateError) {
        console.error('Error updating payment status:', updateError)
        return NextResponse.json(
          { error: 'Failed to update payment status' },
          { status: 500 }
        )
      }

      console.log(`Payment successful for user ${userId}, tier ${tier}`)
    } catch (error: any) {
      console.error('Error processing webhook:', error)
      return NextResponse.json(
        { error: error.message || 'Error processing webhook' },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({ received: true })
}
