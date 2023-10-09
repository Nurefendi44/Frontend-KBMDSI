import React from 'react'
import Header from '../components/kemahasiswaanDetaill/Header'
import Navbarr from '../components/Navbarr'
import Article from '../components/kemahasiswaanDetaill/Article'
import Footer from '../components/Footer'

const KemahasiswaanDetail = () => {
  return (
    <div>
        <Navbarr/>
        <div className="mt-36">
        <Header/>
        <Article/>
        <Footer/>
        </div>

    </div>
  )
}

export default KemahasiswaanDetail
