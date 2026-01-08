import React from 'react'

export default function Admissions() {
  const admissionProcess = [
    { step: 1, title: 'Apply Online', desc: 'Fill out the online application form with all required details', icon: '📝' },
    { step: 2, title: 'Document Verification', desc: 'Upload required documents for verification', icon: '📄' },
    { step: 3, title: 'Entrance Exam', desc: 'Appear for the entrance examination (if applicable)', icon: '✍️' },
    { step: 4, title: 'Counseling', desc: 'Participate in the counseling session for seat allocation', icon: '🤝' },
    { step: 5, title: 'Fee Payment', desc: 'Pay the admission fees to confirm your seat', icon: '💳' },
    { step: 6, title: 'Enrollment', desc: 'Complete enrollment and collect your ID card', icon: '🎓' }
  ]

  const eligibilityCriteria = [
    { program: 'B.Tech', criteria: '10+2 with Physics, Mathematics, and Chemistry/Biology with minimum 45% marks (40% for reserved category)' },
    { program: 'M.Tech', criteria: 'B.Tech/B.E. in relevant discipline with minimum 50% marks' },
    { program: 'MBA', criteria: "Bachelor's degree in any discipline with minimum 50% marks and valid CAT/MAT/XAT/CMAT score" },
    { program: 'Diploma', criteria: '10th pass with Mathematics, Science with minimum 35% marks' }
  ]

  const feeStructure = [
    { program: 'B.Tech (1st Year)', tuition: '₹1,25,000', development: '₹25,000', total: '₹1,50,000' },
    { program: 'B.Tech (2nd-4th Year)', tuition: '₹1,10,000', development: '₹25,000', total: '₹1,35,000' },
    { program: 'M.Tech', tuition: '₹1,00,000', development: '₹15,000', total: '₹1,15,000' },
    { program: 'MBA', tuition: '₹1,50,000', development: '₹20,000', total: '₹1,70,000' },
    { program: 'Diploma', tuition: '₹75,000', development: '₹15,000', total: '₹90,000' }
  ]

  const scholarships = [
    { title: 'Merit Scholarship', desc: '25-50% tuition fee waiver for top 10% scorers', icon: '🏆' },
    { title: 'Sports Quota', desc: 'Scholarships for national/state level sportspersons', icon: '🏅' },
    { title: 'Defense Quota', desc: 'Concession for children of defense personnel', icon: '🎖️' },
    { title: 'Financial Aid', desc: 'Need-based financial assistance for deserving students', icon: '💰' }
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Admissions</h1>
          <p>Start your journey at Techno Main SaltLake</p>
        </div>
      </div>

      {/* Alert */}
      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="alert alert-info">
          <span className="alert-icon">ℹ️</span>
          <div>
            <strong>Admissions Open for 2025-26 Session!</strong><br />
            B.Tech, M.Tech, MBA, and Diploma programs are now accepting applications. Apply before the deadlines to secure your seat.
          </div>
        </div>
      </div>

      {/* Important Dates */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Important Dates</h2>
            <p>Key dates for the admission process 2025-26</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--secondary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
              <h4 style={{ color: 'var(--primary)' }}>Application Start</h4>
              <p style={{ fontWeight: 600, fontSize: '1.25rem', margin: '0.5rem 0' }}>January 1, 2025</p>
              <p className="subtle">Applications begin for all programs</p>
            </div>
            <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--secondary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏰</div>
              <h4 style={{ color: 'var(--primary)' }}>Application Deadline</h4>
              <p style={{ fontWeight: 600, fontSize: '1.25rem', margin: '0.5rem 0' }}>July 15, 2025</p>
              <p className="subtle">Last date for application submission</p>
            </div>
            <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--secondary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</div>
              <h4 style={{ color: 'var(--primary)' }}>Entrance Exam</h4>
              <p style={{ fontWeight: 600, fontSize: '1.25rem', margin: '0.5rem 0' }}>July 20, 2025</p>
              <p className="subtle"> Techno Main Entrance Test (TMET)</p>
            </div>
            <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--secondary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
              <h4 style={{ color: 'var(--primary)' }}>Counseling</h4>
              <p style={{ fontWeight: 600, fontSize: '1.25rem', margin: '0.5rem 0' }}>July 25-30, 2025</p>
              <p className="subtle">Document verification & seat allocation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Admission Process</h2>
            <p>Step-by-step guide to complete your admission</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {admissionProcess.map((process) => (
              <div className="card" key={process.step} style={{ position: 'relative', overflow: 'visible' }}>
                <div style={{ 
                  position: 'absolute',
                  top: '-15px',
                  left: '20px',
                  width: '40px',
                  height: '40px',
                  background: 'var(--secondary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: 'var(--primary-dark)',
                  fontSize: '1.1rem'
                }}>
                  {process.step}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '2rem' }}>{process.icon}</span>
                  <h4 style={{ color: 'var(--primary)', margin: 0 }}>{process.title}</h4>
                </div>
                <p className="subtle" style={{ margin: 0 }}>{process.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Apply Now - It's Free!
            </button>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Eligibility Criteria</h2>
            <p>Minimum requirements for each program</p>
          </div>
          <div className="grid">
            {eligibilityCriteria.map((criteria, index) => (
              <div className="card" key={index}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>{criteria.program}</h3>
                <p className="subtle" style={{ margin: 0 }}>{criteria.criteria}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Fee Structure</h2>
            <p>Annual fee structure for academic year 2025-26</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="admissions-table" style={{ minWidth: '600px' }}>
              <thead>
                <tr>
                  <th>Program</th>
                  <th style={{ textAlign: 'center' }}>Tuition Fee (₹)</th>
                  <th style={{ textAlign: 'center' }}>Development Fee (₹)</th>
                  <th style={{ textAlign: 'center' }}>Total (₹)</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index}>
                    <td><strong>{fee.program}</strong></td>
                    <td style={{ textAlign: 'center' }}>{fee.tuition}</td>
                    <td style={{ textAlign: 'center' }}>{fee.development}</td>
                    <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--primary)' }}>{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="subtle" style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
            * Additional charges for hostel, transport, and other facilities as applicable
          </p>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Scholarships & Financial Aid</h2>
            <p>Various scholarship opportunities for deserving students</p>
          </div>
          <div className="grid">
            {scholarships.map((scholarship, index) => (
              <div className="card" key={index}>
                <div className="card-icon">{scholarship.icon}</div>
                <h3>{scholarship.title}</h3>
                <p>{scholarship.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Need Help with Admissions?</h2>
          <p style={{ opacity: 0.9, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Our admission helpdesk is available to assist you with all your queries.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+913323456789" className="btn btn-secondary">📞 Call Now</a>
            <a href="mailto:admission@technomainsaltlake.ac.in" className="btn btn-primary">✉️ Email Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}

