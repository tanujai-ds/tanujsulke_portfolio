import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import tanujImg from '../aspects/tanuj pic.png'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import TiltCard from '../components/TiltCard'
import Footer from '../components/Footer'
import FloatingSkills from '../components/FloatingSkills'
import './HomePage.css'

const STACK = [
  'React', 'JavaScript', 'Java', 'Python', 'Node.js', 'REST APIs',
  'Git & GitHub', 'HTML / CSS', 'AI & ML', 'Prompt Engineering', 'MySQL', 'Problem Solving',
]

const STATS = [
  { num: '4+', label: 'Internships' },
  { num: '6+', label: 'Certifications' },
  { num: '5+', label: 'Projects Shipped' },
  { num: '2+', label: 'Years Learning' },
]

const FEATURED = [
  {
    title: 'Live Stock Buy/Sell Prediction',
    tag: 'AI · Live Finance App',
    desc: 'Real-time stock signal predictor with a live Streamlit dashboard and market-hours awareness.',
    stack: ['Python', 'LSTM', 'Streamlit'],
    to: '/projects',
  },
  {
    title: 'Mahabli Construction',
    tag: 'Professional Website',
    desc: 'A polished construction company site with a responsive UI and smooth motion.',
    stack: ['React', 'CSS', 'Animation'],
    to: '/projects',
  },
  {
    title: 'Stronger Every Decade',
    tag: 'Brand Website',
    desc: 'Life-coaching & fitness brand platform with frontend + backend integration.',
    stack: ['React', 'JavaScript', 'Backend'],
    to: '/projects',
  },
]

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const blobAY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const blobBY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="home">
      {/* ───────── HERO ───────── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg" aria-hidden="true">
          <motion.div className="hero-blob hero-blob--a" style={{ y: blobAY }} />
          <motion.div className="hero-blob hero-blob--b" style={{ y: blobBY }} />
          <div className="hero-grid" />
        </div>

        <motion.div className="container hero-grid-layout" style={{ opacity: fade }}>
          <div className="hero-copy">
            <Reveal>
              <span className="pill hero-avail">
                <span className="dot-live" /> Available for opportunities
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="hero-title">
                Building
                <span className="shimmer-text"> intelligent </span>
                software with an eye for detail.
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="hero-sub">
                I'm <strong>Tanuj Sulke</strong> — an Engineering student specializing in
                Artificial Intelligence &amp; Data Science, focused on shipping clean, scalable
                products and learning fast through real internships and projects.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="hero-actions">
                <Magnetic strength={0.2}>
                  <Link className="btn btn-primary" to="/projects" data-cursor-text="View">
                    View My Work
                  </Link>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Link className="btn btn-ghost" to="/resume" data-cursor-text="Open">
                    Get Resume
                  </Link>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="hero-stats">
                {STATS.map((s) => (
                  <div className="hero-stat" key={s.label}>
                    <div className="hero-stat-num">{s.num}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} direction="right" className="hero-visual">
            <motion.div className="hero-photo-wrap" style={{ y: photoY }}>
              <div className="hero-photo-glow" />
              <img src={tanujImg} alt="Tanuj Sulke" className="hero-photo" />

              <div className="float-card float-card--top">
                <span className="float-dot" />
                AI &amp; Data Science
              </div>
              <div className="float-card float-card--bottom">
                <div className="float-card-title">Currently</div>
                <div className="float-card-value">Web Developer Intern</div>
              </div>
            </motion.div>
          </Reveal>
        </motion.div>

        <a href="#stack" className="scroll-cue" aria-label="Scroll down">
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 4v15M6 13l6 6 6-6" /></svg>
        </a>
      </section>

      {/* ───────── MARQUEE ───────── */}
      <section id="stack" className="marquee-section">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...STACK, ...STACK].map((s, i) => (
              <span className="marquee-item" key={i}>{s} <span className="marquee-sep">✦</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FLOATING SKILLS ───────── */}
      <FloatingSkills />

      {/* ───────── FEATURED WORK ───────── */}
      <section className="featured">
        <div className="container">
          <div className="featured-head">
            <div>
              <Reveal><p className="eyebrow">Selected Work</p></Reveal>
              <Reveal delay={60}><h2 className="section-title">Featured Projects</h2></Reveal>
            </div>
            <Reveal delay={100}>
              <Link to="/projects" className="text-link" data-cursor-text="See all">
                View all projects →
              </Link>
            </Reveal>
          </div>

          <div className="featured-grid">
            {FEATURED.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <TiltCard className="feature-card gradient-border" max={5}>
                  <Link to={p.to} className="feature-card-inner">
                    <div className="feature-card-top">
                      <span
                        className="feature-tag"
                        style={{
                          color: ['var(--accent)', 'var(--accent-2)', 'var(--accent-cyan)'][i % 3],
                          borderColor: ['var(--accent)', 'var(--accent-2)', 'var(--accent-cyan)'][i % 3],
                        }}
                      >{p.tag}</span>
                      <span className="feature-arrow">↗</span>
                    </div>
                    <h3 className="feature-title">{p.title}</h3>
                    <p className="feature-desc">{p.desc}</p>
                    <div className="feature-stack">
                      {p.stack.map((t) => <span key={t} className="feature-chip">{t}</span>)}
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="cta">
        <div className="container">
          <Reveal>
            <div className="cta-box">
              <div className="cta-glow" aria-hidden="true" />
              <div className="cta-copy">
                <p className="eyebrow" style={{ color: 'var(--accent-ink)' }}>Let's build something</p>
                <h2 className="cta-title">Have a project in mind?<br />Let's talk about it.</h2>
              </div>
              <Magnetic strength={0.18}>
                <a className="cta-btn" href="mailto:tanujsulke007@gmail.com" data-cursor-text="Email">
                  Start a Conversation
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
