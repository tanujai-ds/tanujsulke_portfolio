import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import PageTransition from './components/PageTransition'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import CertificationsPage from './pages/CertificationsPage'
import InternshipPage from './pages/InternshipPage'
import ResumePage from './pages/ResumePage'
import './styles/global.css'
import './App.css'

export default function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('in')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('out')
    }
  }, [location])

  const handleAnimationEnd = () => {
    if (transitionStage === 'out') {
      setTransitionStage('in')
      setDisplayLocation(location)
    }
  }

  return (
    <>
      <Cursor />
      <Navbar />
      <div
        className={`transition-wrapper ${transitionStage}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <Routes location={displayLocation}>
          <Route path="/"               element={<HomePage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/projects"       element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/internship"     element={<InternshipPage />} />
          <Route path="/resume"         element={<ResumePage />} />
        </Routes>
      </div>
    </>
  )
}