import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import axiosInstance, { uri, url } from "../layout/config";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Pagination } from "swiper";
import  './styles.css'
import './pagination.min.css'

const BuketDetail = () => {
  const [description1, setDescription1] = useState(true);
  const [review, setReviews] = useState(false);
  const [compount, setCompound] = useState(false);
  const [video1, setVideo1] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [delCount, setDelCount] = useState([]);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const active1Handler1 = () => {
    setDescription1((prev) => !prev);
    setReviews(false);
    setCompound(false);
    setVideo1(false);
  };

  const active1Handler2 = () => {
    setReviews((prev) => !prev);
    setDescription1(false);
    setCompound(false);
    setVideo1(false);
  };

  const active1Handler3 = () => {
    setCompound((prev) => !prev);
    setReviews(false);
    setDescription1(false);
    setVideo1(false);
  };

  const active1Handler4 = () => {
    setVideo1((prev) => !prev);
    setReviews(false);
    setCompound(false);
    setDescription1(false);
  };

  //add Count Handler
  const addHandler = () => {
    setCount((prev) => prev + 1);
  };

  //remove counter Handler
  const removeHandler = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const detailHandler = async () => {
    const { data } = await axios.get(`${url}/flowers_deteile_views/${id}/`);
    setData(data);
    setTotalPrice(data[0]?.price);
  };

  const getSelect = async () => {
    const { data } = await axios.get(`${url}/flowers_delivery_category/`);

    setDelCount(data);
  };
  useEffect(() => {
    detailHandler();
    getSelect();
  }, []);
  return (
    <Wrapper>
      {data?.map((item) => (
        <div className="w-[90%] lg:w-[70%] mx-auto">
          <p className="text-[48px] py-[40px] font-semibold leading-[58px] text-[#15100C] flex justify-center md:justify-start">
            Букеты
          </p>

          <div className="w-[100%] flex flex-col md:flex-row border-2 border-lime-500 lg:h-[640px] items-center  mb-[40px]">
            <div className="md:w-[50%] w-[100%] ">
              <Swiper
                modules={[ Pagination, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {item?.flowers?.map((c) => (
                  <SwiperSlide>
                    <div className={`h-[440px] lg:h-[640px] w-[100%]`}>
						<img
							src={` ${`${uri}${c?.img}`} `}
							className="w-[100%] h-[100%]   object-cover"
							alt={"flowers details"}
						/>
					</div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
            <div className="md:w-[50%] w-[100%] flex flex-col p-[20px] h-[100%] lg:justify-center items-center ">
              <p className="md:text-[32px] text-[#443926] text-[18px] font-semibold lg:mb-[30px] ">
                Букет с подсолнухами
              </p>
              <p  className="font-montserrat text-[18px] md:text-[20px] text-[#15100C] lg:mb-[30px]">Состав:</p> <p className="font-montserrat text-[#15100C] text-[14px] md:text-[18px]"
               dangerouslySetInnerHTML={{
                __html: (item?.rank )
              }} 
              />
              <div className="container2 md:mt-[40px] mb-3 flex justify-center">
                <div className="count">
                  <span className="plus cursor-pointer" onClick={addHandler}>
                    +
                  </span>
                  <span>{count}</span>
                  <span
                    className="minus cursor-pointer"
                    onClick={removeHandler}
                  >
                    -
                  </span>
                </div>
                <h4 className="flex text-[#443926] ">
                  {count * item?.price} <p className="ml-1">₽</p>
                </h4>
              </div>
              <div className="flex justify-center md:mt-[40px]">
                <button 
                className="bg-[#779243] py-2 px-6 rounded-lg text-white text-[20px] leading-[24px] w-[200px]"
                onClick={() => navigate('/букеты')}
                >
                  Купить
                </button>
              </div>
            </div>
          </div>

          <div className="flex mb-[40px] md:w-[60%] w-[100%] md:justify-between justify-around flex-wrap">
            <button
              onClick={active1Handler1}
              className={`${
                description1
                  ? "bg-[#443926] text-white"
                  : "border-2 border-[#443926] text-[#443926]"
              } py-1 px-6 flex justify-center text-[20px] rounded-3xl mb-[20px] md:mb-0`}
            >
              Описание
            </button>
            <button
              onClick={active1Handler2}
              className={`${
                review
                  ? "bg-[#443926] text-white"
                  : "border-2 border-[#443926] text-[#443926]"
              } py-1 px-6 flex justify-center text-[20px] rounded-3xl mb-[20px] md:mb-0`}
            >
              Отзывы
            </button>
            <button
              onClick={active1Handler3}
              className={`${
                compount
                  ? "bg-[#443926] text-white"
                  : "border-2 border-[#443926] text-[#443926]"
              } py-1 px-6 flex justify-center text-[20px] rounded-3xl mb-[20px] md:mb-0`}
            >
              Состав
            </button>
            <button
              onClick={active1Handler4}
              className={`${
                video1
                  ? "bg-[#443926] text-white"
                  : "border-2 border-[#443926] text-[#443926]"
              } py-1 px-6 flex justify-center text-[20px] rounded-3xl mb-[20px] md:mb-0 `}
            >
              Видео
            </button>
          </div>
          {description1 && (
            <div className="mb-[40px]">
              <p className="flex mb-[10px] text-[#443926] text-[20px]"
               dangerouslySetInnerHTML={{
                __html: (item?.cotent )
              }} 
              />
            </div>
          )}

          {review && (
            <div className="mb-[40px]">
              {item?.commit[0]?.comment ? (
              <img
              src={`${uri}${item?.commit[0]?.comment}`}
              className="rounded-3xl object-cover  h-[300px] md:h-[500px] w-[300px]  md:w-[100%]"
            />
              ) : (
                <p className="font-montserrat text-[20px]">На этот цветок нет отзывы</p>
              
              )}
            </div>
          )}

          {compount && (
            <div className="mb-[40px] flex">
             <p  className="font-montserrat flex text-[20px]">Состав:</p> <p className="font-montserrat flex text-[20px]"
               dangerouslySetInnerHTML={{
                __html: (item?.rank )
              }} 
              />
            </div>
          )}
          {video1 && (
            <div className="mb-[40px]">
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                  <ReactPlayer
                    url={`${uri}${item?.commit[0]?.videos}`}
                    className="absolute top-0 left-0 w-full h-full"
                    controls
                    width="100%"
                    height="100%"
                  />
              </div>
            </div>
          )}
        </div>
      ))}
    </Wrapper>
  );
};

export default BuketDetail;

const Wrapper = styled.section`
  background: #f5f5f5;

  .container2 {
    display: flex;
    gap: 38px;
    align-items: center;
  }

  .count {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .container2 span {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #443926;
  }

  .container2 .plus,
  .container2 .minus {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(197, 197, 197, 0.25);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #443926;
    text-align: center;
  }

  .container2 h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #443926;
  }
`;
