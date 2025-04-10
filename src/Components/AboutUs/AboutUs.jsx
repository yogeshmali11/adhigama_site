import React from 'react'
import { Container, Heading } from '../../styledComponents';
import { motion } from 'framer-motion';
import styles from '../AboutUs/about.module.css'
import {useEffect} from 'react';
import aboutImage from '../../assets/aboutImage.webp';

function AboutUs() {

  // used for making the site SEO friendly..
  useEffect(() => {
    document.title = "About Us | Adhigama Tech";

    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute("content", "Learn about Adhigama Tech – a top Indian tech company offering ERP, CRM, and custom software solutions.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Learn about Adhigama Tech – a top Indian tech company offering ERP, CRM, and custom software solutions.";
      document.head.appendChild(meta);
    }
  }, []);
  return (
    <>
      <Container className={styles.bgContainer}>
        <Heading>
          <h3>About Us</h3>
        </Heading>

        <motion.div
          className={styles.main}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }} // animate only once
        >
          <motion.div
            className={styles.aboutImg}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img src={aboutImage}/>
          </motion.div>

          <motion.div
            className={styles.aboutDesc}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>Adhigama Tech is a cutting-edge technology startup founded by Aditya Rajesh Sharma, specializing in custom ERP solutions, CRM development, and innovative digital products. As a leading tech company in India, Adhigama Tech empowers businesses with scalable software solutions, smart automation tools, and creative platforms like regional OTT apps. With a mission to streamline operations and drive digital transformation, the company combines technical expertise with strategic thinking to solve real-world problems and deliver impactful results across industries.</p>
          </motion.div>
        </motion.div>
      </Container>
    </>
  )
}

export default AboutUs;
