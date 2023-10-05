import React from 'react'
import { FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () =>{
return (
    <div className='bg-primary md:px-14 p-2 mt-12 max-w-screen-2xl mx-auto text-white'>
        <div className='my-12 flex flex-col md:flex-row gap-5'>
            <div className='md:w-1/3 space-y-8'>
                <a href='/' className='text-2xl font-semibold text-white space-x-3 text-primary'>E - Medic</a>
                <div className='flex items-center space-x-5'>
                    <FiFacebook alt='facebook logo' className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300'/>
                    <FiLinkedin alt='linkedIn logo' className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300'/>
                    <FiInstagram alt='instagram logo' className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300'/>
                    <FaXTwitter alt='X logo' className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300'/>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className='md:w-2/3 flex flex-col md:flex-row justify-between gap-6 items-start'>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl text-secondary'>Company</h4>
                    <ul className='space-y-3'> 
                        <a href='' className='block hover:text-gray-300'>About Us</a>
                        <a href='' className='block hover:text-gray-300'>For Business</a>
                        <a href='' className='block hover:text-gray-300'>Careers</a>
                        <a href='' className='block hover:text-gray-300'>Support</a>
                    </ul>
                </div>

                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl text-secondary'>Products</h4>
                    <ul className='space-y-3'> 
                        <a href='' className='block hover:text-gray-300'>Consultations</a>
                        <a href='' className='block hover:text-gray-300'>Diagnostics</a>
                        <a href='' className='block hover:text-gray-300'>Prescription</a>
                    </ul>
                </div>

                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl text-secondary'>Resources</h4>
                    <ul className='space-y-3'> 
                        <a href='' className='block hover:text-gray-300'>FAQs</a>
                        <a href='' className='block hover:text-gray-300'>Blog</a>
                        <a href='' className='block hover:text-gray-300'>Press</a>
                        <a href='' className='block hover:text-gray-300'>Status</a>
                    </ul>
                </div>

                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl text-secondary'>Legal</h4>
                    <ul className='space-y-3'> 
                        <a href='' className='block hover:text-gray-300'>Terms of Use</a>
                        <a href='' className='block hover:text-gray-300'>Privacy Policy</a>
                        <a href='' className='block hover:text-gray-300'>Cookie Policy</a>
                    </ul>
                </div>

                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl text-secondary '>Contact Us</h4>
                    <ul className='space-y-3'> 
                        <p className='block hover:text-gray-300'>3/6 Alh. Adejumo St. Ilupeju, Lagos, Nigeria</p>
                        <p className='block hover:text-gray-300'>Tel: +2349012658112</p>
                        <p className='block hover:text-gray-300'>Email: contact@emedic.com</p>
                    </ul>
                </div>
            </div>
        </div>

        <hr />

        <div>
            <p>@2023. All rights reserved</p>
        </div>
    </div>
)
}

export default Footer