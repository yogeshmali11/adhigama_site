import React, { useState } from 'react'
import { Container, Heading } from '../../styledComponents';
import styles from '../ContactUs/contact.module.css';
import { addDoc, collection } from 'firebase/firestore';
import moment from 'moment';
import { db } from '../../firebaseConfig';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      alert("Query send successfully!");

      setFormData({
        name: '',
        email: '',
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
      <Container className={styles.bgContainer}>
        <Heading>
          <h3>Contact Us</h3>
        </Heading>
        <div className={styles.main}>
          <div className={styles.desc}>
            <h3>Having any queries??</h3>
            <p>If you are having any queries, please feel free to ask us. Our team will shortly connect to you regarding your qrery.</p>
          </div>
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Enter your query..'
                  required
                ></textarea>
              </div>

              <div>
                <button className={styles.btn} type="submit">Submit</button>
              </div>

            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ContactUs;
