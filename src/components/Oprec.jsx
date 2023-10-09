import React from "react";
import Example from "./Example";
import { NavLink } from "react-router-dom";


const Oprec = () => {
    return (
        <div>
            <div className="relative relative text-white bg-[url('/img/login.png')]   md:overflow-y-hidden bg-no-repeat bg-cover md:h-[38rem] md:h-[40rem] relative  md:px-10">
                <div className="absolute w-0 md:w-fit z-10 top-0 right-0">
                    <img src="/img/BG 7.png" alt="" />
                </div>
                <div className="absolute w-0 md:w-fit z-10 bottom-0 right-0">
                    <img src="/img/BG 8.png" alt="" />
                </div>
                <div className="md:flex py-10 space-y-10 md:space-y-0   flex-row-reverse ">

                    <div className="md:w-1/2 md:px-24   ">
                        <div className=" w-full mix-blend-color-burn">
                            <h1 className="text-center mx-auto w-fit text-4xl  md:text-6xl  text-[#85CC3A] font-[900]">
                                Open Recruitment Staff Muda KBMDSI 2023
                            </h1>
                        </div>
                        <div className="mt-10 space-y-10  mx-auto w-fit items-center mix-blend-color-burn justify-center">
                            <Example />

                            <div className="text-center">
                                <NavLink
                                to="/registrasi"
                                    className="bg-[#27326D] px-4 py-2 rounded-md "
                                >
                                    Daftar Sekarang
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2    items-center ">
                        <img
                            src="/img/iPhone.png"
                            className="w-1/2 mx-auto"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Oprec;
