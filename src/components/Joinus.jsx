import React from 'react'
import purple1 from '../assets/purple-number-1.jpg'
import purple2 from '../assets/purple-number-2.jpg'
import purple3 from '../assets/number-3-purple.jpg'

// For motion
import {motion} from 'framer-motion'

// Variants
import {fadeIn} from '../variants'

const Joinus = () => {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
            <motion.div 
                 variants={fadeIn('right', 0.2)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once:false, amount: 0.7}}
            
                className='lg:w-1/4'>
                <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>Join Us Today</h3>
                <p className='text-base text-tertiary'>Here are three simple and quick steps to becoming a member of the E-Medic family.</p>
            </motion.div>

            {/* Join Us Today cards */}
            <div 
                 variants={fadeIn('up', 0.3)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once:false, amount: 0.7}}
            
                className='w-full lg:w-3/4'>
               <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div>
                            <img src={purple1} className='h-20 w-20' alt='number 1 in purple color'/>
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Register on the website by providing necessary information.</h5>
                        </div>
                    </div> 

                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                        <div>
                            <img src={purple2} className='h-20 w-20' alt='number 2 in purple color'/>
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Click on the link sent to your email to verify your account.</h5>
                        </div>
                    </div>
                    
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div>
                            <img src={purple3} className='h-20 w-20' alt='number 3 in purple color'/>
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Log in to your account to enjoy our amazing services!</h5>
                        </div> 
                    </div>
               </div>  
            </div>
        </div>
    </div>
  )
}

export default Joinus