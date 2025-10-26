import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router';
import userDefault from "../assets/user.jpg";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateClick = () => {
        navigate('/update-profile');
    };

    return (
        <div className='min-h-screen'>
            <div className="w-11/12 max-w-3xl mx-auto mt-20 mb-10 bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8">My Profile</h2>

                <div className="flex flex-col items-center gap-6">
                    {/* Profile Image */}
                    <img
                        src={user.photoURL || userDefault}
                        alt={user.displayName || "User"}
                        className="w-32 h-32 rounded-full object-cover"
                    />

                    {/* User Info */}
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-gray-900">{user.displayName || "No Name"}</h3>
                        <p className="text-gray-600">{user.email}</p>
                    </div>

                    {/* Update Profile Button */}
                    <button
                        onClick={handleUpdateClick}
                        className="mt-4 px-6 py-2 bg-[#289a0f] text-white rounded-md font-semibold hover:bg-green-700 transition"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
