import React from 'react'

function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-purple-100 shadow-xl rounded-lg mt-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">Track Your Mood, Achieve Inner Peace</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Your personal guide to a happier, healthier mind through mood tracking, insights, and self-care.</p>
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:scale-105">Get Started Today</button>
      </section>
  )
}

export default Hero