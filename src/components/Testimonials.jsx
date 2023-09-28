import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Testimonials = () => {
  return (
    <div className='container'>
        <h2>Testimonials</h2>
        <p>Read what our satisfied clients have to say about their experiences, 
            and discover how our healthcare services have made a positive impact on their lives.
        </p>
        <Swiper
        effect=''></Swiper>
    </div>
  )
}

export default Testimonials