
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../../assets/img/event/image.svg'
import location from '../../assets/img/event/location.svg'

const CardAdvokasi1 = ({advokasis}) => {
  return (


   <>
     {
  advokasis.length === 0 ? (
    <p>Belum ada informasi akademik tersedia saat ini</p>
  ) : (
    advokasis.map((advokasi) => (
      <div className="" key={advokasi.id} _id={advokasi.id}>
        <div className='bg-white p-3 rounded-md shadow-lg'>
          <img className='w-96 h-80 object-cover rounded-md' src={"https://kbmdsi.galoostore.com/public/img/advokasi/" + advokasi.gambar} alt="" />
          <div className='flex flex-row mt-6'>
            <h1 className='font-[Poppins] lg:text-xl lg:w-80 my-auto'>
              {advokasi.judul}
            </h1>
          </div>
          <div className='mb-4'>
            <Link className='text-[#85CC3A]' to={`/advokasi-detail/${advokasi.id}`}>baca selengkapnya</Link>
          </div>
        </div>
      </div>
    ))
  )
}

   </>


  )
}

export default CardAdvokasi1
