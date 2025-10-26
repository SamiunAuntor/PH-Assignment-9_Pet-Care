import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../Components/ServiceCard';
import BookServiceForm from '../Components/BookServiceForm ';

const Services = () => {
    // Get services data from loader
    const servicesData = useLoaderData();

    return (
        <div className="w-11/12 mx-auto mt-25 mb-10">
            <h2 className="text-3xl font-bold text-center mb-8">
                Our Winter Care Services
            </h2>

            {/* Grid with 3 columns on medium screens and above */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Array.isArray(servicesData) && servicesData.map(service => (
                    <ServiceCard
                        key={service.serviceId}
                        serviceId={service.serviceId}
                        serviceName={service.serviceName}
                        providerName={service.providerName}
                        price={service.price}
                        image={service.image}
                        rating={service.rating}
                    />
                ))}
            </div>
            <div>
                <BookServiceForm></BookServiceForm>
            </div>
        </div>
    );
};

export default Services;
