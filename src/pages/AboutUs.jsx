import React from 'react'
import Navbarr from '../components/Navbarr'
import HeaderAboutUs from '../components/AboutUs/HeaderAboutUs'
import Visi from '../components/AboutUs/Visi'
import Misi from '../components/AboutUs/Misi'
import Logo from '../components/AboutUs/Logo'
import BPI from '../components/AboutUs/BPI'
import BPH from '../components/AboutUs/BPH'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div>
        <Navbarr/>
        <div className="mt-36">

        <HeaderAboutUs/>
        <Visi/>
        <Misi/>
        <Logo/>
        <BPI/>
        <BPH/>
        <Footer/>
        </div>


    </div>
  )
}

export default AboutUs
