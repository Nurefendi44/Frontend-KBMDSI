import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import PrestasiImage from '../../assets/img/kemahasiswaan/PrestasiImage.svg'
import Pagination from './Pagination'
import Image from '../../assets/img/kemahasiswaan/Image.svg'
import ArteriskImage from '../../assets/img/kemahasiswaan/Quotes.svg'
import CardMahasiswa from './CardMahasiswa'



const PrestasiMahasiswa = () => {
    const [kemahasiswaans, setKemahasiswaans] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [kemahasiswaansPerPage, setKemahasiswaansPerPage] = useState(3);

    const navigate = useNavigate();

    useEffect(() => {
      let cancelRequest = false;

      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://kbmdsi.galoostore.com/api/kemahasiswaans"
          );
          if (!cancelRequest) {
            setIsLoading(false);
            const kemahasiswaan = response.data.data;
            setKemahasiswaans(kemahasiswaan);
            console.log(this.props.match.params._id);
          }
        } catch (error) {
          console.error(error);
        }
      };

      const timeoutId = setTimeout(() => {

        cancelRequest = true;
        setIsLoading(false);
      }, 1000);

      fetchData();

      return () => {
        clearTimeout(timeoutId);
      };
    }, []);

    const lastKemahasiswaanIndex = currentPage * kemahasiswaansPerPage;
    const firstKemahasiswaanIndex = lastKemahasiswaanIndex - kemahasiswaansPerPage;
    const currentKemahasiswaans = kemahasiswaans.slice(firstKemahasiswaanIndex, lastKemahasiswaanIndex);

    return (
      <div id='prestasi'>
        <div className='lg:mb-[58px] mb-9'>
          <h1 className='lg:flex lg:justify-center font-["Poppins"] mx-auto text-center  lg:text-6xl text-2xl text-[#050041]  lg:mt-[90px] mt-16 mb-8 lg:mb-[60px]'>Prestasi Mahasiswa</h1>
          <p className='text-center lg:w-[655px] w-3/4 lg:text-lg mx-auto text-[#050041] '>Apresiasi kepada mahasiswa FILKOM UB khususnya Departemen Sistem Informasi yang berprestasi baik di lingkup akademik maupun non-akademik.</p>
        </div>
        <div className='w-full bg-[#F2EDE7] lg:pt-[68px] pt-6'>
          <div className='grid lg:grid-cols-3 grid-cols-1 lg:px-24 px-3  mb-10 lg:mb-0   justify-items-center '>
            {isLoading ? (
              <p>Loading...</p>
            ) : kemahasiswaans.length === 0 ? (
              <p className='text-center'>Belum ada data saat ini</p>
            ) : (
              <CardMahasiswa kemahasiswaans={currentKemahasiswaans} />
            )}
          </div>
          <Pagination
            totalKemahasiswaans={kemahasiswaans.length}
            kemahasiswaansPerPage={kemahasiswaansPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div className='pt-16'>
          <h1 className='flex justify-center font-["Poppins"] lg:text-6xl text-[#85CC3A] font-bold mb-16'>Apa kata mereka</h1>
          <div className=''>
            <p className='text-center'>Belum ada data saat ini</p>
          </div>
        </div>
      </div>
    );
  };




export default PrestasiMahasiswa
