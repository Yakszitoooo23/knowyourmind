'use client'

import { useParams, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
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

export default function RevealPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const token = params.token as string
  const email = searchParams.get('email')

  const [userData, setUserData] = useState<any>(null)
  const [quizData, setQuizData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if token is a valid type (fallback for old links)
        const validTypes: AnswerType[] = ['decoder', 'visionary', 'architect', 'empath', 'executor', 'philosopher']
        const legacyTypes = ['analyst', 'creative', 'strategist', 'connector', 'practical', 'reflector']
        if (validTypes.includes(token as AnswerType) || legacyTypes.includes(token)) {
          // Old format - use type directly, mapping legacy to new
          setQuizData({ primary_type: TYPE_MAP[token] || token })
          setIsLoading(false)
          return
        }

        // New format - fetch from database using reveal_token
        const fromPaymentSuccess = searchParams.get('payment') === 'success'
        let user: any = null
        let userError: any = null

        // If just returned from Stripe, retry a few times (webhook can be delayed)
        const maxAttempts = fromPaymentSuccess ? 5 : 1
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
          const result = await supabase
            .from('users')
            .select('*')
            .eq('reveal_token', token)
            .single()
          user = result.data
          userError = result.error
          if (user?.reveal_paid) break
          if (fromPaymentSuccess && attempt < maxAttempts - 1) {
            await new Promise((r) => setTimeout(r, 1500))
          }
        }

        if (userError || !user) {
          setError('Invalid or expired link')
          setIsLoading(false)
          return
        }

        // Check if user has paid
        if (!user.reveal_paid) {
          // Redirect to unlock page
          window.location.href = `/unlock?token=${token}`
          return
        }

        setUserData(user)

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
          setError('Error loading quiz results')
        } else {
          setQuizData(quiz)
        }

        setIsLoading(false)
      } catch (err) {
        console.error('Error:', err)
        setError('Something went wrong')
        setIsLoading(false)
      }
    }

    fetchData()
  }, [token])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your results...</p>
        </div>
      </div>
    )
  }

  if (error || !quizData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Link</h1>
          <p className="text-gray-600 mb-6">{error || 'Unable to load your results'}</p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
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

  const typeData = types[type]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Celebration Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-5xl text-white shadow-lg">
              ✨
            </div>
          </div>
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            {typeData.name}
          </h1>
          <p className="text-2xl text-gray-700 font-medium mb-8">
            {typeData.oneLiner}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {typeData.description}
            </p>
          </div>
        </div>

        {/* Download PDF Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Download Your Results
            </h3>
            <p className="text-gray-600 mb-4">
              Save your intelligence type report as a PDF
            </p>
            <button
              onClick={async () => {
                // Dynamic import for client-side only
                const { generatePDF } = await import('@/lib/pdf-generator')
                const pdfData = {
                  typeName: typeData.name,
                  oneLiner: typeData.oneLiner,
                  description: typeData.description,
                  userName: userData?.first_name || undefined,
                  userEmail: userData?.email || undefined,
                  dateGenerated: new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }),
                }
                generatePDF(pdfData)
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </button>
          </div>
        </div>

        {/* Share Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Share your results:</p>
          <div className="flex items-center justify-center gap-4">
            <button className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
              Copy Link
            </button>
            <Link
              href="/"
              className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Take Quiz Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
