import React from "react";
import { FiCalendar } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

const EventCard = () => {
    return (
        <div className="font-[Poppins] px-5 bg-[#F9F9F9] h-36 w-66 md:w-64 rounded-lg flex flex-col justify-center leading-8">
            <h1 className="text-[16px] text-[#A4A4A4] font-medium"> 
                Nama Kegiatan
            </h1>
            <h2 className="text-[16px] text-[#2B6BA8] font-bold">
                Tema Kegiatan
            </h2>
            <div className="flex">
                <FiCalendar className="text-[#333333] mt-2" />
                <p className="text-[16px] text-[#333333] font-medium ml-4">
                    Waktu dan Tanggal
                </p>
            </div>
            <div className="flex">
                <FiMapPin className="text-[#333333] mt-2" />
                <a href="https://bit.ly/SinauBareng2023">
                <p className="text-[16px] text-[#2B6BA8] font-medium ml-4">
                    Tempat
                </p>
                </a>
            </div>
        </div>
    );
};

export default EventCard;
