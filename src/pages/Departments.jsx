import React from 'react'

export default function Departments() {
  const departments = [
    {
      code: 'CSE',
      name: 'Computer Science & Engineering',
      established: 2001,
      intake: 120,
      hod: 'Prof. Dr. Tapan Chowdhury',
      hodQual: 'Ph.D. (IIEST Shibpur)',
      facilities: ['Advanced Computing Lab', 'AI & ML Lab', 'Data Science Lab', 'Network Security Lab', '500+ Systems'],
      labs: ['Programming Lab', 'DBMS Lab', 'Software Engineering Lab', 'Web Technology Lab']
    },
    {
      code: 'IT',
      name: 'Information Technology',
      established: 2008,
      intake: 60,
      hod: 'Prof. Dr. Subhamita Mukherjee',
      hodQual: 'Ph.D. (IIEST Shibpur)',
      facilities: ['Cloud Computing Lab', 'IoT Lab', 'Cyber Security Lab', 'Mobile App Development Lab'],
      labs: ['Java Lab', 'Python Lab', 'Android Lab', 'Big Data Lab']
    },
    {
      code: 'ECE',
      name: 'Electronics & Communication Engineering',
      established: 2001,
      intake: 120,
      hod: 'Prof. Dr. Prabal Kumar Mallik',
      hodQual: 'Ph.D. (University of Calcutta)',
      facilities: ['VLSI Design Lab', 'Signal Processing Lab', 'Microwave Lab', 'Communication Lab'],
      labs: ['Digital Electronics Lab', 'Microprocessor Lab', 'Embedded Systems Lab', 'PCB Design Lab']
    },
    {
      code: 'EE',
      name: 'Electrical Engineering',
      established: 2005,
      intake: 60,
      hod: 'Prof. Dr. Tapas Kumar Bhattacharya',
      hodQual: 'Ph.D. (Bangabasi College)',
      facilities: ['Power Systems Lab', 'Control Systems Lab', 'Electrical Machines Lab', 'Power Electronics Lab'],
      labs: ['Circuit Theory Lab', 'Electrical Measurement Lab', 'Machine Lab', 'Relay & Protection Lab']
    },
    {
      code: 'ME',
      name: 'Mechanical Engineering',
      established: 2001,
      intake: 60,
      hod: 'Prof. Dr. Subrata Chattopadhyay',
      hodQual: 'Ph.D. (Jadavpur University)',
      facilities: ['CAD/CAM Lab', 'Heat Transfer Lab', 'Fluid Mechanics Lab', 'Production Technology Lab'],
      labs: ['Workshop Practice', 'Strength of Materials Lab', 'Thermodynamics Lab', 'Industrial Engineering Lab']
    },
    {
      code: 'CE',
      name: 'Civil Engineering',
      established: 2010,
      intake: 60,
      hod: 'Prof. Dr. Dulal Chandra Das',
      hodQual: 'Ph.D. (IIEST Shibpur)',
      facilities: ['Structural Analysis Lab', 'Geotechnical Lab', 'Transportation Lab', 'Environmental Lab'],
      labs: ['Concrete Technology Lab', 'Surveying Lab', 'Hydraulics Lab', 'Building Materials Lab']
    },
    {
      code: 'MBA',
      name: 'Master of Business Administration',
      established: 2008,
      intake: 60,
      hod: 'Prof. Dr. Rajib Kumar Bhattacharya',
      hodQual: 'Ph.D. (University of Calcutta)',
      facilities: ['Business Communication Lab', 'Computer Lab', 'Case Study Room', 'Group Discussion Room'],
      labs: ['Marketing Lab', 'Finance Lab', 'HR Lab', 'Analytics Lab']
    },
    {
      code: 'AS',
      name: 'Applied Sciences',
      established: 2001,
      intake: 0,
      hod: 'Prof. Dr. Madhusudan Ghosh',
      hodQual: 'Ph.D. (University of Kalyani)',
      facilities: ['Physics Lab', 'Chemistry Lab', 'Mathematics Lab', 'Language Lab'],
      labs: ['Engineering Physics Lab', 'Engineering Chemistry Lab', 'Soft Skills Lab']
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Departments</h1>
          <p>Explore our diverse range of engineering and management departments</p>
        </div>
      </div>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Departments</h2>
            <p>Techno Main SaltLake offers comprehensive programs through 8 specialized departments</p>
          </div>
          <div className="grid">
            {departments.map((dept, index) => (
              <div className="dept-card" key={index}>
                <div className="dept-header">
                  <h3>{dept.code}</h3>
                  <span>{dept.name}</span>
                </div>
                <div className="dept-body">
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Head of Department:</strong>
                    <p style={{ margin: '0.25rem 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      {dept.hod}
                    </p>
                    <p style={{ margin: '0.25rem 0 0', color: 'var(--secondary)', fontSize: '0.85rem' }}>
                      {dept.hodQual}
                    </p>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Established:</strong> {dept.established} | <strong>Intake:</strong> {dept.intake}
                  </div>
                  <ul>
                    {dept.facilities.slice(0, 3).map((facility, i) => (
                      <li key={i}>{facility}</li>
                    ))}
                  </ul>
                  <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Department Highlights</h2>
            <p>Excellence in education and industry collaboration</p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3>Industry Partnerships</h3>
              <p>All departments have active collaborations with leading industries for internships, projects, and placements.</p>
            </div>
            <div className="card">
              <div className="card-icon">🔬</div>
              <h3>Research & Development</h3>
              <p>Active research groups in each department publishing papers in reputed journals and conferences.</p>
            </div>
            <div className="card">
              <div className="card-icon">🛠️</div>
              <h3>Modern Laboratories</h3>
              <p>State-of-the-art laboratories equipped with latest software and hardware for practical learning.</p>
            </div>
            <div className="card">
              <div className="card-icon">🌐</div>
              <h3>Global Collaborations</h3>
              <p>Student exchange programs and joint research projects with international universities.</p>
            </div>
            <div className="card">
              <div className="card-icon">📈</div>
              <h3>Placement Support</h3>
              <p>Dedicated placement cells in each department with strong industry connections.</p>
            </div>
            <div className="card">
              <div className="card-icon">💡</div>
              <h3>Innovation Hub</h3>
              <p>Incubation center and innovation labs to nurture entrepreneurship and startups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Campus Infrastructure</h2>
            <p>World-class facilities for comprehensive learning</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card">
              <div className="card-icon">💻</div>
              <h3>Computer Center</h3>
              <p>500+ systems with latest configurations, 24/7 internet facility</p>
            </div>
            <div className="card">
              <div className="card-icon">📚</div>
              <h3>Central Library</h3>
              <p>25,000+ books, 500+ journals, digital library access</p>
            </div>
            <div className="card">
              <div className="card-icon">🎭</div>
              <h3>Auditorium</h3>
              <p>500-seat air-conditioned auditorium for events and seminars</p>
            </div>
            <div className="card">
              <div className="card-icon">🏃</div>
              <h3>Sports Complex</h3>
              <p>Multi-purpose sports ground and indoor game facilities</p>
            </div>
            <div className="card">
              <div className="card-icon">🍽️</div>
              <h3>Cafeteria</h3>
              <p>Hygienic food court with vegetarian and non-vegetarian options</p>
            </div>
            <div className="card">
              <div className="card-icon">🏥</div>
              <h3>Medical Center</h3>
              <p>On-campus medical facility with qualified doctors</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

