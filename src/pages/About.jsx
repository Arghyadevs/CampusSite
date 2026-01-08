import React from 'react'

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>About Techno Main SaltLake</h1>
          <p>Building Excellence in Engineering & Management Education Since 2001</p>
        </div>
      </div>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Legacy of Excellence</h2>
              <p>
                Techno Main SaltLake, established in 2001, is a premier engineering and management 
                institution located in the heart of Salt Lake City, Kolkata. Over the past two 
                decades, we have consistently delivered excellence in technical education, producing 
                graduates who excel in their respective fields across the globe.
              </p>
              <p>
                Our campus is equipped with state-of-the-art infrastructure, modern laboratories, 
                and a vibrant learning environment that fosters innovation, creativity, and 
                holistic development of students.
              </p>
              <p>
                We are committed to bridging the gap between academia and industry, ensuring our 
                students are well-prepared to meet the challenges of the rapidly evolving 
                technological landscape.
              </p>
            </div>
            <div className="about-image" style={{ background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/tmsl-logo.png" 
                alt="Techno Main SaltLake Logo" 
                style={{ height: '120px', width: 'auto', marginBottom: '1rem' }}
              />
              <span style={{ fontSize: '3rem' }}>🏛️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vm-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Vision</h3>
              <p>
                To be a center of excellence in technical and management education, nurturing 
                innovative leaders who contribute to societal advancement through knowledge, 
                ethics, and sustainable practices.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">🚀</div>
              <h3>Our Mission</h3>
              <p>
                To provide quality education through industry-relevant curriculum, experienced 
                faculty, and modern infrastructure. We strive to foster research, innovation, 
                and entrepreneurship while instilling ethical values and social responsibility 
                in our students.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">⭐</div>
              <h3>Our Values</h3>
              <p>
                Integrity, Innovation, Excellence, Inclusivity, and Social Responsibility 
                guide everything we do. We believe in creating an environment where every 
                student can realize their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Principal's Message</h2>
            <p>Leadership that inspires excellence</p>
          </div>
          <div className="card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ 
              width: '150px', 
              height: '150px', 
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              color: 'white',
              flexShrink: 0
            }}>
              👨‍🎓
            </div>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Prof. Dr. Dipankar Bhattacharya</h3>
              <p className="subtle" style={{ marginBottom: '1rem', fontWeight: 600, color: 'var(--secondary)' }}>
                Principal, Techno Main SaltLake
              </p>
              <p className="subtle">
                "Welcome to Techno Main SaltLake, where we believe in nurturing not just engineers 
                and managers, but leaders who will shape the future. Our institution stands on the 
                pillars of academic rigor, industry collaboration, and holistic development. I invite 
                you to join our vibrant community and embark on a journey of learning, innovation, 
                and growth."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title">
            <h2>World-Class Infrastructure</h2>
            <p>State-of-the-art facilities for comprehensive learning</p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card-icon">💻</div>
              <h3>Computer Labs</h3>
              <p>500+ systems with latest software and high-speed internet connectivity</p>
            </div>
            <div className="card">
              <div className="card-icon">🔬</div>
              <h3>Laboratories</h3>
              <p>Well-equipped labs for Electronics, Mechanical, Civil, and Applied Sciences</p>
            </div>
            <div className="card">
              <div className="card-icon">📚</div>
              <h3>Library</h3>
              <p>Modern library with 25,000+ books, journals, and digital resources</p>
            </div>
            <div className="card">
              <div className="card-icon">🎭</div>
              <h3>Auditorium</h3>
              <p>500-seat air-conditioned auditorium for events, seminars, and conferences</p>
            </div>
            <div className="card">
              <div className="card-icon">🏃</div>
              <h3>Sports Complex</h3>
              <p>Multi-purpose sports ground and indoor facilities for various games</p>
            </div>
            <div className="card">
              <div className="card-icon">🍽️</div>
              <h3>Cafeteria</h3>
              <p>Hygienic and affordable food options for students and staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Achievements</h2>
            <p>Recognitions and accomplishments that define our excellence</p>
          </div>
          <div className="grid">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
              <h3>NAAC Accredited</h3>
              <p className="subtle">Grade 'A' by National Assessment and Accreditation Council</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h3>95% Placement</h3>
              <p className="subtle">Consistent placement record with top recruiters</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔬</div>
              <h3>100+ Research Papers</h3>
              <p className="subtle">Published in reputed journals and conferences annually</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
              <h3>Global Partners</h3>
              <p className="subtle">Collaborations with 20+ international universities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

