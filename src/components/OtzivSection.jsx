import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Button from "./Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import axios from "axios";
import { uri, url } from "../layout/config";
import ReactPlayer from "react-player";
import Pagination1 from "./pagination";
import { utils_video } from "./utils";
import MyCarousel from "./MyCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const OtzivSection = () => {
  const [data, setData] = useState([]);
  const [showFullData, setShowFullData] = useState(false);
  const [pageSize, setPageSize] = useState(Number);
  const [pageId, setPageId] = useState(1);

  const commentHandler = async () => {
    try {
      const { data } = await axios.get(
        `${url}/commit_vidoes_sites_views/?page=${pageId}`
      );
      setPageSize(data?.count);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    commentHandler();
  }, [pageId]);
  console.log(data);
  return (
    <div className="otziv w-[100%]" >
      <p className="title dark:text-[#443926]">ОТЗЫВЫ</p>

      {data?.results && (
        <div className="flex w-[100%] mx-auto">
          <div className="w-[90%] mx-auto">
          <Swiper
            className=""
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            navigation={true}
            modules={[Navigation]}
          >
            {data?.results?.slice(0, 6).map((item, index) => (
              <SwiperSlide>
                <div className="w-[512px] my-12 h-[230px] lg:h-[346px]">
                  <img
                    src={`${uri}${item?.comment}`}
                    width={"100%"}
                    height={"100%"}
                    className="img object-cover"
                    style={{ backgroundPosition: "center" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>
      )}
      {data?.results?.length > 0 ? (
       <div className="w-[90%] mx-auto my-12">
         <Swiper
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          navigation={true}
          modules={[Navigation]}
        >
          {utils_video.map((item, index) => (
            <SwiperSlide className="">
              <div key={index} className=" w-[512px] rounded-lg h-[100%]">
                <video
                  style={{
                    margin: "0 auto",
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                  width="100%"
                  height={"100%"}
                  controls
                >
                  <source src={item?.coment} type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       </div>
      ) : (
        <div className="flex justify-center">
          <button className="otz-button text-[20px] md:text-[24px]">
            Пока нет информации
          </button>
        </div>
      )}

      {showFullData && (
        <div className="flex flex-row flex-wrap">
          {data?.results?.map((item, index) => (
            <div
              key={index}
              className="h-[230px] lg:h-[346px] w-[100%] lg:w-[48%] flex flex-row  mr-3 mb-6 "
            >
              <img
                src={`${uri}${item?.comment}`}
                style={{ backgroundPosition: "center" }}
                width={"100%"}
                height={"100%"}
                className="img object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {!showFullData && (
        <div className="flex justify-center">
          <button
            className="otz-button text-[20px] md:text-[24px]"
            onClick={() => setShowFullData((prev) => !prev)}
          >
            Смотреть еще
          </button>
        </div>
      )}

      {showFullData && (
        <div className="flex justify-center py-8 mb-4">
          <Pagination1 pageSize={pageSize} setPageId={setPageId} />
        </div>
      )}

      <div
        className="mb-16 flex  justify-center"
        style={{
          height: 800,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <iframe
          className="w-[100%] lg:w-[50%]"
          style={{
            height: "100%",
            border: "1px solid #e6e6e6",
            borderRadius: 8,
            boxSizing: "border-box",
          }}
          src="https://yandex.ru/maps-reviews-widget/117992422020?comments"
        />
        <a
          href="https://yandex.ru/maps/org/buketnaya_manufaktura/117992422020/"
          target="_blank"
          style={{
            boxSizing: "border-box",
            textDecoration: "none",
            color: "#b3b3b3",
            fontSize: 10,
            fontFamily: "YS Text,sans-serif",
            padding: "0 16px",
            position: "absolute",
            bottom: 8,
            width: "100%",
            textAlign: "center",
            left: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            maxHeight: 14,
            whiteSpace: "nowrap",
          }}
        >
          Букетная Мануфактура на карте Санкт‑Петербурга — Яндекс&nbsp;Карты
        </a>
      </div>

      {/* <div className="w-[100%] py-24">
      <MyCarousel />
      </div> */}
      
    </div>
  );
};

export default OtzivSection;
