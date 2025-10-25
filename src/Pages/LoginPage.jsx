import React from "react";
import { LogIn } from "lucide-react";
import { Link } from "react-router";

const LoginPage = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                    Login
                </h2>

                {/* Form */}
                <form className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="text-gray-800 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 focus:border-transparent border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-gray-800 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 focus:border-transparent mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <button type="button" className="text-sm text-green-700 hover:underline">
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#289a0f] text-white py-2 font-semibold rounded-md hover:bg-green-700 transition-all"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <span className="flex-1 h-px bg-gray-300"></span>
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <span className="flex-1 h-px bg-gray-300"></span>
                </div>

                {/* Google Login Alternative*/}
                <button
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-200 transition-all"
                >
                    <LogIn size={22} />
                    <span className="text-gray-800 font-medium">Continue with Google</span>
                </button>

                {/* Signup Link */}
                <p className="text-sm text-center text-gray-700 mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-green-700 font-semibold hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
