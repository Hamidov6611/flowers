import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {MdOutlineClear} from 'react-icons/md'
import {HiOutlineArrowLongLeft} from 'react-icons/hi2'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { uri } from "../layout/config";

const BuketDetailItem = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [hide, setHide] = useState(false);
  const [view, setView] = useState(false);
  const hideHandler = () => setHide(true);
  const closeHandler = () => setHide(false);
  return (
    <div className="mb-12">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          margin: "20px 0",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data?.flowers?.map((c, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[400px] md:h-[600px] lg:h-[814px] w-[748px] relative"
              onMouseEnter={hideHandler}
              onMouseLeave={closeHandler}
              
            >
              {hide && (
                <div onClick={() => setView(true)} className="absolute top-[40%] left-[40%] cursor-pointer">
                  <img src="/Group 47.svg" alt="" className="w-24 h-24" />
                </div>
              )}
              <img
                className="rounded-2xl h-[300px] w-full "
                src={`${uri}${c?.img}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data?.flowers?.map((c, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <img className="rounded-xl" src={`${uri}${c?.img}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {view && (
        <div className="w-[100%] h-[100vh] hidden  fixed top-0 left-0 z-30 lg:flex justify-center items-center bg-black/90" onClick={() => setView(false)}>
          <div className="min-h-[60vh] relative w-[45%] rounded-xl z-50" onClick={(e) => e.stopPropagation()} >
            <div
              className="absolute right-[-50px] cursor-pointer top-[-30px]"
              onClick={() => setView(false)}
            >
              <img src="/close.svg" alt="close" />
            </div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                margin: "20px 0",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {data?.flowers?.map((c, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[400px] md:h-[600px] lg:h-[814px] w-[748px] relative">
                    <img
                      className="rounded-2xl h-full w-full "
                      src={`${uri}${c?.img}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      {
        view && (
          <div className="w-[100%] h-[30vh] lg:hidden  fixed top-0 left-0 bg-modal z-30 ">
          <div className="min-h-[20vh] relative w-[100%] bg-[#758867] rounded-xl z-50">
            <div className="w-full h-[83px] flex items-center justify-between bg-[#758867]">
            <div className="ml-[20px]" onClick={() => setView(false)}>
              <HiOutlineArrowLongLeft fontSize={24} color={"white"} />
            </div>
            <div className="mr-[20px]" onClick={() => setView(false)}>
              <MdOutlineClear fontSize={24} color="white"/>
            </div>
            </div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {data?.flowers?.map((c, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[400px] md:h-[600px] lg:h-[814px] w-[748px] relative">
                    <img
                      className=" h-full w-full "
                      src={`${uri}${c?.img}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default BuketDetailItem;
