import React, { useState } from 'react';
import bannerImg from "../assets/banner-img-2.png";
import diamond from "../assets/diamond.png";
import discount from "../assets/discount.png";
import coins from "../assets/coins.png";
import shield from "../assets/shield-check.png";
import message from "../assets/message-circle.png";
import toastMessage from '../toast';

const Banner = () => {
    const [email, setEmail] = useState('');

    // Click handler function
    const handleSupportClick = () => {
        // Show toast
        toastMessage.success(`Thanks for your interest! We will contact you very soon!`);
        // Clear email field
        setEmail('');
    };

    return (
        <div className="w-full mx-auto mt-32 mb-16">

            {/* Image part */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-xl">
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="w-full h-full object-cover object-top"
                />

                {/* Left-aligned content */}
                <div className="absolute left-4 sm:left-8 md:left-16 top-16 sm:top-24 md:top-36 text-left text-gray-900 space-y-4 sm:space-y-5 md:space-y-6 max-w-xs sm:max-w-md md:max-w-lg w-1/2 sm:w-2/3 md:w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold">
                        Where Your Pet Feels at Home!
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg font-medium">
                        Loving & Reliable Pet Care Tailored to Your Furry Friend
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-3 py-2 sm:px-4 sm:py-2 rounded-md border border-gray-300 outline-none w-full sm:w-64 bg-white text-gray-900 text-sm sm:text-base"
                        />
                        <button
                            onClick={handleSupportClick}
                            className="bg-[#289a0f] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md sm:rounded-r-md font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base">
                            Get Support
                        </button>
                    </div>
                </div>
            </div>

            {/* Info tube below image */}
            <div className="w-full bg-gray-200 py-6 px-4 sm:px-8 mt-6 rounded-lg flex flex-col md:flex-row justify-between gap-6 md:gap-0">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center space-y-1">
                    <img src={diamond} alt="diamond" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Trusted Pet Care</span>
                    <span className="text-xs sm:text-sm text-gray-500">Certified caregivers</span>
                </div>
                {/* Item 2 */}
                <div className="flex flex-col items-center text-center space-y-1">
                    <img src={discount} alt="discount" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Tailored Services</span>
                    <span className="text-xs sm:text-sm text-gray-500">Custom care plans</span>
                </div>
                {/* Item 3 */}
                <div className="flex flex-col items-center text-center space-y-1">
                    <img src={shield} alt="shield" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Real-time Updates</span>
                    <span className="text-xs sm:text-sm text-gray-500">Stay connected</span>
                </div>
                {/* Item 4 */}
                <div className="flex flex-col items-center text-center space-y-1">
                    <img src={coins} alt="coins" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Affordable Pricing</span>
                    <span className="text-xs sm:text-sm text-gray-500">Transparent rates</span>
                </div>
                {/* Item 5 */}
                <div className="flex flex-col items-center text-center space-y-1">
                    <img src={message} alt="message" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">24/7 Support</span>
                    <span className="text-xs sm:text-sm text-gray-500">Available anytime for emergency</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
