import React from 'react'
import { Link } from 'react-router-dom'
import ParticleEmitter from '../../components/Particles/ParticleEmitter'

export const Home = () => {
  

  return (
    <div className="Home">
      
      <div className="greeting">
        <h1>Roger Winright</h1>
        <h2>Web/Mobile/Game Developer | Weekend Rockstar</h2>
        <img src="./rwrock.jpg" alt="Roger Winright" id="changeImg" />
      </div>

      <div className="container">
        <h2>Welcome to my portfolio!</h2>
        <div className="cards">
          <Link to="/about" className="card">
            <p>About Me</p>
          </Link>
          <Link to="/work" className="card">
            <p>My Work</p>
          </Link>
          <Link to="/contact" className="card">
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <ParticleEmitter />
    </div>
  )
}
