import React from 'react'
import HeaderEvent from '../components/Event/HeaderEvent'
import Navbarr from '../components/Navbarr'
import Content from '../components/Event/Content'
import Footer from '../components/Footer'


const Event = () => {
  return (
    <div>
        <Navbarr/>
        <div className="mt-36">
        <HeaderEvent/>
        <Content/>
        <Footer/>
        </div>

    </div>
  )
}

export default Event
