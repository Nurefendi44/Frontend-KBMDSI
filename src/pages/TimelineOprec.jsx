import React from "react";
import Navbar from "../components/Navbarr";
import HeaderImage from "../../public/img/TimelineOprec/headeroprec.png";
import { ChevronDown } from 'react-feather';
import PatternTopLeft from "../../public/img/TimelineOprec/pattern_top_left.png";
import PatternTopRight from "../../public/img/TimelineOprec/pattern_top_right.png";
import Timeline from "../../public/img/TimelineOprec/timeline.png";
import PatternBottomLeft from "../../public/img/TimelineOprec/pattern_bottom_left.png";
import PatternBottomRight from "../../public/img/TimelineOprec/pattern_bottom_right.png";
import ImageBottom from "../../public/img/TimelineOprec/image_bottom.png";
import PatternBottomRightTop from "../../public/img/TimelineOprec/pattern_brt.png";
import PatternBottomRightBottom from "../../public/img/TimelineOprec/pattern_brb.png";
import Footer from "../components/Footer";

const TimelineOprec = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="font-Montserrat tracking-tight">
                <div className="p-[75px] gap-10 mt-[80px] h-[515px] bg-[url('../../public/img/TimelineOprec/patternbg.png')]">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-white tracking-tight">
                            <h1 className="text-[50px] font-bold">
                                OPEN REGISTRATION
                            </h1>
                            <h3 className="text-[30px]">
                                STAFF MUDA KBMDSI 2023
                            </h3>
                            <p className="mt-4 pr-32 text-[17px] text-[#2B6BA8]">
                                Korem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringilla accumsan, risus sem
                                sollicitudin lacus, ut interdum tellus elit sed
                                risus. Maecenas eget condimentum velit, sit amet
                                feugiat lectus. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos
                                himenaeos.
                            </p>
                        </div>
                        <div>
                            <img src={HeaderImage} alt="ImageHeader" />
                        </div>
                    </div>
                    <div className="mt-6 grid grid-rows-2 justify-items-center">
                        <button className="bg-transparent text-[#2B6BA8]">
                            SCROLL DOWN
                        </button>
                        <button className="mt-1 animate-bounce bg-transparent text-[#2B6BA8]">
                            <ChevronDown></ChevronDown>
                        </button>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex flex-row">
                        <div className="basis-1/4 flex justify-center">
                            <img className="w-12 h-40" src={PatternTopLeft} alt="PatternTopLeft" />
                        </div>
                        <div className="basis-1/2 text-center text-[40px] text-[#85CC3A] font-bold">
                            TIMELINE <br></br> OPEN REGISTRATION
                        </div>
                        <div className="basis-1/4 flex justify-center">
                            <img className="h-16" src={PatternTopRight} alt="PatternTopRight" />
                        </div>
                    </div>
                    <div className="flex justify-center ml-16 -mt-40">
                        <img className="w-[900px]" src={Timeline} alt="Timeline" />
                    </div>
                    <div className="flex flex-row">
                        <div className="basis-1/3 flex justify-center -mt-12">
                            <img className="h-16" src={PatternBottomLeft} alt="PatternTopLeft" />
                        </div>
                        <div className="basis-1/2">
                        </div>
                        <div className="basis-1/3 flex justify-center -mt-28">
                            <img className="h-32" src={PatternBottomRight} alt="PatternTopRight" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex justify-center text-[30px] text-[#F7931E] font-bold">
                    Click that button and start your journey!
                </div>
                <div className="h-[400px] mt-2 grid grid-cols-2 gap-0 bg-[#85CC3A]">
                    <div className="">
                        <img className="h-[400px] w-full" src={ImageBottom} alt="ImageBottom" />
                    </div>
                    <div className="grid grid-rows-4 flex justify-end h-[400px] bg-[url('../../public/img/TimelineOprec/bg_bottom_right.png')]">
                        <img className="w-48" src={PatternBottomRightTop} alt="" />
                        <div className="-ml-[410px] mt-10 text-white text-[35px] font-semibold">
                            Siapkah Dirimu?
                        </div>
                        <button className="-ml-[410px] mt-2 px-4 bg-[#27326D] text-white text-[20px] font-semibold text-center w-24 h-10 rounded-2xl pb-1 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#27326D] duration-300">
                            Daftar
                        </button>
                        <img className="absolute right-0 mt-[250px] w-20" src={PatternBottomRightBottom} alt="" />
                    </div>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default TimelineOprec;