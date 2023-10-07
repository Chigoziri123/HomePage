import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import TestimonialBox from './TestimonialBox';
import testimonialDetails from '../utils/testimonialDetails';


const TestimonialSection = () => {

    const pagination = {
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };

    return (
        <div
            className='max-w-6xl mx-auto w-[90%] py-14'
        >
            <h2 className='text-center font-semibold text-xl md:text-4xl mb-5 md:mb-10'>Clients' Experiences</h2>
            <Swiper
                rewind= {true}
                spaceBetween={30}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                breakpoints={
                    {
                        200: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }
                }
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
                }}
                pagination={pagination}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    testimonialDetails.map(({role, text, img}, index) => (
                        <SwiperSlide key={index} className='grid sm:grid-cols-2 lg:grid-cols-3 md:w-11/12 m-auto'>
                            <TestimonialBox img={img} name={role} text={text} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default TestimonialSection