import React from 'react';
import VetsCard from './VetsCard';

// Fake static data for vets
const vetsData = [
    {
        id: 1,
        name: "Dr. Samantha Grey",
        degree: "DVM, Veterinary Surgery",
        experience: 8,
        bio: "Specializes in small animal surgery and preventive care.",
        image: "https://i.ibb.co.com/PGxs6XJF/d-3.jpg"
    },
    {
        id: 2,
        name: "Dr. Michael Carter",
        degree: "DVM, Animal Nutrition",
        experience: 10,
        bio: "Expert in pet nutrition and wellness programs.",
        image: "https://i.ibb.co.com/fV6L3kmm/d-4.png"
    },
    {
        id: 3,
        name: "Dr. Emily Wong",
        degree: "DVM, Veterinary Dentistry",
        experience: 6,
        bio: "Focused on dental care and oral health for pets.",
        image: "https://i.ibb.co.com/67Xs14k2/d-1.jpg"
    },
    {
        id: 4,
        name: "Dr. Kether Lee",
        degree: "DVM, Exotic Animals",
        experience: 7,
        bio: "Experienced in exotic pets and wildlife rehabilitation.",
        image: "https://i.ibb.co.com/7JdjXckb/d-2.jpg"
    }
];

const ExpertVets = () => {
    return (
        <div className="w-full mx-auto mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
                Meet Our Expert Vets
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {vetsData.map((vet) => (
                    <VetsCard key={vet.id} vet={vet} />
                ))}
            </div>
        </div>
    );
};

export default ExpertVets;
