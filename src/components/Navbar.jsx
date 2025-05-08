import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-5">
        <div className="text-2xl font-bold text-indigo-600">Calmify</div>
        <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">Features</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">Resources</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">Testimonials</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300 shadow">Login</button>
        </div>
      </nav>
  )
}

export default Navbar