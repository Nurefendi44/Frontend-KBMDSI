import React from "react";
import LastTO2 from "../../public/img/homepage/last TO 2 1.png";
import Firstgath from "../../public/img/homepage/firstgath.png";
import LastTO3 from "../../public/img/homepage/last TO 3.png";
import Underline from "../../public/img/homepage/underline anindita.png";
import Arrow from "../../public/img/homepage/vector_clickhere.png";
import Navbarr from "../components/Navbarr";
import EventCarousel from "../components/Carousel/EventCarousel";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Oprec from "../components/Oprec";



const Home = () => {
    return (
        <>
            <div>
                <Navbarr />
            </div>
            <div className="m-6 md:flex sm:m-10 md:m-10 md:mt-28 lg:mt-40 mt-28">
                <div className="font-[Poppins]">
                    <h1 className="text-[38px] text-[#27326D] font-medium tracking-tight leading-tight text-center lg:text-start lg:text-[52px]">
                        Keluarga Besar Mahasiswa Departemen Sistem Informasi
                    </h1>
                    <div className="mt-5 flex flex-wrap justify-evenly md:mt-12 lg:hidden">
                        <img
                            className="w-40 rounded-full md:w-52"
                            src={LastTO2}
                            alt="Last TO2"
                        />
                        <img
                            className="w-40 rounded-full md:w-52"
                            src={Firstgath}
                            alt="Firstgath"
                        />
                        <img
                            className="w-40 rounded-full md:w-52"
                            src={LastTO3}
                            alt="Last TO3"
                        />
                    </div>
                    <h2 className="mt-4 text-[32px] text-[#6BA82B] font-medium tracking-tight leading-tight text-center md:mt-5 lg:text-[42px] lg:mt-10">
                        Anandita Naraya
                    </h2>
                    <img
                        className="mx-auto lg:w-[350px]"
                        src={Underline}
                        alt="Underline"
                    />
                    <p className="mt-3 text-[16px] text-[#6BA82B] font-semibold text-start lg:text-[16px] lg:mr-44">
                        Sebuah organisasi yang merupakan gabungan dari 3 program
                        studi yakni Sistem Informasi, Teknologi Informasi, dan
                        Pendidikan Teknologi Informasi.
                    </p>
                    <div className="mt-4 flex">
                        <p className="text-[16px] text-[#85CC3A] font-bold">
                            Klik disini!
                        </p>
                        <img className="m-2" src={Arrow} alt="Arrow" />
                    </div>
                    <NavLink to='/about-us' className="text-[15px] text-[#FFFFFF] bg-[#27326D] py-2 px-4 h-10 w-40 hover:bg-blue-950 rounded-full">
                        SELENGKAPNYA
                    </NavLink>

                </div>
                <div className="hidden lg:block">
                    <img
                        className="w-56 rounded-full mr-[530px] mt-4"
                        src={LastTO2}
                        alt="Last TO2"
                    />
                    <img
                        className="w-72 rounded-full ml-[235px] -mt-56"
                        src={Firstgath}
                        alt="Firstgath"
                    />
                    <img
                        className="w-56 rounded-full -mt-24 ml-[65px]"
                        src={LastTO3}
                        alt="Last TO3"
                    />
                </div>
            </div>
            <div className="mb-5 mt-10">
                <h2 className="text-[28px] font-bold text-center lg:text-[36px]">
                    Coming soon at KBMDSI
                </h2>
                {/* <div className="">
                    <EventCarousel/>
                </div> */}
                {/* <div className="w-full h-48 flex justify-center items-center mt-4">
                    <EventCarousel />
                </div> */}
                <Oprec/>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
