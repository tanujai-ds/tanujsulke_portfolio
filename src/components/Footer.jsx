import React from 'react'
import { Link } from 'react-router-dom'
import Magnetic from './Magnetic'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        .footer {
          position: relative;
          border-top: 1px solid var(--border);
          background: var(--bg-soft);
          overflow: hidden;
        }
        .footer-top {
          padding: 60px var(--gutter) 40px;
          max-width: var(--container-w);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 40px;
        }
        .footer-brand-title {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 14px;
        }
        .footer-brand-title span { color: var(--accent); }
        .footer-brand-desc { font-size: 13.5px; line-height: 1.7; color: var(--muted); max-width: 34ch; }
        .footer-col-title { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-dim); margin-bottom: 18px; }
        .footer-col-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .footer-col-list a {
          font-size: 13.5px; color: var(--muted); text-decoration: none;
          transition: color 0.2s;
        }
        .footer-col-list a:hover { color: var(--accent); }
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 22px var(--gutter);
          max-width: var(--container-w);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy { font-size: 12px; color: var(--muted-2); }
        .footer-copy span { color: var(--accent); }
        .footer-back-to-top-note { font-size: 12px; color: var(--muted-2); letter-spacing: 0.02em; }

        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr; gap: 30px; padding: 48px 24px 32px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; padding: 20px 24px; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand-title">Tanuj<span> Sulke</span></div>
            <p className="footer-brand-desc">
              AI &amp; Data Science engineer-in-training, building clean, thoughtful software one project at a time.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Explore</div>
            <ul className="footer-col-list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/internship">Internships</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Connect</div>
            <ul className="footer-col-list">
              <li><Magnetic strength={0.2}><a href="https://github.com/tanujai-ds" target="_blank" rel="noreferrer" data-cursor-text="Visit">GitHub</a></Magnetic></li>
              <li><Magnetic strength={0.2}><a href="https://www.linkedin.com/in/tanuj-sulke-1595282b6/" target="_blank" rel="noreferrer" data-cursor-text="Visit">LinkedIn</a></Magnetic></li>
              <li><Magnetic strength={0.2}><a href="mailto:tanujsulke007@gmail.com" data-cursor-text="Email">Email</a></Magnetic></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} <span>Tanuj Sulke</span>. All rights reserved.</p>
          <p className="footer-back-to-top-note">Built with React &amp; Framer Motion</p>
        </div>
      </footer>
    </>
  )
}
