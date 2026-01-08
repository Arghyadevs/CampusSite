import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1>404 - Page Not Found</h1>
      <p className="subtle">The page you are looking for doesn't exist.</p>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/" className="btn">Go Home</Link>
      </div>
    </section>
  )
}
