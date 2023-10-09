import React from 'react'
import logo from '../assets/img/about-us/logo.svg'
import Logo from "../../public/img/logodsi.png"
import tiktok from '../assets/img/footer/vector-tiktok.svg'
import twitter from '../assets/img/footer/vector-twitter.svg'
import youtube from '../assets/img/footer/vector-youtube.svg'
import instagram from '../assets/img/footer/vector-ig.svg'

import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full lg:h-72 bg-[#2B6BA8] pt-7 '>
        <div className='flex lg:flex-row flex-col'>
          <div className='flex flex-col '>
            <div className='flex flex-row'>
              <img src={Logo} className='w-24 lg:ml-14 ml-12' alt="" />
              <h1 className='font-["Poppins"] text-3xl font-medium text-[#27326D] text-center lg:mx-auto my-auto ml-3 lg:ml-0 '>KBMDSI UB</h1>
            </div>
            <p className='lg:w-[284px] w-[75%] lg:h-[93px] text-[15px] text-[#FFFFFF] lg:ml-[54px] mt-3 mx-auto'>Gedung Kreativitas Mahasiswa (GKM), Lantai 2 Sekretariat KBMDSI, Fakultas Ilmu Komputer, Universitas Brawijaya</p>
            <p className='lg:w-[284px] w-[75%] text-[15px] text-[#FFFFFF] lg:ml-[54px] mx-auto'>Phone: 081234567890</p>
          </div>
          <div className='flex lg:flex-row flex-col lg:ml-32 ml-4'>
            <div className='lg:w-[2px] lg:h-40 h-[2px] w-[80%] bg-white lg:mt-[35px] mt-5 mx-auto'></div>
            <div className='flex flex-col lg:mt-[35px] ml-8 mt-5'>
              <h1 className='font-["Poppins"] text-xl font-bold text-[#FFFFFF] mb-5  '>Informasi</h1>
              <p className='text-base text-[#FFFFFF] mb-3'><NavLink to="/kemahasiswaan">Kemahasiswaan</NavLink></p>
              <p className='text-base text-[#FFFFFF] mb-3'><NavLink to="/event">Event</NavLink></p>
              <p className='text-base text-[#FFFFFF] mb-3'><NavLink to="/kemahasiswaan">Artikel</NavLink></p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:ml-28 ml-4'>
            <div className='lg:w-[2px] lg:h-40 h-[2px] w-[80%] bg-white lg:mt-[35px] mt-5 mx-auto'></div>
            <div className='flex flex-col lg:mt-[35px] ml-8 mt-5'>
              <h1 className='font-["Poppins"] text-xl font-bold text-[#FFFFFF] mb-5  '>Profil</h1>
              <p className='text-base text-[#FFFFFF] mb-3'><NavLink to="/kemahasiswaan">Eksekutif Mahasiswa</NavLink></p>
              <p className='text-base text-[#FFFFFF] mb-3'><NavLink to="/event">Badan Perwakilan Mahasiswa</NavLink></p>
              <p className='text-base text-[#FFFFFF] mb-3'><NavLink to="/about-us">About Us</NavLink></p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:ml-42 ml-4 '>
            <div className='lg:w-[2px] lg:h-40 h-[2px] w-[80%] bg-white lg:mt-[35px] mt-5 mx-auto'></div>
            <div className='flex flex-col lg:mt-[35px] ml-8 mt-5'>
              <h1 className='font-["Poppins"] text-xl font-bold text-[#FFFFFF] mb-5  '>Find us at</h1>
              <div className='flex flex-row gap-9 mb-8 mt-4'>
                <a href="https://instagram.com/kbmdsi.ub" target='blank'> <img src={instagram} alt="" /></a>
                <a href="https://tiktok.com/@kbmdsi.ub" target='blank'><img src={tiktok} alt="" /></a>
                <a href="https://twitter.com/KBMDSI_UB" target='blank'><img src={twitter} alt="" /></a>
                <a href="https://instagram.com/kbmdsi.ub" target='blank'> <img src={youtube} alt="" /></a>
              </div>
              <p className='text-[#FFFFFF] text-[15px]'>©2023 KBMDSI UB</p>

            </div>
          </div>
        </div>
        <h1 className='lg:text-base text-xs text-[#FFFFFF] mx-auto text-center lg:mt-8 mt-5'>Made with 💚 by Informatika Medkominfo</h1>
    </div>
  )
}

export default Footer
