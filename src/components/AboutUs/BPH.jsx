import React from 'react'
import Image from '../../assets/img/about-us/BpiImage.svg'
import PSDM from '../../assets/img/about-us/psdm.png'
import KP from '../../assets/img/about-us/kp.png'
import ADVOKESMA from '../../assets/img/about-us/advokesma.png'
import SOSLING from '../../assets/img/about-us/sosling.png'
import KWU from '../../assets/img/about-us/kwu.png'
import MEDKOM from '../../assets/img/about-us/medkom.png'
import PI1 from '../../assets/img/about-us/pianggota2.png'
import PI2 from '../../assets/img/about-us/pianggota1.png'


const BPH = () => {
  return (
    <div>
        <h1 className='mt-[107px] flex justify-center text-[#050041] font-["Poppins"] font-bold  lg:text-6xl lg:mb-16 mb-3  text-3xl  '>Badan Pengurus Harian</h1>
        <div className='lg:flex lg:flex-col'>
            <div className='grid lg:flex lg:flex-row grid-cols-1 justify-center justify-items-center lg:gap-x-5 lg:gap-y-9'>
                <div className='lg:h-[595px] lg:w-[640px] lg:mb-10 mb-7 h-[330px] w-[320px]  shadow-2xl flex flex-col rounded-md'>
                    <div className="">
                    <img src={PSDM} className='object-cover  w-full'  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 mt-1 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[28px]'>Pengembangan Sumber Daya Manusia</h1>
                    {/* <div className='lg:mb-10 mb-2 lg:ml-5  ml-2 bg-[#85CC3A] w-1/3  lg:w-[168px] font-medium lg:h-11 rounded grid justify-items-center items-center text-sm'>Meet the team!</div> */}


                </div>
                <div className='lg:h-[595px] lg:w-[640px] lg:mb-10 mb-7 h-[330px] w-[320px]  shadow-2xl flex flex-col rounded-md'>
                    <div className="">
                    <img src={KP} className='object-cover  w-full'  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 mt-1 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[28px]'>Keilmuan Dan Pengajaran</h1>
                    {/* <div className='lg:mb-10 mb-2 lg:ml-5  ml-2 bg-[#85CC3A] w-1/3  lg:w-[168px] font-medium lg:h-11 rounded grid justify-items-center items-center text-sm'>Meet the team!</div> */}


                </div>

            </div>
            <div className='grid lg:flex lg:flex-row grid-cols-1 justify-center justify-items-center lg:gap-x-5 lg:gap-y-9'>
            <div className='lg:h-[595px] lg:w-[640px] lg:mb-10 mb-7 h-[330px] w-[320px]  shadow-2xl flex flex-col rounded-md'>
                    <div className="">
                    <img src={ADVOKESMA} className='object-cover   w-full'  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 mt-1 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[28px]'>Advokasi dan Kesejahteraan Mahasiswa</h1>
                    {/* <div className='lg:mb-10 mb-2 lg:ml-5  ml-2 bg-[#85CC3A] w-1/3  lg:w-[168px] font-medium lg:h-11 rounded grid justify-items-center items-center text-sm'>Meet the team!</div> */}


                </div>
                <div className='lg:h-[595px] lg:w-[640px] lg:mb-10 mb-7 h-[330px] w-[320px] shadow-2xl flex flex-col rounded-md'>
                <div className="">
                    <img src={SOSLING} className='object-cover   w-full'  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 mt-1 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[28px]'>Sosial Dan Lingkungan</h1>
                    {/* <div className='lg:mb-10 mb-2 lg:ml-5  ml-2 bg-[#85CC3A] w-1/3  lg:w-[168px] font-medium lg:h-11 rounded grid justify-items-center items-center text-sm'>Meet the team!</div> */}

                </div>

            </div>
            <div className='grid lg:flex lg:flex-row grid-cols-1 justify-center justify-items-center lg:gap-x-5 lg:gap-y-9'>
            <div className='lg:h-[595px] lg:w-[640px] lg:mb-10 mb-7 h-[330px] w-[320px] shadow-2xl flex flex-col rounded-md'>
                <div className="">
                    <img src={KWU} className='object-cover   w-full'  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 mt-1 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[28px]'>Kewirausahaan</h1>
                    {/* <div className='lg:mb-10 mb-2 lg:ml-5  ml-2 bg-[#85CC3A] w-1/3  lg:w-[168px] font-medium lg:h-11 rounded grid justify-items-center items-center text-sm'>Meet the team!</div> */}

                </div>
            <div className='lg:h-[595px] lg:w-[640px] lg:mb-10 mb-7 h-[330px] w-[320px] shadow-2xl flex flex-col rounded-md'>
                <div className="">
                    <img src={MEDKOM} className='object-cover   w-full'  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 mt-1 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[28px]'>Media Komunikasi Dan Informatika</h1>
                    {/* <div className='lg:mb-10 mb-2 lg:ml-5  ml-2 bg-[#85CC3A] w-1/3  lg:w-[168px] font-medium lg:h-11 rounded grid justify-items-center items-center text-sm'>Meet the team!</div> */}

                </div>


            </div>
            <div className='grid lg:flex lg:flex-row grid-cols-1 justify-center justify-items-center lg:gap-x-5 lg:gap-y-9'>
            <div className='lg:h-[595px] lg:w-[640px] lg:mb-10 mb-7 h-[330px] w-[320px] shadow-2xl flex flex-col rounded-md'>
                <div className="">
                    <img src={PI2} className='object-cover   w-full'  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 mt-1 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[28px]'>Anggota Pengembangan Internal</h1>
                    {/* <div className='lg:mb-10 mb-2 lg:ml-5  ml-2 bg-[#85CC3A] w-1/3  lg:w-[168px] font-medium lg:h-11 rounded grid justify-items-center items-center text-sm'>Meet the team!</div> */}

                </div>
            <div className='lg:h-[595px] lg:w-[640px] lg:mb-10 mb-7 h-[330px] w-[320px] shadow-2xl flex flex-col rounded-md'>
                <div className="">
                    <img src={PI1} className='object-cover   w-full'  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 mt-1 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[28px]'>Anggota Pengembangan Intenal</h1>
                    {/* <div className='lg:mb-10 mb-2 lg:ml-5  ml-2 bg-[#85CC3A] w-1/3  lg:w-[168px] font-medium lg:h-11 rounded grid justify-items-center items-center text-sm'>Meet the team!</div> */}

                </div>


            </div>


        </div>
    </div>
  )
}

export default BPH
