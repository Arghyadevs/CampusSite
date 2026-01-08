import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { recentNotices as notices } from '../data/notices'
import { departmentsOverview as departments } from '../data/departments'

export default function Home() {
  const upcomingEvents = [
    { date: '15', month: 'Jan', title: 'Tech Fest 2025', time: '10:00 AM' },
    { date: '22', month: 'Jan', title: 'Placement Drive', time: '9:00 AM' },
    { date: '28', month: 'Jan', title: 'Guest Lecture on AI', time: '2:00 PM' }
  ]
  
  const recentNotices = notices
  
  const quickStats = [
    { number: '8000+', label: 'Students' },
    { number: '250+', label: 'Faculty Members' },
    { number: '15+', label: 'Courses Offered' },
    { number: '85%', label: 'Placement Record' }
  ]
  
  return (
    <div>
      <Helmet>
        <title>Techno Main SaltLake | Official Campus Portal</title>
        <meta name="description" content="Explore academics, admissions, departments, faculty, events, and contact information for Techno Main SaltLake." />
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <img 
            src="/tmsl-logo.png" 
            alt="Techno Main SaltLake Logo" 
            style={{ height: '80px', width: 'auto', marginBottom: '1.5rem' }}
          />
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Techno Main SaltLake</h1>
          <p className="tagline">
            Empowering Future Engineers & Leaders Through Excellence in Education
          </p>
          <div className="hero-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {quickStats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links & Notices */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            
            {/* Quick Links */}
            <div className="quick-links">
              <h3>🔗 Quick Access</h3>
              <div className="quick-links-grid">
                <Link to="/academics" className="quick-link-btn">
                  <span>📚</span>
                  Academics
                </Link>
                <Link to="/admissions" className="quick-link-btn">
                  <span>🎓</span>
                  Admissions
                </Link>
                <Link to="/departments" className="quick-link-btn">
                  <span>🏛️</span>
                  Departments
                </Link>
                <Link to="/faculty" className="quick-link-btn">
                  <span>👨‍🏫</span>
                  Faculty
                </Link>
                <Link to="/events" className="quick-link-btn">
                  <span>📅</span>
                  Events
                </Link>
                <Link to="/contact" className="quick-link-btn">
                  <span>📞</span>
                  Contact
                </Link>
              </div>
            </div>

            {/* Notice Board */}
            <div className="notice-board">
              <h3>📢 Latest Notices</h3>
              {recentNotices.map((notice, index) => (
                <div className="notice-item" key={index}>
                  <div>
                    <span>{notice.title}</span>
                    <span className="notice-date">{notice.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Upcoming Events</h2>
            <p>Stay updated with the latest activities and happenings at Techno Main SaltLake</p>
          </div>
          <div className="grid">
            {upcomingEvents.map((event, index) => (
              <div className="event-card" key={index}>
                <div className="event-date">
                  <span className="day">{event.date}</span>
                  <span className="month">{event.month}</span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p>Join us for an exciting event at our campus.</p>
                  <div className="event-meta">
                    <span>🕐 {event.time}</span>
                    <span>📍 Main Building Auditorium</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/events" className="btn btn-primary">View All Events</Link>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Departments</h2>
            <p>Explore the diverse range of engineering and management departments</p>
          </div>
          <div className="grid">
            {departments.map((dept, index) => (
              <div className="card" key={index}>
                <div className="card-icon">{dept.icon}</div>
                <h3>{dept.name}</h3>
                <p>{dept.desc}</p>
                <Link to="/departments" style={{ marginTop: '1rem', display: 'inline-block', fontWeight: 600 }}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ background: 'var(--primary)', padding: '4rem 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Join Techno Main SaltLake?</h2>
          <p style={{ opacity: 0.9, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Take the first step towards a bright future. Apply now for the 2025-26 academic session.
          </p>
          <Link to="/admissions" className="btn btn-primary">Start Your Application</Link>
        </div>
      </section>
    </div>
  )
}

