import React from 'react'
import ImgEvent from "../../assets/img/unsplash_ZODcBkEohk8.png"
import { Link } from 'react-router-dom'


const CardEvent = () => {
  return (
    <div className='  flex space-x-5'>
        <div className="w-44  md:w-56">
            <img src={ImgEvent} className='' alt="" />
        </div>
        <div className="items-center  justify-center h-full my-auto ">
            <h1 className='text-sm md:text-xl font-bold text-[#182847] w-44 md:w-96 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ex.</h1>
            <Link to="/" className='text-[#85CC3A]'>selengkapnya</Link>
        </div>
    </div>
  )
}

export default CardEvent
