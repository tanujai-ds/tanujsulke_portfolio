import React, { useEffect, useState } from 'react'
import tanujImg from '../aspects/tanuj pic.png'
import './HomePage.css'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const PROFILE = {
    firstName: 'TANUJ',
    lastName: 'SULKE',
    subtitle: 'Presented By: Tanuj Sulke',
    email: 'Email - tanujsulke007@gmail.com',
    label: 'portfolio',
  }

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24
      const y = (e.clientY / window.innerHeight - 0.5) * 24
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  const m = mounted ? 'mounted' : ''

  return (
    <div className="hero-container">
      <div className="hero-content">
        <svg className="deco-rings" viewBox="0 0 320 320" aria-hidden="true">
          <circle cx="160" cy="160" r="118" />
          <circle cx="160" cy="160" r="163" />
          <circle cx="160" cy="160" r="208" />
        </svg>

        <div className={`portfolio-label ${m}`}>
          <span>{PROFILE.label}</span>
        </div>

        <section className="hero-section">
          <div className={`name-container ${m}`}>
            <div className="name-part name-first"><h1>{PROFILE.firstName}</h1></div>
            <div className="name-part name-last"><h1>{PROFILE.lastName}</h1></div>
          </div>

          <div className={`name-reflection ${m}`}>
            <div className="reflection-panel"><span>{PROFILE.firstName}</span></div>
            <div className="reflection-panel"><span>{PROFILE.lastName}</span></div>
          </div>

          <div
            className={`image-wrapper ${m}`}
            style={{ transform: `translate(calc(-50% + ${mousePos.x * 0.3}px), ${mousePos.y * 0.3}px)` }}
          >
            <img src={tanujImg} alt="Tanuj Sulke" className="hero-image" />
          </div>
        </section>

        <div className={`hero-info ${m}`}>
          <div className="info-left"><p className="subtitle">{PROFILE.subtitle}</p></div>
          <div className="info-right"><p className="email">{PROFILE.email}</p></div>
        </div>
      </div>
    </div>
  )
}
