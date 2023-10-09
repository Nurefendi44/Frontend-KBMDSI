import PrestasiImage from '../../assets/img/kemahasiswaan/PrestasiImage.svg'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const CardMahasiswa = ({kemahasiswaans}) => {

  return (
    <>


        {
             kemahasiswaans && kemahasiswaans.map(kemahasiswaan=>

                <div className="" key={kemahasiswaan.id} _id={kemahasiswaan.id}>

<div className='flex flex-col mb-[51px]'>
                <img src={"https://kbmdsi.galoostore.com/public/img/kemahasiswaan/" + kemahasiswaan.gambar} alt="" className='lg:mb-[50px] h-52 w-96 mb-6 rounded' />
                <div className='lg:w-[398px] h-[174px] bg-[#F9F9F9] rounded-lg pt-9 pl-5 '>
                    <p  className='text-sm text-[#A4A4A4] w-80  relative '><span>{kemahasiswaan.created_at}</span>
                    <div className="h-4 w-36 absolute bg-[#F9F9F9] -mt-4 ml-[72px]"></div>
                    </p>
                    <h1 className='mt-5 font-bold text-[#27326D] lg:w-[371px]'>{kemahasiswaan.judul}</h1>
                    <Link to={`/kemahasiswaan-detail/${kemahasiswaan.id}`}>baca selengkapnya</Link>
                </div>
            </div>

                </div>


            )
        }







    </>
  )
}

export default CardMahasiswa
