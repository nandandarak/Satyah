import { motion } from 'framer-motion'

const Logo = ({ size = 60, className = '' }) => {
  return (
    <motion.div
      className={`logo ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Professional SATYAH logo - Navy Blue with steel blue accents */}
        <motion.circle
          cx="50"
          cy="50"
          r="38"
          stroke="var(--color-steel-blue)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        />
        <motion.path
          d="M 30 50 L 50 30 L 70 50 L 50 70 Z"
          stroke="var(--color-navy)"
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="6"
          fill="var(--color-professional-blue)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
        />
        {/* Subtle accent points */}
        <motion.circle
          cx="50"
          cy="20"
          r="2.5"
          fill="var(--color-professional-blue)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
        />
        <motion.circle
          cx="80"
          cy="50"
          r="2.5"
          fill="var(--color-professional-blue)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.9, ease: [0.19, 1, 0.22, 1] }}
        />
        <motion.circle
          cx="50"
          cy="80"
          r="2.5"
          fill="var(--color-professional-blue)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1, ease: [0.19, 1, 0.22, 1] }}
        />
        <motion.circle
          cx="20"
          cy="50"
          r="2.5"
          fill="var(--color-professional-blue)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.1, ease: [0.19, 1, 0.22, 1] }}
        />
      </svg>
    </motion.div>
  )
}

export default Logo
