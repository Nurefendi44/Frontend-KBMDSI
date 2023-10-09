import React from 'react'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';
import VectorLink from '../../assets/img/about-us/Vector-Link.png'

const HeaderDetail = () => {
  return (
    <div>
      <div className='w-full bg-[#2B6BA8] font-["Poppins"] font-bold lg:h-[400px] '>
            <div className='flex lg:flex-row flex-col lg:justify-around '>
                <div className=' lg:text-7xl text-4xl lg:pt-36  lg:-ml-60 flex flex-col text-white   '>
                    <div className='mx-auto mt-3'>
                        Meet the Team!
                    </div>
                    <div className='flex mt-8 ml-10 mb-32 text-base lg:text-4xl lg:h-[95pcx] lg:w-[562px]'>
                        <h1 className='mx-auto'>Departemen Pengembangan Sumber Daya Manusia</h1>

                    </div>
                </div>
                <div className='flex justify-center' >
                    <img src={Image} alt="" className='-mt-24 lg:-ml-[370px] lg:mt-[100px] absolute lg:h-[350px] lg:w-[550px] h-[150px]' />
                </div>


            </div>
        </div>
    </div>
  )
}

export default HeaderDetail