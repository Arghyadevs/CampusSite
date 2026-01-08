
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { contactInfo as contactCards, departmentContacts, emergencyContacts } from '../data/contact'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitted(false)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 400)
  }

  
  
  return (
    <div>
      <Helmet>
        <title>Contact | Techno Main SaltLake</title>
        <meta name="description" content="Get in touch with Techno Main SaltLake. Find address, phone, email, office hours and departmental contact details." />
      </Helmet>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with Techno Main SaltLake</p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {contactCards.map((info, index) => (
              <div className="card" key={index}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'var(--primary)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  {info.icon}
                </div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="subtle" style={{ margin: '0.25rem 0', fontSize: '0.95rem' }}>{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="contact-section">
            {/* Contact Form */}
            <div className="contact-form">
              <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Send us a Message</h2>
              {submitted && (
                <div className="alert alert-info" role="status" aria-live="polite">
                  <span className="alert-icon">✅</span>
                  <div>Thank you for your message! We will get back to you soon.</div>
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      autoComplete="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      pattern="[0-9+\-()\s]{7,}"
                      title="Enter a valid phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academic">Academic Query</option>
                      <option value="placement">Placement Query</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }} disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="contact-info">
              <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Find Us</h2>
              <div style={{ 
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                borderRadius: '12px',
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'white',
                marginBottom: '1.5rem'
              }}>
                <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>🗺️</span>
                <p style={{ textAlign: 'center', padding: '0 1rem' }}>
                  Techno Main SaltLake<br />
                  FD-215, Sector III, Salt Lake<br />
                  Kolkata - 700106
                </p>
              </div>
              <div className="alert alert-info">
                <span className="alert-icon">ℹ️</span>
                <div>
                  <strong>Easy Access</strong><br />
                  Located near Salt Lake Sector V metro station. Auto-rickshaws and buses available from all major locations in Kolkata.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Department Contacts</h2>
            <p>Direct contact information for each department</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {departmentContacts.map((dept, index) => (
              <div className="card" key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: 'var(--primary)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  color: 'white',
                  flexShrink: 0
                }}>
                  🏛️
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>{dept.name}</h4>
                  <p className="subtle" style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                    📧 {dept.email}
                  </p>
                  <p className="subtle" style={{ margin: 0, fontSize: '0.9rem' }}>
                    📞 {dept.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section style={{ background: 'var(--primary)', color: 'white', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>Emergency Helpline</h2>
              <p style={{ opacity: 0.9 }}>24/7 support for students and parents</p>
            </div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {emergencyContacts.map((ec, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{ec.label}</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0.25rem 0' }}>{ec.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

