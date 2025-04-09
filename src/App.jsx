import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import OurServices from './Components/Services/OurServices';
import OurProducts from './Components/Products/OurProducts';
import ContactUs from './Components/ContactUs/ContactUs';
import Career from './Components/Career/Career';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import RegisterForm from './Components/RegisterForm/RegisterForm';
import AdminLoginPage from './Admin/Admin Login/AdminLoginPage';
import AdminDashboard from './Admin/Admin Dashboard/AdminDashboard';
import ProtectedRoute from './Admin/ProtectedRoute';


function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Navbar />, children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <AboutUs /> },
        { path: '/services', element: <OurServices /> },
        { path: '/products', element: <OurProducts /> },
        { path: '/contact', element: <ContactUs /> },
        { path: '/career', element: <Career /> },
        { path: '/registerForm', element: <RegisterForm /> },
        { path: '/admin-login', element: <AdminLoginPage /> },
        { path: '/admin-dashboard', element: <ProtectedRoute><AdminDashboard /></ProtectedRoute> }
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;

