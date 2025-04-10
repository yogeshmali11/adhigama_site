import React, { useEffect } from 'react'
import AboutUs from '../AboutUs/AboutUs';
import OurServices from '../Services/OurServices';
import OurProducts from '../Products/OurProducts';
import Career from '../Career/Career';
import ContactUs from '../ContactUs/ContactUs';
import styles from '../Home/home.module.css'
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';

function Home() {
  
  // used for making the site SEO friendly..
  useEffect(() => {
    document.title = "Adhigama Tech | Custom ERP, CRM & Digital Solutions";

    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute("content", "Welcome to Adhigama Tech - your partner for custom ERP systems, CRM tools, automation, and digital innovation.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Welcome to Adhigama Tech - your partner for custom ERP systems, CRM tools, automation, and digital innovation.";
      document.head.appendChild(meta);
    }
  }, []);
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
