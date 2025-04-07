import React from 'react'
import AboutUs from '../AboutUs/AboutUs';
import OurServices from '../Services/OurServices';
import OurProducts from '../Products/OurProducts';
import Career from '../Career/Career';
import ContactUs from '../ContactUs/ContactUs';
import styles from '../Home/home.module.css'
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';

function Home() {
  return (
    <>
      <div className={styles.mainContainer}>
        <LandingPage />
        <AboutUs />
        <OurServices />
        <OurProducts />
        <Career />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default Home;
