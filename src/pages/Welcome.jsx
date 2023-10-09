import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavbarrAuth';
import RiwayatPendaftaran from '../components/RiwayatPendaftaran';
import Footer from '../components/Footer';
import Example from '../components/Example';


const Welcome = () => {
    const [greeting, setGreeting] = useState('');
    const [staff, setStaff] = useState({});
    const [hasRegistered, setHasRegistered] = useState(false); // Menambahkan state baru untuk menentukan apakah pengguna telah mendaftar atau tidak
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post('https://kbmdsi.galoostore.com/api/me')
        .then((response) => {
            setStaff(response.data);

        })
    }

    useEffect(() => {
        if(!token){
            navigate('/login')
        }
        fetchData('');

        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        let newGreeting = '';

        if (currentHour >= 5 && currentHour < 10) {
            newGreeting = 'Selamat Pagi';
        } else if (currentHour >= 10 && currentHour < 15) {
            newGreeting = 'Selamat Siang';
        } else if (currentHour >= 15 && currentHour < 18) {
            newGreeting = 'Selamat Sore';
        } else {
            newGreeting = 'Selamat Malam';
        }

        setGreeting(newGreeting);
    }, []);

    const logoutHandler = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post('https://kbmdsi.galoostore.com/api/logout')
        .then(() => {
            localStorage.removeItem("token");
            navigate('/login')
        })
    }

    return (
        <div className='bg-slate-50 '>
            <Navbar user={staff} onLogout={logoutHandler}/>
            <div className='mt-20 p-5 h-auto md:px-20'>
                <div className="greeting p-5 md:p-10 rounded-lg bg-white ">
                <p className='text-xl font-bold'>{greeting} {staff.name}</p>

                <h1 className=' font-semibold mt-5'>Tenggat waktu pendaftaran oprec staff muda KBMDSI:</h1>
                <Example/>
                <div className="w-full md:w-3/4  mt-5">
                    <p className='text-justify text-md text-gray-500 font-semibold'>Website KBMDSI merupakan layanan online dari Himpunan KBMDSI yang menyediakan informasi seputar artikel, kemahasiswaa, dan event. Portal dashboard
                         ini kami sediakan untuk user sebagai kebutuhan - kebutuhan seperti pendaftaran, request postingan artikel di website, ataupun pembelian merchandise. Ayo temukan pengalaman barumu di sini!  </p>
                </div>
                </div>

                <RiwayatPendaftaran />
                {/* <button onClick={logoutHandler} className='bg-blue-500 text-white'>keluar</button> */}
            </div>
            <div className=" w-full">
                <Footer className="bottom-0"/>
            </div>
        </div>
    )
}

export default Welcome;
