import React from 'react'
import { FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation(); 

    return (
      <div className='bg-primary md:px-14 p-2 mt-12 max-w-screen-2xl mx-auto text-white'>
        <div className='my-12 flex flex-col md:flex-row gap-5'>
          <div className='md:w-1/3 space-y-8'>
            <a href='/' className='text-2xl font-semibold text-white space-x-3 text-primary'>
              {t('footer.company')}
            </a>
            <div className='flex items-center space-x-5'>
              <FiFacebook alt='facebook logo' className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300' />
              <FiLinkedin alt='linkedIn logo' className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300' />
              <FiInstagram alt='instagram logo' className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300' />
              <FaXTwitter alt='X logo' className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300' />
            </div>
          </div>

          {/* Footer Navigation */}
          <div className='md:w-2/3 flex flex-col md:flex-row justify-between gap-6 items-start'>

          <div className="space-y-4 mt-5">
            <h4 className="text-xl text-secondary">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                {t('footer.aboutUs')}
              </a>
              <a href="" className="block hover:text-gray-300">
                {t('footer.forBusiness')}
              </a>
              <a href="" className="block hover:text-gray-300">
                {t('footer.careers')}
              </a>
              <a href="" className="block hover:text-gray-300">
                {t('footer.support')}
              </a>
            </ul>
          </div>

          <div className="space-y-4 mt-5">
            <h4 className="text-xl text-secondary">{t('footer.products')}</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                {t('footer.consultations')}
              </a>
              <a href="" className="block hover:text-gray-300">
                {t('footer.diagnostics')}
              </a>
              <a href="" className="block hover:text-gray-300">
                {t('footer.prescription')}
              </a>
            </ul>
          </div>

          <div className="space-y-4 mt-5">
            <h4 className="text-xl text-secondary">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                {t('footer.faqs')}
              </a>
              <a href="" className="block hover:text-gray-300">
                {t('footer.blog')}
              </a>
              <a href="" className="block hover:text-gray-300">
                {t('footer.press')}
              </a>
              <a href="" className="block hover:text-gray-300">
                {t('footer.status')}
              </a>
            </ul>
          </div>

          <div className="space-y-4 mt-5">
            <h4 className="text-xl text-secondary">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                {t('footer.termsOfUse')}
              </a>
              <a href="" className="block hover:text-gray-300">
                {t('footer.privacyPolicy')}
              </a>
              <a href="" className="block hover:text-gray-300">
                {t('footer.cookiePolicy')}
              </a>
            </ul>
          </div>

          <div className="space-y-4 mt-5">
            <h4 className="text-xl text-secondary ">{t('footer.contactUs')}</h4>
            <ul className="space-y-3">
              <p className="block hover:text-gray-300">{t('footer.address')}</p>
              <p className="block hover:text-gray-300">{t('footer.tel')}</p>
              <p className="block hover:text-gray-300">{t('footer.email')}</p>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div>{t('footer.rightsReserved')}</div>
    </div>
  );
};

export default Footer;
