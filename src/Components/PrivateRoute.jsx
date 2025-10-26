import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // Show loading spinner while checking authentication
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#289a0f]"></div>
            </div>
        );
    }

    // If user is not logged in, redirect to login page
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If user is logged in, render the protected component
    return children;
};

export default PrivateRoute;
