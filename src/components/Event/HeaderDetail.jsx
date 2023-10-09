import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';
import VectorLink from '../../assets/img/about-us/Vector-Link.png'


const HeaderAboutUs = () => {
    const { id } = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://kbmdsi.galoostore.com/api/events/" + id
          );
          const event = response.data.data;
          setEvents(event);
        } catch (error) {
          console.error(error);
        }
      };


      const timeout = setTimeout(() => {
        console.log("Request timeout");

      }, 1000);

      fetchData();

      return () => clearTimeout(timeout);

    }, [id]);

    return (
      <div>
        <div className='w-full bg-[#2B6BA8] lg:h-[300px] lg:justify-center  relative py-10'>
          <div className="mx-auto lg:flex justify-center font-[Poppins] text-center lg:text-justify lg:space-x-10 text-white">
            <h1 className="">{events.penulis}</h1>
            <h1 className="">{events.created_at}</h1>
          </div>
          <div className="mt-10">
            <h1 className="text-[#85CC3A] text-center lg:text-4xl font-bold px-10 lg:px-56">{events.judul}</h1>
          </div>
        </div>
      </div>
    );
  };


export default HeaderAboutUs
