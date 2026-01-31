import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token, tier = 'tier_0' } = body

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      )
    }

    // Fetch user by reveal_token to get user_id
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('id, email, first_name, reveal_token')
      .eq('reveal_token', token)
      .single()

    if (userError || !user) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 404 }
      )
    }

    // Get the price ID based on tier
    const priceId = process.env.STRIPE_PRICE_ID_TIER_0!
    
    if (!priceId) {
      return NextResponse.json(
        { error: 'Stripe price ID not configured' },
        { status: 500 }
      )
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/reveal/${token}?payment=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/unlock?token=${token}&payment=cancelled`,
      metadata: {
        user_id: user.id,
        reveal_token: token,
        tier: tier,
      },
      customer_email: user.email,
    })

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    })
  } catch (error: any) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
