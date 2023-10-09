import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';
import VectorLink from '../../assets/img/about-us/Vector-Link.png'


const HeaderDetail = () => {
    const { id } = useParams();
    const [artikels, setArtikels] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://kbmdsi.galoostore.com/api/artikels/" + id
          );
          const artikel = response.data.data;
          setArtikels(artikel);
        } catch (error) {

          console.error(error);
        }
      };

      const timeoutId = setTimeout(() => {

        console.log("Request timeout");
      }, 1000);

      fetchData();

      return () => {
        clearTimeout(timeoutId);
      };
    }, [id]);

    return (
      <div>
        <div className='w-full bg-[#2B6BA8] lg:h-[300px] lg:justify-center  relative py-10'>
          <div className="mx-auto text-center lg:text-justify lg:flex justify-center font-[Poppins] lg:space-x-10 text-white">
            <h1 className="">{artikels.penulis}</h1>
            <h1 className="">{artikels.created_at}</h1>
          </div>
          <div className="mt-10">
            <h1 className="text-[#85CC3A] text-center lg:text-4xl font-bold px-10 lg:px-56">{artikels.judul}</h1>
          </div>
        </div>
      </div>
    );
  };


export default HeaderDetail
