import React from 'react'
import Navbarr from '../components/Navbarr'
import HeaderContact from '../components/Contact/HeaderContact'
import Isi from '../components/Contact/Isi'




const Contact = () => {
  return (
    <div>
        <Navbarr/>
        <div className="mt-36">
        <HeaderContact/>
        <Isi/>

        </div>

    </div>
  )
}

export default Contact
