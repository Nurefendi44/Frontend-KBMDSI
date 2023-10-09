import React from 'react'
import PaginationRight from '../../assets/img/kemahasiswaan/PaginationArrowRight.svg'
import Kemahasiswaan from '../../pages/Kemahasiswaan';
import "./pagination.css";

const Pagination = ({totalArtikels, artikelsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalArtikels/artikelsPerPage); i++) {
        pages.push(i)

    }
  return (
    <div>
        <div className=' w-fit mx-auto py-5 '>
                <div className='flex gap-x-4  '>
                    {pages.map((page, index)=>{
                        return <button onClick={()=>setCurrentPage(page)} className={page == currentPage ? " bg-[#85CC3A] h-[45px] w-[45px]  rounded-md pt-[10px]  grid justify-items-center" : 'h-[45px] w-[45px] bg-white rounded-md pt-[10px]  grid justify-items-center'} key={index}>{page}</button>
                    })}

                </div>
            </div>
    </div>
  )
}

export default Pagination
