import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

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
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 18px var(--gutter) 0;
          transition: padding 0.35s var(--ease);
          pointer-events: none;
        }
        .navbar.scrolled { padding-top: 10px; }

        .nav-inner {
          max-width: 1180px;
          margin: 0 auto;
          min-height: 62px;
          background: rgba(12, 13, 16, 0.62);
          border: 1px solid var(--border);
          border-radius: var(--r-pill);
          padding: 8px 10px 8px 22px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 20px;
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          box-shadow: 0 1px 0 rgba(255,255,255,0.04) inset;
          transition: box-shadow 0.35s var(--ease), border-color 0.35s var(--ease), background 0.35s var(--ease);
          pointer-events: auto;
        }

        .navbar.scrolled .nav-inner {
          background: rgba(10, 11, 13, 0.86);
          border-color: var(--border-strong);
          box-shadow: var(--shadow-md), 0 1px 0 rgba(255,255,255,0.05) inset;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-mark {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: linear-gradient(150deg, var(--accent) 0%, #9fe000 100%);
          display: grid; place-items: center;
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: var(--accent-ink);
          flex-shrink: 0;
        }

        .brand-label {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: var(--ink);
          white-space: nowrap;
        }

        .brand-label span { color: var(--accent); }

        .nav-links-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          list-style: none;
        }

        .nav-links-row a {
          position: relative;
          z-index: 1;
          display: inline-block;
          padding: 9px 16px;
          border-radius: var(--r-pill);
          color: var(--muted);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.01em;
          white-space: nowrap;
          transition: color 0.25s var(--ease);
        }

        .nav-links-row a:hover { color: var(--ink); }

        .nav-links-row a.active {
          color: var(--accent-ink);
          font-weight: 600;
        }

        .nav-pill {
          position: absolute;
          inset: 0;
          border-radius: var(--r-pill);
          background: var(--accent);
          z-index: 0;
        }

        .nav-hire {
          background: transparent;
          border: 1px solid var(--border-strong);
          color: var(--ink);
          height: 44px;
          padding: 0 22px;
          border-radius: var(--r-pill);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.01em;
          white-space: nowrap;
          transition: all 0.25s var(--ease);
        }

        .nav-hire:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--accent-ink);
          transform: translateY(-1px);
        }

        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          border-radius: 50%;
          width: 44px; height: 44px;
          align-items: center;
          justify-content: center;
        }

        .nav-hamburger span {
          display: block;
          width: 18px; height: 1.6px;
          background: var(--ink);
          border-radius: 2px;
          transition: all 0.25s var(--ease);
        }

        .nav-hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(3.5px, 3.5px); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; }
        .nav-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(3.5px, -3.5px); }

        .mobile-scrim {
          position: fixed; inset: 0; z-index: 998;
          background: rgba(4,5,6,0.6);
          backdrop-filter: blur(3px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.3s var(--ease);
        }
        .mobile-scrim.open { opacity: 1; pointer-events: auto; }

        .mobile-menu {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: min(84vw, 360px);
          background: #0b0c0e;
          border-left: 1px solid var(--border);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 26px 22px;
          transform: translateX(100%);
          transition: transform 0.4s var(--ease);
        }
        .mobile-menu.open { transform: translateX(0); }

        .mobile-menu-top {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 36px;
        }

        .mobile-menu-close {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.04);
          display: grid; place-items: center;
          color: var(--ink);
        }

        .mobile-menu-links { display: flex; flex-direction: column; gap: 2px; }

        .mobile-menu-links a {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding: 16px 6px;
          border-bottom: 1px solid var(--border);
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
        }

        .mobile-menu-links a .idx { font-size: 12px; color: var(--muted-2); font-family: var(--font-body); }
        .mobile-menu-links a.active { color: var(--accent); }

        .mobile-menu-cta {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-menu-cta a {
          text-align: center;
          padding: 15px;
          border-radius: var(--r-md);
          background: var(--accent);
          color: var(--accent-ink);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .nav-links-row, .nav-hire { display: none; }
          .nav-hamburger { display: flex; }
          .navbar { padding: 14px 16px 0; }
          .nav-inner { padding: 6px 8px 6px 16px; min-height: 58px; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <NavLink to="/" className="nav-brand">
            <div className="brand-mark">TS</div>
            <span className="brand-label">Tanuj<span> Sulke</span></span>
          </NavLink>

          <ul className="nav-links-row">
            {links.map((l) => {
              const isActive = l.to === '/' ? location.pathname === '/' : location.pathname.startsWith(l.to)
              return (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.to === '/'} className={isActive ? 'active' : ''}>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {l.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>

          <Magnetic strength={0.25}>
            <button className="nav-hire" onClick={() => navigate('/resume')} data-cursor-text="Go">Hire Me</button>
          </Magnetic>

          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-scrim ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-top">
          <span className="brand-label">Tanuj<span> Sulke</span></span>
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <nav className="mobile-menu-links">
          {links.map((l, i) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="idx">0{i + 1}</span>{l.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu-cta">
          <a href="mailto:tanujsulke007@gmail.com">Say Hello</a>
        </div>
      </div>
    </>
  )
}
