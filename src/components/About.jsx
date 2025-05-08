import React from 'react'

function About() {
  return (
<section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">About Calmify</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/logo.png" alt="Calmify App Screenshot" className="rounded-lg shadow-lg w-120 h-120"/>
          </div>
          <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">Calmify is designed to be your compassionate companion on your mental wellness journey. We provide a safe and intuitive platform to help you understand your emotional patterns and build resilience.</p>
            <p className="mb-4">By logging your moods and anxiety levels, you gain valuable insights into triggers and trends. Our curated resources and guided exercises, rooted in evidence-based practices like mindfulness and journaling, empower you to take proactive steps towards a balanced life.</p>
            <p>Track your progress over time and witness your growth as you cultivate healthier habits and a more positive mindset. Calmify is more than just an app; it's a tool for transformation.</p>
          </div>
        </div>
      </section>
  )
}

export default About