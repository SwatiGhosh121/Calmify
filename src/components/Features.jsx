import React from 'react'

function Features() {
  return (
    <section className="py-16 bg-gray-100 rounded-lg shadow-inner">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
        <span className="text-5xl block mb-4">😊</span>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Mood & Anxiety Logging</h3>
        <p className="text-gray-600">Easily record how you're feeling each day to identify patterns.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
        <span className="text-5xl block mb-4">📚</span>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Mental Health Resources</h3>
        <p className="text-gray-600">Access a library of articles, videos, and tools for support.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
        <span className="text-5xl block mb-4">📈</span>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Progress Visualization</h3>
        <p className="text-gray-600">See your journey with insightful charts and graphs.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
        <span className="text-5xl block mb-4">✍️</span> {/* Changed icon for journaling */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Journaling & Mindfulness</h3>
        <p className="text-gray-600">Practice self-reflection and stay present with guided exercises.</p>
      </div>
    </div>
  </section>
  )
}

export default Features