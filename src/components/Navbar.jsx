import React, { useState } from 'react';
//import assets
import LogoNike from '../assets/logo.png';

//import icons
import {FaRegUserCircle, FaInstagram} from 'react-icons/fa';
import {MdOutlineShoppingBag} from 'react-icons/md';
//import framer motion;
import { motion } from 'framer-motion';

const NavBarMenu = [
    {
        id: 1,
        title: 'Novas Versões',
        link: '/',
        delay: '0.2'
    },

    {
        id: 2,
        title: 'Masculino',
        link: '#',
        delay: '0.4'
    },
    {
        id: 3,
        title: 'Feminino',
        link: '#',
        delay: '0.6'
    },
    {
        id: 4,
        title: 'Infantiis',
        link: '#',
        delay: '0.8',
    }   
];

const slideRight = (delay) => (
    {
        hidden: {
            opacity: 0,
            x: -100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay,
            }
        }
    }
);

const Navbar = () => {

  return (
    <nav className='bg-primary text-white'>
      <div className='container py-6 flex justify-between items-center'>
        <motion.div variants={slideRight(0.1)} initial='hidden' animate='show'>
           <img className='w-[100px]' src={LogoNike} alt="logo da Nike" /> 
        </motion.div>
        <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
                {NavBarMenu.map((item) => {
                    return (
                        <motion.li variants={slideRight(item.delay)} initial='hidden' animate='show' key={item.id}>
                            <a className='inline-block py-2 px-4 uppercase font-barlow font-semibold hover:scale-105 duration-300 transition' href={item.link}>{item.title}</a>
                        </motion.li>
                    )
                })}
            </ul>
        </div>
        <div className='flex items-center gap-4'>
        <motion.div variants={(slideRight(1.2))} initial='hidden' animate='show' className='text-2xl cursor-pointer'>
                <a href="https://www.instagram.com/devgustavogantois_/?hl=pt-br" target='_blank'><FaInstagram/></a>
            </motion.div>
            <motion.div variants={(slideRight(1.2))} initial='hidden' animate='show' className='text-2xl cursor-pointer'>
                <FaRegUserCircle/>
            </motion.div>
            <motion.div variants={slideRight(1.4)} initial='hidden' animate='show' className='text-2xl cursor-pointer relative'>
                <a href="https://www.nike.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=SN_NIKE-INST-ROAS&gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lSazHqf3X0B2iFucYy0uP7NzEyaTOuZoxyGxtKPgG5GTpPEyuMQWFXRoCcrsQAvD_BwE&utm_referrer=https://www.google.com/" target='_blank'><MdOutlineShoppingBag className='cursor-pointer'/></a>
                <div className='absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs flex justify-center items-center rounded-full'>2</div>
            </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
