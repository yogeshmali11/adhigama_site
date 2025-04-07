import React, { useEffect, useState } from 'react'
import { Container, Heading } from '../../styledComponents';
import styles from '../Career/career.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function Career() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

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
            <div key={index} className={styles.jobCard}>
              <div className={styles.jobDesc}>
                <h2>{job.role}</h2>
                <p>{job.desc}</p>
              </div>
              <div>
                <button className={styles.btn} onClick={() => handleApplyClick(job)}>Apply Here!!</button>
              </div>
            </div>
          ))
        }
      </Container>
    </>
  )
}

export default Career;
