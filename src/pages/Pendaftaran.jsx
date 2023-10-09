import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/NavbarrAuth";
import Footer from "../components/Footer";
const docUrl =
    "https://kbmdsi.ub.ac.id/FORMULIR PENDAFTARAN STAFF MUDA EMDSI 2023.docx";
const docUrl2 =
    "https://kbmdsi.ub.ac.id/Prosedur Recruitment Staff EMDSI 2023.docx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Pendaftaran = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const downloadFile = (url) => {
        const fileName = url.split("/").pop();
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobURL = window.URL.createObjectURL(new Blob([blob]));
                const aTag = document.createElement("a");
                aTag.href = blobURL;
                aTag.setAttribute("download", fileName);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            });
    };

    const token = localStorage.getItem("token");
    const [staff, setStaff] = useState({});
    const navigate = useNavigate();
    const gradientStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(107, 168, 43, 0.9), rgba(236, 131, 30, 0.6))`,
        /* Tambahan properti CSS lainnya jika diperlukan */
    };

    const fetchData = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios
            .post("https://kbmdsi.galoostore.com/api/me")
            .then((response) => {
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

    const [selectedProdi, setSelectedProdi] = useState("");
    const [selectedDepartemen1, setSelectedDepartemen1] = useState("");
    const [selectedDepartemen2, setSelectedDepartemen2] = useState("");

    const handleProdiChange = (e) => {
        setSelectedProdi(e.target.value);
    };
    const handleDepartemen1Change = (e) => {
        setSelectedDepartemen1(e.target.value);
    };

    const handleDepartemen2Change = (e) => {
        setSelectedDepartemen2(e.target.value);
    };
    useEffect(() => {
        // Periksa apakah pengguna sudah login saat komponen dimount
        if (!token) {
            // Jika tidak ada token, arahkan pengguna ke halaman login
            navigate("/login");
        }

        // Periksa waktu saat komponen dimount
        const currentTime = new Date();
    const openingTime = new Date(currentTime);
    openingTime.setHours(0, 30, 0, 0); // Set jam 00:30:00

    if (currentTime >= openingTime) {
        setIsFormOpen(true);
    }
        fetchData("");
    }, [token, navigate]);

    const [formData, setFormData] = useState({
        nama: "",
        pilihan_prodi: "",
        email: "",
        wa: "",
        line: "",
        pilihan_departemen1: "",
        pilihan_departemen2: "",
        berkas: null,
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("nama", formData.nama);
        formDataToSend.append("pilihan_prodi", selectedProdi); // Gunakan selectedProdi bukan formData.pilihan_prodi
        formDataToSend.append("email", formData.email);
        formDataToSend.append("wa", formData.wa);
        formDataToSend.append("line", formData.line);
        formDataToSend.append("pilihan_departemen1", selectedDepartemen1);
        formDataToSend.append("pilihan_departemen2", selectedDepartemen2);
        formDataToSend.append("berkas", formData.berkas);

        try {
            const response = await axios.post(
                "https://kbmdsi.galoostore.com/api/pendaftaran",
                formDataToSend,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data);
            } else {
               
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear error message when user starts typing
        setErrors({
            ...errors,
            [name]: "",
        });
    };
    const logoutHandler = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios
            .post("https://kbmdsi.galoostore.com/api/logout")
            .then(() => {
                localStorage.removeItem("token");
                navigate("/login");
            });
    };

    return (
        <div className="popup-container">
            {isFormOpen ? (
                <div className="popup">
                    <div className="">
                        <Navbar user={staff} onLogout={logoutHandler} />

                        <div className=" ">
                            <div className="p-10 md:p-20 mt-20 relative">
                                <div className="absolute right-0 top-20 opacity-0 md:opacity-100">
                                    <img src="/img/daftar-kananup.png" alt="" />
                                </div>
                                <div className="absolute left-0 top-20 opacity-0 md:opacity-100">
                                    <img src="/img/daftar-kiriup.png" alt="" />
                                </div>
                                <div className="absolute right-0 bottom-20 opacity-0 md:opacity-100">
                                    <img
                                        src="/img/daftar-kananbot.png"
                                        alt=""
                                    />
                                </div>
                                <div className="absolute left-0 bottom-20 opacity-0 md:opacity-100">
                                    <img src="/img/daftar-kiribot.png" alt="" />
                                </div>

                                <div
                                    style={gradientStyle}
                                    className="w-full md:w-9/10 mx-auto rounded-lg  "
                                >
                                    <div className="relative text-white bg-[url('/img/bg-daftar.png')] bg-repeat bg-contain relative p-5 md:p-14  md:px-10 justify-center items-center mx-auto  bg-blend-overlay">
                                        <h2 className="text-2xl font-semibold mb-4">
                                            Formulir Pendaftaran
                                        </h2>
                                        <div className="md:flex space-x-0 md:space-x-14 space-y-5 md:space-y-0">
                                            <div className="md:w-1/2">
                                                <button
                                                    type="submit"
                                                    className="bg-white block text-[#3366CC] px-3 py-2 rounded-lg"
                                                    onClick={() => {
                                                        downloadFile(docUrl);
                                                    }}
                                                >
                                                    {" "}
                                                    <FontAwesomeIcon
                                                        icon={faDownload}
                                                        className="mr-2 text-[#27326D]"
                                                    />
                                                    Download Formulir
                                                    Pendaftaran Staff Muda
                                                    KBMDSI 2023
                                                </button>
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <button
                                                    className="bg-white text-[#3366CC] block px-3 py-2 rounded-lg"
                                                    onClick={() => {
                                                        downloadFile(docUrl2);
                                                    }}
                                                >
                                                    {" "}
                                                    <FontAwesomeIcon
                                                        icon={faDownload}
                                                        className="mr-2 text-[#27326D]"
                                                    />
                                                    Download Prosedur
                                                    Recruitment Staff EMDSI 2023
                                                </button>
                                            </div>
                                        </div>
                                        <form
                                            className="w-full md:flex  text-black space-x-0 md:space-x-14"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="md:w-1/2">
                                                <div className="mb-4">
                                                    <label
                                                        htmlFor="nama"
                                                        className="block text-lg font-medium text-[#2B6BA8]"
                                                    >
                                                        Nama
                                                    </label>
                                                    <input
                                                        placeholder="Nama"
                                                        type="text"
                                                        id="nama"
                                                        name="nama"
                                                        value={formData.nama}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        className={`mt-1 p-2 w-full border rounded-md ${
                                                            errors.nama
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                    />
                                                    {errors.nama && (
                                                        <p className="text-red-500 text-sm mt-1">
                                                            {errors.nama[0]}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* ... other form fields */}
                                                {/* Input Email */}
                                                <div className="mb-4">
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-lg font-medium text-[#2B6BA8]"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        className={`mt-1 p-2 w-full border rounded-md ${
                                                            errors.email
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                    />
                                                    {errors.email && (
                                                        <p className="text-red-500 text-sm mt-1">
                                                            {errors.email[0]}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Input Pilihan Program Studi */}
                                                <div className="mb-4">
                                                    <label
                                                        htmlFor="pilihan_prodi"
                                                        className="block text-lg font-medium text-[#2B6BA8]"
                                                    >
                                                        Pilihan Program Studi
                                                    </label>
                                                    <div className="flex flex-col rounded-lg bg-white p-3 space-y-3 ">
                                                        {options.map(
                                                            (option) => (
                                                                <div
                                                                    key={option}
                                                                    className="flex "
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        id={
                                                                            option
                                                                        }
                                                                        name="pilihan_prodi"
                                                                        value={
                                                                            option
                                                                        }
                                                                        checked={
                                                                            selectedProdi ===
                                                                            option
                                                                        }
                                                                        onChange={
                                                                            handleProdiChange
                                                                        }
                                                                        className="form-radio text-blue-500 rounded-lg space-y-3 h-5 w-5"
                                                                        required
                                                                    />
                                                                    <label
                                                                        htmlFor={
                                                                            option
                                                                        }
                                                                        className="ml-2 rounded-lg text-lg text-[#2B6BA8]"
                                                                    >
                                                                        {option}
                                                                    </label>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                    {errors.pilihan_prodi && (
                                                        <p className="text-red-500 text-sm mt-1">
                                                            {
                                                                errors
                                                                    .pilihan_prodi[0]
                                                            }
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Input Nomor WhatsApp */}
                                                <div className="mb-4">
                                                    <label
                                                        htmlFor="wa"
                                                        className="block text-lg font-medium text-[#2B6BA8]"
                                                    >
                                                        Nomor WhatsApp
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="wa"
                                                        name="wa"
                                                        value={formData.wa}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        className={`mt-1 p-2 w-full border rounded-md ${
                                                            errors.wa
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                    />
                                                    {errors.wa && (
                                                        <p className="text-red-500 text-lg mt-1">
                                                            {errors.wa[0]}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Input ID LINE */}
                                                <div className="mb-4">
                                                    <label
                                                        htmlFor="line"
                                                        className="block text-lg font-medium text-gray-600"
                                                    >
                                                        ID LINE
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="line"
                                                        name="line"
                                                        value={formData.line}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        className={`mt-1 p-2 w-full border rounded-md ${
                                                            errors.line
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                    />
                                                    {errors.line && (
                                                        <p className="text-red-500 text-sm mt-1">
                                                            {errors.line[0]}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="md:w-1/2 ">
                                                {/* Input Pilihan Departemen 1 */}
                                                <div className="mb-4">
                                                    <label
                                                        htmlFor="pilihan_departemen1"
                                                        className="block text-lg font-medium text-[#2B6BA8]"
                                                    >
                                                        Pilihan Departemen 1
                                                    </label>
                                                    <div className="flex flex-col rounded-lg bg-white p-3 space-y-3">
                                                        {optionsDepartemen.map(
                                                            (option) => (
                                                                <div
                                                                    key={option}
                                                                    className="flex"
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        id={
                                                                            option
                                                                        }
                                                                        name="pilihan_departemen1"
                                                                        value={
                                                                            option
                                                                        }
                                                                        checked={
                                                                            selectedDepartemen1 ===
                                                                            option
                                                                        }
                                                                        onChange={
                                                                            handleDepartemen1Change
                                                                        }
                                                                        className="form-radio text-blue-500 space-y-3 h-5 w-5"
                                                                        required
                                                                    />
                                                                    <label
                                                                        htmlFor={
                                                                            option
                                                                        }
                                                                        className="ml-2 text-lg text-[#2B6BA8]"
                                                                    >
                                                                        {option}
                                                                    </label>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Input Pilihan Departemen 2 */}
                                                <div className="mb-4">
                                                    <label
                                                        htmlFor="pilihan_departemen2"
                                                        className="block text-lg font-medium text-[#2B6BA8]"
                                                    >
                                                        Pilihan Departemen 2
                                                    </label>
                                                    <div className="flex flex-col rounded-lg bg-white p-3 space-y-3">
                                                        {optionsDepartemen.map(
                                                            (option) => (
                                                                <div
                                                                    key={option}
                                                                    className="flex"
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        id={
                                                                            option
                                                                        }
                                                                        name="pilihan_departemen2"
                                                                        value={
                                                                            option
                                                                        }
                                                                        checked={
                                                                            selectedDepartemen2 ===
                                                                            option
                                                                        }
                                                                        onChange={
                                                                            handleDepartemen2Change
                                                                        }
                                                                        className="form-radio text-blue-500 space-y-3 h-5 w-5"
                                                                        required
                                                                    />
                                                                    <label
                                                                        htmlFor={
                                                                            option
                                                                        }
                                                                        className="ml-2 text-lg text-[#2B6BA8]"
                                                                    >
                                                                        {option}
                                                                    </label>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Input Unggahan Berkas */}
                                                <div className="mb-4">
                                                    <label
                                                        htmlFor="berkas"
                                                        className="block text-lg font-medium  text-[#2B6BA8]"
                                                    >
                                                        Unggah Berkas
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="berkas"
                                                        name="berkas"
                                                        value={formData.berkas}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        className={`mt-1 p-2 w-full border rounded-md ${
                                                            errors.line
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="bg-blue-500 block hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
                                                >
                                                    Daftar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Footer />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="message bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded mt-4">
                    Mohon maaf, formulir pendaftaran akan dibuka pada pukul
                    00:30 nanti. Silakan kembali lagi setelah waktu tersebut. <NavLink to="/dashboard" className="text-blue-600">kembali</NavLink>
                    <img src="" alt="" />
                </div>
            )}
        </div>
    );
};

export default Pendaftaran;
