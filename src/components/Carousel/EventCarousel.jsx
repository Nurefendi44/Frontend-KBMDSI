
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import EventCard from "./EventCard";
import React, { Component } from "react";
import Slider from "react-slick";


export default class EventCarousel extends Component {
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
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow:< h1 className="text-white"></h1>,
        prevArrow: <h1></h1>,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="bg-white w-full md:px-44 px-20 py-2">
          <Slider ref={c => (this.slider = c)} className="py-5" {...settings}>
            {/* <div>
              <EventCard/>
            </div> */}
            <div className="h-36 text-center text-black font-[Poppins] text-xl my-auto">
                <p className="my-auto mt-14">Belum ada event saat ini</p></div>

          </Slider>
          <div className=''>
          <h1 className="button absolute left-2 p-2 bg-[#F9F9F9] rounded-full -translate-y-28 text-4xl " onClick={this.previous}>
          <FiArrowLeft className='text-2xl'/>
          </h1>
          <h1 className="button absolute right-2 -translate-y-28 text-4xl p-2 bg-[#F9F9F9] rounded-full  " onClick={this.next}>
          <FiArrowRight className='text-2xl'/>
          </h1>
        </div>
        </div>
      );
    }
  }
