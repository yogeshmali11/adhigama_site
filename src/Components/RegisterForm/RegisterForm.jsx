import React, { useState } from 'react';
import styles from '../RegisterForm/registerForm.module.css';
import { Container, Heading } from '../../styledComponents';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function RegisterForm() {
    const location = useLocation();
    const job = location.state?.job;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        college: "",
        branch: "",
        phone: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // the date is formatted using the moment package..
        const formattedDate = moment().format("DD-MM-YYYY hh:mm a");

        try {
            await addDoc(collection(db, "jobApplications"), {
                ...formData,
                jobRole: job?.role || "Not specified",
                timestamp: formattedDate
            });

            console.log("Data successfully added to Firestore!");
            alert("Application submitted successfully!");

            setFormData({
                name: "",
                email: "",
                college: "",
                branch: "",
                phone: ""
            })

            navigate(-1);

        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error submitting application. Try again.");
        }
    };

    return (
        <Container className={styles.mainContainer}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="jobRole" className="form-label">Job Role</label>
                        <input type="text" value={job?.role || ""} className="form-control" id="jobRole" disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="college" className="form-label">College Name</label>
                        <input type="text" className="form-control" id="college" name="college" value={formData.college} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="branch" className="form-label">Education Field</label>
                        <input type="text" className="form-control" id="branch" name="branch" value={formData.branch} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Apply for Role</button>
                </form>
            </div>
        </Container>
    );
}

export default RegisterForm;
