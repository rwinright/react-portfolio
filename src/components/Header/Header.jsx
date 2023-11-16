import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <Link to="/">RW</Link>
      </div>
      <div className="nav-links">
        <div className="nav-link">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-link">
          <Link to="/work">Work</Link>
        </div>
        <div className="nav-link">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}
