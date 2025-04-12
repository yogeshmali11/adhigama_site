import React, { useState } from 'react'
import styles from '../AdminLogin/adminLoginPage.module.css';
import { Container, Heading } from '../../styledComponents';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebaseConfig';
import { Helmet } from 'react-helmet-async';

function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const auth = getAuth(app);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/admin-dashboard");
        } catch (error) {
            setError("Invalid email or password");
        }
    }
    return (
        <>
            <Helmet>
                <title>Admin Login | Adhigama Tech</title>
                <meta name="description" content="Secure Admin Login page for Adhigama Tech. Login to manage jobs and queries." />
                <meta name="keywords" content="admin login, secure login, Adhigama Tech, manage jobs, admin access" />
                <meta property="og:title" content="Admin Login | Adhigama Tech" />
                <meta property="og:description" content="Secure Admin Login page for Adhigama Tech. Login to manage jobs and queries." />
                <meta property="og:url" content="https://adhigama.in/admin-login" />
            </Helmet>
            <Container className={styles.bgContainer}>
                <Heading>
                    <h3>Admin Login</h3>
                </Heading>
                <div className={styles.errorDiv}>
                    {error && <p className="error">{error}</p>}
                </div>
                <div className={styles.formContainer}>
                    <form onSubmit={handleLogin}>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required placeholder='Enter your email' />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your password' required />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default AdminLoginPage;
