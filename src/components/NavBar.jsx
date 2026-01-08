
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => setMenuOpen(false)

  const linkClass = ({ isActive }) => ` ${isActive ? 'active' : ''}`

  return (
    <nav aria-label="Primary">
      <div className="navbar">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <img 
            src="/tmsl-logo.png" 
            alt="Techno Main SaltLake crest" 
            className="brand-logo-img"
            style={{ height: '45px', width: 'auto' }}
          />
          <div className="brand-text">
            <span className="main">Techno Main SaltLake</span>
            <span className="location">Kolkata, West Bengal</span>
          </div>
        </NavLink>
        
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        
        <div id="primary-menu" className={`menu ${menuOpen ? 'open' : ''}`} role="menubar">
          <NavLink to="/" className={linkClass} onClick={closeMenu} role="menuitem">Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu} role="menuitem">About</NavLink>
          <NavLink to="/academics" className={linkClass} onClick={closeMenu} role="menuitem">Academics</NavLink>
          <NavLink to="/admissions" className={linkClass} onClick={closeMenu} role="menuitem">Admissions</NavLink>
          <NavLink to="/departments" className={linkClass} onClick={closeMenu} role="menuitem">Departments</NavLink>
          <NavLink to="/faculty" className={linkClass} onClick={closeMenu} role="menuitem">Faculty</NavLink>
          <NavLink to="/events" className={linkClass} onClick={closeMenu} role="menuitem">Events</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu} role="menuitem">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

