import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';


const RiwayatPendaftaran = () => {
    const [dataPendaftaran, setDataPendaftaran] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://kbmdsi.galoostore.com/api/riwayat', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setDataPendaftaran(response.data);
            } catch (error) {
               
            }
        };


        fetchData();
    }, []);
    if (dataPendaftaran.length === 0) {
        return <div className='text-center'>Belum ada riwayat pendaftaran.</div>; // Tampilkan pesan jika tidak ada riwayat pendaftaran
    }

    return (
        <div className='px-10'>
            <h2 className="text-2xl font-bold mb-4 text-center">Riwayat Pendaftaran</h2>
            <div className="overflow-scroll  flex ">
            <table className="w-1/2 border-collapse border border-gray-300 mx-auto">
                <thead>
                    <tr className="bg-[#2B6BA8] text-white">
                        <th className="py-2 px-4 border border-gray-300 w-44">Kode Pendaftaran</th>
                        <th className="py-2 px-4 border border-gray-300">Nama</th>
                        <th className="py-2 px-4 border border-gray-300 w-44">Aksi</th>
                    </tr>
                </thead>
                <tbody>

                        <tr  className={dataPendaftaran % 2 === 0 ? 'bg-[#85CC3A]' : 'bg-white'}>
                            <td className="py-2 px-4 border border-gray-300">{dataPendaftaran.id}</td>
                            <td className="py-2 px-4 border border-gray-300">{dataPendaftaran.nama}</td>
                            <td className="py-2 px-4 border border-gray-300"><NavLink to="/edit">Edit</NavLink></td>
                        </tr>

                </tbody>
            </table>
            </div>

        </div>
    );
};

export default RiwayatPendaftaran;
