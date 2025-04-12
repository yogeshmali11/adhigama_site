import React from 'react'
import AboutUs from '../AboutUs/AboutUs';
import OurServices from '../Services/OurServices';
import OurProducts from '../Products/OurProducts';
import Career from '../Career/Career';
import ContactUs from '../ContactUs/ContactUs';
import styles from '../Home/home.module.css'
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Adhigama Tech | Custom ERP, CRM & Digital Solutions</title>
        <meta name="description" content="Welcome to Adhigama Tech - your partner for custom ERP systems, CRM tools, automation, and digital innovation." />
        <meta name="keywords" content="Adhigama Tech, ERP systems, CRM tools, custom ERP, digital solutions, automation, software development" />
        <meta property="og:title" content="Adhigama Tech | Custom ERP, CRM & Digital Solutions" />
        <meta property="og:description" content="Welcome to Adhigama Tech - your partner for custom ERP systems, CRM tools, automation, and digital innovation." />
        <meta property="og:url" content="https://adhigama.in/" />
      </Helmet>
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
