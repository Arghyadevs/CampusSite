import React from 'react'

export default function Academics() {
  const courses = [
    {
      level: 'B.Tech Programs',
      duration: '4 Years',
      courses: [
        { name: 'Computer Science Engineering (CSE)', seats: 120 },
        { name: 'Computer Science & Information Technology (CSIT)', seats: 60 },
        { name: 'Electronics & Communication Engineering (ECE)', seats: 120 },
        { name: 'Electrical Engineering (EE)', seats: 60 },
        { name: 'Mechanical Engineering (ME)', seats: 60 },
        { name: 'Civil Engineering (CE)', seats: 60 }
      ]
    },
    {
      level: 'M.Tech Programs',
      duration: '2 Years',
      courses: [
        { name: 'Computer Science & Engineering', seats: 18 },
        { name: 'Electronics & Communication Engineering', seats: 18 },
        { name: 'Power Systems', seats: 18 },
        { name: 'Structural Engineering', seats: 18 }
      ]
    },
    {
      level: 'Management Programs',
      duration: '2 Years',
      courses: [
        { name: 'Master of Business Administration (MBA)', seats: 60 }
      ]
    },
    {
      level: 'Diploma Programs',
      duration: '3 Years',
      courses: [
        { name: 'Computer Science & Technology', seats: 60 },
        { name: 'Electronics & Communication Engineering', seats: 60 },
        { name: 'Electrical Engineering', seats: 60 },
        { name: 'Mechanical Engineering', seats: 60 }
      ]
    }
  ]

  const academicCalendar = [
    { event: 'Spring Semester Begins', date: 'January 15, 2025' },
    { event: 'Add/Drop Period', date: 'January 20-25, 2025' },
    { event: 'Mid Semester Examinations', date: 'March 10-20, 2025' },
    { event: 'Summer Vacation', date: 'May 15 - June 30, 2025' },
    { event: 'Autumn Semester Begins', date: 'July 1, 2025' },
    { event: 'End Semester Examinations', date: 'December 1-15, 2025' }
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Academics</h1>
          <p>Comprehensive technical and management education programs</p>
        </div>
      </div>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Academic Programs</h2>
            <p>Diverse range of undergraduate, postgraduate, and diploma programs</p>
          </div>
          
          {courses.map((category, index) => (
            <div key={index} style={{ marginBottom: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ color: 'var(--primary)', margin: 0 }}>{category.level}</h3>
                <span style={{ 
                  background: 'var(--secondary)', 
                  color: 'var(--primary-dark)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  {category.duration}
                </span>
              </div>
              <table className="admissions-table">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th style={{ width: '150px', textAlign: 'center' }}>Total Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {category.courses.map((course, courseIndex) => (
                    <tr key={courseIndex}>
                      <td>{course.name}</td>
                      <td style={{ textAlign: 'center' }}>{course.seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Academic Calendar 2025</h2>
            <p>Important dates and events for the academic year</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {academicCalendar.map((item, index) => (
              <div className="card" key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'var(--primary)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  📅
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>{item.event}</h4>
                  <p className="subtle" style={{ margin: 0 }}>{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Syllabus & Curriculum</h2>
            <p>Download syllabus and curriculum details</p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card-icon">📘</div>
              <h3>B.Tech Syllabus</h3>
              <p>Curriculum and syllabus for all B.Tech branches as per MAKAUT guidelines.</p>
              <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Download PDF</button>
            </div>
            <div className="card">
              <div className="card-icon">📗</div>
              <h3>M.Tech Syllabus</h3>
              <p>Detailed syllabus for M.Tech programs with specializations.</p>
              <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Download PDF</button>
            </div>
            <div className="card">
              <div className="card-icon">📙</div>
              <h3>MBA Syllabus</h3>
              <p>MBA curriculum covering all semesters and specializations.</p>
              <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Download PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Info */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Examination Information</h2>
            <p>Everything you need to know about examinations</p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card-icon">📝</div>
              <h3>Internal Assessments</h3>
              <p>Regular class tests, assignments, and mid-semester examinations are conducted to assess student progress.</p>
            </div>
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3>End Semester Exams</h3>
              <p>Comprehensive examinations at the end of each semester as per university schedule.</p>
            </div>
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>Results</h3>
              <p>Results are published within 30 days of examination completion through student portal.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

