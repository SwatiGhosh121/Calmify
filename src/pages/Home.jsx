import React from 'react';
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import StartJourney from '../components/StartJourney';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="container mx-auto px-4 max-w-screen-xl">
        <Navbar/>
        <Hero/>
        <About/>
        <Features/>
        <Testimonial/>
        <StartJourney/>
        <Footer/>
    </div>
  );
}

export default Home;
