import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';
import CardEvent from './CardEvent';

const Event = () => {
    const { id } = useParams();
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://kbmdsi.galoostore.com/api/events/" + id
          );
          const event = response.data.data;
          setEvents(event);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };


      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      fetchData();
      return () => {
        clearTimeout(timeout);
      };
    }, [id]);

    return (
      <div className="font-[Poppins]">
        {isLoading ? (
          <p className="mx-auto text-center">Loading...</p>
        ) : (
          <div>
            <div className="gambar px-10  py-20 ">
              <img
                className="w-96 rounded-md mx-auto"
                src={
                  "https://kbmdsi.galoostore.com/public/img/event/" +
                  events.gambar
                }
                alt=""
              />
            </div>
            <div className="px-10 md:px-44">
              <p className="text-3xl font-bold">{events.judul}</p>
              <p className="text-justify">
                <div dangerouslySetInnerHTML={{ __html: events.isi }} />
              </p>
              <a href="">{events.link}</a>
            </div>
          </div>
        )}

        {/* <div className="px-10 md:px-44 py-10 space-y-5">
          <h1 className="text-2xl text-[#192335] py-5 font-bold">Event Lainnya</h1>
          <CardEvent/>
          <CardEvent/>
          <CardEvent/>
        </div> */}
      </div>
    );
  };


export default Event
