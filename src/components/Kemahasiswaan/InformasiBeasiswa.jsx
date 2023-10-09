import React from 'react'
import CardImage from '../../assets/img/kemahasiswaan/CardImage.svg'
import Pagination from './Pagination'

const InformasiBeasiswa = () => {
  return (
    <div id='beasiswa'>
        <div className='mt-24 mb-[58px]'>
        <h1 className='lg:flex lg:justify-center font-["Poppins"] mx-auto text-center  lg:text-6xl text-2xl text-[#050041]  lg:mt-[90px] mt-16 mb-8 lg:mb-[60px]'>Informasi Beasiswa</h1>
            <p className='text-center lg:w-[655px] w-3/4 lg:text-lg mx-auto text-[#050041] '>Dapatkan informasi seputar beasiswa disini.</p>
        </div>
        {/* <div className='grid lg:grid-cols-3 grid-cols-1 justify-items-center lg:px-20'>
            <div className='lg:h-[747px] lg:w-[405px] lg:mb-10 mb-7  w-[320px] shadow-2xl flex flex-col rounded-md'>
                    <div className='h-[219px] w-full rounded-t-md '>
                        <img src={CardImage}  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[26px] text-left'>Beasiswa Pendidikan Indonesia</h1>
                    <p className='lg:ml-[33px] ml-3 text-sm font-["Poppins"] mb-[26px]'>Deadline Pendaftaran : 1 Oktober 2023</p>
                    <p className='lg:ml-[23px] lg:w-[344px] font-["Poppins"] lg:text-lg px-3 text-justify text-sm mb-[31px]'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    <p className='lg:mb-10 mb-5 lg:ml-5  ml-2 text-[#85CC3A] w-1/3   font-medium  grid justify-items-center items-center text-[16px]'>Selengkapnya</p>
            </div>
            <div className='lg:h-[747px] lg:w-[405px] lg:mb-10 mb-7  w-[320px] shadow-2xl flex flex-col rounded-md'>
                    <div className='h-[219px] w-full rounded-t-md '>
                        <img src={CardImage}  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[26px] text-left'>Beasiswa Pendidikan Indonesia</h1>
                    <p className='lg:ml-[33px] ml-3 text-sm font-["Poppins"] mb-[26px]'>Deadline Pendaftaran : 1 Oktober 2023</p>
                    <p className='lg:ml-[23px] lg:w-[344px] font-["Poppins"] lg:text-lg px-3 text-justify text-sm mb-[31px]'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    <p className='lg:mb-10 mb-5 lg:ml-5  ml-2 text-[#85CC3A] w-1/3   font-medium  grid justify-items-center items-center text-[16px]'>Selengkapnya</p>
            </div>
            <div className='lg:h-[747px] lg:w-[405px] lg:mb-10 mb-7  w-[320px] shadow-2xl flex flex-col rounded-md'>
                    <div className='h-[219px] w-full rounded-t-md '>
                        <img src={CardImage}  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[26px] text-left'>Beasiswa Pendidikan Indonesia</h1>
                    <p className='lg:ml-[33px] ml-3 text-sm font-["Poppins"] mb-[26px]'>Deadline Pendaftaran : 1 Oktober 2023</p>
                    <p className='lg:ml-[23px] lg:w-[344px] font-["Poppins"] lg:text-lg px-3 text-justify text-sm mb-[31px]'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    <p className='lg:mb-10 mb-5 lg:ml-5  ml-2 text-[#85CC3A] w-1/3   font-medium  grid justify-items-center items-center text-[16px]'>Selengkapnya</p>
            </div>
            <div className='lg:h-[747px] lg:w-[405px] lg:mb-10 mb-7  w-[320px] shadow-2xl flex flex-col rounded-md'>
                    <div className='h-[219px] w-full rounded-t-md '>
                        <img src={CardImage}  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[26px] text-left'>Beasiswa Pendidikan Indonesia</h1>
                    <p className='lg:ml-[33px] ml-3 text-sm font-["Poppins"] mb-[26px]'>Deadline Pendaftaran : 1 Oktober 2023</p>
                    <p className='lg:ml-[23px] lg:w-[344px] font-["Poppins"] lg:text-lg px-3 text-justify text-sm mb-[31px]'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    <p className='lg:mb-10 mb-5 lg:ml-5  ml-2 text-[#85CC3A] w-1/3   font-medium  grid justify-items-center items-center text-[16px]'>Selengkapnya</p>
            </div>
            <div className='lg:h-[747px] lg:w-[405px] lg:mb-10 mb-7  w-[320px] shadow-2xl flex flex-col rounded-md'>
                    <div className='h-[219px] w-full rounded-t-md '>
                        <img src={CardImage}  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[26px] text-left'>Beasiswa Pendidikan Indonesia</h1>
                    <p className='lg:ml-[33px] ml-3 text-sm font-["Poppins"] mb-[26px]'>Deadline Pendaftaran : 1 Oktober 2023</p>
                    <p className='lg:ml-[23px] lg:w-[344px] font-["Poppins"] lg:text-lg px-3 text-justify text-sm mb-[31px]'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    <p className='lg:mb-10 mb-5 lg:ml-5  ml-2 text-[#85CC3A] w-1/3   font-medium  grid justify-items-center items-center text-[16px]'>Selengkapnya</p>
            </div>
            <div className='lg:h-[747px] lg:w-[405px] lg:mb-10 mb-7  w-[320px] shadow-2xl flex flex-col rounded-md'>
                    <div className='h-[219px] w-full rounded-t-md '>
                        <img src={CardImage}  alt="" />
                    </div>
                    <h1 className='mb-3 lg:h-[107px] lg:w-[609pxl] lg:mt-14 ml-3  lg:ml-7 font-["Poppins"] text-[#050041] font-bold text-lg lg:text-[26px] text-left'>Beasiswa Pendidikan Indonesia</h1>
                    <p className='lg:ml-[33px] ml-3 text-sm font-["Poppins"] mb-[26px]'>Deadline Pendaftaran : 1 Oktober 2023</p>
                    <p className='lg:ml-[23px] lg:w-[344px] font-["Poppins"] lg:text-lg px-3 text-justify text-sm mb-[31px]'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    <p className='lg:mb-10 mb-5 lg:ml-5  ml-2 text-[#85CC3A] w-1/3   font-medium  grid justify-items-center items-center text-[16px]'>Selengkapnya</p>
            </div>

        </div> */}
        <div className="">
            <p className='text-center'>Belum ada informasi beasiswa tersedia saat ini</p>
        </div>
        <Pagination/>
    </div>
  )
}

export default InformasiBeasiswa
