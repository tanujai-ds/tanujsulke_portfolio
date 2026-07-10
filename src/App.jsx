import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import Grain from './components/Grain'
import BackToTop from './components/BackToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import CertificationsPage from './pages/CertificationsPage'
import InternshipPage from './pages/InternshipPage'
import ResumePage from './pages/ResumePage'
import './styles/global.css'
import './App.css'

const pageVariants = {
  initial: { opacity: 0, y: 22, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -14, filter: 'blur(6px)' },
}

const pageTransition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] }

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Preloader />
      <Grain />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          style={{ minHeight: '100vh' }}
        >
          <Routes location={location}>
            <Route path="/"               element={<HomePage />} />
            <Route path="/about"          element={<AboutPage />} />
            <Route path="/projects"       element={<ProjectsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/internship"     element={<InternshipPage />} />
            <Route path="/resume"         element={<ResumePage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <BackToTop />
    </>
  )
}
