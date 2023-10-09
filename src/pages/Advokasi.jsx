import React from 'react'
import Advokasis from '../components/Advokasi/Advokasis';
import HeaderAdvokasi from '../components/Advokasi/HeaderAdvokasi';
import Navbarr from '../components/Navbarr';
import Footer from '../components/Footer';


const Advokasi = () => {
  return (
    <div>
        <Navbarr/>
        <div className="mt-36">
        <HeaderAdvokasi/>
        <Advokasis/>
        <Footer/>
        </div>

    </div>
  )
}

export default Advokasi
