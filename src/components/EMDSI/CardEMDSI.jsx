import React from "react";
import PSDM from '../../assets/img/about-us/psdm.png'
import KP from '../../assets/img/about-us/kp.png'
import ADVOKASI from '../../assets/img/about-us/advokesma.png'
import SOSLING from '../../assets/img/about-us/sosling.png'
import KWU from '../../assets/img/about-us/kwu.png'
import MEDKOMINFO from '../../assets/img/about-us/medkom.png'

const CardEMDSI = () => {
    return (
        <>
            <div className="font-[Poppins] tracking-tight">
                <div className="p-5 mt-24 sm:mt-14 md:mt-14 md:px-10">
                    <h2 className="text-[28px] text-center md:text-[42px]">
                        Departemen EMDSI
                    </h2>
                    <p className="text-[14px] text-center mt-2 md:text-[18px]">
                        Dalam Struktur EMDSI sendiri terdapat 6 departemen yang
                        memiliki tugasnya masing-masing, yakni Pengembangan
                        Sumber Daya Manusia (PSDM), Keilmuan dan Pengajaran
                        (KP), Advokasi dan Kesejahteraan Mahasiswa (ADVOKESMA),
                        Sosial dan Lingkungan (SOSLING), Kewirausahaan (KWU),
                        serta Media Komunikasi dan Informatika (MEDKOMINFO)
                    </p>
                </div>
                <div className="my-5 mx-5 p-4 bg-[#FFFFFF] rounded-md md:mx-10 md:flex">
                    <div className="flex justify-center md:min-w-fit">
                        <img className="w-80" src={PSDM} alt="PSDM" />
                    </div>
                    <div className="md:ml-5 md:flex flex-col justify-between">
                        <h3 className="mt-2 text-[24px] md:mt-0 md:text-[32px]">
                            Pengembangan Sumber Daya Manusia
                        </h3>
                        <p className="mt-2 text-[14px] md:text-[17px]">
                            Menjaga dan meningkatkan kualitas yang dimiliki oleh
                            mahasiswa Departemen SI baik dari segi akademik
                            maupun non-akademik
                        </p>
                        {/* <button className="mt-3 text-[14px] bg-[#85CC3A] h-10 w-32 rounded-md hover:bg-[#6AA32E]">
                            Selengkapnya
                        </button> */}
                    </div>
                </div>
                <div className="my-5 mx-5 p-4 bg-[#F2EDE7] rounded-md md:mx-10 md:flex flex-row-reverse">
                    <div className="flex justify-center md:min-w-fit">
                        <img className="w-80" src={KP} alt="KP" />
                    </div>
                    <div className="md:mr-5 md:flex flex-col justify-between">
                        <h3 className="mt-2 text-[24px] md:mt-0 md:text-[32px]">
                            Keilmuan dan Pengajaran
                        </h3>
                        <p className="mt-2 text-[14px] md:text-[17px]">
                            Departemen yang bergerak di bidang keilmuan
                            mahasiswa yang bertujuan mengembangkan skill dan
                            pengetahuan mahasiswa Departemen Sistem Informasi di
                            bidang IT dan kegiatan pengajaran antar sesama
                            mahasiswa dan masyarakat umum
                        </p>
                        {/* <button className="mt-3 text-[14px] bg-[#85CC3A] h-10 w-32 rounded-md hover:bg-[#6AA32E]">
                            Selengkapnya
                        </button> */}
                    </div>
                </div>
                <div className="my-5 mx-5 p-4 bg-[#FFFFFF] rounded-md md:mx-10 md:flex">
                    <div className="flex justify-center md:min-w-fit">
                        <img className="w-80" src={ADVOKASI} alt="ADVOKASI" />
                    </div>
                    <div className="md:ml-5 md:flex flex-col justify-between">
                        <h3 className="mt-2 text-[24px] md:mt-0 md:text-[32px]">
                            Advokasi dan Kesejahteraan Manusia
                        </h3>
                        <p className="mt-2 text-[14px] md:text-[17px]">
                            Melaksanakan dan membantu seluruh mahasiswa
                            Departemen Sistem Informasi terkait masalah advokasi
                            di tingkat Departemen dan fakultas sehingga dapat
                            menjaga kesejahteraan bagi mahasiswa Departemen
                            Sistem Informasi
                        </p>
                        {/* <button className="mt-3 text-[14px] bg-[#85CC3A] h-10 w-32 rounded-md hover:bg-[#6AA32E]">
                            Selengkapnya
                        </button> */}
                    </div>
                </div>
                <div className="my-5 mx-5 p-4 bg-[#F2EDE7] rounded-md md:flex flex-row-reverse">
                    <div className="flex justify-center md:min-w-fit">
                        <img className="w-80" src={SOSLING} alt="SOSLING" />
                    </div>
                    <div className="md:mr-5 md:flex flex-col justify-between">
                        <h3 className="mt-2 text-[24px] md:mt-0 md:text-[32px]">
                            Sosial dan Lingkungan
                        </h3>
                        <p className="mt-2 text-[14px] md:text-[17px]">
                            Melakukan kegiatan atau aksi sosial baik yang dapat
                            dirasakan baik bagi masyarakat maupun lingkungan
                            sekitar
                        </p>
                        {/* <button className="mt-3 text-[14px] bg-[#85CC3A] h-10 w-32 rounded-md hover:bg-[#6AA32E]">
                            Selengkapnya
                        </button> */}
                    </div>
                </div>
                <div className="my-5 mx-5 p-4 bg-[#FFFFFF] rounded-md md:flex flex-row">
                    <div className="flex justify-center md:min-w-fit">
                        <img className="w-80" src={KWU} alt="KWU" />
                    </div>
                    <div className="md:ml-5 md:flex flex-col justify-between">
                        <h3 className="mt-2 text-[24px] md:mt-0 md:text-[32px]">
                            Kewirausahaan
                        </h3>
                        <p className="mt-2 text-[14px] md:text-[17px]">
                            Departemen Kewirausahaan merupakan divisi yang
                            bertugas untuk mengembangkan dan menjalankan semua
                            yang berkaitan dengan kewirausahaan dan mendorong
                            minat mahasiswa departemen sistem informasi di
                            bidang kewirausahaan.
                        </p>
                        {/* <button className="mt-3 text-[14px] bg-[#85CC3A] h-10 w-32 rounded-md hover:bg-[#6AA32E]">
                            Selengkapnya
                        </button> */}
                    </div>
                </div>
                <div className="my-5 mx-5 p-4 bg-[#F2EDE7] rounded-md md:flex flex-row-reverse">
                    <div className="flex justify-center md:min-w-fit">
                        <img
                            className="w-80"
                            src={MEDKOMINFO}
                            alt="MEDKOMINFO"
                        />
                    </div>
                    <div className="md:mr-5 md:flex flex-col justify-between">
                        <h3 className="mt-2 text-[24px] md:mt-0 md:text-[32px]">
                            Media Komunikasi dan Informatika
                        </h3>
                        <p className="mt-2 text-[14px] md:text-[17px]">
                            Melakukan branding terhadap KBMDSI dan menjadi
                            penghubung antara pihak eksternal mahasiswa
                            Departemen SI dengan KBMDSI. Di dalam MEDKOMINFO
                            terdapat bagian Kreatif, Humas, dan Informatika
                        </p>
                        {/* <button className="mt-3 text-[14px] bg-[#85CC3A] h-10 w-32 rounded-md hover:bg-[#6AA32E]">
                            Selengkapnya
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardEMDSI;
