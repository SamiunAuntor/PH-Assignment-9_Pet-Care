import React, { useRef, useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import ServiceCard from '../Components/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Marquee from "react-fast-marquee";
import { ArrowLeft, ArrowRight, Shield, Heart, Clock, Award } from 'lucide-react';
import ExpertVets from '../Components/ExpertVets';

const HomePage = () => {
    // Load data
    const servicesData = useLoaderData();

    // References for custom navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // State to hold the Swiper instance
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            // Assign the custom elements to Swiper's navigation parameters
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;

            // Re-initialize and update navigation
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    // Render the component structure
    return (
        <div className="w-11/12 mx-auto my-10">
            <Banner />

            <div className="winter-care-tips">
                {/* Winter Care Tips Marquee */}
                <div className="mt-6 bg-[#e0f7ec] py-3 px-3 rounded-md shadow-sm border border-green-300">
                    <Marquee pauseOnHover={true} speed={40} gradient={false}>
                        ❄️ Winter Care Tips for Pets — Keep Them Warm 💖 • Hydrate Regularly 💧 •
                        Protect Paws from Cold Surfaces 🐾 • Avoid Extreme Outdoor Chill 🌨️ •
                        Ensure Proper Nutrition for Energy 🍖 • Regular Health Checkups 🩺 ❄️
                    </Marquee>
                </div>

            </div>

            <div className="my-12">
                <h2 className="text-3xl font-bold text-center mb-8">Popular Winter Care Services</h2>

                <Swiper
                    // Pass the Navigation module
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    // Responsive breakpoints for multiple cards
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    onSwiper={setSwiperInstance}
                >
                    {Array.isArray(servicesData) && servicesData.map((service) => (
                        <SwiperSlide key={service.serviceId}>
                            <ServiceCard
                                serviceId={service.serviceId}
                                serviceName={service.serviceName}
                                providerName={service.providerName}
                                price={service.price}
                                image={service.image}
                                rating={service.rating}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center mt-4 gap-4">
                <button
                    ref={prevRef}
                    className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors shadow-md"
                    aria-label="Previous Slide"
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    ref={nextRef}
                    className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors shadow-md"
                    aria-label="Next Slide"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
            <div className="expert-vets">
                <ExpertVets></ExpertVets>
            </div>

            {/* Why Choose Us Section */}
            <div className="my-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Pet Care?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We're committed to providing the best care for your beloved pets with professional services and genuine love.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Professional Care */}
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-[#289a0f] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Care</h3>
                        <p className="text-gray-600">
                            Certified professionals with years of experience in pet care and grooming services.
                        </p>
                    </div>

                    {/* Loving Service */}
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-[#289a0f] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Loving Service</h3>
                        <p className="text-gray-600">
                            We treat every pet with love, care, and respect as if they were our own family members.
                        </p>
                    </div>

                    {/* Flexible Scheduling */}
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-[#289a0f] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                        <p className="text-gray-600">
                            Book appointments that fit your schedule with our convenient online booking system.
                        </p>
                    </div>

                    {/* Quality Guarantee */}
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-[#289a0f] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Award className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                        <p className="text-gray-600">
                            100% satisfaction guarantee on all our services with premium quality care standards.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;