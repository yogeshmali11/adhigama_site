import React from 'react'
import { Container, Heading } from '../../styledComponents';
import styles from '../LandingPage/landingPage.module.css'

function LandingPage() {
  return (
    <>
        <Container className={styles.bgContainer}>
            <div className={styles.stuff}>
                <h1>The <span className={styles.animate}>FUTURE</span> of <span className={styles.animate}>TECH</span>Begins here!!</h1>
                <p>Transforming Ideas into Digital Excellence! We craft cutting-edge mobile and web applications, enhance brand presence with expert social media management, empower businesses with AI-driven solutions, and provide top-tier training to shape the innovators of tomorrow.</p>
            </div>
        </Container>
    </>
  )
}

export default LandingPage;
