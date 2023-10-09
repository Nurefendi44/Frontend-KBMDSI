import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import HeaderDetail from './HeaderDetail'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';
import CardEvent from '../Event/CardEvent';


const Artikel_Detail = () => {
    const { id } = useParams();
    const [artikels, setArtikels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://kbmdsi.galoostore.com/api/artikels/" + id
          );
          const artikel = response.data.data;
          setArtikels(artikel);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };

      const timeout = setTimeout(() => {
        fetchData();
      }, 1000);

      return () => clearTimeout(timeout);
    }, [id]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>

        <div className='font-[Poppins]'>
          <div className="gambar px-10  py-20 ">
            <img
              src={
                "https://kbmdsi.galoostore.com/public/img/artikel/" +
                artikels.gambar
              }
              className='mx-auto w-1/2'
              alt=""
            />
          </div>
          <div className="px-10 md:px-44">
            <p className='text-3xl font-bold'>{artikels.judul}</p>
            <p className='text-justify'>
              <div dangerouslySetInnerHTML={{ __html: artikels.isi }} />
            </p>
          </div>

          {/* <div className="px-10 md:px-44 py-10 space-y-5">
          <h1 className="text-2xl text-[#192335] py-5 font-bold">Event Lainnya</h1>
              <CardEvent/>
              <CardEvent/>
              <CardEvent/>
          </div> */}
        </div>
      </div>
    );
  };



export default Artikel_Detail
