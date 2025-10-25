import React from "react";
import { LogIn } from "lucide-react";
import { Link } from "react-router";

const SignUp = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4 pt-20">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                    Create an Account
                </h2>

                {/* Form */}
                <form className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="text-gray-800 font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 mt-1 rounded-md outline-none
                            border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-green-600"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-gray-800 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 rounded-md outline-none
                            border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-green-600"
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="text-gray-800 font-medium">Photo URL</label>
                        <input
                            type="text"
                            placeholder="Upload or paste image URL"
                            className="w-full px-4 py-2 mt-1 rounded-md outline-none
                            border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-green-600"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-gray-800 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter a strong password"
                            className="w-full px-4 py-2 mt-1 rounded-md outline-none
                            border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-green-600"
                        />
                        <p className="text-xs text-red-600 mt-1 hidden">
                            Password must contain uppercase, lowercase and be at least 6 characters.
                        </p>
                    </div>

                    {/* Register Button */}
                    <button
                        type="button"
                        className="w-full bg-[#289a0f] text-white py-2 font-semibold rounded-md hover:bg-green-700 transition-all"
                    >
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <span className="flex-1 h-px bg-gray-300"></span>
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <span className="flex-1 h-px bg-gray-300"></span>
                </div>

                {/* Google Sign In Button */}
                <button
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-200 transition-all"
                >
                    <LogIn size={22} />
                    <span className="text-gray-800 font-medium">Continue with Google</span>
                </button>

                {/* Login Link */}
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
