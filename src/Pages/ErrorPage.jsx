import React from "react";
import { useNavigate, Link } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
            <h1 className="text-9xl font-extrabold text-red-600 tracking-widest">404</h1>

            <div className="bg-red-600 px-2 text-sm rounded rotate-12 text-white mt-4">
                Page Not Found
            </div>

            <p className="mt-6 text-gray-700 text-lg max-w-md">
                Oops! The page you're looking for doesn’t exist or has been moved.
            </p>

            <div className="mt-8 flex gap-4">
                {/* Go back to previous page */}
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all"
                >
                    Go Back
                </button>

                {/* Go to homepage */}
                <Link
                    to="/"
                    className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-400 transition-all"
                >
                    Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
