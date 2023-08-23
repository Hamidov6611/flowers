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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination } from "swiper";
import HomeCategory from "./HomeCategory";

function Home() {
  const loction = useLocation();
  console.log(loction.pathname);
 
  return (
    <Wrapper>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={3}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
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
        <SwiperSlide>
          <Action />
        </SwiperSlide>
      </Swiper>
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
