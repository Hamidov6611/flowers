import React, { useState } from "react";
import { styled } from "styled-components";
import Action from "../components/Action";
import Buket from "../components/Buket";
import Dostavka from "../components/Dostavka";
import Blog from "../components/Blog";
import MainOnas from "../components/MainOnas";
import MainDostavka from "../components/MainDostavka";
import Reviews from "../components/Reviews";
import BlogSection from "../components/BlogSection";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import navigations from './navigation.module.css'
import { A11y, Navigation, Pagination } from "swiper";
import HomeCategory from "./HomeCategory";
import Hero from "./carousel";
import Carousel from "./carousel";

function Home() {
  const loction = useLocation();
  console.log(loction.pathname);
  const [swiper, setSwiper] = useState(null);
  const images = [
    "https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-videoSixteenByNine3000.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpI-1MMt4nQCcE-Vays5VPUlfIyo-4ay-JubDsm5OWJ6IsSEyd2sH3p93xVNugGoUd40&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DYl7pipxnmP7k4CWQnqSyvqiJ552qQt6TgsX6qts3NEGzUGkb7aJheZ8wN0_Go2YlPw&usqp=CAU",
    // Add more image paths here
  ];

  return (
    <Wrapper>
      {/* <Hero /> */}
      <Swiper
        // className={navigations[`swiper-button-next`]}
        modules={[Pagination, A11y, Navigation]}
        spaceBetween={3}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(s) => {
          console.log("initialize swiper", s);
          setSwiper(s);
        }}
        // navigation={true}
      >
        <SwiperSlide>
          <div className="w-[94%] h-[100%] mx-auto">
            <Action />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:w-[94%] mx-auto h-[441px] md:h-[660px]">
            <img
              src="./images/hero_bg.png"
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mt-12 w-[100%] flex justify-center">
        <button onClick={() => swiper.slidePrev()} className="mr-8 border-[3px] sm:border-[4px] border-[#343434] h-[40px] w-[40px] rounded-full flex justify-center items-center">
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.962"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.3369 0.622048C11.6547 0.561208 12.0991 1.15361 11.6699 2.39939C8.98018 5.07771 6.30275 7.76656 3.63769 10.4658C6.30275 13.165 8.98018 15.8539 11.6699 18.5322C11.8978 18.988 11.8978 19.4436 11.6699 19.8994C11.1952 20.3484 10.6597 20.4282 10.0635 20.1386C7.06708 17.1423 4.07061 14.1458 1.07422 11.1494C0.846375 10.6936 0.846375 10.238 1.07422 9.7822C4.13371 6.68846 7.2213 3.63506 10.3369 0.622048Z"
              fill="black"
            />
          </svg>
        </button>
        <button onClick={() => swiper.slideNext()} className="border-[3px] sm:border-[4px] border-[#343434] h-[40px] w-[40px] rounded-full flex justify-center items-center">
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.962"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.66309 20.378C0.345255 20.4388 -0.099081 19.8464 0.33008 18.6006C3.01982 15.9223 5.69725 13.2334 8.36231 10.5342C5.69725 7.83496 3.01982 5.14612 0.330082 2.4678C0.102239 2.01204 0.102239 1.55636 0.330082 1.10061C0.804837 0.651555 1.3403 0.57178 1.93653 0.86135C4.93292 3.85775 7.92939 6.85421 10.9258 9.85061C11.1536 10.3064 11.1536 10.762 10.9258 11.2178C7.86629 14.3115 4.7787 17.3649 1.66309 20.378Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <HomeCategory />
      <div className="mt-8 md:mt-[50px]">
        <Buket />
      </div>
      <Dostavka />
      <MainOnas />
      <MainDostavka />
      <Reviews />
      <BlogSection />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  // .swiper-pagination-horizontal {
  //   position: absolute;
  //   bottom:"20px";
  //   right:"10px";
  // }
`;
