import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Eye, EyeOff, Mail } from 'lucide-react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    // Get email from login page if passed
    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await resetPassword(email);
            toast.success('Password reset email sent! Redirecting to Gmail...');
            
            // Redirect to Gmail after a short delay
            setTimeout(() => {
                window.open('https://mail.google.com', '_blank');
                navigate('/login');
            }, 2000);
            
        } catch (error) {
            console.error('Error sending reset email:', error);
            let errorMessage = 'Failed to send reset email. Please try again.';
            
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email address.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Please enter a valid email address.';
            }
            
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleBackToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-[#289a0f]">
                        <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Forgot Password
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
                </div>
                
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#289a0f] focus:border-[#289a0f] focus:z-10 sm:text-sm"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#289a0f] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#289a0f] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                    </div>

                    <div className="text-center">
                        <button
                            type="button"
                            onClick={handleBackToLogin}
                            className="text-sm text-[#289a0f] hover:text-green-700 font-medium"
                        >
                            Back to Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
