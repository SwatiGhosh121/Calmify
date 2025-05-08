import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginCard from '../components/LoginCard'
function Login() {
  return (
    <div className="container mx-auto px-4 max-w-screen-xl">
        <Navbar/>
        <LoginCard/>
        <Footer/>
    </div>
  )
}

export default Login