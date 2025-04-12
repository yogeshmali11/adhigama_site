import React, { useEffect, useState } from 'react'
import styles from '../AdminDashboard/adminDashboard.module.css';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Container, Heading } from '../../styledComponents';
import { Helmet } from 'react-helmet-async';

function AdminDashboard() {
  const [jobs, setJobs] = useState([]);
  const [queries, setQueries] = useState([]);
  const [newJob, setNewJob] = useState({ role: '', desc: '' });
  const [editingJob, setEditingJob] = useState(null); // Track which job is being edited

  // Fetch jobs and queries from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const jobsCollection = await getDocs(collection(db, "jobs"));
      setJobs(jobsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      const queriesCollection = await getDocs(collection(db, "queries"));
      setQueries(queriesCollection.docs.map(doc => doc.data()));
    };
    fetchData();
  }, []);

  // Add new job
  const handleAddJob = async () => {
    if (!newJob.role || !newJob.desc) return alert("Fill all fields");
    const docRef = await addDoc(collection(db, "jobs"), newJob);
    setJobs([...jobs, { id: docRef.id, ...newJob }]);
    setNewJob({ role: '', desc: '' });
  };

  // Delete job
  const handleDeleteJob = async (id) => {
    await deleteDoc(doc(db, "jobs", id));
    setJobs(jobs.filter(job => job.id !== id));
  };

  // Enable edit mode
  const handleEditClick = (job) => {
    setEditingJob(job); // Store the job to be edited
  };

  // Save edited job to Firestore
  const handleSaveEdit = async () => {
    if (!editingJob.role || !editingJob.desc) return alert("Fields cannot be empty");

    await updateDoc(doc(db, "jobs", editingJob.id), {
      role: editingJob.role,
      desc: editingJob.desc
    });

    setJobs(jobs.map(job => (job.id === editingJob.id ? editingJob : job)));
    setEditingJob(null); // Exit edit mode
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Adhigama Tech</title>
        <meta name="description" content="Manage job listings and user queries from the Admin Dashboard at Adhigama Tech." />
        <meta name="keywords" content="Admin Dashboard, job listings, job management, user queries, Adhigama Tech" />
        <meta property="og:title" content="Admin Dashboard | Adhigama Tech" />
        <meta property="og:description" content="Manage job listings and user queries from the Admin Dashboard at Adhigama Tech." />
        <meta property="og:url" content="https://adhigama.in/admin-dashboard" />
      </Helmet>
      <Container className={styles.bgColor}>
        <Heading>
          <h3>Admin Dashboard </h3>
        </Heading>
        <div className={styles.jobStuff}>
          <div className={styles.jobListings}>
            {/* Job Listings */}
            <h3>Job Listings</h3>
            {jobs.map((job) => (
              <div key={job.id}>
                {editingJob && editingJob.id === job.id ? (
                  // Show input fields for editing
                  <div className={styles.listingsStuff}>
                    <div className={styles.jobDesc}>
                      <input
                        className={styles.inputField}
                        type="text"
                        value={editingJob.role}
                        onChange={(e) => setEditingJob({ ...editingJob, role: e.target.value })}
                      />
                      <br />
                      <input
                        className={styles.inputField}
                        type="text"
                        value={editingJob.desc}
                        onChange={(e) => setEditingJob({ ...editingJob, desc: e.target.value })}
                      />
                    </div>
                    <div>
                      <button className={styles.btn} onClick={handleSaveEdit}>Save</button>
                      <button className={styles.btn} onClick={() => setEditingJob(null)}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  // Show job details with Edit and Delete buttons
                  <div className={styles.listingsStuff}>
                    <div className={styles.jobDesc}>
                      <h4>{job.role}</h4>
                      <hr />
                      <p>{job.desc}</p>
                    </div>
                    <div>
                      <button className={styles.btn} onClick={() => handleEditClick(job)}>Edit</button>
                      <button className={styles.btn} onClick={() => handleDeleteJob(job.id)}>Delete</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add Job Section */}
          <div className={styles.addJobSection}>
            <h3>Add Job</h3>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Job Role"
              value={newJob.role}
              onChange={(e) => setNewJob({ ...newJob, role: e.target.value })}
            />
            <input
              className={styles.inputField}
              type="text"
              placeholder="Job Description"
              value={newJob.desc}
              onChange={(e) => setNewJob({ ...newJob, desc: e.target.value })}
            />
            <button className={styles.btn} onClick={handleAddJob}>Add Job</button>
          </div>
        </div>

        <hr />

        <div className={styles.queryContainer}>
          {/* User Queries */}
          <h3>User Queries</h3>
          {queries.map((query, index) => (
            <div key={index} className={styles.queryDesc}>
              <dl key={index}>
                <dt>{query.name} ({query.email})</dt>
                <dd>{query.message}</dd>
              </dl>
              <hr />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default AdminDashboard;
