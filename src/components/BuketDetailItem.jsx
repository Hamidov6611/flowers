import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineClear } from "react-icons/md";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

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
    <div className="md:mb-12 relative">
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
        className="mySwiper2 relative"
      >
        <div className="absolute bottom-4 h-[96px] w-full md:hidden flex flex-col gap-y-2 justify-center items-center py-2 z-[8888]">
          
          <p className=" text-white text-[24px] font-semibold text-center font-montserrat">{data?.name}</p>
          <button className="flex items-center min-w-[143px] justify-center gap-x-3 bg-[#91AA91] h-[65px] rounded-md">
            <svg
              width="32"
              height="29"
              viewBox="0 0 32 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.80998 21.16C8.48321 21.16 8.12614 20.8879 8.04539 20.4671C8.04534 20.4668 8.04529 20.4665 8.04524 20.4663L4.71174 2.61571L4.63551 2.2075H4.22024H1.3356C0.887778 2.2075 0.507812 1.83416 0.507812 1.35375C0.507812 0.873338 0.887779 0.5 1.3356 0.5H5.31899C5.70234 0.5 6.04641 0.776378 6.13039 1.17858L6.21108 1.8635L6.26309 2.305H6.70764H29.9828C30.7715 2.305 31.4334 3.12869 31.2048 3.96554C31.2047 3.96582 31.2046 3.9661 31.2045 3.96637L28.2174 14.7972C28.2174 14.7973 28.2173 14.7975 28.2173 14.7976C28.06 15.3643 27.5562 15.745 26.9952 15.745H9.45175H8.84899L8.96035 16.3374L9.46934 19.0448L9.54597 19.4524H9.96073H27.0063C27.4569 19.4524 27.834 19.823 27.834 20.3062C27.834 20.7895 27.4569 21.16 27.0063 21.16H8.80998ZM7.58938 26.1725C7.58938 24.9447 8.56409 23.965 9.74497 23.965C10.9258 23.965 11.9005 24.9447 11.9005 26.1725C11.9005 27.4003 10.9258 28.38 9.74497 28.38C8.5641 28.38 7.58938 27.4003 7.58938 26.1725ZM27.834 26.1725C27.834 27.4003 26.8594 28.38 25.6785 28.38C24.4977 28.38 23.5229 27.4003 23.5229 26.1725C23.5229 24.9447 24.4977 23.965 25.6785 23.965C26.8594 23.965 27.834 24.9447 27.834 26.1725Z"
                fill="#818181"
                fill-opacity="0.08"
                stroke="black"
              />
            </svg>
            <p className="text-[#040404] text-[24px]">{data?.price+" ₽"}</p>
          </button>
        </div>
        {data?.flowers?.map((c, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[400px] md:h-[600px] lg:h-[814px] w-[748px] relative"
              onMouseEnter={hideHandler}
              onMouseLeave={closeHandler}
            >
              {hide && (
                <div
                  onClick={() => setView(true)}
                  className="absolute top-[40%] left-[40%] cursor-pointer"
                >
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
        className="mySwiper relative"
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
        <div
          className="w-[100%] h-[100vh] hidden  fixed top-0 left-0 z-30 lg:flex justify-center items-center bg-black/90"
          onClick={() => setView(false)}
        >
          <div
            className="min-h-[60vh] relative w-[45%] rounded-xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
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
      {view && (
        <div className="w-[100%] h-screen lg:hidden  fixed top-0 left-0 bg-modal z-30 ">
          <div className="min-h-screen relative w-[100%] bg-[#758867] z-50">
            <div className="w-full h-[83px] flex items-center justify-between bg-[#758867]">
              <div className="ml-[20px]" onClick={() => setView(false)}>
                <HiOutlineArrowLongLeft fontSize={24} color={"white"} />
              </div>
              <div className="mr-[20px]" onClick={() => setView(false)}>
                <MdOutlineClear fontSize={24} color="white" />
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
                  <div className="h-screen w-[748px] relative">
                    <img className=" h-full w-full " src={`${uri}${c?.img}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuketDetailItem;
