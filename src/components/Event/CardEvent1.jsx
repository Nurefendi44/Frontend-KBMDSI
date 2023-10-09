
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../../assets/img/event/image.svg'
import location from '../../assets/img/event/location.svg'

const CardEvent1 = ({events}) => {
  return (


   <>
     {
  events.length === 0 ? (
    <p>Belum ada event tersedia saat ini</p>
  ) : (
    events.map((event) => (
      <div className="" key={event.id} _id={event.id}>
        <div className='bg-white p-3 rounded-md shadow-lg'>
          <img className='w-96 h-80 object-cover rounded-md' src={"https://kbmdsi.galoostore.com/public/img/event/" + event.gambar} alt="" />
          <div className='flex flex-row mt-6'>
            <h1 className='font-[Poppins] lg:text-xl lg:w-80 my-auto'>
              {event.judul}
            </h1>
          </div>
          <div className='mb-4'>
            <Link className='text-[#85CC3A]' to={`/event-detail/${event.id}`}>baca selengkapnya</Link>
          </div>
        </div>
      </div>
    ))
  )
}

   </>


  )
}

export default CardEvent1
