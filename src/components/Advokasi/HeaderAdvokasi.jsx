import React from 'react'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';


const HeaderAdvokasi = () => {
  return (
    <div>
        <div className='w-full bg-[#2B6BA8] font-["Poppins"]  lg:h-[400px] px-5 '>
            <div className='flex lg:flex-row flex-col lg:justify-around '>
                <div className=' lg:text-7xl text-4xl lg:pt-36  lg:-ml-60 flex flex-col text-white   '>
                    <div className='mx-auto lg:mx-0 lg:ml-16 mt-3  font-bold'>
                        Advokasi
                    </div>
                    <div className='flex mt-8  mx-auto lg:mx-0 mb-32 text-sm lg:text-lg lg:h-[95pcx] lg:w-[562px]'>
                        <p>Temukan informasi perkuliahan kamu disini, tetap semangat kuliah ya!</p>

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

export default HeaderAdvokasi
