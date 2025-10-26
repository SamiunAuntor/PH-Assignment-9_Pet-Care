import React, { useContext, useState } from "react";
import { LogIn } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toastMessage from "../toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../AuthProvider/firebase.config";
import googleIcon from "../assets/google.png";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const LoginPage = () => {
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Email-Password Login Handler
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        try {
            const result = await signIn(email, password);
            const user = result.user;
            const displayName = user.displayName || user.email?.split('@')[0] || 'User';
            toastMessage.success(`Welcome ${displayName}! ✅`);
            // Wait for auth state to update
            await new Promise(resolve => setTimeout(resolve, 100));
            navigate(from, { replace: true });
        } catch (err) {
            let message;
            switch (err.code) {
                default:
                    message = "Login failed. Please try again.";
            }
            toastMessage.error(message);
        }
    };



    // Google Login Handler
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const displayName = user.displayName || user.email?.split('@')[0] || 'User';
            toastMessage.success(`Welcome ${displayName}! ✅`);
            // Wait for auth state to update
            await new Promise(resolve => setTimeout(resolve, 100));
            navigate(from, { replace: true });
        } catch (err) {
            console.error(err);
            toastMessage.error(err.message);
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">

                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                    Login
                </h2>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-gray-800 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>

                    <div>
                        <label className="text-gray-800 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#289a0f] text-white py-2 font-semibold rounded-md hover:bg-green-700 transition-all"
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <span className="flex-1 h-px bg-gray-300"></span>
                    <span className="px-3 text-gray-500">OR</span>
                    <span className="flex-1 h-px bg-gray-300"></span>
                </div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-200 transition-all"
                >
                    <img className="h-5 w-5" src={googleIcon} alt="" />
                    <span className="text-gray-800 font-medium">Continue with Google</span>
                </button>

                <p className="text-sm text-center text-gray-700 mt-4">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-green-700 font-semibold hover:underline">
                        Sign up
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;
