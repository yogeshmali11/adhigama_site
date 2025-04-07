import React, { useState } from 'react'
import styles from '../Admin Login/AdminLoginPage.module.css'
import { Container, Heading } from '../../styledComponents';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebaseConfig';

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
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your password' required  />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default AdminLoginPage;
