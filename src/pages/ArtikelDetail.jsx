import React from 'react'
import Navbarr from '../components/Navbarr'
import Logo from "../../public/img/logo (2).png"
import Artikel_Detail from '../components/Artikel/Artikel_Detail'
import Header_Detail from '../components/Artikel/HeaderDetail'
import Footer from '../components/Footer'




const ArtikelDetail = () => {
  return (

    <div>
        <Navbarr/>

        <div className="mt-36">
        <Header_Detail/>
        <Artikel_Detail/>
        <Footer/>
        </div>

    </div>
  )
}

export default ArtikelDetail
