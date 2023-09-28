import banner from '../assets/black-doctor-call.jpg'

// For motion
import {motion} from 'framer-motion'

// Variants
import {fadeIn} from '../variants'

const Banner = () => {
  return (
    <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        
        {/* Banner image */}
        <motion.div
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.7}}>

          <img src={banner} alt='doctor in a conversation' className='lg:h-[386px] rounded-md'/>
        </motion.div>
        
        {/* Banner content */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.7}}

          className='md:w-3/5'>
          <h2 className='md:text-7xl text-4xl font-bold text-primary mb-6 leading-relaxed'>Consult a doctor anytime, anywhere</h2>
          <p className='text-[#EBEBEB] text-2xl mb-8'>Talk with a doctor using our highly secured end-to-end encrypted video call</p>
          <div className='space-x-2 md:flex md:space-x-5 lg:space-x-5 lg:space-y-4'>
            <button className='btnPrimary'>Call a doctor</button>
            <button className='btnPrimary'>Chat with a doctor</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Banner