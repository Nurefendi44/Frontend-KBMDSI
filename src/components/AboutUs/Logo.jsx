import React, { Component } from 'react'
import logo from '../../assets/img/about-us/Logo.svg'
import Tunas from '../../assets/img/about-us/Tunas.svg';
import Tangkai from '../../assets/img/about-us/Tangkai.svg'
import Daun from '../../assets/img/about-us/Daun.svg'
import Warna from '../../assets/img/about-us/Warna.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillLeftCircle } from 'react-icons/ai';
import { AiFillRightCircle} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export default class Logo extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:< h1 className="text-white"></h1>,
        prevArrow: <h1></h1>,
      };
      return (
        <div id='logo' className="px-5 pb-10">
            <h1 className="text-5xl text-[#6BA82B] mb-10 text-center font-bold font-[Poppins]">Logo Kabinet</h1>


        <div className='relative md:w-3/4 w-full   mx-auto font-[Poppins] md:h-full'>

          <Slider ref={c => (this.slider = c)} className='mx-auto' {...settings}>
            <div className='mx-auto justify-center  w-fit'>

              <img src={logo} className=' mx-auto' alt="" />

            </div>
            <div className='justify-center mx-auto h-[30rem] md:overflow-visible overflow-y-scroll'>
              <h3 className='text-[#27326D] text-3xl text-center font-semibold'>Filosofi Logo</h3>
              <h3 className='text-[#6BA82B] text-3xl text-center font-semibold'>Kabinet Anandita Naraya</h3>
              <p className='mt-5 text-justify px-5'>Nama Anandita Naraya yang merupakan nama Kabinet KBMDSI selama 1 tahun masa kerja kepengurusan tentunya memiliki makna dari masing-masing katanya.
                <span>
                    <br />
                    <br />
                    Anandita dalam bahasa Sanskerta artinya anak muda, hal itu merefleksikan KBMDSI sebagai lembaga baru yang ada di lingkungan FILKOM UB.
                </span>
                <span>
                    <br />
                    <br />
                    Naraya berasal dari bahasa Sanskerta yang artinya harapan banyak orang. KBMDSI tercipta dari peleburan 3 himpunan Keluarga Besar Mahasiswa program studi, yakni KBMSI, KBMTI, dan KBMPTI. Peleburan tersebut tentu memiliki tujuan yang besar yang mana itu juga menjadi harapan banyak orang khususnya di lingkungan Departemen Sistem Informasi.
                </span>
                <span>
                    <br />
                    <br />
                    Hal tersebut mengisyaratkan sebuah makna tersirat bahwa KBMDSI sebagai lembaga baru akan bekerja sekeras mungkin demi mewujudkan harapan dari banyak orang.
                </span>
                </p>
            </div>
            <div>
            <h3 className='text-[#27326D] text-3xl text-center font-semibold'>Filosofi Logo</h3>
            <h3 className='text-[#6BA82B] text-3xl text-center font-semibold'>Kabinet Anandita Naraya</h3>
              <img src={Tangkai} className=' mx-auto mt-14' alt="" />
              <div className="mt-5">
              <h3 className='text-[#27326D] text-xl text-center'>Tangtkai S dan I</h3>
              <h3 className='text-[#6BA82B] text-xl text-center'>Tangkai S dan IMelambangkan penggabungan Departemen Sistem Informasi</h3>
              </div>
            </div>
            <div>
              <h3 className='text-[#27326D] text-3xl text-center font-semibold'>Filosofi Logo</h3>
            <h3 className='text-[#6BA82B] text-3xl text-center font-semibold'>Kabinet Anandita Naraya</h3>
              <img src={Tunas} className=' mx-auto mt-14' alt="" />
              <div className="mt-5">
              <h3 className='text-[#27326D] text-xl text-center'>Tunas Bunga</h3>
              <h3 className='text-[#6BA82B] text-xl text-center'>Melambangkan Permulaan Kehidupan</h3>
              </div>
            </div>
            <div>

              <h3 className='text-[#27326D] text-3xl text-center font-semibold'>Filosofi Logo</h3>
            <h3 className='text-[#6BA82B] text-3xl text-center font-semibold'>Kabinet Anandita Naraya</h3>
              <img src={Daun} className=' mx-auto mt-14' alt="" />
              <div className="mt-5">
              <h3 className='text-[#27326D] text-xl text-center'>Daun</h3>
              <h3 className='text-[#6BA82B] text-xl text-center'>Daun 3 melambangkan 3 program studi yang menjadi satu</h3>
              </div>
            </div>
            <div>
            <h3 className='text-[#27326D] text-3xl text-center font-semibold'>Filosofi Logo</h3>
            <h3 className='text-[#6BA82B] text-3xl text-center font-semibold'>Kabinet Anandita Naraya</h3>
              <div className="w-36 h-36 rounded-full bg-[#33650F] mx-auto"></div>
              <div className="mt-5">
              <h3 className='text-[#27326D] text-xl text-center'>Warna</h3>
              <h3 className='text-[#6BA82B] text-xl text-center'>Warna hijau muda melambangkan cikal bakal baruyang tumbuh dengan penggunaan gradasi dan tekstur</h3>
              </div>
            </div>

          </Slider>
          <div className=''>
          <NavLink className="button absolute z-50 -left-5 -translate-y-72 text-4xl font-bold bg-white" onClick={this.previous}>
          <AiFillLeftCircle className='text-[#6BA82B] '/>
          </NavLink>
          <NavLink className="button absolute -right-5 -translate-y-72 text-4xl bg-white font-bold" onClick={this.next}>
          <AiFillRightCircle className='text-[#6BA82B]'/>
          </NavLink>
        </div>

        </div>
        </div>
      );
    }
  }
