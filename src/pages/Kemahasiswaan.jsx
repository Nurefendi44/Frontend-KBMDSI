import React from 'react'
import HeaderKemahasiswaan from '../components/Kemahasiswaan/HeaderKemahasiswaan'
import Navbarr from '../components/Navbarr'
import PrestasiMahasiswa from '../components/Kemahasiswaan/PrestasiMahasiswa'
import InformasiBeasiswa from '../components/Kemahasiswaan/InformasiBeasiswa'
import Footer from '../components/Footer'

const Kemahasiswaan = () => {
  return (
    <div>
        <Navbarr/>
        <div className="mt-36">
        <HeaderKemahasiswaan/>
        <PrestasiMahasiswa/>
        <InformasiBeasiswa/>
        <Footer/>
        </div>

    </div>
  )
}

export default Kemahasiswaan
