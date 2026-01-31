'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import { types } from '@/content/types'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

type AnswerType = 'decoder' | 'visionary' | 'architect' | 'empath' | 'executor' | 'philosopher'

// Map old DB primary_type values to new type keys for backward compatibility
const TYPE_MAP: Record<string, AnswerType> = {
  analyst: 'decoder',
  creative: 'visionary',
  strategist: 'architect',
  connector: 'empath',
  practical: 'executor',
  reflector: 'philosopher',
}

function UnlockContent() {
  const searchParams = useSearchParams()
  const tokenParam = searchParams.get('token')
  const typeParam = searchParams.get('type') // Fallback for old links
  
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<any>(null)
  const [quizData, setQuizData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      if (tokenParam) {
        try {
          // Fetch user by reveal_token
          const { data: user, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('reveal_token', tokenParam)
            .single()

          if (userError || !user) {
            setError('Invalid or expired link')
            return
          }

          setUserData(user)

          // Check if already paid
          if (user.reveal_paid) {
            // Redirect to reveal page
            window.location.href = `/reveal/${tokenParam}`
            return
          }

          // Fetch quiz results
          const { data: quiz, error: quizError } = await supabase
            .from('quiz_results')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(1)
            .single()

          if (quizError) {
            console.error('Error fetching quiz results:', quizError)
          } else {
            setQuizData(quiz)
          }
        } catch (err) {
          console.error('Error:', err)
          setError('Something went wrong')
        }
      } else if (typeParam) {
        // Fallback for old links (without database)
        const validTypes: AnswerType[] = ['decoder', 'visionary', 'architect', 'empath', 'executor', 'philosopher']
        const legacyTypes = ['analyst', 'creative', 'strategist', 'connector', 'practical', 'reflector']
        if (validTypes.includes(typeParam as AnswerType) || legacyTypes.includes(typeParam)) {
          setQuizData({ primary_type: TYPE_MAP[typeParam] || typeParam })
        } else {
          setError('Invalid link')
        }
      } else {
        setError('Invalid link')
      }
    }

    fetchUserData()
  }, [tokenParam, typeParam])

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Link</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/quiz"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Take Quiz Again
          </Link>
        </div>
      </div>
    )
  }

  if (!quizData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const primaryTypeRaw = quizData.primary_type as string
  const primaryType = (TYPE_MAP[primaryTypeRaw] || primaryTypeRaw) as AnswerType
  const validTypes: AnswerType[] = ['decoder', 'visionary', 'architect', 'empath', 'executor', 'philosopher']
  const type = validTypes.includes(primaryType) ? primaryType : null

  if (!type) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Type</h1>
          <p className="text-gray-600 mb-6">Unable to determine your intelligence type.</p>
          <Link
            href="/quiz"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Take Quiz Again
          </Link>
        </div>
      </div>
    )
  }

  const handleUnlock = async () => {
    setIsLoading(true)
    
    try {
      if (tokenParam) {
        // Create Stripe Checkout session
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: tokenParam,
            tier: 'tier_0',
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          console.error('Checkout API error:', data)
          throw new Error(data.error || 'Failed to create checkout session')
        }

        // Redirect to Stripe Checkout
        if (data.url) {
          window.location.href = data.url
        } else {
          throw new Error('No checkout URL returned')
        }
      } else if (typeParam) {
        // Fallback for old links without database
        window.location.href = `/reveal/${primaryType}`
      }
    } catch (error: any) {
      console.error('Error:', error)
      console.error('Error details:', error.message, error.stack)
      setError(error.message || 'Failed to start payment. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="bg-white rounded-xl shadow-xl p-8 sm:p-12 text-center">
          {/* Lock Icon */}
          <div className="mb-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Results Are Ready
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            You answered 25 questions. We analyzed your cognitive patterns. Now we know exactly how your mind works.
          </p>

          {/* What You'll Get */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-semibold text-gray-900 mb-4">When you unlock, you'll discover:</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-blue-600 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Your intelligence type (one of six rare cognitive profiles)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-blue-600 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>A deep explanation of how your mind actually works</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-blue-600 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>3 famous minds who share your type (actors, entrepreneurs, leaders)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-blue-600 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Why you've always felt "different" and what it actually means</span>
              </li>
            </ul>
          </div>

          {/* Celebrity Teaser */}
          <div className="mb-8">
            <p className="font-semibold text-gray-900 mb-4">People with your profile include:</p>
            <div className="flex justify-center gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center shadow-inner">
                    <span className="text-gray-400 text-xl font-bold">?</span>
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-500">???</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600 italic">
              Unlock to reveal who thinks like you
            </p>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-blue-600">$1.99</span>
              <span className="text-gray-500">one-time</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Secure payment via Stripe
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleUnlock}
            disabled={isLoading}
            className="w-full rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mb-3"
          >
            {isLoading ? 'Processing...' : 'Reveal My Intelligence Type — $1.99'}
          </button>

          <p className="text-sm text-gray-600 mb-6">
            Join 12,847 people who discovered their type this month
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>Instant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span>Safe</span>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function UnlockPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <UnlockContent />
    </Suspense>
  )
}
