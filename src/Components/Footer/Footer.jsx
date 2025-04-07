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
          <a href='/' className={styles.footerLink}>Home</a>
          <a href='/about' className={styles.footerLink}>About Us</a>
          <a href='/services' className={styles.footerLink}>Services</a>
          <a href='/products' className={styles.footerLink}>Products</a>
          <a href='/career' className={styles.footerLink}>Career</a>
          <a href='/contact' className={styles.footerLink}>Contact</a>
        </div>

        <div className={`${styles.footerSection} ${styles.contact}`}>
          <h4 className={styles.footerTitle}>Contact</h4>
          <p className={styles.footerText}>AARAV INDUSTRIES
            G-2/3 & G-2/4, NEAR BY R.L. SQUARE, OPP. NEXA SHOW ROOM , BEHIND V.R.L. TRANSPORT M.I.D.C. AREA, JALGAON - 425003</p>
          <p className={styles.footerText}>Phone: +91-9730189700</p>
        </div>

        <div className={`${styles.footerSection} ${styles.connect}`}>
          <h4 className={styles.footerTitle}>Connect</h4>
          {/* using font awesome incons  */}
          <p className={styles.footerText}><span><FontAwesomeIcon icon={faFacebookSquare} /></span>Facebook</p>
          <p className={styles.footerText}><span><FontAwesomeIcon icon={faInstagram} /></span>Instagram</p>
          <p className={styles.footerText}><span><FontAwesomeIcon icon={faYoutube} /></span>YouTube</p>
          <p className={styles.footerText}><span><FontAwesomeIcon icon={faEnvelope} /></span>Email</p>
          <p className={styles.footerText}><span><FontAwesomeIcon icon={faPhone} /></span>Phone</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
