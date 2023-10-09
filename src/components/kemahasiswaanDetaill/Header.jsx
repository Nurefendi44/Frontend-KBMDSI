import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const { id } = useParams();
  const [kemahasiswaans, setKemahasiswaans] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://kbmdsi.galoostore.com/api/kemahasiswaans/${id}`
        );
        const kemahasiswaan = response.data.data;

        if (isMounted) {
          setKemahasiswaans(kemahasiswaan);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);

        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setIsLoading(false);
      }
    }, 1000);

    fetchData();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [id]);

  return (
    <div>
      <div className='w-full bg-[#2B6BA8] lg:h-[300px] lg:justify-center  relative py-10'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="mx-auto  lg:flex justify-center font-[Poppins] text-center lg:text-justify lg:space-x-10 text-white">
            <h1>{kemahasiswaans.penulis}</h1>
            <h1>{kemahasiswaans.created_at}</h1>
          </div>
        )}
        <div className="mt-10">
          <h1 className="text-[#85CC3A] text-center lg:text-4xl font-bold px-10 mx-auto lg:w-[790px]">{kemahasiswaans.judul}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
