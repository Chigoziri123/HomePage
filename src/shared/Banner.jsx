import banner from '../assets/black-doctor-call.jpg'
import { useTranslation } from 'react-i18next'

// For motion
import {motion} from 'framer-motion'

// Variants
import {fadeIn} from '../variants'

const Banner = () => {
  const { t } = useTranslation()
  return (
    <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        
        {/* Banner image */}
        <motion.div
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.7}}>
          {/* Fix image aspec ratio on bigger screen */}
          <img
            src={banner}
            alt='doctor in a conversation'
            className='lg:h-[386px] rounded-md md:aspect-[2/1]'
          />
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

          {/* Fix button size and responsiveness */}
          <div
            className='flex flex-col items-start xs:flex-row xs:items-center xs:w-full gap-4 w-48   md:space-x-5 text-sm'
          >
            <button className='btnPrimary'>Call a doctor</button>
            <button className='btnPrimary lg:m-8'>Chat with a doctor</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Banner

