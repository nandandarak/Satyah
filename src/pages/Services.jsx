import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import './ServicesPage.css'

const ServicesPage = () => {
  const detailedServices = [
    {
      title: 'Research and Analysis',
      icon: '📊',
      description:
        'Comprehensive research methodologies and in-depth analysis to uncover insights that drive strategic decisions.',
      features: [
        'Qualitative and quantitative research design',
        'Literature reviews and meta-analyses',
        'Primary and secondary data collection',
        'Statistical analysis and interpretation',
        'Research report writing and presentation',
      ],
    },
    {
      title: 'Data Collection and Analysis',
      icon: '📈',
      description:
        'Systematic data gathering and advanced analytical techniques to transform raw information into actionable intelligence.',
      features: [
        'Survey design and implementation',
        'Interview and focus group facilitation',
        'Data mining and extraction',
        'Advanced statistical modeling',
        'Data visualization and dashboards',
      ],
    },
    {
      title: 'Consultancy Services',
      icon: '💼',
      description:
        'Expert guidance and strategic consulting to help organizations navigate complex challenges and opportunities.',
      features: [
        'Strategic planning and development',
        'Organizational assessment and optimization',
        'Process improvement and efficiency',
        'Change management support',
        'Custom consulting solutions',
      ],
    },
    {
      title: 'Sustainable Development Research',
      icon: '🌱',
      description:
        'Evidence-based research focused on creating sustainable solutions for long-term environmental and social impact.',
      features: [
        'Environmental impact assessments',
        'Sustainability strategy development',
        'ESG (Environmental, Social, Governance) analysis',
        'Climate adaptation planning',
        'Sustainable development goal alignment',
      ],
    },
    {
      title: 'Strategic Planning',
      icon: '🎯',
      description:
        'Data-driven strategic planning that aligns organizational goals with actionable roadmaps for success.',
      features: [
        'SWOT and competitive analysis',
        'Strategic roadmap development',
        'Goal setting and KPI definition',
        'Implementation planning',
        'Performance monitoring and evaluation',
      ],
    },
  ]

  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              Comprehensive solutions tailored to your research and strategic
              needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="detailed-services section">
        <div className="container">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              className="detailed-service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-header">
                <div className="service-icon-large">{service.icon}</div>
                <div className="service-header-text">
                  <h2 className="service-title-large">{service.title}</h2>
                  <p className="service-description-large">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="service-features">
                <h3 className="features-title">Key Features:</h3>
                <ul className="features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="services-cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-text">
              Let's discuss how SATYAH can help drive your organization forward
              with research-driven insights and strategic solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="cta-button-large">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
