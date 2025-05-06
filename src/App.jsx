import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
   
        <nav class="navbar">
            <div class="logo">Calmify</div>
            <button class="login-btn">Login</button>
        </nav>
        

        <section class="hero">
            <h1>Track Your Mood, Find Peace</h1>
            <button class="cta-btn">Get Started</button>
        </section>
        

        <section class="features">
            <div class="feature-item">
                <span>😊</span>
                <h3>Mood</h3>
            </div>
            <div class="feature-item">
                <span>📚</span>
                <h3>Resources</h3>
            </div>
            <div class="feature-item">
                <span>📈</span>
                <h3>Progress</h3>
            </div>
            <div class="feature-item">
                <span>🧘🏻‍♀️</span>
                <h3>Mindfulness</h3>
            </div>
        </section>
        
       
        <section class="testimonial">
            <p>"Calmify changed my life!"</p>
            <p>- User A</p>
        </section>
 
        <footer class="footer">
            <p>© 2023 Calmify. All rights reserved.</p>
            <div class="social-links">
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
            </div>
        </footer>
    </div>
  )
}

export default App
