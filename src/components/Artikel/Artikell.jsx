import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CardArtikel from './CardArtikel'
import Pagination from './Pagination'



const Artikell = () => {
  const [artikels, setArtikels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [artikelsPerPage, setArtikelsPerPage] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get("https://kbmdsi.galoostore.com/api/artikels")
        .then(function (response) {
          setIsLoading(false);
          const artikel = response.data.data;
          setArtikels(artikel);
          console.log(this.props.match.params._id);
        })
        .catch(function (error) {
          setIsLoading(false);
          console.error(error);
        });
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const lastArtikelIndex = currentPage * artikelsPerPage;
  const firstArtikelIndex = lastArtikelIndex - artikelsPerPage;
  const currentArtikels = artikels.slice(firstArtikelIndex, lastArtikelIndex);

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto justify-items-center mt-44 gap-y-20 py-20">
        {isLoading ? (
          <p>Loading...</p>
        ) : artikels.length === 0 ? (
          <p>Belum ada artikel saat ini</p>
        ) : (
          <CardArtikel artikels={currentArtikels} />
        )}
      </div>
      <div className="">
        <Pagination
          totalArtikels={artikels.length}
          artikelsPerPage={artikelsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};


export default Artikell
