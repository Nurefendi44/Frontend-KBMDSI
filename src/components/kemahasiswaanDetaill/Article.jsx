import React, { useEffect, useState }  from 'react'
import Image from '../../assets/img/kemahasiswaan-detail/Image.svg'
import PrestasiLainnya from  './PestasiLainnya'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Kemahasiswaan from '../../pages/Kemahasiswaan'


const Article = () => {
    const { id } = useParams();
    const [kemahasiswaans, setKemahasiswaans] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://kbmdsi.galoostore.com/api/kemahasiswaans/${id}`
          );
          const kemahasiswaan = response.data.data;
          setKemahasiswaans(kemahasiswaan);
          console.log(kemahasiswaan);
        } catch (error) {
          console.error(error);
        }
      };

      const timeout = setTimeout(() => {
        fetchData();
      }, 1000);

      return () => clearTimeout(timeout);
    }, [id]);

    return (
      <div>
        <div className='w-[80%] mx-auto mt-7 shadow-xl pb-44'>
          <div className='mx-auto lg:mb-16 mb-3'>
            <img
              src={`https://kbmdsi.galoostore.com/public/img/kemahasiswaan/${kemahasiswaans.gambar}`}
              alt=''
              className='object-cover w-1/2 mx-auto flex'
            />
          </div>
          <div className='lg:ml-44 text-[#6B7385]'>
            <div className='flex justify-between lg:w-[885px] w-[90%] py-5'>
              <p className='text-sm ml-4 lg:ml-0 text-[#A4A4A4] w-80 relative '>
                diupload pada <span>{kemahasiswaans.created_at}</span>
                <div className='h-4 w-36 absolute bg-white -mt-4 ml-[174.5px]'></div>
              </p>
              <p>oleh: {kemahasiswaans.penulis} </p>
            </div>

            <h1 className='lg:text-3xl mx-auto text-center lg:text-left text-xl font-bold'>
              {kemahasiswaans.judul}
            </h1>

            <div dangerouslySetInnerHTML={{ __html: kemahasiswaans.isi }} />
            <a
              href={kemahasiswaans.link}
              target='blank'
              className='lg:w-[885px] w-[90%] mx-auto lg:mx-0 lg:text-xl text-sm text-justify my-2 '
            >
              {kemahasiswaans.link}
            </a>
            {/* <div className='flex flex-row lg:gap-4 gap-1 lg:mt-16 mt-6 mb-16 lg:mb-28 ml-3'>
              <div className='lg:text-base text-sm  border-2 text-center lg:px-2 lg:py-1 px-1'>
                Jorem ipsum
              </div>
              <div className='lg:text-base text-sm border-2 text-center lg:px-2 lg:py-1 px-1'>
                Jorem ipsum
              </div>
              <div className='lg:text-base text-sm  border-2 text-center lg:px-2 lg:py-1 px-1'>
                Jorem ipsum
              </div>
            </div> */}
            <PrestasiLainnya />
          </div>
        </div>
      </div>
    );
  };

export default Article
