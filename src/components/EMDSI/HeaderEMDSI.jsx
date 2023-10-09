import React from "react";
import EMDSI from '../../../public/img/ProfilEMDSI/profil.png'

const HeaderEMDSI = () => {
    return (
        <div className="font-[Poppins] tracking-tight">
            <div className="pt-5 px-5 pb-20 bg-[#2B6BA8] flex flex-col relative md:px-10 md:pb-5">
                <div className="text-white">
                    <h4 className="text-[18px] md:text-[24px]">
                        Get to know us
                    </h4>
                    <h1 className="mt-3 text-[32px] md:text-[48px]">
                        Profile EMDSI
                    </h1>
                    <p className="mt-5 text-[14px] md:text-[18px] sm:mr-[350px] md:mr-[350px]">
                        Eksekutif Mahasiswa Departemen Sistem Informasi
                        merupakan badan yang memiliki fungsi eksekutif di KBMDSI
                        dimana bertugas untuk membuat dan merancang gagasan
                        program kerja serta melaksanakan program kerja selama
                        satu periode kepengurusan
                    </p>
                </div>
                <div className="absolute right-5 -bottom-20 sm:-bottom-10 md:right-10 md:-bottom-8">
                    <img className="w-52 sm:w-80" src={EMDSI} alt="EMDSI" />
                </div>
            </div>
        </div>
    );
};

export default HeaderEMDSI;
