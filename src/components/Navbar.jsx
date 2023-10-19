// import { React, useState} from 'react'
// import {GrLanguage} from "react-icons/gr" 
// import {FaXmark, FaBars} from "react-icons/fa6"
// import { Link } from 'react-scroll'

// const Navbar=()=> {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     }
    
//     const navItems = [
//         {link: "Home", path: "home"},
//         {link: "Products", path: "products"},
//         {link: "Business (For Partners)", path: "business"},
//         {link: "Pricing", path: "pricing"},
      
//     ]
//   return (
//     <>
//     <nav
//         className='bg-stone-50 md:px-14 p-4 max-w-screen-2xl mx-auto border-b text-primary fixed top-0 right-0 left-0 '
//     >
//         <div className='text-lg container mx-auto flex justify-between item-center font-medium'>
//             <div className='flex space-x-14 items-center'>
//                 <a href='/'className='text-2xl font-semibold flex items-center space-x-3 
//                 text-primary'><span>E - Medic</span></a>

//                 {/* using map to show navitem */}
//                 {/* Fix button arrangements and alignments */}
//                 <ul className='md:flex items-center gap-4 lg:gap-5 text-sm lg:text-base hidden'>
//                     {
//                         navItems.map(({link,path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} 
//                         className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)
//                     }
//                 </ul>
//             </div>

//             {/* Language and signup button */}
//             <div className='space-x-12 hidden md:flex items-center'>
//                 <a href='/'className='hidden lg:flex items center hover:text-secondary'><GrLanguage className='mr-2 mt-1'/><span>Language</span></a>
//                 <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded
//                 hover:text-white hover:bg-indigo-600'>Sign up</button>
//             </div>

//             {/* Hamburger icon only displayed on mobile view */}
//             <div className='md:hidden'>
//                     <button onClick={toggleMenu} className='text-white focus:outline-none
//                      focus:text-gray-300'>
//                         {
//                             isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary'/>)
//                         }
//                     </button>
//             </div>
//         </div>
//     </nav>

//     <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
//         {
//             navItems.map(({link,path}) => <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path} 
//             className='block hover:text-gray-300 cursor-pointer'onClick={toggleMenu}>{link}</Link>)
//         }           
//     </div>
//     </>

//     // Nav items for mobile devices
//   )
// }

// export default Navbar



import React, { useState, useEffect } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { IoMdArrowDropdown } from 'react-icons/io';
import i18next from 'i18next';
import cookies from 'js-cookie';

const Navbar = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const navItems = [
    { link: 'home', path: 'home' },
    { link: 'products', path: 'products' },
    { link: 'business', path: 'business' },
    { link: 'pricing', path: 'pricing' },
  ];

  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
  ];

  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir;
  });

  return (
    <>
      <nav className="bg-stone-50 md:px-14 p-4 max-w-screen-2xl mx-auto border-b text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between item-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <span>E - Medic</span>
            </a>

             {/* using map to show navitem */}
            <ul className="md:flex items-center gap-4 lg:gap-5 text-sm lg:text-base hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {t(`navbar.${link}`)}
                </Link>
              ))}
            </ul>
          </div>

          {/* Language and signup button */}

          <div className="space-x-12 hidden md:flex items-center">
            <div className="relative">
              <button
                onClick={toggleLanguages}
                className="hidden lg:flex items center hover:text-secondary"
              >
                <GrLanguage className="mr-2 mt-1 hover:text-secondary" />
                <span className="hover:text-secondary">
                  {t('navbar.language')}
                </span>
                <span>
                  <IoMdArrowDropdown className="mt-1" />
                </span>
              </button>

              {showLanguages && (
                <ul className="absolute left-0 mt-2 px-3 bg-transparent border rounded-lg shadow-md">
                  {languages.map(({ code, name, country_code }) => (
                    <li key={country_code}>
                      <button
                        className="hover:text-tertiary"
                        onClick={() => {
                          i18next.changeLanguage(code);
                          toggleLanguages();
                        }}
                        disabled={code === currentLanguageCode}
                      >
                        <span
                          className={`flag-icon flag-icon-${country_code} mx-2`}
                          style={{
                            opacity:
                              code === currentLanguageCode ? 0.5 : 1,
                          }}
                        ></span>
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              {t('navbar.signUp')}
            </button>
          </div>

         {/* Hamburger icon only displayed on mobile view */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${
          isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            key={link}
            to={path}
            className="block hover:text-gray-300 cursor-pointer"
            onClick={toggleMenu}
          >
            {t(`navbar.${link}`)}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
