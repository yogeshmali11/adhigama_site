import React, { useState } from 'react';
import styles from '../Navbar/navbar.module.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebaseConfig';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = getAuth(app);
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin-login'); // Redirect to login page
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img className={styles.logo} src='src\assets\logo.png' width='170px' alt="Logo" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <Link className={styles.links} to="/about">About</Link>
          <Link className={styles.links} to="/services">Services</Link>
          <Link className={styles.links} to="/products">Products</Link>
          <Link className={styles.links} to="/career">Career</Link>
          <Link className={styles.links} to="/contact">Contact Us</Link>
        </div>
        {
          user ? <button className={styles.logOutBtn} onClick={handleLogout}>Logout</button> : null
        }
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;




// import React from 'react'
// import styles from './navbar.module.css';
// import { Link, Outlet } from 'react-router-dom';

// function Navbar() {
//   return (
//     <>
//       <nav className={styles.navbar}>
//         <div>
//           <Link>
//             <img className={styles.logo} src='src\assets\logo.png' width='170px' />
//           </Link>
//         </div>
//         <div>
//           <Link className={styles.links} to="/about">About</Link> &nbsp;&nbsp;
//           <Link className={styles.links} to='/services'>Services</Link> &nbsp;&nbsp;
//           <Link className={styles.links} to='/products'>Products</Link> &nbsp;&nbsp;
//           <Link className={styles.links} to='/career'>Career</Link> &nbsp;&nbsp;
//           <Link className={styles.links} to='/contact'>Contact Us</Link> &nbsp;&nbsp;
//         </div>
//       </nav>

//       <Outlet />
//     </>
//   )
// }

// export default Navbar;
