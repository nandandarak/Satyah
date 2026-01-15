import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    icon: '📊',
    title: 'Research and Analysis',
    description: 'Comprehensive research methodologies and in-depth analysis to uncover insights that drive strategic decisions.',
  },
  {
    icon: '📈',
    title: 'Data Collection and Analysis',
    description: 'Systematic data gathering and advanced analytical techniques to transform raw information into actionable intelligence.',
  },
  {
    icon: '💼',
    title: 'Consultancy Services',
    description: 'Expert guidance and strategic consulting to help organizations navigate complex challenges and opportunities.',
  },
  {
    icon: '🌱',
    title: 'Sustainable Development Research',
    description: 'Evidence-based research focused on creating sustainable solutions for long-term environmental and social impact.',
  },
  {
    icon: '🎯',
    title: 'Strategic Planning',
    description: 'Data-driven strategic planning that aligns organizational goals with actionable roadmaps for success.',
  },
]

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to your research and strategic needs
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
