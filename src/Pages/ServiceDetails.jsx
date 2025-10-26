import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Star, ArrowLeft, Calendar, Clock, Mail, Phone } from 'lucide-react';
import BookServiceForm from '../Components/BookServiceForm ';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const [servicesData, setServicesData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch services data
    React.useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('/services.json');
                const data = await response.json();
                setServicesData(data);
            } catch (error) {
                console.error('Error fetching services:', error);
                toast.error('Failed to load service details');
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    // Find the specific service
    const service = servicesData?.find(s => s.serviceId === parseInt(serviceId));

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#289a0f]"></div>
            </div>
        );
    }

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
                    <button
                        onClick={() => navigate('/services')}
                        className="bg-[#289a0f] text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition"
                    >
                        Back to Services
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="w-11/12 max-w-6xl mx-auto py-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/services')}
                    className="flex items-center gap-2 text-[#289a0f] hover:text-green-700 mb-6 transition"
                >
                    <ArrowLeft className="h-5 w-5" />
                    Back to Services
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Service Details */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Service Image */}
                        <div className="h-80 w-full overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.serviceName}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Service Info */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-2xl font-bold text-gray-900">{service.serviceName}</h1>
                                <span className="bg-[#289a0f] text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {service.category}
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <span className="text-gray-600 font-medium">{service.rating}</span>
                                <span className="text-gray-500">(Excellent)</span>
                            </div>

                            {/* Price */}
                            <div className="text-3xl font-bold text-[#289a0f] mb-4">
                                ${service.price}
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>

                            {/* Provider Info */}
                            <div className="border-t pt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Provider</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#289a0f] rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">
                                                {service.providerName.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{service.providerName}</p>
                                            <p className="text-sm text-gray-600">{service.providerEmail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service Details */}
                            <div className="border-t pt-4 mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Details</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5 text-[#289a0f]" />
                                        <div>
                                            <p className="text-sm text-gray-600">Available Slots</p>
                                            <p className="font-semibold text-gray-900">{service.slotsAvailable}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-[#289a0f]" />
                                        <div>
                                            <p className="text-sm text-gray-600">Service ID</p>
                                            <p className="font-semibold text-gray-900">#{service.serviceId}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Book This Service</h2>
                            <p className="text-gray-600">Fill out the form below to book your appointment</p>
                        </div>

                        <BookServiceForm />

                        {/* Contact Info */}
                        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-[#289a0f]" />
                                    <span className="text-sm text-gray-600">{service.providerEmail}</span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Contact the service provider directly for any questions or special requests.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
