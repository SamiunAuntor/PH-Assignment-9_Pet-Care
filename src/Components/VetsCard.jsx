import React from 'react';

const VetsCard = ({ vet }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto">
            {/* Image */}
            <div className="h-60 w-full overflow-hidden">
                <img
                    src={vet.image}
                    alt={vet.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Card content */}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-gray-900">{vet.name}</h3>
                <p className="text-gray-600 font-medium">{vet.degree}</p>
                <p className="text-gray-500 text-sm">Experience: {vet.experience} years</p>
                <p className="text-gray-600 text-sm">{vet.bio}</p>
            </div>
        </div>
    );
};

export default VetsCard;
