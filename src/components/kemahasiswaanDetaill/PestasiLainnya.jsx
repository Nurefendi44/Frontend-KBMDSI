import React from 'react'
import CardImage from '../../assets/img/kemahasiswaan-detail/CardImage.svg'
const PestasiLainnya = () => {
  return (
    <div >
        <h1 className='lg:text-3xl text-2xl ml-3 lg:ml-0 text-[#192335] font-bold lg:mb-11 mb-9'>Prestasi lainnya</h1>
        <div className='flex flex-col gap-y-7'>
            <div className='   shadow-4xl flex lg:flex-row flex-col rounded-sm'>
                        <div className='rounded-t-md mx-auto lg:mx-0 '>
                            <img src={CardImage}  alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='lg:w-[505px] text-[#050041] lg:ml-8 ml-2 lg:mt-8 mt-3 font-bold lg:text-xl text-base text-left'>PERWAKILAN MAHASISWA DEPARTEMEN SISTEM INFORMASI MENJADI JUARA 1 PADA GEMASTIK 2023</h1>
                            <p className=' text-[#85CC3A] font-["Poppins"] lg:ml-8 ml-2 mt-2   text-sm font-medium'>Selengkapnya</p>
                        </div>
                        
            </div>
            <div className='   shadow-4xl flex lg:flex-row flex-col rounded-sm'>
                        <div className='rounded-t-md mx-auto lg:mx-0 '>
                            <img src={CardImage}  alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='lg:w-[505px] text-[#050041] lg:ml-8 ml-2 lg:mt-8 mt-3 font-bold lg:text-xl text-base text-left'>PERWAKILAN MAHASISWA DEPARTEMEN SISTEM INFORMASI MENJADI JUARA 1 PADA GEMASTIK 2023</h1>
                            <p className=' text-[#85CC3A] font-["Poppins"] lg:ml-8 ml-2 mt-2  text-sm font-medium'>Selengkapnya</p>
                        </div>
                        
            </div>
            
            
        </div>
    </div>
  )
}

export default PestasiLainnya