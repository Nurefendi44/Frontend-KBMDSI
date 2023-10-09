import React from 'react'
import Navbarr from '../components/Navbarr'
import HeaderArtikel from "../components/Artikel/HeaderArtikel";
import CardArtikel from '../components/Artikel/CardArtikel';
import Artikell from '../components/Artikel/Artikell';
import Footer from '../components/Footer';


const Artikel = () => {
  return (
    <div>
        <Navbarr/>
        <div className="mt-36">
        <HeaderArtikel/>
        <Artikell/>
        <Footer/>


        </div>

    </div>
  )
}

export default Artikel
