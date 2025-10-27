"use client"

export default function Portfolio() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-950/20">
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Lavkush Varma
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
          Shopify Developer | React & Next.js Specialist
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Successfully converted from TypeScript to JavaScript!
        </p>
        <div className="mt-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full">
            ✓ TypeScript → JavaScript Conversion Complete
          </div>
        </div>
      </div>
    </div>
  )
}
