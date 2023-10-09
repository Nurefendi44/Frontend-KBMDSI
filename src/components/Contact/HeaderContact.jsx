import React from 'react'
import Image from '../../assets/img/about-us/Image-Header-AboutUs.png';
import tiktok from '../../assets/img/footer/vector-tiktok.svg'
import twitter from '../../assets/img/footer/vector-twitter.svg'
import youtube from '../../assets/img/footer/vector-youtube.svg'
import instagram from '../../assets/img/footer/vector-ig.svg'
import line from '../../assets/img/footer/line.svg'
import linkedin from '../../assets/img/footer/linkedin.svg'
import website from '../../assets/img/footer/website.png'

const HeaderContact = () => {
  return (
    <div>
        <div className='w-full bg-[#2B6BA8] font-["Poppins"]  lg:h-[420px] '>
            <div className='flex lg:flex-row flex-col lg:justify-around '>
                <div className=' lg:text-7xl text-4xl lg:pt-12  lg:-ml-60 flex flex-col text-white   '>
                    <div className='mx-auto lg:mx-0 text-xl  mt-3 text-[#85CC3A]  font-bold'>
                        Contact us
                    </div>
                    <div className="lg:flex mt-5 lg:space-x-20  w-fit mx-auto lg:w-full">
                        <div className="text-center lg:text-justify">
                            <h1 className="text-xl">Email</h1>
                            <h1 className="text-xl font-extrabold mt-4">kbmdsi@gmail.com</h1>
                        </div>
                        <div className="mt-5 lg:mt-0">
                            <h1 className="text-xl text-center lg:text-justify">Sosial Media</h1>
                            <div className='flex lg:flex-row flex-col  lg:gap-9 gap-5  mb-8 mt-4 '>
                                <a className='mx-auto my-auto' target='blank' href="https://instagram.com/kbmdsi.ub?igshid=MzRlODBiNWFlZA==">
                                    <div  className='flex justify-between items-center lg:w-auto w-64   lg:py-0 lg:px-0 py-2 px-4 lg:rounded-none rounded-xl lg:border-none border-white border-2 '>
                                        <p className='lg:hidden text-lg font-bold'>Official Instagram</p><img src={instagram} alt="" />
                                    </div>
                                </a>
                                <a className='mx-auto my-auto' target='blank' href="https://liff.line.me/1645278921-kWRPP32q/?accountId=069urvnb">
                                    <div  className='flex justify-between items-center lg:w-auto w-64 lg:py-0 lg:px-0 py-2 px-4 lg:rounded-none rounded-xl lg:border-none border-white border-2 '>
                                        <p className='lg:hidden text-lg font-bold'>Official Line</p><img src={line} alt="" />
                                    </div>
                                </a>
                                <a className='mx-auto my-auto' target='blank' href="https://twitter.com/kbmdsi_ub?s=21&t=b4_7QmCxRXOiyrPuK6uoVQ">
                                    <div  className='flex justify-between items-center lg:w-auto w-64 lg:py-0 lg:px-0 py-2 px-4 lg:rounded-none rounded-xl lg:border-none border-white border-2 '>
                                        <p className='lg:hidden text-lg font-bold'>Official Twitter</p><img src={twitter} alt="" />
                                    </div>
                                </a>
                                <a className='mx-auto my-auto' target='blank' href="https://www.youtube.com/@KBMDSIFILKOMUB">
                                    <div  className='flex justify-between items-center lg:w-auto w-64 lg:py-0 lg:px-0 py-2 px-4 lg:rounded-none rounded-xl lg:border-none border-white border-2 '>
                                        <p className='lg:hidden text-lg font-bold'>Official Youtube</p><img src={youtube} alt="" />
                                    </div>
                                </a>
                                <a className='mx-auto my-auto' target='blank' href="https://www.tiktok.com/@kbmdsi.ub?_t=8dGJqL47ukL&_r=1">
                                    <div  className='flex justify-between items-center lg:w-auto w-64 lg:py-0 lg:px-0 py-2 px-4 lg:rounded-none rounded-xl lg:border-none border-white border-2 '>
                                        <p className='lg:hidden text-lg font-bold'>Official Tiktok</p><img src={tiktok} alt="" />
                                    </div>
                                </a>
                                <a className='mx-auto my-auto' target='blank' href="https://www.linkedin.com/company/kbmdsi-filkom-ub/">
                                    <div  className='flex justify-between items-center lg:w-auto w-64 lg:py-0 lg:px-0 py-2 px-4 lg:rounded-none rounded-xl lg:border-none border-white border-2 '>
                                        <p className='lg:hidden text-lg font-bold'>Official Linkedin</p><img src={linkedin} alt="" />
                                    </div>
                                </a>
                                
                                
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className='w-fit lg-w-full mx-auto lg:flex mt-8 lg:space-x-40 lg:mx-0 mb-32 text-sm lg:text-lg lg:h-[95pcx] lg:w-[562px]'>
                       <div className="w-fit mx-auto text-center lg:text-justify">
                        <h1>Telepon</h1>
                        <h1>081234567890</h1>
                       </div>
                       <div className="w-fit mx-auto text-center lg:text-justify mt-5 lg:mt-0">
                        <h1>Alamat</h1>
                        <h1>Gedung Kreativitas Mahasiswa (GKM) Lantai 2 Sekretariat KBMDSIFakultas Ilmu KomputerUniversitas Brawijaya</h1>
                       </div>

                    </div>
                </div>
                <div className='flex justify-center' >
                    <img src={Image} alt="" className='-mt-24 lg:-ml-[370px] lg:mt-[100px] absolute lg:h-[350px] lg:w-[550px] h-[150px]' />
                </div>


            </div>
        </div>
    </div>
  )
}

export default HeaderContact
