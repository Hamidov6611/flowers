import React from "react";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { uri, url } from "../layout/config";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles.css";
import "./pagination.min.css";
import BuketDetailItem from "./BuketDetailItem.jsx";
import { Checkbox } from "@mui/material";
import "./buket.css";
import { A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const BuketDetail = () => {
  const [delCount, setDelCount] = useState([]);
  const [flowers1, setFlowers] = useState([]);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState(null);
  const [sizeId, setSizeId] = useState(null);
  const [sizeData, setSizeData] = useState([]);
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const navigate = useNavigate();
  const blurDivs = document.querySelectorAll(".blur-div");
  blurDivs.forEach((div) => {
    const img = div.querySelector("img");
    const addImage = document.querySelectorAll(".blur-load");
    function loaded() {
      div.classList.add("loaded");
    }
    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });

  const detailHandler = async () => {
    const { data } = await axios.get(`${url}/flowers_deteile_views/${id}/`);
    setData(data[0]);
  };

  const getSelect = async () => {
    const { data } = await axios.get(`${url}/flowers_delivery_category/`);

    setDelCount(data);
  };
  const getSizeData = async () => {
    try {
      const { data } = await axios.get(`${url}/SziseFlowerViews`);
      setSizeData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    detailHandler();
    getSizeData();
    getSelect();
  }, []);
  const basketHandler = (item) => {
    toggleCardSize(item);
    let products = JSON.parse(localStorage.getItem("basket")) || [];
    console.log(products);
    // getData(products)
    let isProduct = products.find((c) => c.id == item?.id);
    console.log(isProduct);
    if (isProduct) {
      const updateProduct = products.map((item) => {
        if (item?.id == id) {
          return {
            ...item,
            count: item?.count + 1,
            id_size: parseInt(sizeId),
          };
        }
        return item;
      });
      localStorage.setItem("basket", JSON.stringify(updateProduct));
    } else {
      basket?.push({
        ...item,
        count: 1,
        selected: false,
        id_size: parseInt(sizeId),
      });
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  };

  const getFlowers = async () => {
    try {
      const { data } = await axios.get(`${url}/flowers_all_sites_views/`);
      setFlowers(data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFlowers();
  }, []);

  const toggleCard = (item) => {
    setFullData(item);
    setFlowers((prevCards) =>
      prevCards.map((card) =>
        card?.id === item?.id ? { ...card, visible: !card.visible } : card
      )
    );
    console.log(flowers1);
  };

  const toggleCardOver = (item) => {
    console.log(item);
    setFlowers((prevCards) =>
      prevCards.map((card) =>
        card?.id === item?.id ? { ...card, visible: false } : card
      )
    );
  };

  const toggleCardSize = (item) => {
    setFlowers((prevCards) =>
      prevCards.map((card) =>
        card?.id === item?.id ? { ...card, id_size: sizeId } : card
      )
    );
    console.log(flowers1);
  };
  const a = { ...data, id_size: sizeId };

  const handleQuickDelivery = () => {
    navigate(`/basket/2?quick=true`);
    localStorage.setItem("quick", JSON.stringify([a]));
  };
  return (
    <div className="w-full flex flex-col gap-y-12">
      <div
        style={{ background: "rgba(237, 252, 214, 1)" }}
        className="min-h-[60vh] flex flex-col md:flex-row"
      >
        <div className="w-[94%]  mx-auto md:hidden">
          <BuketDetailItem data={data} />
        </div>
        <div className="md:w-[30%] w-[100%] p-6 flex flex-col">
          <p className="text-[#15100C] md:block hidden font-montserrat font-medium text-[24px] md:text-[40px]">
            {data?.name}
          </p>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 mb-6 md:my-6">
            <button
              onClick={() => basketHandler(data)}
              className="bg-[#585E50] hover:text-[#585E50] hover:bg-transparent hover:border-2 hover:border-[#585E50] hover:transition-all hover:duration-500 rounded-xl text-white py-[10px] text-[14px] sm:text-[18px] md:text-[20px] font-medium font-montserrat"
            >
              В КОРЗИНУ
            </button>
            <button
              onClick={handleQuickDelivery}
              className="border-2 border-[#585E50] hover:border-transparent hover:text-white hover:transition-all hover:duration-500 hover:bg-[#585E50] rounded-xl text-[#585E50] py-[10px] text-[14px] sm:text-[18px] md:text-[20px] font-medium font-montserrat"
            >
              БЫСТРЫЙ ЗАКАЗ
            </button>
          </div>

          <div className="flex gap-x-4 items-center">
            <Checkbox sx={{ margin: 0, padding: 0 }} />
            <p className="font-medium font-montserrat text-[#443926] text-[10px] sm:text-[16px]">
              ДОБАВИТЬ ПОДХОДЯЩУЮ ВАЗУ В МОЙ ЗАКАЗ
            </p>
          </div>

          <p className="my-2 sm:my-4 text-[#15100C] text-[20px] md:text-[24px] font-semibold md:font-bold">
            Размер букета
          </p>

          <div className="mb-2 md:my-4">
            <select
              onChange={(e) => setSizeId(e.target.value)}
              className="w-[60%] py-1 sm:py-4 px-3 text-[20px] rounded-xl bg-transparent outline-none border-2 text-[#15100C] border-[#15100C]"
            >
              {sizeData?.map((item, index) => (
                <option
                  key={item?.id}
                  value={item?.id}
                  className="text-[20px]"
                  id="ddlProducts"
                >
                  {item?.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-2 sm:mt-4 flex flex-col">
            <p className="mb-2 text-[#15100C] text-[20px] md:text-[24px] font-semibold md:font-bold">
              Описание
            </p>

            {/* <p className="font-normal text-[20px] text-[#000]"></p> */}
            <p className="font-normal text-[14px] sm:text-[20px] text-[#000]">
              {data?.cotent == "" ? (
                "Прекрасный букет в нежно-розовых тонах с экзотическими сезонными цветами."
              ) : (
                <p
                  className="font-normal text-[18px] text-[#000] font-montserrat"
                  dangerouslySetInnerHTML={{
                    __html: data?.cotent,
                  }}
                />
              )}
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2 text-[#15100C] text-[20px] md:text-[24px] font-semibold md:font-bold">
              В составе
            </p>
            {data?.rank?.length > 0 ? (
              <p
                className="font-normal text-[14px] sm:text-[18px] text-[#000] font-montserrat"
                dangerouslySetInnerHTML={{
                  __html: data?.rank,
                }}
              />
            ) : (
              <p className="font-normal text-[14px] sm:text-[18px]  text-[#000] font-montserrat">
                Нет информации
              </p>
            )}
          </div>
          <div className="my-4">
            <p className="mb-2 text-[#15100C] text-[20px] md:text-[24px] font-semibold md:font-bold">
              Упаковка
            </p>
            <p className="font-normal text-[14px] sm:text-[18px]  text-[#000] font-montserrat">
              {data?.upa == null ? (
                "цветная пленка/крафт/без упаковки(на выбор)"
              ) : (
                <p
                  className="font-normal text-[18px] text-[#000] font-montserrat"
                  dangerouslySetInnerHTML={{
                    __html: data?.upa,
                  }}
                />
              )}
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2 text-[#15100C] text-[20px] md:text-[24px] font-semibold md:font-bold">
              Детали отправки
            </p>
            <p className="mb-2 text-[#15100C] text-[14px] md:text-[16px] font-medium">
              <strong>Открытка</strong> - текст заполняется при оформлении
              заказа
            </p>
            <strong className="mb-2 text-[#15100C] text-[14px] md:text-[16px] font-medium">
              Аквабокс, переноска - добавьте при оформлении заказа
            </strong>
          </div>
        </div>
        <div className="md:w-[36%] w-[94%]  mx-auto md:block hidden">
          <BuketDetailItem data={data} />
        </div>
        {data?.commit?.length > 0 && (
          <div className="md:w-[30%] w-[100%] hidden md:flex mt-[4%] items-center flex-col">
            <p className="text-[#303030] text-[24px] font-medium">
              Как мы доставляем букеты и компазиции
            </p>
            <div className="youtube z-50">
              <iframe
                src={data?.commit[0]?.videos}
                className="w-full h-full rounded-3xl"
                title=""
                frameborder="0"
                style={{ objectFit: "contain" }}
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <div className="px-1 md:mx-[20px] grid grid-cols-2 xl:grid-cols-4 gap-x-1 gap-y-4 md:gap-x-8">
        {flowers1?.map(
          (item, index) =>
            index < 4 && (
              <div
                onMouseLeave={() => toggleCardOver(item)}
                onMouseEnter={() => toggleCard(item)}
                key={item?.id}
                className={`${
                  item?.visible
                    ? "min-h-max left-0 sticky z-[99999]"
                    : "min-h-[300px] md:h-[570px]"
                } z-[8]  mb-[20px]  sticky card-shadow border rounded-lg`}
              >
                <div className="bg-blue-350 rounded-lg">
                  <Link to={`/bouquets/${item.id}`}>
                    <Swiper
                      modules={[Pagination, A11y]}
                      spaceBetween={50}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                    >
                      {item?.flowers?.map((c, index) => (
                        <SwiperSlide key={index}>
                          <div
                            className={`h-[200px] rounded-lg blur-div sm:h-[440px] w-[100%] blur-load ${
                              ((uri + c?.img).length < 0 ||
                                c?.img?.length < 0) &&
                              "blurimage"
                            }`}
                          >
                            <img
                              loading="lazy"
                              src={` ${
                                c?.img?.includes("https://buketyana-admin.ru")
                                  ? c?.img
                                  : uri + c?.img
                              } `}
                              className="w-[100%] h-[100%]  object-cover rounded-lg"
                              alt={"flower"}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Link>
                  <div className="p-3 sm:p-5">
                    <div>
                      <h5 className="mb-2 text-[16px] text-center line-clamp-2 md:text-[24px] tracking-tight text-[#000] font-montserrat font-normal md:line-clamp-1">
                        {item?.name}
                      </h5>
                    </div>

                    <div className="flex justify-center md:flex-row">
                      <p className="text-[#000] font-semibold text-[18px] md:text-[24px] font-montserrat">
                        {item?.price} ₽
                      </p>
                    </div>

                    {item?.visible && (
                      <>
                        <div className="hidden md:flex flex-wrap items-start font-semibold text-[14px] md:text-[16px] font-montserrat text-[#000]">
                          <p className="inline m-0 p-0">Цветы:</p>
                          <p
                            className="font-normal inline m-0 p-0 text-[#000] font-montserrat"
                            dangerouslySetInnerHTML={{
                              __html: item?.rank,
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3 mt-6">
                          <button
                            onClick={() => basketHandler(item.id)}
                            className="bg-[#585E50]  rounded-xl text-white py-[10px]  text-[16px] md:text-[18px] font-medium font-montserrat"
                          >
                            В КОРЗИНУ
                          </button>
                          <button className="border-2 border-[#585E50] rounded-xl text-[#585E50] py-[10px]  text-[16px] md:text-[18px] font-medium font-montserrat">
                            БЫСТРЫЙ ЗАКАЗ
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
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
