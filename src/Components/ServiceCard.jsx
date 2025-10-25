import React from 'react';
import { Star } from "lucide-react";

const ServiceCard = ({ serviceName, providerName, price, image, rating }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full">

            {/* Image */}
            <div className="h-52 w-full overflow-hidden">
                <img
                    src={image}
                    alt={serviceName}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">

                <h2 className="text-lg font-semibold text-gray-900">
                    {serviceName}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <Star size={18} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-600 text-sm">{rating}</span>
                </div>

                {/* Price */}
                <p className="text-blue-600 font-bold text-base">${price}</p>

                {/* Button */}
                <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
