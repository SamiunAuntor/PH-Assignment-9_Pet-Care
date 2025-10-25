import React, { useRef, useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import ServiceCard from '../Components/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { ArrowLeft, ArrowRight } from 'lucide-react';
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
                                serviceName={service.serviceName}
                                providerName={service.providerName}
                                price={service.price}
                                image={service.image}
                                rating={service.rating}
                                service={service}
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

        </div>
    );
};

export default HomePage;