import React from 'react'
import { Container, Heading } from '../../styledComponents';
import { motion } from 'framer-motion';
import styles from '../Services/services.module.css';

function OurServices() {
  const services = [
    {
      id: 1,
      name: 'Social Media',
      description: 'We provide social media management services.',
      image: 'https://ursidekick.com/wp-content/uploads/2024/02/social-media-management.png',
    },
    {
      id: 2,
      name: 'Mobile Application',
      description: 'We develop mobile applications.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_eWctWPqOIJwD4pbvaflpTp2wsp6tiNoJA&s',
    },
    {
      id: 3,
      name: 'Web Application',
      description: 'We build responsive web applications.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8VyhWu9_sm81k4hl4WIHaepH6ApV_jzRIQ&s',
    },
    {
      id: 4,
      name: 'AI Services',
      description: 'We provide AI-powered solutions for businesses.',
      image: 'https://assets.aboutamazon.com/dims4/default/e73bc85/2147483647/strip/true/crop/4093x2304+7+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F36%2F59%2Feba4adcc4f88a972b5639ed1dde0%2Fadobestock-712831308.jpeg',
    },
    {
      id: 5,
      name: 'Training',
      description: 'We offer training in various technical fields.',
      image: 'https://cdn.corporatefinanceinstitute.com/assets/team-training.jpeg',
    },
  ];
  return (
    <>
      <Container className={styles.bgContainer}>
        <Heading>
          <h3>Our Services</h3>
        </Heading>
        <div className={styles.main}>
          {
            services.map((service) => (

              <motion.div
                key={service.id}
                className={styles.card}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.cardImg}>
                  <img src={service.image} />
                </div>
                <div className={styles.cardDesc}>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))
          }
        </div>
      </Container>
    </>
  )
}

export default OurServices;

