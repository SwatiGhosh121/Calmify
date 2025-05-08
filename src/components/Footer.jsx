import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <div className="text-2xl font-bold text-indigo-400 mb-4">Calmify</div>
        <p className="text-sm text-gray-400">Your path to inner peace.</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Features</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Resources</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Testimonials</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
        <div className="flex justify-center md:justify-start space-x-6"> {/* Adjusted spacing and alignment */}
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Twitter</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Instagram</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Facebook</a>
        </div>
      </div>
    </div>

    <div className="mt-10 text-center text-sm text-gray-500">
      <p>© 2025 Calmify. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer