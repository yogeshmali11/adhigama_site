import React, { useEffect, useState } from 'react'
import { Container, Heading } from '../../styledComponents';
import styles from '../ContactUs/contact.module.css';
import { addDoc, collection } from 'firebase/firestore';
import { motion } from 'framer-motion';
import moment from 'moment';
import { db } from '../../firebaseConfig';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function ContactUs() {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.subject) {
      setFormData(prev => ({
        ...prev,
        subject: `Want to know more about ${location.state.subject}`
      }));

      setMessagePlaceholder(
        `Ex: Hello, my name is [Your Name]. I am working for [Institute Name] / I have a business in [Your Business Type]. I am interested in ${location.state?.subject} and would like to know more about it. Thank you!`
      );
    }
  }, [location.state]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [messagePlaceholder, setMessagePlaceholder] = useState('Enter your message..');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // the date is formatted using the moment package..
    const formattedDate = moment().format("DD-MM-YYYY hh:mm a");

    try {

      await addDoc(collection(db, 'queries'), {
        ...formData,
        timestamp: formattedDate
      });

      console.log("Your Query has been send successfully");
      alert("Message send Successfully!!");

      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.error("Error sending query: ", error);
      alert("Error sending query. Try again.");

    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <>
      <Helmet>
        <title>Contact Us | Adhigama Tech</title>
        <meta name="description" content="Have questions? Contact Adhigama Tech for ERP solutions, CRM systems, or digital products. We’re happy to help!" />
        <meta name="keywords" content="contact us, contact, Adhigama Tech, ERP solutions, CRM systems, digital products, customer support" />
        <meta property="og:title" content="Contact Us | Adhigama Tech" />
        <meta property="og:description" content="Have questions? Contact Adhigama Tech for ERP solutions, CRM systems, or digital products. We’re happy to help!" />
        <meta property="og:url" content="https://adhigama.in/contact" />
      </Helmet>
      <Container className={styles.bgContainer}>

        <div className={styles.main}>
          <div className={styles.desc}>
            <Heading className={styles.descHeading}>
              <h3>Contact Us</h3>
            </Heading>
            <h3>Having any queries??</h3>
            <p>If you are having any queries, please feel free to ask us. Our team will shortly connect to you regarding your qrery.</p>
          </div>
          <div className={styles.contactForm}>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  className={styles.inputField}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Enter your name..'
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Mobile Number:</label>
                <input
                  className={styles.inputField}
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder='Enter your Mobile Number'
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  className={styles.inputField}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Enter your email..'
                  required
                />
              </div>

              <div>
                <label htmlFor="subject">Subject:</label>
                <input
                  className={styles.inputField}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder='Enter your subject..'
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={messagePlaceholder}
                  rows={7}
                  required
                ></textarea>
              </div>

              <div>
                <button className={styles.btn} type="submit">Submit</button>
              </div>

            </motion.form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ContactUs;
