
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Column with Group Logo */}
          <div className="footer-col">
            <div style={{ marginBottom: '1rem' }}>
              <img 
                src="/tmsl-logo.png" 
                alt="Techno Main SaltLake Logo" 
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
            <p>
              A premier engineering and management institute in Kolkata, West Bengal, 
              committed to academic excellence and holistic development of students 
              since its establishment.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                A Part of
              </p>
              <img 
                src="/Techno_india_logo.jpg" 
                alt="Techno India Group Logo" 
                style={{ height: '35px', width: 'auto' }}
              />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>
              📍 FD-215, Sector III<br />
              Salt Lake City, Kolkata<br />
              West Bengal - 700106
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              📞 +91 33 2345 6789<br />
              ✉️ info@technomainsaltlake.ac.in
            </p>
          </div>
          
          {/* Map Location */}
          <div className="footer-col">
            <h4>Find Us</h4>
            <p>
              Located in the heart of Salt Lake, 
              Techno Main SaltLake is easily accessible 
              from all parts of Kolkata.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Get Directions
            </Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Techno Main SaltLake. All rights reserved. | 
            Designed with ❤️ for academic excellence
          </p>
        </div>
      </div>
    </footer>
  )
}

