import React from 'react';
import user from "../assets/user.jpg";

const MyProfile = () => {
    // Static user data
    const userData = {
        name: "Samiun Alim Auntor",
        email: "samiun@example.com",
        image: user,
    };

    return (
        <div className="w-11/12 max-w-3xl mx-auto mt-20 mb-10 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">My Profile</h2>

            <div className="flex flex-col items-center gap-6">
                {/* Profile Image */}
                <img
                    src={userData.image}
                    alt={userData.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#289a0f]"
                />

                {/* User Info */}
                <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-900">{userData.name}</h3>
                    <p className="text-gray-600">{userData.email}</p>
                </div>

                {/* Update Profile Button */}
                <button
                    className="mt-4 px-6 py-2 bg-[#289a0f] text-white rounded-md font-semibold hover:bg-green-700 transition"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default MyProfile;
