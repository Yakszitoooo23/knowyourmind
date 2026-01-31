'use client'

import { useState } from 'react'
import { questions } from '@/content/questions'
import EmailCaptureModal from '@/components/quiz/EmailCaptureModal'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { v4 as uuidv4 } from 'uuid'

type AnswerType = 'decoder' | 'visionary' | 'architect' | 'empath' | 'executor' | 'philosopher'

interface Scores {
  decoder: number
  visionary: number
  architect: number
  empath: number
  executor: number
  philosopher: number
}

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [scores, setScores] = useState<Scores>({
    decoder: 0,
    visionary: 0,
    architect: 0,
    empath: 0,
    executor: 0,
    philosopher: 0,
  })
  const [isComplete, setIsComplete] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[currentQuestionIndex] = answerIndex
    setSelectedAnswers(newSelectedAnswers)

    // Update scores
    const selectedAnswer = currentQuestion.answers[answerIndex]
    const newScores = { ...scores }
    newScores[selectedAnswer.type]++
    setScores(newScores)

    // Move to next question or complete
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      }, 300)
    } else {
      setTimeout(() => {
        setIsComplete(true)
        setShowEmailModal(true)
      }, 300)
    }
  }

  const getPrimaryType = (): AnswerType => {
    let maxScore = 0
    let primaryType: AnswerType = 'decoder'

    Object.entries(scores).forEach(([type, score]) => {
      if (score > maxScore) {
        maxScore = score
        primaryType = type as AnswerType
      }
    })

    return primaryType
  }

  const handleEmailSubmit = async (email: string, firstName: string) => {
    try {
      const primaryType = getPrimaryType()
      
      // Generate unique tokens
      const revealToken = uuidv4()
      const reportToken = uuidv4()
      const fullReportToken = uuidv4()

      // Save user to database
      const { data: userData, error: userError } = await supabase
        .from('users')
        .insert({
          email,
          first_name: firstName || null,
          reveal_token: revealToken,
          report_token: reportToken,
          full_report_token: fullReportToken,
        })
        .select()
        .single()

      if (userError) {
        console.error('Error saving user:', userError)
        // If user already exists, try to get existing user
        const { data: existingUser } = await supabase
          .from('users')
          .select('id, reveal_token')
          .eq('email', email)
          .single()

        if (existingUser) {
          // Use existing user and tokens
          const userId = existingUser.id
          const existingRevealToken = existingUser.reveal_token || revealToken

          // Save quiz results (map to DB column names for backward compatibility)
          await supabase.from('quiz_results').insert({
            user_id: userId,
            analyst_score: scores.decoder,
            creative_score: scores.visionary,
            strategist_score: scores.architect,
            connector_score: scores.empath,
            practical_score: scores.executor,
            reflector_score: scores.philosopher,
            primary_type: primaryType,
          })

          // Redirect with existing token
          router.push(`/unlock?token=${existingRevealToken}`)
          return
        } else {
          throw userError
        }
      }

      // Save quiz results (map to DB column names for backward compatibility)
      const { error: quizError } = await supabase.from('quiz_results').insert({
        user_id: userData.id,
        analyst_score: scores.decoder,
        creative_score: scores.visionary,
        strategist_score: scores.architect,
        connector_score: scores.empath,
        practical_score: scores.executor,
        reflector_score: scores.philosopher,
        primary_type: primaryType,
      })

      if (quizError) {
        console.error('Error saving quiz results:', quizError)
        throw quizError
      }

      // Redirect to unlock page with token
      router.push(`/unlock?token=${revealToken}`)
    } catch (error) {
      console.error('Error saving to database:', error)
      // Fallback: redirect without saving (for development)
      const primaryType = getPrimaryType()
      router.push(`/unlock?type=${primaryType}&email=${encodeURIComponent(email)}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 w-full rounded-full bg-blue-100 overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {currentQuestion.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.answers.map((answer, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                      {answer.letter}
                    </span>
                    <span className="flex-1 text-lg">{answer.text}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Back Button (only show if not on first question) */}
        {currentQuestionIndex > 0 && (
          <div className="text-center">
            <button
              onClick={() => {
                setCurrentQuestionIndex(currentQuestionIndex - 1)
                // Remove the previous answer from scores
                const prevAnswerIndex = selectedAnswers[currentQuestionIndex - 1]
                if (prevAnswerIndex !== undefined) {
                  const prevQuestion = questions[currentQuestionIndex - 1]
                  const prevAnswer = prevQuestion.answers[prevAnswerIndex]
                  const newScores = { ...scores }
                  newScores[prevAnswer.type]--
                  setScores(newScores)
                  setSelectedAnswers(selectedAnswers.slice(0, -1))
                }
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Previous Question
            </button>
          </div>
        )}

        {/* Email Capture Modal */}
        <EmailCaptureModal
          isOpen={showEmailModal}
          onClose={() => setShowEmailModal(false)}
          onSubmit={handleEmailSubmit}
        />
      </div>
    </div>
  )
}
