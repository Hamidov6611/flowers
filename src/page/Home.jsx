import React from "react";
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

function Home() {
  const loction = useLocation();
  console.log(loction.pathname);
  return (
    <Wrapper>
      {/* <div className="h-[100px] md:h-[340px] lg:h-[600px] sm:h-[249px] h:[150px]">
        <img src="./images/hero_bg.png" alt="" width={"100%"} height={"100%"} />
      </div>
      <div className=" md:mt-[180px] lg:mt-[300px]">
        <Action />
      </div> */}
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={3}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="w-[100%] h-[441px] md:h-[660px]">
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
      <div className="flex flex-col my-4 p-1 sm:p-4">
        <div className="relative mb-4 flex justify-between md:flex-row flex-col">
          <div className="w-[100%] md:w-[60%] relative mb-4">
            <div className="w-[100%] h-[400px]">
              <img
                src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="absolute top-0 left-0 bg-modal w-[100%]">
              <p
                className="py-3 text-[34px] font-semibold text-white text-center"
                style={{ letterSpacing: "5px" }}
              >
                Mонобукеты
              </p>
            </div>
          </div>
          <div className="w-[100%] md:w-[38%] relative">
            <div className="w-[100%] h-[400px]">
              <img
                src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="absolute top-0 left-0 bg-modal w-[100%]">
              <p
                className="py-3 text-[34px] font-semibold text-white text-center"
                style={{ letterSpacing: "5px" }}
              >
                Mонобукеты
              </p>
            </div>
          </div>
        </div>
        <div className="relative mb-4 flex justify-between md:flex-row flex-col">
          <div className="w-[100%] md:w-[38%] relative mb-4 md:mb-0">
            <div className="w-[100%] h-[400px]">
              <img
                src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="absolute top-0 left-0 bg-modal w-[100%]">
              <p
                className="py-3 text-[34px] font-semibold text-white text-center"
                style={{ letterSpacing: "5px" }}
              >
                Mонобукеты
              </p>
            </div>
          </div>
          <div className="w-[100%] md:w-[60%] relative">
            <div className="w-[100%] h-[400px]">
              <img
                src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="absolute top-0 left-0 bg-modal w-[100%]">
              <p
                className="py-3 text-[34px] font-semibold text-white text-center"
                style={{ letterSpacing: "5px" }}
              >
                Mонобукеты
              </p>
            </div>
          </div>
        </div>

        <div className="relative mb-4 flex justify-between md:flex-row flex-col">
          <div className="w-[100%] md:w-[60%] relative mb-4 md:mb-0">
            <div className="w-[100%] h-[400px]">
              <img
                src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="absolute top-0 left-0 bg-modal w-[100%]">
              <p
                className="py-3 text-[34px] font-semibold text-white text-center"
                style={{ letterSpacing: "5px" }}
              >
                Mонобукеты
              </p>
            </div>
          </div>
          <div className="w-[100%] md:w-[38%] relative">
            <div className="w-[100%] h-[400px]">
              <img
                src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="absolute top-0 left-0 bg-modal w-[100%]">
              <p
                className="py-3 text-[34px] font-semibold text-white text-center"
                style={{ letterSpacing: "5px" }}
              >
                Mонобукеты
              </p>
            </div>
          </div>
        </div>
      </div>
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
