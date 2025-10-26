import React, { useContext, useState } from "react";
import { LogIn } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile, GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import toastMessage from "../toast";
import app from "../AuthProvider/firebase.config";
import googleIcon from "../assets/google.png";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [errorMessage, setErrorMessage] = useState("");

    // Password validation function
    const validatePassword = (password) => {
        if (!password) return "";

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;

        if (!hasMinLength) {
            return "Password must be at least 6 characters long.";
        }
        if (!hasUpperCase) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!hasLowerCase) {
            return "Password must contain at least one lowercase letter.";
        }
        return "";
    };

    // Email-Password Signup Handler
    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        // Password validation
        const passwordError = validatePassword(password);
        if (passwordError) {
            setErrorMessage(passwordError);
            toastMessage.error(passwordError);
            return;
        }

        try {
            const result = await signUp(email, password);
            const user = result.user;

            await updateProfile(user, { displayName: name, photoURL: photo });

            toastMessage.success(`Welcome ${name}! ✅`);
            e.target.reset();
            navigate("/");
        } catch (err) {
            let message;
            switch (err.code) {
                case "auth/email-already-in-use":
                    message = "This email is already registered. Try logging in instead.";
                    break;
                case "auth/invalid-email":
                    message = "Please enter a valid email address.";
                    break;
                default:
                    message = "Signup failed. Please try again.";
            }
            setErrorMessage(message);
            toastMessage.error(message);
        }
    };



    // Google Signup  Handler
    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const displayName = user.displayName || user.email?.split('@')[0] || 'User';

            toastMessage.success(`Welcome ${displayName}! ✅`);
            navigate(from, { replace: true });
        } catch (err) {
            console.error(err);
            toastMessage.error(err.message); 
        }
    };



    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4 pt-20">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">

                <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
                    Create an Account
                </h2>

                <form onSubmit={handleSignUp} className="space-y-4">

                    <div>
                        <label className="text-gray-800 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300
                            focus:ring-2 focus:ring-green-600 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-800 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300
                            focus:ring-2 focus:ring-green-600 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-800 font-medium">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Profile image url"
                            className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300
                            focus:ring-2 focus:ring-green-600 outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-gray-800 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter a strong password"
                            className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300
                            focus:ring-2 focus:ring-green-600 outline-none"
                            required
                            onChange={(e) => {
                                if (e.target.value) {
                                    const passwordError = validatePassword(e.target.value);
                                    setErrorMessage(passwordError);
                                } else {
                                    setErrorMessage("");
                                }
                            }}
                        />
                        {errorMessage && (
                            <p className="text-xs text-red-600 mt-1">{errorMessage}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#289a0f] text-white py-2 font-semibold rounded-md
                        hover:bg-green-700 transition-all"
                    >
                        Register
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <span className="flex-1 h-px bg-gray-300"></span>
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <span className="flex-1 h-px bg-gray-300"></span>
                </div>

                {/* Google Signup Button*/}
                <button
                    onClick={handleGoogleSignup}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-200 transition-all"
                >
                    <img className="h-5 w-5" src={googleIcon} alt="" />
                    <span className="text-gray-800 font-medium">Continue with Google</span>
                </button>

                <p className="text-sm text-center text-gray-700 mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-700 font-semibold hover:underline">
                        Log in
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default SignUp;
