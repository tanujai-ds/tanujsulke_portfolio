import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import Magnetic from '../components/Magnetic'
import AuroraBackground from '../components/AuroraBackground'

const highlights = [
  { icon: '🎓', label: 'Education', value: 'B.Tech — AI & Data Science', sub: 'Yashwantrao Chavan Inst.' },
  { icon: '🏆', label: 'Certifications', value: '6+ Professional Certs', sub: 'IIT Bombay · AWS · Anthropic' },
  { icon: '💼', label: 'Experience', value: '4 Internships', sub: 'AI/ML · Full Stack · Web Dev' },
  { icon: '📍', label: 'Location', value: 'Satara, India', sub: 'Open to Remote' },
]

const experience = [
  { period: 'Present', role: 'Web Developer Intern', company: 'NovaPex Info Hub, Remote · Ravet, Pune' },
  { period: 'Jan 2026 – Mar 2026', role: 'Java Full Stack Developer Intern', company: 'EduSkills (AICTE National Internship Portal), Virtual' },
  { period: 'Jul 2025 – Sep 2025', role: 'AI-ML Virtual Intern', company: 'EduSkills (AICTE + Google for Developers), Virtual' },
  { period: 'Jul 2025 – Aug 2025', role: 'Artificial Intelligence Intern', company: 'SkillDzire (Affiliated with DBATU), Virtual' },
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
  return (
    <>
      <style>{`
        .resume-page { position: relative; background: var(--bg); padding-top: calc(var(--nav-h) + 46px); min-height: 100vh; overflow: clip; }
        .resume-page .container { position: relative; z-index: 1; }

        .download-card {
          position: relative;
          overflow: hidden;
          border-radius: var(--r-xl);
          background: linear-gradient(120deg, var(--accent) 0%, #b9f52e 100%);
          padding: clamp(36px, 5vw, 56px);
          display: flex; align-items: center; justify-content: space-between; gap: 30px; flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .download-card::after {
          content: 'CV'; position: absolute; right: -10px; bottom: -30px;
          font-family: var(--font-display); font-size: 160px; font-weight: 700;
          color: rgba(10,12,5,0.08); pointer-events: none; user-select: none;
        }
        .dc-info h3 { font-family: var(--font-heading); font-size: clamp(26px, 3vw, 34px); font-weight: 700; color: var(--accent-ink); margin-bottom: 12px; }
        .dc-info p { color: rgba(10,12,5,0.72); font-size: 14.5px; line-height: 1.7; max-width: 480px; }
        .dc-actions { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; position: relative; z-index: 1; }
        .btn-dl {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: var(--accent-ink); color: var(--accent);
          padding: 16px 32px; border-radius: var(--r-pill);
          font-size: 13px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
          white-space: nowrap; text-decoration: none;
          transition: transform 0.25s var(--ease), opacity 0.2s;
        }
        .btn-dl:hover { transform: translateY(-2px); opacity: 0.92; }
        .btn-view {
          background: transparent; color: rgba(10,12,5,0.8);
          border: 1.5px solid rgba(10,12,5,0.28); padding: 13px 32px; border-radius: var(--r-pill);
          font-size: 12px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
          text-decoration: none; text-align: center;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-view:hover { border-color: rgba(10,12,5,0.6); color: var(--accent-ink); }

        .contact-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 38px 36px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
        }
        .contact-card::before { content: ''; position: absolute; left: 0; top: 0; width: 3px; height: 100%; background: var(--accent); }
        .contact-name { font-family: var(--font-heading); font-size: clamp(24px, 2.6vw, 32px); font-weight: 700; color: var(--ink); margin-bottom: 6px; padding-left: 14px; }
        .contact-note { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); margin-bottom: 26px; padding-left: 14px; }
        .contact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .contact-item { border: 1px solid var(--border); background: rgba(0,0,0,0.16); padding: 20px 22px; border-radius: var(--r-md); min-height: 100px; display: flex; flex-direction: column; justify-content: center; }
        .contact-label { font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 9px; }
        .contact-value { font-size: 16px; line-height: 1.4; color: var(--ink); word-break: break-word; }
        .contact-value a { color: var(--ink); text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s, color 0.2s; }
        .contact-value a:hover { color: var(--accent); border-color: var(--border-accent); }

        .highlights-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 84px; }
        .hl-box { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-md); padding: 26px 22px; transition: border-color 0.25s, transform 0.25s; }
        .hl-box:hover { border-color: var(--border-accent); transform: translateY(-4px); }
        .hl-icon { font-size: 22px; margin-bottom: 14px; }
        .hl-label { font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
        .hl-val { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
        .hl-sub { font-size: 12px; color: var(--muted); }

        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 90px; }
        .resume-section { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 34px; }
        .rs-header { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 26px; display: flex; align-items: center; gap: 10px; }
        .rs-header::before { content: ''; display: block; width: 18px; height: 1px; background: var(--accent); }
        .rs-item { border-bottom: 1px solid var(--border); padding-bottom: 18px; margin-bottom: 18px; }
        .rs-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .rs-period { font-size: 11px; color: var(--accent); letter-spacing: 0.05em; margin-bottom: 6px; }
        .rs-role { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
        .rs-company { font-size: 12.5px; color: var(--muted); }

        @media (max-width: 900px) {
          .highlights-row { grid-template-columns: 1fr 1fr; }
          .download-card { flex-direction: column; padding: 34px 26px; }
          .dc-actions { width: 100%; }
          .dc-actions .btn-dl, .dc-actions .btn-view { width: 100%; }
          .two-col { grid-template-columns: 1fr; }
          .contact-grid { grid-template-columns: 1fr; }
          .contact-card { padding: 26px 22px; }
          .contact-item { min-height: auto; padding: 16px 18px; }
        }
        @media (max-width: 560px) { .highlights-row { grid-template-columns: 1fr; } }
      `}</style>

      <div className="resume-page">
        <AuroraBackground variant="warm" />
        <div className="container">
          <SectionHeader label="Download" title="My Resume" desc="A complete overview of my education, experience, skills and certifications." />

          <Reveal>
            <div className="download-card">
              <div className="dc-info">
                <h3>Tanuj's Resume</h3>
                <p>A complete overview of my education, work experience, skills, certifications, and achievements — all in one clean, professional document.</p>
              </div>
              <div className="dc-actions">
                <Magnetic strength={0.15}>
                  <a className="btn-dl" href="/resume.pdf" download data-cursor-text="Get">↓ Download PDF</a>
                </Magnetic>
                <a className="btn-view" href="/resume.pdf" target="_blank" rel="noreferrer">View Online</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="contact-card">
              <div className="rs-header" style={{ paddingLeft: 14 }}>Contact Details</div>
              <div className="contact-name">Tanuj Arun Sulke</div>
              <div className="contact-note">Professional contact information</div>
              <div className="contact-grid">
                {contactDetails.map((item) => (
                  <div key={item.label} className="contact-item">
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                          {item.value}
                        </a>
                      ) : item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="highlights-row">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 70}>
                <div className="hl-box gradient-border">
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
                {experience.map((e) => (
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
                {education.map((e) => (
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
