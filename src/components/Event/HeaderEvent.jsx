import React from 'react'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';


const HeaderEvent = () => {
  return (
    <div>
        <div className='w-full bg-[#2B6BA8] font-["Poppins"]  lg:h-[400px] '>
            <div className='flex lg:flex-row flex-col lg:justify-around '>
                <div className=' lg:text-7xl text-4xl lg:pt-36  lg:-ml-60 flex flex-col text-white   '>
                    <div className='mx-auto lg:mx-0 lg:ml-16 mt-3  font-bold'>
                        Event
                    </div>
                    <div className='flex mt-8  mx-auto lg:mx-0 mb-32 text-sm lg:text-lg lg:h-[95pcx] lg:w-[562px]'>
                        <p>Temukan event - event menarik yang ada disini. Kami menyediakan event - event yang edukatif, kreatif, dan inspiratif. Selamat menikmati!</p>

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

export default HeaderEvent
