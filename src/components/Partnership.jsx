// import React from 'react'
// import partnership from '../assets/partnership.jpg'
// import { useTranslation } from 'react-i18next'

// // For motion
// import {motion} from 'framer-motion'

// // Variants
// import {fadeIn} from '../variants'


// const Partnership = () => {
//   return (
//     <div className='md:px-14 p-4 max-w-s mx-auto mt-20' id='business'>
//         <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We Value <span className='text-secondary'>Your Partnership.</span></h2>
//         <div className='flex flex-col md:flex-row justiify-between items-center gap-8'>
//             {/* Partnership Image */}
//             <motion.div 
//               variants={fadeIn('right', 0.2)}
//               initial='hidden'
//               whileInView={'show'}
//               viewport={{once:false, amount: 0.7}}
//               className='md:w-1/2'>
//                 <img src={partnership} alt='a handshake'/>
//             </motion.div>
//             {/* Partnership content */}
//             <motion.div 
//               variants={fadeIn('left', 0.3)}
//               initial='hidden'
//               whileInView={'show'}
//               viewport={{once:false, amount: 0.7}}
//               className='md:w-2/5'>
//               <p className='text-tertiary text-lg mb-7'>Doctors, pharmacies and corporate and private investors are welcome to partner with our team of world-class professionals.</p>
//               <button className='btnPrimary'>Get Started</button>
//             </motion.div>
//         </div>
//     </div>
//   )
// }

// export default Partnership

import React from 'react';
import partnership from '../assets/partnership.jpg';
import { useTranslation } from 'react-i18next';

// For motion
import { motion } from 'framer-motion';

// Variants
import { fadeIn } from '../variants';

const Partnership = () => {
  const { t } = useTranslation();

  return (
    <div className='md:px-14 p-4 max-w-s mx-auto mt-20' id='business'>
      <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
        {t('partnership.title')}
        <span className='text-secondary ml-2'>{t('partnership.span')}</span>
      </h2>
      <div className='flex flex-col md:flex-row justiify-between items-center gap-8'>
        {/* Partnership Image */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='md:w-1/2'
        >
          <img src={partnership} alt='a handshake' />
        </motion.div>
        {/* Partnership content */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='md:w-2/5'
        >
          <p className='text-tertiary text-lg mb-7'>{t('partnership.content')}</p>
          <button className='btnPrimary'>{t('partnership.buttonText')}</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Partnership;
