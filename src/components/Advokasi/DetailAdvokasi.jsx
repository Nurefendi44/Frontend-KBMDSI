import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';



const DetailAdvokasi = () => {
    const { id } = useParams();
    const [advokasis, setAdvokasis] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      let isMounted = true;

      const fetchData = () => {
        axios
          .get("https://kbmdsi.galoostore.com/api/advokasis/" + id)
          .then(function (response) {
            const advokasi = response.data.data;
            if (isMounted) {
              setAdvokasis(advokasi);
              setIsLoading(false);
            }
          })
          .catch(function (error) {

            console.error(error);
            if (isMounted) {
              setIsLoading(false);
            }
          });
      };


      const timeout = setTimeout(() => {
        if (isMounted) {
          setIsLoading(false);
        }
        console.log("Request timeout");
      }, 1000);

      fetchData();
      return () => {
        clearTimeout(timeout);
        isMounted = false;
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
                  "https://pemilwa.000webhostapp.com/public/img/advokasi/" +
                  advokasis.gambar
                }
                alt=""
              />
            </div>
            <div className="px-10 md:px-44">
              <p className="text-3xl font-bold">{advokasis.judul}</p>
              <p className="text-justify">
                <div dangerouslySetInnerHTML={{ __html: advokasis.isi }} />
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };


export default DetailAdvokasi
