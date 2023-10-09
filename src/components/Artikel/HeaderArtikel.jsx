import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';

const HeaderArtikel = () => {

    const [artikels, setArtikels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(function(response){
        axios.get("https://kbmdsi.galoostore.com/api/artikels")
        .then(function(response){
            const artikel = response.data.data;
            setArtikels(artikel)
            setIsLoading(false);
        })
    }, [])
  return (
    <div className=' relative w-full lg:h-[400px] h-[550px] bg-[#2B6BA8] lg:flex lg:px-16 font-[Poppins] text-white lg:space-x-60 '>

        <div className="lg:w-1/2 px-5 lg:px-0 lg:pt-24 pt-5">
            <div className="lg:flex lg:space-x-5 mx-auto justify-center text-center w-full">
                <h1 className='lg:text-7xl text-4xl '>Artikel</h1>
                <h1 className='px-5 py-2 block w-28 mt-3 text-center mx-auto border-4 border-white rounded-full bg-[#85CC3A]'>{artikels.length} artikel</h1>
            </div>
            <div className="">
                <h1 className="text-justify lg:pr-16">Temukan berbagai artikel menarik dan informatif seputar kegiatan dan program kami. Kami memberikan informasi terkini untuk membantu Anda memahami lebih dalam tentang Organisasi KBMDSI dan kontribusi kami dalam masyarakat. Dapatkan wawasan mendalam tentang program-program unggulan, inisiatif sosial, acara komunitas, dan cerita inspiratif dari anggota tim kami. Bersama-sama, kita bisa membuat perubahan positif dan memajukan tujuan mulia Organisasi KBMDSI. Selamat membaca!
</h1>
            </div>
        </div>
        <div className="lg:w-1/2 lg:mt-28 relative mx-auto justify-center flex mt-10 md:mt-32 ">
            <img src={Image} className='w-60 absolute flex justify-center lg:w-[35rem] mx-auto lg:mx-0' alt="border-2" />
        </div>

    </div>
  )
}

export default HeaderArtikel
