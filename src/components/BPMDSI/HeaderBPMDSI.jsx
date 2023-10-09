import React from "react";
import BPMDSI from '../../../public/img/ProfilBPMDSI/profil.png'

const HeaderBPMDSI = () => {
    return (
        <div className="font-[Poppins] tracking-tight">
            <div className="pt-5 px-5 pb-20 bg-[#2B6BA8] flex flex-col relative md:px-10 md:pb-5">
                <div className="text-white">
                    <h4 className="text-[18px] md:text-[24px]">
                        Get to know us
                    </h4>
                    <h1 className="mt-3 text-[32px] md:text-[48px]">
                        Profile BPMDSI
                    </h1>
                    <p className="mt-5 text-[14px] md:text-[18px] sm:mr-[350px] md:mr-[350px]">
                        Badan Perwakilan Mahasiswa Departemen Sistem Informasi
                        merupakan badan yang memiliki fungsi legislatif di
                        KBMDSI dimana bertugas untuk melakukan perumusan produk
                        hukum, pengawasan dan evaluasi terhadap pelaksanaan
                        kegiatan dan program kerja EMDSI selama satu periode
                        kepengurusan
                    </p>
                </div>
                <div className="absolute right-5 -bottom-20 sm:-bottom-10 md:right-10 md:-bottom-8">
                    <img className="w-52 sm:w-80" src={BPMDSI} alt="EMDSI" />
                </div>
            </div>
        </div>
    );
};

export default HeaderBPMDSI;
