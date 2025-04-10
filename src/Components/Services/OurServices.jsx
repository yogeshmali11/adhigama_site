import React, { useEffect } from 'react'
import { Container, Heading } from '../../styledComponents';
import { motion } from 'framer-motion';
import styles from '../Services/services.module.css';
import serviceImage1 from '../../assets/serviceImage1.png';
import serviceImage2 from '../../assets/serviceImage2.jpg';
import serviceImage3 from '../../assets/serviceImage3.jpg';
import serviceImage4 from '../../assets/serviceImage4.jpg';
import serviceImage5 from '../../assets/serviceImage5.webp';

function OurServices() {

  // used for making the site SEO friendly..
  useEffect(() => {
    document.title = "Our Services | Adhigama Tech";

    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute("content", "Explore the digital services offered by Adhigama Tech including AI, Web, Mobile, and more.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Explore the digital services offered by Adhigama Tech including AI, Web, Mobile, and more.";
      document.head.appendChild(meta);
    }
  }, []);

  const services = [
    {
      id: 1,
      name: 'Social Media',
      description: 'We provide social media management services.',
      image: serviceImage1,
    },
    {
      id: 2,
      name: 'Mobile Application',
      description: 'We develop mobile applications.',
      image: serviceImage2,
    },
    {
      id: 3,
      name: 'Web Application',
      description: 'We build responsive web applications.',
      image: serviceImage3,
    },
    {
      id: 4,
      name: 'AI Services',
      description: 'We provide AI-powered solutions for businesses.',
      image: serviceImage4,
    },
    {
      id: 5,
      name: 'Training',
      description: 'We offer training in various technical fields.',
      image: serviceImage5,
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

