import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Internship', to: '/internship' },
  { label: 'Resume', to: '/resume' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 12px 32px 0;
          transition: padding 0.3s var(--ease), transform 0.3s var(--ease);
        }

        .navbar.scrolled {
          padding-top: 8px;
          transform: translateY(-2px);
        }

        .nav-inner {
          max-width: 1460px;
          margin: 0 auto;
          min-height: 74px;
          background: rgba(231, 233, 237, 0.96);
          border: 1px solid rgba(17, 17, 17, 0.1);
          border-radius: 18px;
          padding: 10px 22px 10px 24px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 24px;
          box-shadow: 0 14px 40px rgba(11, 16, 25, 0.14);
          backdrop-filter: blur(14px);
          transition: box-shadow 0.3s, border-color 0.3s, background 0.3s;
        }

        .navbar.scrolled .nav-inner {
          box-shadow: 0 18px 46px rgba(11, 16, 25, 0.16);
          border-color: rgba(17, 17, 17, 0.14);
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          min-width: 240px;
        }

        .brand-box {
          width: 40px;
          height: 40px;
          background: #0d0d0f;
          border-radius: 8px;
          display: grid;
          place-items: center;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.03em;
          flex-shrink: 0;
        }

        .brand-label {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #14181f;
          white-space: nowrap;
        }

        .nav-links-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          list-style: none;
        }

        .nav-links-row li {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-links-row li::after {
          content: '/';
          color: rgba(20, 24, 31, 0.38);
          font-size: 14px;
          font-weight: 600;
          margin: 0 8px;
        }

        .nav-links-row li:last-child::after {
          display: none;
        }

        .nav-links-row a {
          padding: 8px 2px;
          border-radius: 6px;
          color: #3b414c;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .nav-links-row a:hover,
        .nav-links-row a.active {
          color: #11151b;
        }

        .nav-hire {
          background: #eef0f3;
          border: 2px solid #111;
          color: #111;
          min-width: 122px;
          height: 44px;
          padding: 0 24px;
          border-radius: 8px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .nav-hire:hover {
          background: #111;
          color: #fff;
          transform: translateY(-1px);
        }

        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: rgba(17, 17, 17, 0.06);
          border: none;
          border-radius: 12px;
          padding: 4px;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
        }

        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #111;
          border-radius: 2px;
          transition: all 0.25s;
        }

        .nav-hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(4.5px, 4.5px);
        }

        .nav-hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .nav-hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(4.5px, -4.5px);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 94px;
          left: 16px;
          right: 16px;
          bottom: auto;
          background: rgba(12, 13, 16, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.38);
          z-index: 999;
          flex-direction: column;
          align-items: stretch;
          justify-content: flex-start;
          gap: 0;
          padding: 14px;
          overflow: hidden;
          backdrop-filter: blur(18px);
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu::before {
          content: 'Navigate';
          display: block;
          padding: 8px 10px 14px;
          color: rgba(233, 237, 243, 0.56);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .mobile-menu a {
          display: block;
          padding: 16px 14px;
          border-radius: 14px;
          font-family: var(--font-heading);
          font-size: 18px;
          color: #eef1f7;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }

        .mobile-menu a:hover {
          color: var(--accent);
          background: rgba(200, 255, 0, 0.08);
          transform: translateX(2px);
        }

        @media (max-width: 860px) {
          .navbar {
            padding: 12px 14px 0;
          }

          .nav-inner {
            grid-template-columns: auto auto;
            gap: 12px;
            min-height: 68px;
            padding: 10px 14px 10px 16px;
            border-radius: 20px;
          }

          .nav-brand {
            min-width: 0;
            gap: 10px;
          }

          .brand-label {
            font-size: 11px;
            letter-spacing: 0.09em;
          }

          .brand-box {
            width: 38px;
            height: 38px;
            border-radius: 10px;
          }

          .nav-links-row,
          .nav-hire {
            display: none;
          }

          .nav-hamburger {
            display: flex;
          }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <NavLink to="/" className="nav-brand">
            <div className="brand-box">TS</div>
            <span className="brand-label">Tanuj Sulke</span>
          </NavLink>

          <ul className="nav-links-row">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="nav-hire" onClick={() => navigate('/resume')}>Hire Me</button>

          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</NavLink>
        ))}
      </div>
    </>
  )
}
