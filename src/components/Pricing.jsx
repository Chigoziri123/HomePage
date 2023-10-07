import {useState} from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'



const Pricing = () =>{

    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {name: "Starter Plan", monthlyPrice: "N1,000", yearlyPrice: "N10,000", description: "Access to all general practitioners monthly.",tick : <IoIosCheckmarkCircle /> },
        {name: "Advanced Plan", monthlyPrice: "N3,000", yearlyPrice: "N30,000", description: "Access to cardiologists and other specialist doctors monthly.", tick : <IoIosCheckmarkCircle />},
        {name: "Premium Plan", monthlyPrice: "Negotiable", yearlyPrice: "Negotiable", description: "Full access for all members of your HMO.", tick : <IoIosCheckmarkCircle/>}
    ]
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto mx-4 py-10 my-16 bg-teal-50 rounded-br-[80px] rounded-tl-[80px]' id='pricing'>
        <div className='text-center'>
            <h2 className='md:text-5xl text-3xl font-extrabold text-primary mb-2'>Choose a plan that works well for you.</h2>
            <p className='text-tertiary md:w-1/3 mx-auto px-4'>Select a pricing plan that aligns perfectly with your needs and budget, ensuring you get the best value for your healthcare journey.</p>
        
            {/* Toggle Button */}
            <div className='mt-12'>
                <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
                    <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                    <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                        <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                    </div>
                    <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                </label>
                <input type='checkbox' id='toggle' className='hidden' checked={isYearly} onChange={() => setIsYearly(!isYearly)}/>
                
            </div>
            
        </div>
        {/* Pricing Cards */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:w-11/12 m-auto'>
            {
                packages.map((pkg, index) => <div key={index} className='border border-gray-400 py-10 md:px-6 px-4'>
                    <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                    <p className='text-tertiary text-center my-5'>{pkg.description}</p>
                    <p className='mt-5 text-center text-secondary text-4xl font-bold'>{isYearly ? `${pkg.yearlyPrice}` : `${pkg.monthlyPrice}`}
                    <span className='text-base text-tertiary font-medium'>/{isYearly ? 'year' : 'month'}</span></p>
                    <ul className='mt-4 space-y-2 px-4'>
                        <li className='flex gap-3 items-center'>{pkg.tick} Unlimited Consultations</li>
                        <li className='flex gap-3 items-center'>{pkg.tick} Audio, Chat and video calls</li>
                        <li className='flex gap-3 items-center'>{pkg.tick} Access to Laboratories</li>
                        <li className='flex gap-3 items-center'>{pkg.tick} Get Prescriptions</li>
                    </ul>
                    <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                       <button className='btnPrimary'>Get Started</button> 
                    </div>
                </div>)
            }
        </div>
    </div> 
  )
}

export default Pricing
