import React from 'react'

function StartJourney() {
  return (
    <section className="py-16 text-center">
         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to Start Your Journey?</h2>
         <p className="text-lg text-gray-600 mb-8">Download Calmify today and take the first step towards a calmer, happier you.</p>
         <div className="flex justify-center space-x-6">
            <a href="#" className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition duration-300 shadow-lg">
                Download on the App Store
            </a>
            <a href="#" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 shadow-lg">
                Get it on Google Play
            </a>
         </div>
      </section>
  )
}

export default StartJourney