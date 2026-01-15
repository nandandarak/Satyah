import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-waves">
          <svg viewBox="0 0 1200 600" preserveAspectRatio="none">
            <motion.path
              d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"
              fill="rgba(192, 192, 192, 0.1)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,350 Q300,250 600,350 T1200,350 L1200,600 L0,600 Z"
              fill="rgba(74, 124, 89, 0.08)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            />
          </svg>
        </div>
        <div className="hero-pattern">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="pattern-dot"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.2, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-logo-container"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Logo size={140} />
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          SATYAH
        </motion.h1>

        <motion.div
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="subtitle-line-1">Driving Insight Through Research.</p>
          <p className="subtitle-line-2">
            Empowering Decisions with Data, Strategy, and Sustainability.
          </p>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/services" className="cta-button">
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={(e) => {
          e.preventDefault()
          const servicesSection = document.getElementById('services')
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  )
}

export default Hero
