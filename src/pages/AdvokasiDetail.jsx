import React from 'react'
import Navbarr from '../components/Navbarr'
import HeaderDetail from "../components/Advokasi/HeaderDetail"
import DetailAdvokasi from '../components/Advokasi/DetailAdvokasi'
import Footer from '../components/Footer'






const AdvokasiDetail = () => {
  return (
    <div>
        <Navbarr/>
        <div className="mt-36">
        <HeaderDetail/>
        <DetailAdvokasi/>
        <Footer/>

        </div>

    </div>
  )
}

export default AdvokasiDetail
