import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'

const highlights = [
  { icon: '🎓', label: 'Education', value: 'B.Tech — Computer Science', sub: 'Graduated 2024' },
  { icon: '🏆', label: 'Certifications', value: '6 Professional Certs', sub: 'Google · Meta · AWS · Adobe' },
  { icon: '💼', label: 'Experience', value: '2 Internships', sub: 'Design & Development' },
  { icon: '📍', label: 'Location', value: 'Pune, India', sub: 'Open to Remote' },
]

const experience = [
  { period: 'Present', role: 'Web Developer Intern', company: 'NovaPex Info Hub, Remote · Ravet, Pune' },
  { period: 'Jul 2025 – Sep 2025', role: 'AI-ML Virtual Intern', company: 'EduSkills (AICTE + Google for Developers), Virtual' },
  { period: 'Jul 2025 – Aug 2025', role: 'Artificial Intelligence Intern', company: 'SkillDzire (Affiliated with DBATU), Virtual' },
  { period: 'Jan 2026 – Mar 2026', role: 'Java Full Stack Developer Intern', company: 'EduSkills (AICTE National Internship Portal), Virtual' },
]

const education = [
  { period: '2023 – Present', degree: 'B.Tech in Artificial Intelligence & Data Science', institution: 'Yashwantrao Chavan Institute of Science, Satara' },
  { period: '2021 – 2023', degree: 'Higher Secondary (Science)', institution: 'Yashwantrao Chavan Institute of Science, Satara' },
]

const contactDetails = [
  { label: 'Full Name', value: 'Tanuj Arun Sulke' },
  { label: 'Phone Number', value: '+91 9767610029', href: 'tel:+919767610029' },
  { label: 'Professional Email', value: 'tanujsulke007@gmail.com', href: 'mailto:tanujsulke007@gmail.com' },
  { label: 'LinkedIn Profile', value: 'linkedin.com/in/tanuj-sulke-1595282b6', href: 'https://www.linkedin.com/in/tanuj-sulke-1595282b6/' },
  { label: 'GitHub Profile', value: 'github.com/tanujai-ds', href: 'https://github.com/tanujai-ds' },
]

export default function ResumePage() {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = () => {
    setDownloading(true)
    setTimeout(() => setDownloading(false), 2000)
  }

  return (
    <>
      <style>{`
        .resume-page { background: var(--bg-dark); padding-top: 120px; min-height: 100vh; }

        .download-card {
          background: #181818; border: 1px solid var(--border-dark);
          border-radius: 4px; padding: 64px;
          display: flex; align-items: center; justify-content: space-between; gap: 40px;
          position: relative; overflow: hidden;
          margin-bottom: 2px;
        }
        .download-card::after {
          content: 'CV';
          position: absolute; right: -16px; bottom: -24px;
          font-family: var(--font-display); font-size: 160px;
          color: rgba(200,255,0,0.04); pointer-events: none; user-select: none;
        }
        .dc-info h3 {
          font-family: var(--font-heading); font-size: 38px; font-weight: 800; margin-bottom: 14px;
        }
        .dc-info p { color: var(--gray-light); font-size: 15px; line-height: 1.7; max-width: 500px; }
        .dc-actions { display: flex; flex-direction: column; gap: 12px; flex-shrink: 0; }
        .btn-dl {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--accent); color: var(--black);
          padding: 16px 32px; border: none; border-radius: 3px;
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.2s;
        }
        .btn-dl:hover { opacity: 0.88; transform: translateY(-2px); }
        .btn-dl:disabled { opacity: 0.6; }
        .btn-view {
          background: transparent; color: var(--gray);
          border: 1px solid var(--border-dark); padding: 14px 32px; border-radius: 3px;
          font-family: var(--font-body); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-view:hover { border-color: var(--accent); color: var(--accent); }

        .contact-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 100%);
          border: 1px solid var(--border-dark);
          padding: 42px 40px;
          margin-bottom: 28px;
          position: relative;
          overflow: hidden;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 100%;
          background: var(--accent);
        }
        .contact-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 26px;
          padding-left: 14px;
        }
        .contact-name {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .contact-note {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gray-light);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .contact-item {
          border: 1px solid var(--border-dark);
          background: rgba(0,0,0,0.18);
          padding: 22px 24px;
          border-radius: 2px;
          min-height: 108px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-label {
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .contact-value {
          font-size: 17px;
          line-height: 1.45;
          color: var(--white);
          word-break: break-word;
        }
        .contact-value a {
          color: var(--white);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s, color 0.2s;
        }
        .contact-value a:hover {
          color: var(--accent);
          border-color: rgba(200,255,0,0.4);
        }

        .highlights-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 2px; margin-bottom: 80px; }
        .hl-box {
          background: #141414; border: 1px solid var(--border-dark);
          padding: 28px 24px;
          transition: border-color 0.25s, transform 0.25s;
        }
        .hl-box:hover { border-color: rgba(200,255,0,0.2); transform: translateY(-3px); }
        .hl-icon { font-size: 24px; margin-bottom: 14px; }
        .hl-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
        .hl-val { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
        .hl-sub { font-size: 12px; color: var(--gray); }

        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 80px; }
        .resume-section { background: #181818; border: 1px solid var(--border-dark); padding: 36px; }
        .rs-header { font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--accent); margin-bottom: 28px; display: flex; align-items: center; gap: 10px; }
        .rs-header::before { content: ''; display: block; width: 20px; height: 1px; background: var(--accent); }
        .rs-item { border-bottom: 1px solid var(--border-dark); padding-bottom: 20px; margin-bottom: 20px; }
        .rs-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .rs-period { font-size: 11px; color: var(--accent); letter-spacing: 0.08em; margin-bottom: 6px; }
        .rs-role { font-family: var(--font-heading); font-size: 17px; font-weight: 700; margin-bottom: 4px; }
        .rs-company { font-size: 13px; color: var(--gray); }

        @media (max-width: 900px) {
          .highlights-row { grid-template-columns: 1fr 1fr; }
          .download-card { flex-direction: column; padding: 40px 28px; }
          .two-col { grid-template-columns: 1fr; }
          .contact-head { flex-direction: column; align-items: flex-start; }
          .contact-grid { grid-template-columns: 1fr; }
          .contact-card { padding: 28px 22px; }
          .contact-name { font-size: 28px; }
          .contact-item { min-height: auto; padding: 18px 18px; }
          .contact-value { font-size: 15px; }
        }
        @media (max-width: 600px) {
          .highlights-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="resume-page">
        <div className="container">
          <SectionHeader label="Download" title="My Resume" />

          <Reveal>
            <div className="download-card">
              <div className="dc-info">
                <h3>Tanuj's Resume</h3>
                <p>A complete overview of my education, work experience, skills, certifications, and achievements — all in one clean, professional document.</p>
              </div>
              <div className="dc-actions">
                <button className="btn-dl" onClick={handleDownload} disabled={downloading}>
                  {downloading ? '⏳ Preparing...' : '↓  Download PDF'}
                </button>
                <button className="btn-view">View Online</button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="contact-card">
              <div className="rs-header">Contact Details</div>
              <div className="contact-head">
                <div>
                  <div className="contact-name">Tanuj Arun Sulke</div>
                  <div className="contact-note">Professional contact information</div>
                </div>
              </div>
              <div className="contact-grid">
                {contactDetails.map(item => (
                  <div key={item.label} className="contact-item">
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="highlights-row">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 80}>
                <div className="hl-box">
                  <div className="hl-icon">{h.icon}</div>
                  <div className="hl-label">{h.label}</div>
                  <div className="hl-val">{h.value}</div>
                  <div className="hl-sub">{h.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="two-col">
            <Reveal>
              <div className="resume-section">
                <div className="rs-header">Internships</div>
                {experience.map(e => (
                  <div key={e.role} className="rs-item">
                    <div className="rs-period">{e.period}</div>
                    <div className="rs-role">{e.role}</div>
                    <div className="rs-company">{e.company}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="resume-section">
                <div className="rs-header">Education</div>
                {education.map(e => (
                  <div key={e.degree} className="rs-item">
                    <div className="rs-period">{e.period}</div>
                    <div className="rs-role">{e.degree}</div>
                    <div className="rs-company">{e.institution}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
