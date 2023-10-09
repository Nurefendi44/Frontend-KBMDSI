import React from 'react'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';
import VectorLink from '../../assets/img/about-us/Vector-Link.png'


const HeaderAboutUs = () => {
  return (
    <div>
      <div className='w-full bg-[#2B6BA8] lg:h-[400px]'>
            <div className='flex lg:flex-row flex-col lg:justify-around '>
                <div className=' lg:text-7xl text-5xl lg:pt-36  lg:-ml-60 flex flex-col text-white   '>
                    <div className='mx-auto mt-3'>
                        About us
                    </div>
                    <div className='flex flex-row  mt-8 ml-10'>
                        <div className='w-[2px] h-20 bg-green-500'>

                        </div>
                        <div className='pl-5 mb-32 lg:mb-16 gap-2 flex flex-col text-sm'>
                            <div className='flex flex-row gap-3'>
                                <a className='scroll-smooth' href='#visi'>Visi dan Misi </a>
                                <img src={VectorLink} className='h-3 w-3 mt-[4px]' alt="" />
                            </div>
                            <div className='flex flex-row gap-3'>
                                <a href='#logo'>Logo KBMDSI</a>
                                <img src={VectorLink} className='h-3 w-3 mt-[4px]' alt="" />
                            </div >
                            <div className='flex flex-row gap-3'>
                                <a href='#struktur'>Struktur Organisasi</a>
                                <img src={VectorLink} className='h-3 w-3 mt-[4px]' alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex justify-center' >
                    <img src={Image} alt="" className='-mt-24 lg:-ml-[370px] lg:mt-[100px] z-10 absolute lg:h-[350px] lg:w-[550px] h-[150px]' />
                </div>


            </div>
        </div>
    </div>
  )
}

export default HeaderAboutUs
