import React, { useEffect, useState } from 'react'
import { Container, Heading } from '../../styledComponents';
import { motion } from 'framer-motion';
import styles from '../Career/career.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function Career() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  // used for making the site SEO friendly..
  useEffect(() => {
    document.title = "Careers | Join Our Team | Adhigama Tech";

    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute("content", "Explore exciting job openings at Adhigama Tech. Join our team of innovators and grow your career in tech.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Explore exciting job openings at Adhigama Tech. Join our team of innovators and grow your career in tech.";
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const jobsCollection = await getDocs(collection(db, "jobs"));
      setJobs(jobsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  const handleApplyClick = (job) => {
    navigate("/registerForm", { state: { job } });
  };
  return (
    <>
      <Container className={styles.mainContainer}>
        <Heading>
          <h3>We are Hiring!!</h3>
        </Heading>
        {
          jobs.map((job, index) => (
            <motion.div
              key={index}
              className={styles.jobCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.jobDesc}>
                <h2>{job.role}</h2>
                <p>{job.desc}</p>
              </div>
              <div>
                <button className={styles.btn} onClick={() => handleApplyClick(job)}>Apply Here!!</button>
              </div>
            </motion.div>
          ))
        }
      </Container>
    </>
  )
}

export default Career;
