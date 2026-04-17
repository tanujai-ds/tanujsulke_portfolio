import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          border-top: 1px solid var(--border-dark);
          padding: 36px 48px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px;
          background: var(--bg-dark);
        }
        .footer-left { font-size: 12px; color: var(--gray); letter-spacing: 0.05em; }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a {
          font-size: 12px; color: var(--gray); text-decoration: none;
          letter-spacing: 0.06em; text-transform: uppercase;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--accent); }
        .footer-accent { color: var(--accent); }
        @media (max-width: 600px) {
          .footer { padding: 28px 24px; flex-direction: column; text-align: center; }
        }
      `}</style>
      <footer className="footer">
        <p className="footer-left">
          © 2026 <span className="footer-accent">Design by Matthew</span>. All rights reserved.
        </p>
        <ul className="footer-links">
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a></li>
          <li><a href="mailto:matthew@example.com">Email</a></li>
        </ul>
      </footer>
    </>
  )
}
