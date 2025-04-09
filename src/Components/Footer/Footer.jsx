import React from 'react';
import styles from "../Footer/footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={`${styles.footerSection} ${styles.links}`}>
          <h4 className={styles.footerTitle}>Useful Links</h4>
          <a href='/about' className={styles.footerLink}>About Us</a>
          <a href='/services' className={styles.footerLink}>Services</a>
          <a href='/products' className={styles.footerLink}>Products</a>
          <a href='/career' className={styles.footerLink}>Career</a>
          <a href='/contact' className={styles.footerLink}>Contact</a>
        </div>

        <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6198.681187026695!2d75.5462511!3d20.9914718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f00089a115d%3A0x829cb9daa0f82139!2zQWJoYWxtYXlhICjgpIbgpK3gpL7gpLPgpK7gpL7gpK_gpL4p!5e1!3m2!1sen!2sin!4v1744181436085!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className={`${styles.footerSection} ${styles.contact}`}>
          <h4 className={styles.footerTitle}>Contact</h4>
          <p className={styles.footerText}>@Abhalmaya, Yashwant Nagar, Mahabal Road, Jalgaon, Maharashtra.</p>
          <p className={styles.footerText}>Phone: +91-7020204112</p>
        </div>

        <div className={`${styles.footerSection} ${styles.connect}`}>
          <h4 className={styles.footerTitle}>Connect</h4>
          {/* using font awesome incons  */}
          <p className={styles.footerText}><span><FontAwesomeIcon icon={faFacebookSquare} /></span>Facebook</p>
          <p className={styles.footerText}><span><FontAwesomeIcon icon={faInstagram} /></span>Instagram</p>
          <p className={styles.footerText}><span><FontAwesomeIcon icon={faEnvelope} /></span>Email</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
