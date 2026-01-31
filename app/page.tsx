import Link from "next/link";
import { types } from "@/content/types";

export default function Home() {
  const typeKeys = Object.keys(types) as Array<keyof typeof types>;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-blue-900 sm:text-6xl lg:text-7xl">
            Discover Your
            <span className="block text-blue-600">Intelligence Type</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 sm:text-2xl">
            Take the 25-question quiz to uncover how your mind works and unlock
            your unique cognitive profile
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/quiz"
              className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Start Quiz
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Free to take • Results in 5 minutes
          </p>
        </div>
      </section>

      {/* 6 Types Preview Section */}
      <section className="bg-white py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Six Intelligence Types
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Discover which cognitive profile matches how your mind works
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {typeKeys.map((typeKey) => {
              const type = types[typeKey];
              return (
                <div
                  key={typeKey}
                  className="group rounded-xl border-2 border-blue-100 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900">
                        {type.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {type.landingPreview}
                      </p>
                    </div>
                    <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-200">
                      <span className="text-lg font-bold">
                        {type.name.replace('The ', '').charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-blue-50 py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              How It Works
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border-2 border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center text-4xl">
                📋
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Take the Quiz
              </h3>
            </div>

            <div className="rounded-xl border-2 border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center text-4xl">
                📄
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Discover Your Type
              </h3>
            </div>

            <div className="rounded-xl border-2 border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center text-4xl">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Start Your Journey
              </h3>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/quiz"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Know Your Mind
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Understanding how minds work
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Know Your Mind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
