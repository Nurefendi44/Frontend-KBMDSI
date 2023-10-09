import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbarr";



const Registrasi = () => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(107, 168, 43, 0.9), rgba(236, 131, 30, 0.6))`,
        /* Tambahan properti CSS lainnya jika diperlukan */
    };
    const [name, setName] = useState("");
    const [nim, setNim] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("dashboard");
        }
    }, []);

    const registerHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("nim", nim);
        formData.append("email", email);
        formData.append("password", password);

        try {
            await axios.post("https://kbmdsi.galoostore.com/api/register", formData);
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.data) {
                setValidation(error.response.data);
            }
        }
    };
    return (
        <div className="">
            <Navbar/>
            <div className="relative mt-20 md:mt-20 py-44  text-white bg-[url('/img/login.png')] bg-no-repeat bg-cover h-[48rem] md:h-[40rem] relative  md:px-10 justify-center items-center mx-auto flex">
                <div className="  pl-20 pb-10 pr-20 relative">
                    <div
                        className="md:p-12 p-8  rounded-[30px] rounded shadow-md md:w-[30rem] justify-center items-center mx-auto my-auto "
                        style={gradientStyle}
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-center">
                        STAFF MUDA KBMDSI 2023’s OPEN REGISTRATION
                        </h2>
                        <form onSubmit={registerHandler}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium "
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 p-2 w-full text-black border rounded-[15px]"
                                />
                                {validation.name && (
                                    <small>{validation.name[0]}</small>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="nim"
                                    className="block text-sm font-medium "
                                >
                                    NIM
                                </label>
                                <input
                                    type="text"
                                    id="nim"
                                    name="nim"
                                    value={nim}
                                    onChange={(e) => setNim(e.target.value)}
                                    className="mt-1 p-2 w-full text-black border rounded-[15px]"
                                />
                                {validation.nim && (
                                    <small>{validation.nim[0]}</small>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium "
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 p-2 w-full text-black border rounded-[15px]"
                                />
                                {validation.email && (
                                    <small>{validation.email[0]}</small>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium "
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="mt-1 p-2 w-full text-black border rounded-[15px]"
                                />
                                {validation.password && (
                                    <small>{validation.password[0]}</small>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="bg-slate-200 hover:bg-blue-600 text-slate-800 font-semibold py-2 px-4 rounded-[15px] flex mx-auto focus:outline-none focus:ring focus:ring-blue-200"
                            >
                                Daftar
                            </button>
                            <p className="text-center font-bold">Already have an account?   <NavLink to='/login' className="text-black">
                    Login</NavLink></p>
                        </form>
                    </div>
                    <div className="absolute bottom-0 right-0 w-16">
                        <img src="/img/hijau.png" alt="" />
                    </div>
                    <div className="absolute top-0 left-0 w-20">
                        <img src="/img/merah.png" alt="" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 md:w-36">
                    <img src="/img/bawah.png" alt="" />
                </div>
                <div className="absolute top-0 right-0 w-0 md:w-36">
                    <img src="/img/atas.png" alt="" />
                </div>
            </div>



            <div className="">
                <Footer />
            </div>
        </div>
    );
};

export default Registrasi;
