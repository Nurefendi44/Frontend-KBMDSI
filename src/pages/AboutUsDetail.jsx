import React from 'react'
import Navbarr from '../components/Navbarr'
import HeaderDetail from '../components/AboutUsDetail/HeaderDetail'
import DetailMember from '../components/AboutUsDetail/DetailMember'
import Footer from '../components/Footer'


const AboutUsDetail = () => {
  return (
    <div>
        <Navbarr/>
        <div className="mt-36">
        <HeaderDetail/>
        <DetailMember/>
        <Footer/>
        </div>

    </div>
  )
}

export default AboutUsDetail
