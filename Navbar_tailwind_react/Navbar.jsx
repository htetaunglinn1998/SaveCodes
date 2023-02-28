import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'
import { motion as m } from 'framer-motion'

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    // console.log('menu', menu)

    return (
        <div className='relative'>
            <div className='fixed top-0 left-0 right-0 sm:left-10 sm:right-10 z-40 flex justify-between items-center shadow-md px-8 py-5 rounded-b-md text-gray-300 bg-black/50'>
                <div>
                    <img className='w-10 h-10' src={Logo} alt="logo" />
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex justify-around gap-10 font-semibold'>
                        <li className='hover:text-cyan-400 transition-all ease-linear duration-150'><a href="#home">Home</a></li>
                        {/* <li><a href="#special">Languages</a> </li> */}
                        <li className='hover:text-cyan-400 transition-all ease-linear duration-150'><a href="#projects">Projects</a></li>
                        <li className='hover:text-cyan-400 transition-all ease-linear duration-150'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className='lg:hidden' onClick={() => setMenu(!menu)} >
                    {menu ? <RiCloseLine className='text-cyan-400 text-xl' /> : <GiHamburgerMenu className='text-cyan-400 text-xl' />}
                </div>
                <m.div initial={{ opacity: 0 }} animate={menu ? { opacity: 1 } : { opacity: 0 }} className={`${menu ? 'block' : 'hidden'} lg:hidden fixed top-20 left-0 right-0 sm:left-10 sm:right-10 shadow-md `}>
                    <ul className='bg-black/50 px-8 py-7 flex flex-col justify-around gap-8 font-semibold rounded-b-md'>
                        <li onClick={() => setMenu(false)} className='hover:text-cyan-400 transition-all ease-linear duration-150'><a href="#home">Home</a> </li>
                        <li onClick={() => setMenu(false)} className='hover:text-cyan-400 transition-all ease-linear duration-150'><a href="#projects">Projects</a></li>
                        <li onClick={() => setMenu(false)} className='hover:text-cyan-400 transition-all ease-linear duration-150'><a href="#contact">Contact</a></li>
                    </ul>
                </m.div>
            </div>
        </div>
    )
}

export default Navbar