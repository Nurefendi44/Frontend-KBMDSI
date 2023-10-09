import React from "react";
import KomisiI from '../../../public/img/ProfilBPMDSI/komisi1.png'
import KomisiII from '../../../public/img/ProfilBPMDSI/komisi2.png'
import BPM from '../../assets/img/about-us/bpm.png'



const CardBPMDSI = () => {
    return (
        <div className="font-[Poppins] tracking-tight">
            <div className="p-5 mt-24 sm:mt-14 md:mt-14 md:px-10">
                <h2 className="text-[28px] text-center md:text-[42px]">
                    Komisi BPMDSI
                </h2>
                <p className="text-[14px] text-center mt-2 md:text-[18px]">
                    Dalam Struktur BPMDSI sendiri terdapat 2 komisi yang
                    memiliki tugasnya masing-masing, yakni Komisi I Hukum dan
                    Komisi II Komunikasi dan Informasi
                </p>
            </div>
            <div className="my-5 mx-5 p-4 bg-[#F2EDE7] rounded-md md:mx-10 md:flex">
                <div className="flex justify-center md:min-w-fit">
                    <img className="w-60" src={BPM} alt="PSDM" />
                </div>
                <div className="md:ml-5 md:flex flex-col justify-between">
                    <h3 className="mt-2 text-[24px] md:mt-0 md:text-[32px]">
                        Komisi I Hukum
                    </h3>
                    <p className="mt-2 text-[14px] md:text-[17px]">
                        Komisi 1 bertanggung jawab dalam kepentingan legislasi,
                        diantaranya adalah menyelenggarakan kegiatan sidang
                        MKBMDSI (Musyawarah Keluarga Besar Mahasiswa Departemen
                        Sistem Informasi), mengkaji produk hukum, menyiapkan
                        presidum baru, bertanggung jawab atas pelaksanaan
                        PEMILWA, dan ikut berperan aktif pada sidang internal
                        maupun eksternal KBMDSI
                    </p>
                    {/* <button className="mt-3 text-[14px] bg-[#85CC3A] h-10 w-32 rounded-md hover:bg-[#6AA32E]">
                        Selengkapnya
                    </button> */}
                </div>
            </div>
            <div className="my-5 mx-5 p-4 bg-[#F2EDE7] rounded-md md:mx-10 md:flex flex-row-reverse">
                <div className="flex justify-center md:min-w-fit">
                    <img className="w-60" src={BPM} alt="KP" />
                </div>
                <div className="md:mr-5 md:flex flex-col justify-between">
                    <h3 className="mt-2 text-[24px] md:mt-0 md:text-[32px]">
                        Komisi II Komunikasi dan Informasi
                    </h3>
                    <p className="mt-2 text-[14px] md:text-[17px]">
                        Kominfo merupakan komisi yang bertanggung jawab dalam
                        proses komunikasi dan hubungan antara pihak internal
                        BPMSI dan eksternal lembaga KBMDSI. Komisi II Kominfo
                        juga bertanggung jawab untuk melakukan proses penyebaran
                        informasi terkait legislasi di lingkungan KBMDSI
                    </p>
                    {/* <button className="mt-3 text-[14px] bg-[#85CC3A] h-10 w-32 rounded-md hover:bg-[#6AA32E]">
                        Selengkapnya
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default CardBPMDSI;
