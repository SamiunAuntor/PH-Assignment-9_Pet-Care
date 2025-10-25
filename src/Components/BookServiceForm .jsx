import React, { useState } from 'react';
import toastMessage from '../toast';

const BookServiceForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        toastMessage.success('Service booked successfully! We will contact you soon.');

        setName('');
        setEmail('');
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Book Service</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none border-0 focus:ring-2 focus:ring-[#289a0f]"
                    required
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 border-0 focus:ring-[#289a0f]"
                    required
                />

                <button
                    type="submit"
                    className="bg-[#289a0f] text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default BookServiceForm;
