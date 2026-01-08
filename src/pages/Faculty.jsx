import React from 'react'

export default function Faculty() {
  const facultyData = [
    {
      dept: 'Computer Science & Engineering',
      hod: true,
      faculty: [
        { name: 'Prof. Dr. Tapan Chowdhury', position: 'Professor & HOD', qualification: 'Ph.D. (IIT Kharagpur)', experience: '20 years', research: 'Machine Learning, Cryptography' },
        { name: 'Prof. Poulami Dutta', position: 'Professor', qualification: 'B.tech (Jadavpur University)', experience: '18 years', research: 'Artificial Intelligence, Data Mining' },
        { name: 'Prof. Utpal Das', position: 'Professor', qualification: 'M.tech (IIEST Shibpur)', experience: '15 years', research: 'Image Processing, Soft Computing' },
        { name: 'Dr. Susanta Chakraborty', position: 'Associate Professor', qualification: 'Ph.D. (University of Calcutta)', experience: '12 years', research: 'Computer Networks, IoT' },
        { name: 'Dr. Sandip Roy', position: 'Associate Professor', qualification: 'Ph.D. (NIT Durgapur)', experience: '10 years', research: 'Software Engineering, Cloud Computing' },
        { name: 'Dr. Anirban Ghosh', position: 'Assistant Professor', qualification: 'Ph.D. (KIIT University)', experience: '8 years', research: 'Big Data, Machine Learning' }
      ]
    },
    {
      dept: 'Electronics & Communication Engineering',
      hod: true,
      faculty: [
        { name: 'Prof. Dr. Prabal Kumar Mallik', position: 'Professor & HOD', qualification: 'Ph.D. (University of Calcutta)', experience: '22 years', research: 'VLSI Design, Embedded Systems' },
        { name: 'Prof. Dr. Goutam Kumar Maitra', position: 'Professor', qualification: 'Ph.D. (Jadavpur University)', experience: '19 years', research: 'Wireless Communication, Signal Processing' },
        { name: 'Prof. Dr. Subhajit Chatterjee', position: 'Professor', qualification: 'Ph.D. (IIEST Shibpur)', experience: '16 years', research: 'Microelectronics, Circuit Design' },
        { name: 'Dr. Debasree Chanda Sarkar', position: 'Associate Professor', qualification: 'Ph.D. (University of Kalyani)', experience: '14 years', research: 'Antenna Design, Microwave Engineering' },
        { name: 'Dr. Bidhan Chandra Ray', position: 'Associate Professor', qualification: 'Ph.D. (BESU)', experience: '11 years', research: 'Optical Communication, Photonics' }
      ]
    },
    {
      dept: 'Electrical Engineering',
      hod: true,
      faculty: [
        { name: 'Prof. Dr. Tapas Kumar Bhattacharya', position: 'Professor & HOD', qualification: 'Ph.D. (Bangabasi College)', experience: '21 years', research: 'Power Systems, Renewable Energy' },
        { name: 'Prof. Dr. Sanjib Biswas', position: 'Professor', qualification: 'Ph.D. (Jadavpur University)', experience: '17 years', research: 'Control Systems, Robotics' },
        { name: 'Dr. Pradip Kumar Sadhu', position: 'Associate Professor', qualification: 'Ph.D. (NIT Silchar)', experience: '13 years', research: 'Power Electronics, Drives' },
        { name: 'Dr. Biswarup Neogi', position: 'Assistant Professor', qualification: 'Ph.D. (University of Calcutta)', experience: '9 years', research: 'Smart Grid, Power Quality' }
      ]
    },
    {
      dept: 'Mechanical Engineering',
      hod: true,
      faculty: [
        { name: 'Prof. Dr. Subrata Chattopadhyay', position: 'Professor & HOD', qualification: 'Ph.D. (Jadavpur University)', experience: '23 years', research: 'Heat Transfer, Thermal Engineering' },
        { name: 'Prof. Dr. Dilip Kumar Baidya', position: 'Professor', qualification: 'Ph.D. (IIEST Shibpur)', experience: '18 years', research: 'CAD/CAM, Manufacturing Technology' },
        { name: 'Dr. Suman Kumar Maitra', position: 'Associate Professor', qualification: 'Ph.D. (IIT Kharagpur)', experience: '14 years', research: 'Solid Mechanics, Finite Element Analysis' },
        { name: 'Dr. Rabi Narayan Banerjee', position: 'Associate Professor', qualification: 'Ph.D. (NIT Rourkela)', experience: '10 years', research: 'Fluid Mechanics, CFD' }
      ]
    },
    {
      dept: 'Civil Engineering',
      hod: true,
      faculty: [
        { name: 'Prof. Dr. Dulal Chandra Das', position: 'Professor & HOD', qualification: 'Ph.D. (IIEST Shibpur)', experience: '20 years', research: 'Structural Engineering, Earthquake Engineering' },
        { name: 'Prof. Dr. Arun Kumar Maitra', position: 'Professor', qualification: 'Ph.D. (Jadavpur University)', experience: '16 years', research: 'Geotechnical Engineering, Foundation Engineering' },
        { name: 'Dr. Subhrajit Sinha', position: 'Associate Professor', qualification: 'Ph.D. (IIT Bombay)', experience: '12 years', research: 'Transportation Engineering, Traffic Engineering' },
        { name: 'Dr. Madhusudan Jana', position: 'Assistant Professor', qualification: 'Ph.D. (IIEST Shibpur)', experience: '8 years', research: 'Environmental Engineering, Water Resources' }
      ]
    },
    {
      dept: 'Master of Business Administration',
      hod: true,
      faculty: [
        { name: 'Prof. Dr. Rajib Kumar Bhattacharya', position: 'Professor & HOD', qualification: 'Ph.D. (University of Calcutta)', experience: '19 years', research: 'Marketing Management, Consumer Behavior' },
        { name: 'Prof. Dr. Kalyan Kumar Ghosh', position: 'Professor', qualification: 'Ph.D. (Vidyasagar University)', experience: '16 years', research: 'Financial Management, Business Analytics' },
        { name: 'Prof. Dr. Sanghamitra Bhattacharya', position: 'Professor', qualification: 'Ph.D. (Jadavpur University)', experience: '14 years', research: 'Human Resource Management, Organizational Behavior' },
        { name: 'Dr. Amitava Mukherjee', position: 'Associate Professor', qualification: 'Ph.D. (University of Calcutta)', experience: '11 years', research: 'Operations Management, Supply Chain' },
        { name: 'Dr. Priyanka Roy Chowdhury', position: 'Assistant Professor', qualification: 'Ph.D. (JIS College)', experience: '7 years', research: 'Business Economics, International Business' }
      ]
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Faculty</h1>
          <p>Meet our experienced and distinguished faculty members</p>
        </div>
      </div>

      {/* Faculty Stats */}
      <section style={{ background: 'var(--bg-white)', padding: '3rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Faculty Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">Ph.D. Holders</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Avg. Experience (Years)</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Research Papers/Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty by Department */}
      <section className="section">
        <div className="container">
          {facultyData.map((department, index) => (
            <div key={index} style={{ marginBottom: '4rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '3px solid var(--secondary)'
              }}>
                <h2 style={{ color: 'var(--primary)', margin: 0 }}>{department.dept}</h2>
                <span style={{ 
                  background: 'var(--primary)', 
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem'
                }}>
                  {department.faculty.length} Faculty
                </span>
              </div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                {department.faculty.map((faculty, fIndex) => (
                  <div className="faculty-card" key={fIndex}>
                    <div className="faculty-image">
                      👨‍🏫
                    </div>
                    <div className="faculty-info">
                      <h3>{faculty.name}</h3>
                      <div className="position">{faculty.position}</div>
                      <p style={{ marginBottom: '0.5rem' }}>
                        <strong>Qualification:</strong> {faculty.qualification}
                      </p>
                      <p style={{ marginBottom: '0.5rem' }}>
                        <strong>Experience:</strong> {faculty.experience}
                      </p>
                      <p className="subtle">
                        <strong>Areas of Interest:</strong> {faculty.research}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Supporting Staff</h2>
            <p>Dedicated technical and administrative staff</p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card-icon">🔧</div>
              <h3>Technical Staff</h3>
              <p>20+ skilled lab assistants and technicians maintaining laboratories and equipment</p>
            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Administrative Staff</h3>
              <p>15+ administrative professionals managing academic and support services</p>
            </div>
            <div className="card">
              <div className="card-icon">💻</div>
              <h3>IT Support</h3>
              <p>Dedicated IT team ensuring smooth operation of all technical infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Research & Publications</h2>
            <p>Faculty research achievements and publications</p>
          </div>
          <div className="grid">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
              <h3>Publications</h3>
              <p className="subtle">500+ research papers published in Scopus-indexed journals and conferences annually</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📖</div>
              <h3>Book Chapters</h3>
              <p className="subtle">50+ book chapters published in national and international volumes</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
              <h3>Ph.D. Guidance</h3>
              <p className="subtle">25+ research scholars currently pursuing Ph.D. under faculty guidance</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3>Funded Projects</h3>
              <p className="subtle">₹2+ crores research grants from government and private agencies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

