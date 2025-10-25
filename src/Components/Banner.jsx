import React from 'react';
import bannerImg from "../assets/banner-img-2.png";
import diamond from "../assets/diamond.png";
import discount from "../assets/discount.png";
import coins from "../assets/coins.png";
import shield from "../assets/shield-check.png";
import message from "../assets/message-circle.png";

const Banner = () => {
    return (
        <div className="w-11/12 mx-auto mt-32 mb-16"> {/* main container */}

            {/* Image part */}
            < div className="relative w-full h-[600px] overflow-hidden rounded-xl">
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="w-full h-full object-cover object-top"
                />

                {/* Left-aligned content */}
                <div className="absolute left-16 top-36 text-left text-gray-900 space-y-6 max-w-lg">
                    <h1 className="text-6xl font-bold">Where Your Pet Feels at Home!</h1>
                    <p className="text-lg font-medium">Loving & Reliable Pet Care Tailored to Your Furry Friend</p>

                    <div className="flex mt-6">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 rounded-l-md border border-gray-300 outline-none w-64 bg-white text-gray-900"
                        />
                        <button className="bg-[#289a0f] text-white px-6 py-2 rounded-r-md font-semibold hover:bg-green-700 transition-colors">
                            Get Support
                        </button>
                    </div>
                </div>
            </div>



            {/* Below Image */}
            <div className="w-full bg-gray-200 py-8 px-8 flex justify-between mt-8 rounded-lg">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center space-y-1">
                    <img src={diamond} alt="diamond" className="w-8 h-8" />
                    <span className="font-semibold text-gray-900">Trusted Pet Care</span>
                    <span className="text-sm text-gray-500">Certified caregivers</span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center text-center space-y-1">
                    <img src={discount} alt="discount" className="w-8 h-8" />
                    <span className="font-semibold text-gray-900">Tailored Services</span>
                    <span className="text-sm text-gray-500">Custom care plans</span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center text-center space-y-1">
                    <img src={shield} alt="shield" className="w-8 h-8" />
                    <span className="font-semibold text-gray-900">Real-time Updates</span>
                    <span className="text-sm text-gray-500">Stay connected</span>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center text-center space-y-1">
                    <img src={coins} alt="coins" className="w-8 h-8" />
                    <span className="font-semibold text-gray-900">Affordable Pricing</span>
                    <span className="text-sm text-gray-500">Transparent rates</span>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col items-center text-center space-y-1">
                    <img src={message} alt="message" className="w-8 h-8" />
                    <span className="font-semibold text-gray-900">24/7 Support</span>
                    <span className="text-sm text-gray-500">Available anytime for emergency</span>
                </div>
            </div>

        </div >
    );
};

export default Banner;
