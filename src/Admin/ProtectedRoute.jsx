import { getAuth } from 'firebase/auth';
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const auth = getAuth();
    const user = auth.currentUser; // Check if user is logged in

    return user ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
