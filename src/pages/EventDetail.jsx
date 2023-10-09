import React from 'react'
import HeaderDetail from '../components/Event/HeaderDetail'
import Navbarr from '../components/Navbarr'
import Event from '../components/Event/Event'
import Footer from '../components/Footer'



const EventDetail = () => {
  return (
    <div>
        <Navbarr/>
        <div className="mt-36">
        <HeaderDetail/>
        <Event/>
        <Footer/>
        </div>

    </div>
  )
}

export default EventDetail
