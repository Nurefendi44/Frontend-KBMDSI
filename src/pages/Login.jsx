import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbarr";



const Login = () => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(107, 168, 43, 0.9), rgba(236, 131, 30, 0.6))`,
        /* Tambahan properti CSS lainnya jika diperlukan */
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/dashboard");
        }
    }, []);

    const loginHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        await axios
            .post("https://kbmdsi.galoostore.com/api/stafflogin", formData)
            .then((response) => {

                localStorage.setItem("token", response.data.access_token);
                navigate("/dashboard");
            })
            .catch((error) => {

                setValidation(error.response.data);
            });
    };
    return (
        <div className="relative  ">
            <Navbar/>
            <div class="text-white bg-[url('/img/login.png')] mt-20 bg-no-repeat bg-cover h-auto md:h-[28rem]  relative  px-10 justify-center items-center mx-auto flex">
                <div className=" pl-20 pb-5 pr-20 relative">
                    <div className=" md:p-12 p-8 mt-10  rounded-[30px] rounded shadow-md md:w-[29rem] justify-center items-center mx-auto my-auto "
                        style={gradientStyle}>
                        <h2 className="text-2xl font-semibold mb-6 text-center">
                            STAFF MUDA KBMDSI 2023’s OPEN REGISTRATION
                        </h2>
                        <form onSubmit={loginHandler}>
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
                                    className="mt-1 text-black p-2 w-full border rounded-[15px]"
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
                                className="bg-slate-200 flex mx-auto text-slate-700 font-semibold py-2 px-4 rounded-[15px] focus:outline-none focus:ring focus:ring-blue-200"
                            >
                                Masuk
                            </button>
                            <p className="text-center font-bold">Don't have an account?   <NavLink to='/registrasi' className="text-black">
                    Register</NavLink></p>
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

            <div className="bottom-0 w-full ">
                <Footer />
            </div>
        </div>
    );
};

export default Login;
