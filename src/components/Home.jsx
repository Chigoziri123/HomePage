
// import Banner from '../shared/Banner'
// import { useTranslation } from 'react-i18next'

// const Home = () => {
//   return (
//     <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id='home'>
//        <Banner />
//     </div>
//   )
// }

// export default Home

import Banner from '../shared/Banner'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id='home'>
       <Banner t={t} />
    </div>
  )
}

export default Home