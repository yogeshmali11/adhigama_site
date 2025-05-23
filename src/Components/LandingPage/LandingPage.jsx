import React from 'react'
import { Container, Heading } from '../../styledComponents';
import { motion } from 'framer-motion';
import styles from '../LandingPage/landingPage.module.css'
import { Helmet } from 'react-helmet-async';

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Adhigama Tech | Future of Tech Starts Here</title>
        <meta name="description" content="Transforming ideas into digital excellence - AI, mobile apps, web development, training, and more." />
        <meta name="keywords" content="Adhigama Tech, mobile apps, web development, AI solutions, tech innovation, social media management, training, digital excellence" />
        <meta property="og:title" content="Adhigama Tech | Future of Tech Starts Here" />
        <meta property="og:description" content="Transforming ideas into digital excellence - AI, mobile apps, web development, training, and more." />
        <meta property="og:url" content="https://adhigama.in/" />
      </Helmet>
      <Container className={styles.bgContainer}>
        <div className={styles.stuff}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The <span className={styles.animate}>FUTURE</span> of <span className={styles.animate}>TECH</span> Begins here!!
          </motion.h1>

          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Transforming Ideas into Digital Excellence! We craft cutting-edge mobile and web applications, enhance brand presence with expert social media management, empower businesses with AI-driven solutions, and provide top-tier training to shape the innovators of tomorrow.
          </motion.p>
        </div>
      </Container>
    </>
  )
}

export default LandingPage;
