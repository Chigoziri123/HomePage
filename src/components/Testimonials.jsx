import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import image_1 from "../assets/client-1.jpeg"
import image_2 from "../assets/client-2.jpeg"
import image_3 from "../assets/satisfied workers.jpg"
import image_4 from "../assets/satisfied-young-man.jpeg"
import image_5 from "../assets/elderly-couple.jpeg"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className=''> 
      <div className='text-center py-10'>
        <h2 className='text-primary'>Testimonials</h2>
        <h5 className='text-4xl mx-20 leading-normal font-bold mb-12'>Read what our satisfied clients have to say about their experiences.
        </h5>
      </div>
      <Swiper
      effect={ 'coverflow' }
      grabCursor={ true }
      centeredSlides={ true }
      loop={ true }
      slidesPerView={ 'auto' }
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
        pagination={{el:'.swiper-pagination',clickable:true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper-container'
      >

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 md:w-11/12 m-auto'>
        <SwiperSlide>
          <div className='bg-teal-300 p-8 rounded-xl'>
            <div className='flex items-center justify-center'>
            <img src={image_2} className='h-96 w-56'alt='a man in a black top'/>
            </div>
            <h4 className='uppercase text-xl font-thin text-center text-primary'>Lazarus Nathan</h4>
            <p className='text-sm leading-7 my-3 text-black font-light text-center lg:mx-44'>"I can't thank eMedic enough for their prompt and reliable services. 
            As a young professional, I needed quick access to healthcare information and advice. The eMedic website made it easy for me to find the right resources
             and even schedule virtual appointments with doctors. It's a game-changer for busy individuals like me!"</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-teal-300 p-8 rounded-xl'>
           <div className='flex items-center justify-center'>
            <img src={image_3} className='h-96 w-56' alt='company staff'/> 
           </div>
            <h4 className='uppercase text-xl font-thin text-center text-primary'>Albatross Logistics PLC</h4>
            <p className='text-sm leading-7 my-3 text-black font-light text-center lg:mx-44'>"At Albatross Company, we care about our employees' well-being. 
            We partnered with eMedic to provide our team with access to valuable health resources. The eMedic website has been a valuable tool for 
            our staff to stay informed and healthy. The group wellness programs have been a hit! Thank you, eMedic, for helping us prioritize health at work."</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-teal-300 p-8 rounded-xl'>
              <div className='flex items-center justify-center'>
                <img src={image_5} className='h-96 w-56' alt='an elderly couple'/>
              </div>
              <h4 className='uppercase text-xl font-thin text-center text-primary'> Alice and Thomas Chukwuma</h4>
              <p className='text-sm leading-7 my-3 text-black font-light text-center lg:mx-44'>"As retirees, staying healthy is our top priority.
               eMedic has been a trustworthy source of health information tailored for seniors like us. We appreciate the detailed articles
                and easy navigation. The virtual check-ins with healthcare providers have been a blessing. eMedic truly understands the needs 
                of older adults."</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-teal-300 p-8 rounded-xl'>
            <div className='flex items-center justify-center'>
              <img src={image_4} className='h-96 w-56' alt='a young man'/>
            </div>
            <h4 className='uppercase text-xl font-thin text-center text-primary'>David Johnson</h4>
            <p className='text-sm leading-7 my-3 text-black font-light text-center lg:mx-44'>"I had some health concerns and didn't know where to turn. eMedic was a lifesaver! 
            Their website is user-friendly, and I found valuable articles and guidance about my condition. The option to chat with medical 
            professionals online gave me peace of mind. Thank you, eMedic!"</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-teal-300 p-8 rounded-xl'>
              <div className='flex items-center justify-center'>
                <img src={image_1} className='h-96 w-56' alt='a happy woman'/>  
              </div>
              <h4 className='uppercase text-xl font-thin text-center text-primary'>Aisha Habib</h4>
              <p className='text-sm leading-7 my-3 text-black font-light text-center lg:mx-44'>"As a busy mom, taking care of my family's health 
              is my top concern. eMedic has made it so much easier to manage our healthcare needs. From finding local healthcare providers 
              to accessing reliable parenting advice, the eMedic website has been my go-to resource. It's a lifesaver for moms like me who 
              juggle multiple responsibilities."</p>
            </div>
        </SwiperSlide>
      </div>

        {/* Navigation Panel */}
      <div className='slider-controller'>
        <div className='swiper-button-prev slider-arrow'>
          <ion-icon className='arrow-back-outline'></ion-icon>
        </div>

        <div className='swiper-button-next slider-arrow'>
          <ion-icon className='arrow-forward-outline'></ion-icon>
        </div>

        <div className='swiper-pagination'></div>
      </div>
      </Swiper>
        
    </div>
  )
}

export default Testimonials