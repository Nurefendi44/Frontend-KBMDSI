import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavbarrAuth";
import Footer from "../components/Footer";


const EditPendaftaran = () => {
    const token = localStorage.getItem("token");
    const [staff, setStaff] = useState({});
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nama: "",
        pilihan_prodi: "",
        email: "",
        wa: "",
        line: "",
        pilihan_departemen1: "",
        pilihan_departemen2: "",
        berkas: "",
    });

    const fetchData2 = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios.post("https://kbmdsi.galoostore.com/api/me").then((response) => {
            setStaff(response.data);
        });
    };

    const options = [
        "Sistem Informasi",
        "Teknologi Informasi",
        "Pendidikan Teknologi Informasi",
    ];
    const optionsDepartemen = [
        "Sekretaris",
        "PSDM",
        "ADVOKESMA",
        "KP",
        "MEDKOMINFO",
        "KWU",
    ];
    const gradientStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(107, 168, 43, 0.9), rgba(236, 131, 30, 0.6))`,
        /* Tambahan properti CSS lainnya jika diperlukan */
    };
    const [selectedProdi, setSelectedProdi] = useState("");
    const [selectedDepartemen1, setSelectedDepartemen1] = useState("");
    const [selectedDepartemen2, setSelectedDepartemen2] = useState("");
    const handleProdiChange = (e) => {
        setFormData({
            ...formData,
            pilihan_prodi: e.target.value,
        });
    };
    const handleDepartemen1Change = (e) => {
        setFormData({
            ...formData,
            pilihan_departemen1: e.target.value,
        });
    };

    const handleDepartemen2Change = (e) => {
        setFormData({
            ...formData,
            pilihan_departemen2: e.target.value,
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                // Jika tidak ada token, arahkan pengguna ke halaman login
                navigate("/login");
            }
            try {
                const response = await axios.get(
                    "https://kbmdsi.galoostore.com/api/riwayat",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                setFormData(response.data);
            } catch (error) {

            }
        };

        fetchData();
        fetchData2();
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({
            ...errors,
            [name]: '',
          });
    };

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                "https://kbmdsi.galoostore.com/api/edit",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            // Tindakan setelah pendaftaran berhasil diperbarui, misalnya menavigasi pengguna ke halaman lain
            navigate('/dashboard');
        } catch (error) {
            
            // Handle error, misalnya menampilkan pesan kesalahan kepada pengguna
        }
    };
    const logoutHandler = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios.post("https://kbmdsi.galoostore.com/api/logout").then(() => {
            localStorage.removeItem("token");
            navigate("/login");
        });
    };


    return (
        <div className="">
            <Navbar user={staff} onLogout={logoutHandler}/>
             <div className=" ">
        <div className="p-10 md:p-20 relative">

            <div className='absolute right-0 top-20 opacity-0 md:opacity-100'>
                <img src="/img/daftar-kananup.png" alt="" />
            </div>
            <div className='absolute left-0 top-20 opacity-0 md:opacity-100'>
                <img src="/img/daftar-kiriup.png" alt="" />
            </div>
            <div className='absolute right-0 bottom-20 opacity-0 md:opacity-100'>
                <img src="/img/daftar-kananbot.png" alt="" />
            </div>
            <div className='absolute left-0 bottom-20 opacity-0 md:opacity-100'>
                <img src="/img/daftar-kiribot.png" alt="" />
            </div>


        <div style={gradientStyle} className="w-full md:w-9/10 mx-auto rounded-lg  ">
    <div className="relative text-white bg-[url('/img/bg-daftar.png')] bg-repeat bg-contain relative p-5 md:p-14  md:px-10 justify-center items-center mx-auto  bg-blend-overlay">
    <h2 className="text-2xl font-semibold mb-4">Formulir Pendaftaran</h2>

      <form className='md:flex  text-black space-x-0 md:space-x-14' onSubmit={handleSubmit}>
        <div className="md:w-1/2">
        <div className="mb-4">
          <label htmlFor="nama" className="block text-lg font-medium text-[#2B6BA8]">
            Nama
          </label>
          <input
          placeholder='Nama'
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            required
            className={`mt-1 p-2 w-full border rounded-md ${errors.nama ? 'border-red-500' : ''}`}
          />
          {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama[0]}</p>}
        </div>


        {/* ... other form fields */}
        {/* Input Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-[#2B6BA8]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
        </div>

         {/* Input Pilihan Program Studi */}
      <div className="mb-4">
        <label htmlFor="pilihan_prodi" className="block text-lg font-medium text-[#2B6BA8]">
          Pilihan Program Studi
        </label>
        <div className="flex flex-col rounded-lg bg-white p-3 space-y-3 ">
          {options.map((option) => (
            <div key={option} className="flex ">
              <input
                type="radio"
                id={option}
                name="pilihan_prodi"
                value={option}
                checked={formData.pilihan_prodi === option}
                onChange={handleProdiChange}
                className="form-radio text-blue-500 rounded-lg space-y-3 h-5 w-5"
                 required
              />
              <label htmlFor={option} className="ml-2 rounded-lg text-lg text-[#2B6BA8]">
                {option}
              </label>
            </div>
          ))}
        </div>
        {errors.pilihan_prodi && <p className="text-red-500 text-sm mt-1">{errors.pilihan_prodi[0]}</p>}
      </div>

        {/* Input Nomor WhatsApp */}
<div className="mb-4">
          <label htmlFor="wa" className="block text-lg font-medium text-[#2B6BA8]">
            Nomor WhatsApp
          </label>
          <input
            type="text"
            id="wa"
            name="wa"
            value={formData.wa}
            onChange={handleInputChange}
            required
            className={`mt-1 p-2 w-full border rounded-md ${errors.wa ? 'border-red-500' : ''}`}
          />
          {errors.wa && <p className="text-red-500 text-lg mt-1">{errors.wa[0]}</p>}
        </div>


        {/* Input ID LINE */}
 <div className="mb-4">
          <label htmlFor="line" className="block text-lg font-medium text-gray-600">
            ID LINE
          </label>
          <input
            type="text"
            id="line"
            name="line"
            value={formData.line}
            onChange={handleInputChange}
            required
            className={`mt-1 p-2 w-full border rounded-md ${errors.line ? 'border-red-500' : ''}`}
          />
          {errors.line && <p className="text-red-500 text-sm mt-1">{errors.line[0]}</p>}
        </div>
        </div>

        <div className="md:w-1/2 ">
             {/* Input Pilihan Departemen 1 */}
         <div className="mb-4">
          <label htmlFor="pilihan_departemen1" className="block text-lg font-medium text-[#2B6BA8]">
            Pilihan Departemen 1
          </label>
          <div className="flex flex-col rounded-lg bg-white p-3 space-y-3">
            {optionsDepartemen.map((option) => (
              <div key={option} className="flex">
                <input
                  type="radio"
                  id={option}
                  name="pilihan_departemen1"
                  value={option}
                  checked={formData.pilihan_departemen1 === option}
                  onChange={handleDepartemen1Change}
                  className="form-radio text-blue-500 space-y-3 h-5 w-5"
                  required
                />
                <label htmlFor={option} className="ml-2 text-lg text-[#2B6BA8]">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

         {/* Input Pilihan Departemen 2 */}
         <div className="mb-4">
          <label htmlFor="pilihan_departemen2" className="block text-lg font-medium text-[#2B6BA8]">
            Pilihan Departemen 2
          </label>
          <div className="flex flex-col rounded-lg bg-white p-3 space-y-3">
            {optionsDepartemen.map((option) => (
              <div key={option} className="flex">
                <input
                  type="radio"
                  id={option}
                  name="pilihan_departemen2"
                  value={option}
                  checked={formData.pilihan_departemen2 === option}
                  onChange={handleDepartemen2Change}
                  className="form-radio text-blue-500 space-y-3 h-5 w-5"
                  required
                />
                <label htmlFor={option} className="ml-2 text-lg text-[#2B6BA8]">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>



        {/* Input Unggahan Berkas */}
        <div className="mb-4">
          <label htmlFor="berkas" className="block text-lg font-medium  text-[#2B6BA8]">
            Unggah Berkas
          </label>
          <input
            type="text"
            id="berkas"
            name="berkas"
            value={formData.berkas}
            onChange={handleInputChange}
            required
            className={`mt-1 p-2 w-full border rounded-md ${errors.line ? 'border-red-500' : ''}`}
          />

        </div>

        <button
          type="submit"
          className="bg-blue-500 block hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Update
        </button>
        </div>
      </form>
    </div>

    </div>
        </div>



    </div>
        </div>

    );
};

export default EditPendaftaran;
