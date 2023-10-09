import React from 'react'

import Kahim from "../../assets/img/about-us/kahim.png"
import Sekre1 from "../../assets/img/about-us/sekre1.png"
import Sekre2 from "../../assets/img/about-us/sekre2.png"
import Pianggota1 from "../../assets/img/about-us/pianggota1.png"
import Pianggota2 from "../../assets/img/about-us/pianggota2.png"
import PI from "../../assets/img/about-us/pi.png"
import Benda1 from "../../assets/img/about-us/benda1.png"
import Benda2 from "../../assets/img/about-us/benda2.png"
import Wakahimti from "../../assets/img/about-us/wakahimti.png"
import Wakahimsi from "../../assets/img/about-us/wakahimsi.png"
import CardImage from '../../assets/img/about-us/CardImage.svg'


const BPI = () => {
  return (
    <div id='struktur'>
        <div className='lg:mt-[163px] mt-10 mb-7 lg:mb-[128px] ml-2 flex lg:justify-center font-["Poppins"] lg:text-[60px] text-[45px] font-bold text-[#85CC3A] text-center'>Struktur Organisasi</div>
        <div className='lg:mb-[39px]  mb-32 lg:text-[60px] text-3xl  grid justify-items-center pb-20 font-["Poppins"] text-[#050041] font-bold  text-center '>Badan Pengurus Inti</div>
        <div className='lg:w-[1140px]  lg:h-[480px] w-[80%] mx-auto rounded  bg-[#F2EDE7] lg:ml-[115px] flex lg:flex-row flex-col text-[#050041] mb-[115px]'>
            <img src={Kahim} className='lg:w-[320px] lg:h-[480px] w-[160px] h-[240px] object-cover  lg:-mt-[45px] lg:-ml-[45px] -mt-20 mx-auto' alt="" />
            <div className='flex-col lg:ml-[75px] ml-9 mb-6'>
                <div className='lg:mt-[63px] mt-6 font-["Poppins"] text-[42px]  font-bold '>Alif Wahyu Widi Adrian</div>
                <div className='mt-[5px] font-["Poppins"] text-[21px] font-bold '>Ketua Himpunan EMDSI 2023</div>
                {/* <p className='lg:w-[709px] lg:mt-[18px] mt-2 text-[18px]'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p> */}
            </div>
        </div>
        <div className='lg:w-[1140px] lg:h-[480px] w-[80%] mx-auto rounded bg-[#F2EDE7] lg:ml-[115px] flex lg:flex-row-reverse flex-col text-[#050041] mb-[115px]'>
            <img src={Wakahimsi} className='lg:w-[320px] object-cover lg:h-[480px] w-[160px] h-[240px]  lg:-mt-[45px]  lg:-mr-[45px] -mt-20 mx-auto' alt="" />
            <div className='flex-col lg:mr-[115px] ml-9 mb-6'>
                <div className='lg:mt-[63px] mt-6 font-["Poppins"] text-[42px] font-bold'>Mohammad Rafi Azzaky</div>
                <div className='mt-[5px] font-["Poppins"] text-[21px] font-bold'>Wakil Ketua Himpunan EMDSI 2023</div>
                {/* <p className='lg:w-[709px] lg:mt-[18px] mt-2 text-[18px]'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p> */}
            </div>
        </div>
        <div className='lg:w-[1140px]  lg:h-[480px] w-[80%] mx-auto rounded  bg-[#F2EDE7] lg:ml-[115px] flex lg:flex-row flex-col text-[#050041] mb-[115px]'>
            <img src={Wakahimti} className='object-cover lg:w-[320px] lg:h-[480px] w-[160px] h-[240px] object-cover  lg:-mt-[45px] lg:-ml-[45px] -mt-20 mx-auto' alt="" />
            <div className='flex-col lg:ml-[75px] ml-9 mb-6'>
                <div className='lg:mt-[63px] mt-6 font-["Poppins"] text-[42px]  font-bold '>Abi Al Qhafari</div>
                <div className='mt-[5px] font-["Poppins"] text-[21px] font-bold '>Wakil Ketua Himpunan EMDSI 2023</div>
                {/* <p className='lg:w-[709px] lg:mt-[18px] mt-2 text-[18px]'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p> */}
            </div>
        </div>
        <div className='  grid lg:grid-cols-4  justify-items-center text-[#050041] '>

            <div className=' h-[358px] w-[240px] flex flex-col bg-[#F2EDE7] mt-[74px] '>
                <img src={Sekre1} alt="" />
                <div className='mt-[16px] mx-auto font-["Poppins"] text-[16px] mb-[1px] font-bold'>Andi Sekar Ayu Fadilla</div>
                <div className='h-[30px] w-[230px] flex justify-center  text-[18px] -mr-4 font-medium'>Sekretaris 1</div>
            </div>
            <div className=' h-[358px] w-[240px] flex flex-col bg-[#F2EDE7] mt-[74px] '>
                <img src={Sekre2} alt="" />
                <div className='mt-[16px] mx-auto font-["Poppins"] text-[16px] mb-[1px] font-bold'>Taufik Hidayat</div>
                <div className='h-[30px] w-[230px] flex justify-center  text-[18px] -mr-4 font-medium'>Sekretaris 2</div>
            </div>
            <div className=' h-[358px] w-[240px] flex flex-col bg-[#F2EDE7] mt-[74px] '>
                <img src={Benda1} alt="" />
                <div className='mt-[16px] mx-auto font-["Poppins"] text-[16px] mb-[1px] font-bold'>Wulan Della Elfarin</div>
                <div className='h-[30px] w-[230px] flex justify-center  text-[18px] -mr-4 font-medium'>Bendahara 1</div>
            </div>
            <div className=' h-[358px] w-[240px] flex flex-col bg-[#F2EDE7] mt-[74px] '>
                <img src={Benda2} alt="" />
                <div className='mt-[16px] mx-auto font-["Poppins"] text-[16px] mb-[1px] font-bold'>Nadha Fitri</div>
                <div className='h-[30px] w-[230px] flex justify-center  text-[18px] -mr-4 font-medium'>Bendahara 2</div>
            </div>
            <div className=' h-[358px] w-[240px] flex flex-col bg-[#F2EDE7] mt-[74px] '>
                <img src={PI} alt="" />
                <div className='mt-[16px] mx-auto font-["Poppins"] text-[16px] mb[1px] font-bold text-center'>Jasmine Cecillia</div>
                <div className=' mx-auto font-["Poppins"] text-[16px] mb[1px] font-bold text-center'>Aulia Septy</div>
                <div className='h-[30px] w-[230px] mx-auto  text-[18px] -mr-4 font-medium'>Koor & Wakoor Pengembangan Internal</div>
            </div>

        </div>
    </div>
  )
}

export default BPI
