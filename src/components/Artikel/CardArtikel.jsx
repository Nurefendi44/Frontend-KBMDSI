import React from 'react'
import CardImage from '../../assets/img/kemahasiswaan/CardImage.svg'
import { Link } from 'react-router-dom'


const CardArtikel = ({artikels}) => {
  return (
    <>

{
            artikels && artikels.map(artikel=>

                <div className="" key={artikel.id} _id={artikel.id}>

<div className='bg-white font-[Poppins] w-80 lg:w-96 h-[30rem] shadow-2xl  '>
<img src={"https://kbmdsi.galoostore.com/public/img/artikel/" + artikel.gambar} alt="" className='object-cover h-52  object-cover w-96 rounded' />
        <div className="px-5 py-3">
        <div className="flex justify-between mb-5 text-[#6B7385] text-[14px]">
                <p>{artikel.penulis}</p>
                <p>{artikel.created_at}</p>

            </div>
            <h1 className="judul text-2xl font-bold text-[#27326D]">{artikel.judul}</h1>

            {/* <div className="text-[#6B7385] mt-5">
                <p>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
            </div> */}
            <Link to={`/artikel-detail/${artikel.id}`}>baca selengkapnya</Link>
        </div>
    </div>

                </div>


            )
        }

</>




  )
}

export default CardArtikel
