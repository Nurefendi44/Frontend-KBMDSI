import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import image from '../../assets/img/event/image.svg'
import location from '../../assets/img/event/location.svg'
import CardAdvokasi1 from './CardAdvokasi'

import Pagination from './Pagination'




const Advokasi = () => {
    const [advokasis, setAdvokasis] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [advokasisPerPage, setAdvokasisPerPage] = useState(3);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://kbmdsi.galoostore.com/api/advokasis"
          );


          setTimeout(() => {
            const advokasi = response.data.data;
            setAdvokasis(advokasi);
            setIsLoading(false);
          }, 1000);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };

      fetchData();
    }, []);

    const lastAdvokasiIndex = currentPage * advokasisPerPage;
    const firstAdvokasiIndex = lastAdvokasiIndex - advokasisPerPage;
    const currentAdvokasis = advokasis.slice(firstAdvokasiIndex, lastAdvokasiIndex);

    return (
      <div>
        <div className='flex lg:flex-row flex-col justify-center gap-10 mt-56 px-4 lg:px-0'>
          {isLoading ? (
            <p className='text-center'>Loading...</p>
          ) : advokasis.length === 0 ? (
            <p className='text-center'>Belum ada informasi akademik saat ini</p>
          ) : (
            <CardAdvokasi1 advokasis={currentAdvokasis} />
          )}
        </div>
        <Pagination
          totalAdvokasis={advokasis.length}
          advokasisPerPage={advokasisPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    );
  };


export default Advokasi
