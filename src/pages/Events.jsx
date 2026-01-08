import React, { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { upcomingEvents as upcoming, pastEvents as past, annualEvents as annual } from '../data/events'

export default function Events() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(() => ['All', ...Array.from(new Set(upcoming.map(e => e.category)))], [])

  const upcomingEvents = useMemo(() => {
    const q = query.trim().toLowerCase()
    return upcoming.filter(e => {
      const matchCat = category === 'All' || e.category === category
      const matchQuery = !q || e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q)
      return matchCat && matchQuery
    })
  }, [query, category])

  const pastEvents = past
  const annualEvents = annual

  return (
    <div>
      <Helmet>
        <title>Events | Techno Main SaltLake</title>
        <meta name="description" content="Explore upcoming events, annual calendar, student clubs, and past event highlights at Techno Main SaltLake." />
      </Helmet>

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Events</h1>
          <p>Stay updated with the latest happenings at Techno Main SaltLake</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Upcoming Events</h2>
            <p>Don't miss these exciting events and opportunities</p>
          </div>

          {/* Filters */}
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <input
                type="search"
                aria-label="Search events"
                placeholder="Search by title, venue, or description"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '220px',
                  padding: '0.75rem 1rem',
                  border: '2px solid var(--border-color)',
                  borderRadius: '8px',
                }}
              />
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }} aria-label="Filter by category">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className="btn"
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                    style={{
                      background: category === c ? 'var(--secondary)' : 'var(--bg-light)',
                      color: category === c ? 'var(--primary-dark)' : 'var(--text-dark)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Event list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {upcomingEvents.length === 0 && (
              <div className="alert alert-info">
                <span className="alert-icon">ℹ️</span>
                <div>
                  <strong>No events found</strong>
                  <div>Try clearing the search or choosing a different category.</div>
                </div>
              </div>
            )}

            {upcomingEvents.map((event) => {
              const hasLink = event.registerLink && event.registerLink !== '#'
              return (
                <div key={event.id} className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  <div className="event-date" style={{ minWidth: '100px' }}>
                    <span className="day">{event.date}</span>
                    <span className="month">{event.month}</span>
                    <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>{event.year}</span>
                  </div>
                  <div className="event-details" style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <h3 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.25rem' }}>{event.title}</h3>
                      <span style={{
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}>
                        {event.category}
                      </span>
                    </div>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>{event.description}</p>
                    <div className="event-meta" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                      <span>🕐 {event.time}</span>
                      <span>📍 {event.venue}</span>
                    </div>
                    {hasLink ? (
                      <a
                        className="btn btn-primary"
                        style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
                        href={event.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register Now
                      </a>
                    ) : (
                      <button
                        className="btn btn-primary"
                        style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
                        aria-disabled="true"
                        title="Registration link not yet available"
                      >
                        Register Soon
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Annual Calendar */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Annual Event Calendar</h2>
            <p>Mark your calendars for these annual traditions and celebrations</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {annualEvents.map((event, index) => (
              <div className="card" key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'var(--primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 1rem'
                }}>
                  {event.icon}
                </div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{event.name}</h4>
                <p className="subtle" style={{ fontWeight: 600, color: 'var(--secondary)', marginBottom: '0.5rem' }}>{event.month}</p>
                <p className="subtle" style={{ margin: 0, fontSize: '0.9rem' }}>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Clubs & Communities */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Student Clubs & Communities</h2>
            <p>Join our vibrant student communities and explore your interests</p>
          </div>

          {/* Technical & Coding Clubs */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              color: 'var(--primary)',
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '2rem' }}>💻</span> Technical & Coding Clubs
            </h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Ground.webp"
                  alt="Techno Main SaltLake ground - Geekonix student technology club"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Geekonix</h3>
                  <p>The official science & technology club focused on innovation, tech events, and student projects. Runs EDGE tech-management fest.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Workshops • Hackathons • Tech Challenges</p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Ground.webp"
                  alt="Techno Main SaltLake ground - Computing Club"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Computing Club</h3>
                  <p>Student club for programmers and tech enthusiasts. Organizes coding contests, hackathons, and learning sessions.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Coding Contests • Tech Fests • CP</p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Ground.webp"
                  alt="Techno Main SaltLake ground - GDG On-Campus community"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>GDG On-Campus</h3>
                  <p>Google Developer Group student community. Focuses on Google technologies, cloud/mobile development, and dev meetups.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Google Tech • Cloud • Android</p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Ground.webp"
                  alt="Techno Main SaltLake ground - GFG Student Chapter"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>GFG Student Chapter</h3>
                  <p>GeeksforGeeks student community focused on coding skills, competitive programming, and placement preparation.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Placement Prep • Hackathons • DSA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural & Arts */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              color: 'var(--primary)',
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '2rem' }}>🎭</span> Cultural & Arts Clubs
            </h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Ground.webp"
                  alt="Techno Main SaltLake ground - Anakhronos cultural club"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Anakhronos</h3>
                  <p>The official cultural club behind TMSL's massive annual cultural fest. Includes dramatics, music, dance, fine arts, literature & debates.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Annual Fest • Drama • Music • Dance</p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Ground.webp"
                  alt="Techno Main SaltLake ground - Dramatics Group"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Dramatics Group</h3>
                  <p>Student theatre group for drama enthusiasts. Stage plays, skits, and acting workshops throughout the year.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Stage Plays • Acting Workshops</p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Ground.webp"
                  alt="Techno Main SaltLake ground - Dance crews"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Dance Crews</h3>
                  <p>Various dance teams showcasing talent in classical, contemporary, and street dance forms.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Performances • Competitions</p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Ground.webp"
                  alt="Techno Main SaltLake ground - Music and band groups"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Music & Band Groups</h3>
                  <p>Student bands and music enthusiasts. Regular jamming sessions and performances at college events.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Band • Vocals • Instruments</p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Ground.webp"
                  alt="Techno Main SaltLake ground - Photography and arts"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Photography & Arts</h3>
                  <p>Creative circle for photography and visual arts. Captures college events and organizes art exhibitions.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Photography • Art • Design</p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Ground.webp"
                  alt="Techno Main SaltLake ground - Debate and literary"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Debate & Literary</h3>
                  <p>Discussion and debate society. Organizes debates, quizzes, and literary events throughout the year.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Debates • Quizzes • MUNs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation & Entrepreneurship */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              color: 'var(--primary)',
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '2rem' }}>💡</span> Innovation & Entrepreneurship
            </h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Techno_india_logo.jpg"
                  alt="Innovation Council"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Innovation Council</h3>
                  <p>College-supported body to foster innovation, idea pitching, problem solving, and mentoring for student entrepreneurs.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Idea Pitching • Research • Mentoring</p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Techno_india_logo.jpg"
                  alt="Entrepreneurship Cell"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Entrepreneurship Cell</h3>
                  <p>Encourages startup thinking, business idea development, competitions, and entrepreneurial networking opportunities.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Startups • Business Plans • Networking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sports & Social */}
          <div>
            <h3 style={{
              color: 'var(--primary)',
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '2rem' }}>⚽</span> Sports & Social Activities
            </h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Techno_india_logo.jpg"
                  alt="Sports and fitness teams"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Sports & Fitness Teams</h3>
                  <p>Organized teams and events for football, cricket, basketball, athletics, badminton, and indoor games.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Inter-College • Annual Sports Day</p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/Techno_india_logo.jpg"
                  alt="Social and volunteer groups"
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Social & Volunteer Groups</h3>
                  <p>Volunteer groups for social causes, green initiatives, environmental awareness, and community service activities.</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>NSS • Green Campus • Outreach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Recent Past Events</h2>
            <p>Highlights from our previous events and activities</p>
          </div>
          <div className="grid">
            {pastEvents.map((event, index) => (
              <div className="card" key={index}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{event.icon}</span>
                  <div>
                    <h3 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>{event.title}</h3>
                    <p className="subtle" style={{ margin: 0 }}>{event.date}</p>
                  </div>
                </div>
                <div style={{
                  background: 'var(--bg-light)',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginTop: '1rem'
                }}>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem' }}>
                    <strong>Participants:</strong> {event.participants}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 600 }}>
                    🏆 {event.winners || event.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Guidelines */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Event Guidelines</h2>
            <p>Important information for participants and attendees</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="card">
              <div className="card-icon">📝</div>
              <h3>Registration</h3>
              <p>Register online through the student portal. Early registration is recommended as seats are limited for most events.</p>
            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Participation Rules</h3>
              <p>Follow all event-specific rules mentioned in the guidelines. Disqualification may occur for rule violations.</p>
            </div>
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3>Attendance</h3>
              <p>Report to the venue at least 15 minutes before the scheduled time. Latecomers may not be allowed.</p>
            </div>
            <div className="card">
              <div className="card-icon">📱</div>
              <h3>ID Card Mandatory</h3>
              <p>Valid college ID card is mandatory for participation in all events and activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section style={{ background: 'var(--primary)', padding: '4rem 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Never Miss an Event!</h2>
          <p style={{ opacity: 0.9, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            Subscribe to our event notifications and stay updated with all college activities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '0.875rem 1rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
