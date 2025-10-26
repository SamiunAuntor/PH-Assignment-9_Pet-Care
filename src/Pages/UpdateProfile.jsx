import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        displayName: user?.displayName || '',
        photoURL: user?.photoURL || ''
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await updateUserProfile(formData.displayName, formData.photoURL);
            toast.success('Profile updated successfully!');
            navigate('/profile');
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Failed to update profile. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        navigate('/profile');
    };

    return (
        <div className='min-h-screen'>
            <div className="w-11/12 max-w-2xl mx-auto mt-20 mb-10 bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8">Update Profile</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
                            Display Name
                        </label>
                        <input
                            type="text"
                            id="displayName"
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#289a0f] focus:border-transparent text-lg"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-2">
                            Profile Image URL
                        </label>
                        <input
                            type="url"
                            id="photoURL"
                            name="photoURL"
                            value={formData.photoURL}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#289a0f] focus:border-transparent text-lg"
                            placeholder="Enter image URL"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                            Leave empty to keep current image. You can use any image URL from the internet.
                        </p>
                    </div>

                    {/* Preview Section */}
                    {formData.photoURL && (
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold mb-3">Preview</h3>
                            <div className="flex items-center gap-4">
                                <img
                                    src={formData.photoURL}
                                    alt="Profile preview"
                                    className="w-20 h-20 rounded-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <div>
                                    <p className="text-lg font-semibold">{formData.displayName || 'No Name'}</p>
                                    <p className="text-gray-600">{user?.email}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex gap-4 pt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-[#289a0f] text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                        >
                            {loading ? 'Updating...' : 'Update Profile'}
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            disabled={loading}
                            className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-600 transition disabled:opacity-50 text-lg"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
