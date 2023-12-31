import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { uri, url } from "../layout/config.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Pagination } from "swiper";
import Pagination1 from "./pagination";
import Layout from "../layout/Layout";
import { toast } from "react-toastify";

function Buket() {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [flowers1, setFlowers] = useState([]);
  const [ceo, setCeo] = useState({ title: "", desc: "" });
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const [fullData, setFullData] = useState(null);
  const [title, setTitle] = useState("");
  const [id, setId] = useState(Number);
  const [subId, setSubId] = useState(0);
  const [pageSize, setPageSize] = useState(Number);

  const [pageId, setPageId] = useState(1);

  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const sasa = useParams();
  const [newSum, setNewSum] = useState([
    { id: 1, name: "до 5000 руб", visible: false },
    { id: 2, name: "до 10000 руб", visible: false },
    { id: 3, name: "до 100000 руб", visible: false },
  ]);

  const basketHandler = (id) => {
    let products = JSON.parse(localStorage.getItem("basket")) || [];
    // getData(products)
    let isProduct = products.find((c) => c.id == id);
    if (isProduct) {
      const updateProduct = products.map((item) => {
        if (item?.id == id) {
          return {
            ...item,
            count: item?.count + 1,
          };
        }
        return item;
      });
      localStorage.setItem("basket", JSON.stringify(updateProduct));
    } else {
      flowers1?.map((item) => {
        if (item.id === id) {
          basket?.push({ ...item, count: 1, selected: false });
          localStorage.setItem("basket", JSON.stringify(basket));
        }
      });
    }

    toast.success("Добавлен в корзину");
    navigate("/basket");
  };

  const categoryHandler = async () => {
    try {
      const { data } = await axios.get(`${url}/category_all_views/`);
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const categorySubHandler = async () => {
    try {
      if (id) {
        const { data } = await axios.get(
          `${url}/flowers_category_deteile/${id}/`
        );
        setFlowers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const subHandlerCat = async (id) => {
    try {
      if (id) {
        const { data } = await axios.get(
          `${url}/flowers_sub_category_deteile/${id}/`
        );
        // console.log(data)
        setFlowers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    subHandlerCat();
  }, [subId]);

  const getFlowers = async () => {
    try {
      const { data } = await axios.get(
        `${url}/flowers_all_sites_views/?page=${pageId}`
      );
      setFlowers(data?.results);
      setPageSize(data?.count);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFlowers();
  }, [pageId]);
  const subHandler = async (id) => {
    try {
      setId(id);
      const { data } = await axios.get(`${url}/sub_category_all_views/${id}/`);
      setSubCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const subHandler2 = async (id) => {
    try {
      if (id) {
        setId(id);
        const { data } = await axios.get(
          `${url}/sub_category_all_views/${sasa?.id}/`
        );
        setSubCategory(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    subHandler2();
  }, [sasa.id]);

  useEffect(() => {
    categorySubHandler();
  }, [id]);
  useEffect(() => {
    categoryHandler();
    getFlowers();
  }, []);

  const SortBySum1 = async() => {
    const { data } = await axios.get(
      `${url}/flowers_all_sites_views/?page=${pageId}`
    );
    let newArr = []
    data?.results?.map((item) => {
      if (parseInt(item?.price) < 5000) {
        newArr.push(item);
      }
    });
    setFlowers(newArr);
    setPageSize(newArr.length);
  };

  const SortBySum2 = async() => {
    const { data } = await axios.get(
      `${url}/flowers_all_sites_views/?page=${pageId}`
    );
    let newArr = []
    data?.results?.map((item) => {
      if (parseInt(item?.price) < 10000) {
        newArr.push(item);
      }
    });
    setFlowers(newArr);
    setPageSize(newArr.length);
  };
  const SortBySum3 =async () => {
    const { data } = await axios.get(
      `${url}/flowers_all_sites_views/?page=${pageId}`
    );
    let newArr = []
    data?.results?.map((item) => {
      if (parseInt(item?.price) > 10000) {
        newArr.push(item);
        console.log(newArr);
      }
    });
    setFlowers(newArr);
    setPageSize(newArr.length);
  };


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

  const toggleCard = (item) => {
    setFullData(item);
    setFlowers((prevCards) =>
      prevCards.map((card) =>
        card?.id === item?.id ? { ...card, visible: !card.visible } : card
      )
    );
  };

  const toggleCardOver = (item) => {
    setFlowers((prevCards) =>
      prevCards.map((card) =>
        card?.id === item?.id ? { ...card, visible: false } : card
      )
    );
  };
  const handleQuickDelivery = (data) => {
    navigate(`/basket/2?quick=true`);
    localStorage.setItem("quick", JSON.stringify([data]));
    window.scrollTo({
      top: 0,
    });
  };

  const getAndSetCeo = () => {
    switch (sasa.id) {
      case "46":
        setCeo({
          title: "Осень",
          desc: "Дарите тепло с осенними цветами! Наша коллекция осенних букетов и композиций позволит вам насладиться теплыми оттенками и уютной атмосферой. У нас есть идеальный букет для создания осеннего настроения.",
        });
        break;
      case "47":
        setCeo({
          title: "Зима",
          desc: "Отправьте волшебство зимы вместе с нашими зимними композициями. Снежные белые розы, голубые эустомы, серебристые декорации - наши букеты передадут белоснежную красоту зимы и создадут атмосферу праздника и волшебства. ",
        });
        break;
      case "48":
        setCeo({
          title: "Весна",
          desc: "Добро пожаловать в цветущий мир весны! От ярких тюльпанов до нежных пионов и ароматных фрезий, наши весенние букеты наполнят ваш дом свежестью и радостью. Пусть каждый весенний день будет полон цветов и веселья!",
        });
        break;
      case "45":
        setCeo({
          title: "Лето",
          desc: "Яркие цветы и солнечное настроение - вот что предлагает наша коллекция летних букетов. От свежих полей лаванды до ярких подсолнухов, наши букеты принесут радость и веселье в самые жаркие дни лета.",
        });
        break;
      case "52":
        setCeo({
          title: "Вазы",
          desc: "Украшайте свои цветы в наших стильных и элегантных вазах. Выбирайте из различных форм и дизайнов, чтобы создать уникальную и привлекательную композицию. Наши вазы станут стильным аксессуаром для вашего интерьера и подчеркнут красоту и изысканность цветов.",
        });
        break;
      case "49":
        setCeo({
          title: "Сухоцветы",
          desc: "Изысканные и богатые текстурой, сухоцветы создают особенную атмосферу. Наши сухоцветы подчеркнут настроение и стиль вашего интерьера, привнесут уют и природную красоту.",
        });
        break;
      case "53":
        setCeo({
          title: "Открытки",
          desc: "Выразите свои чувства с помощью наших уникальных открыток. Они станут идеальным дополнением к вашему цветочному подарку и позволят передать теплые слова и пожелания.",
        });
        break;
      case "54":
        setCeo({
          title: "Свечи",
          desc: "Создайте мягкий и романтический свет с нашей коллекцией свечей. Они добавят атмосферу уюта и спокойствия, а также подчеркнут красоту и аромат цветов.",
        });
        break;
      case "55":
        setCeo({
          title: "Сертификаты",
          desc: "Подарите возможность выбора с нашими сертификатами. Они станут идеальным подарком для тех, кто ценит красоту цветов и хочет самостоятельно выбрать букет или композицию.",
        });
        break;
      case "50":
        setCeo({
          title: "Авторские букеты",
          desc: "Добро пожаловать в мир уникальных авторских букетов! Наши флористы создают яркие и оригинальные композиции из изысканных цветов. Каждый букет - это произведение искусства, призванное порадовать и удивить своего владельца.",
        });
        break;
      case "51":
        setCeo({
          title: "Монобукеты",
          desc: "Простота и элегантность в каждом букете. Монобукеты - это идеальный способ подчеркнуть красоту и нежность каждого цветка. Они станут великолепным подарком для любого случая и позволят цветам выразить свою прелесть в полной мере.",
        });
        break;
    }
  };

  useEffect(() => {
    getAndSetCeo();
  }, [sasa.id]);

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Wrapper>
      <>
        <div className="w-[90%] lg:w-[94%] mx-auto">
          <p className="text-[48px]  font-semibold leading-[58px] text-[#15100C] flex justify-center md:justify-start">
            Букеты
          </p>
          {/* <div className="flex py-[40px] items-center flex-col md:flex-row">
            <div className="flex md:flex-row flex-col gap-x-3 md:gap-x-6 gap-y-4 text-center my-3 md:my-0 ml-0 md:ml-5">
              <p
                onClick={SortBySum1}
                className="bg-white  rounded-2xl font-medium  text-[14px] md:text-[16px] lg:text-[20px] py-2 cursor-pointer  text-center text-[#343434] md:px-2 border-2"
              >
                до 5000 руб
              </p>
              <p
                onClick={SortBySum2}
                className="bg-white mr-0 md:mr-5 rounded-2xl font-medium  text-[14px] md:text-[16px] lg:text-[20px] py-2 cursor-pointer  text-center text-[#343434] md:px-2 border-2"
              >
                до 10000 руб
              </p>
              <p
                onClick={SortBySum3}
                className="bg-white mr-0 md:mr-5 rounded-2xl font-medium  text-[14px] md:text-[16px] lg:text-[20px] py-2 cursor-pointer  text-center text-[#343434] md:px-2 border-2"
              >
                свыше 10000 руб
              </p>
            </div>
          </div> */}
          <div className="w-[100%] flex py-[40px] flex-col md:flex-row flex-wrap">
            {newSum?.map((item, idx) => (
              <button
                key={idx}
                onClick={
                  (item?.id == 1 && SortBySum1) ||
                  (item?.id == 2 && SortBySum2) ||
                  (item?.id == 3 && SortBySum3)
                }
                className={`bg-white text-[#443926] border-gray-400 sm:w-auto border-2
               py-1 md:py-2 mb-[20px] md:px-8 focus:bg-[#ECCEB4] focus:text-white text-[20px] font-medium rounded-lg ml-5`}
              >
                {item?.name}
              </button>
            ))}
          </div>
          <div className="w-[100%] flex pb-[40px] flex-col md:flex-row flex-wrap">
            {category?.map((item, idx) => (
              <button
                key={idx}
                onClick={() => subHandler(item?.id)}
                className={`bg-white text-[#443926] border-2 border-[#443926]
               py-1 md:py-2 mb-[20px] md:px-8 focus:bg-[#443926] focus:text-white text-[20px] font-medium rounded-lg ml-5`}
              >
                {item?.title}
              </button>
            ))}
          </div>

          <div className="flex pb-[30px] flex-col md:flex-row">
            <div className="flex flex-wrap">
              <button
                className="text-[#443926] text-[16px] md:text-[20px] focus:underline mr-4"
                onClick={() => getFlowers()}
              >
                Все
              </button>
              {subCategory?.map((item) => (
                <button
                  key={item?.id}
                  className="text-[#443926] text-[16px] md:text-[20px] focus:underline mr-4"
                  onClick={() => subHandlerCat(item?.id)}
                >
                  {/* {item?.id} */}
                  {item?.title}
                </button>
              ))}
            </div>
          </div>

          <div
          className="rounded-lg relative p-5 flex flex-wrap gap-x-4 gap-y-4 mb-[40px] justify-center"
            style={{ background: "rgba(44, 81, 70, 0.48)" }}
          >
            {flowers1.length > 0 ? (
              flowers1?.map((item, index) => {
                return (
                  ((location.pathname == "/"
                    ? index < 4
                    : () => setPageId(1)) ||
                    show) && (
                    <div
                      onMouseLeave={() => toggleCardOver(item)}
                      onMouseEnter={() => toggleCard(item)}
                      key={index}
                      className={` z-[8]  mb-[20px] w-full md:w-[49%] sticky card-shadow border rounded-lg`}
                    >
                      <div className="bg-blue-350 rounded-lg">
                        <Link
                          to={`/bouquets/${item.id}`}
                          onClick={() => {
                            window.scrollTo({
                              top: 0,
                            });
                          }}
                        >
                          <Swiper
                            modules={[Pagination, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                          >
                            {item?.flowers?.map((c, index) => (
                              <SwiperSlide key={index}>
                                <div
                                  key={index}
                                  className={`rounded-t-lg h-[273px] blur-div sm:h-[440px] w-[100%] blur-load ${
                                    ((uri + c?.img).length < 0 ||
                                      c?.img?.length < 0) &&
                                    "blurimage"
                                  }`}
                                >
                                  <img
                                    loading="lazy"
                                    src={` ${
                                      c?.img?.includes(
                                        "https://buketyana-admin.ru"
                                      )
                                        ? c?.img
                                        : uri + c?.img
                                    } `}
                                    className="w-[100%] h-[100%]  object-cover rounded-t-lg"
                                    alt={"flower"}
                                  />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </Link>
                        <div className="p-3 sm:p-5">
                          <div>
                            <h5 className="lg:font-semibold xl:font-bold text-[16px] md:text-[18px] text-[#fff] font-normal line-clamp-1">
                              {item?.name}
                            </h5>
                          </div>

                          <div className="flex flex-row justify-between items-center gap-x-3 gap-y-3 mt-2">
                            <button
                              onClick={() => basketHandler(item.id)}
                              className="bg-greenBtn  rounded-[10px] text-white h-[40px] min-w-[271px]  text-[14px] md:text-[16px] font-medium font-montserrat"
                            >
                              В КОРЗИНУ
                            </button>
                            <div className="flex justify-center md:flex-row">
                              <p className="text-[#fff] font-normal text-[18px] md:text-[24px] font-montserrat">
                                {item?.price} ₽
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                );
              })
            ) : (
              <div className="w-[100%] flex justify-center">
                <p className="font-montserrat text-[24px] text-white">
                  Нет таких цветов
                </p>
              </div>
            )}
          </div>
          {location.pathname == "/" ? (
            <div className="w-[100%] flex justify-center">
              {/* {
                <Link to={location.pathname == "/" && "/bouquets"} className="w-[100%] flex justify-center">
                  <button
                    className="py-[20px] px-[60px] text-[12px] lg:text-[20px] font-montserrat rounded-lg text-[#fff] bg-[#443926]"
                    onClick={() => setShow(!show)}
                  >
                    {show ? "Cократить" : "Смотреть все букеты"}
                  </button>
                </Link>
              } */}
            </div>
          ) : (
            <div className="flex justify-center my-8">
              <Pagination1 pageSize={pageSize} setPageId={setPageId} />
            </div>
          )}

          {/* {location.pathname === "/%D0%B1%D1%83%D0%BA%D0%B5%D1%82%D1%8B" && (
        )} */}
        </div>
      </>
    </Wrapper>
  );
}

export default Buket;

const Wrapper = styled.section`
  .card {
    background-color: ${(props) => props.theme.colors.cardBackground};
    padding: 48px;
    border-radius: 30px;

    .card-list {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(490px, 1fr));
      justify-items: center;
      gap: 32px;

      .card-item {
        width: 100%;
        border: 2px solid ${(props) => props.theme.colors.whiteColor};

        img {
          // width: 100%;
          // height: 395px;
          object-fit: cover;
        }

        h3 {
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 39px;
          color: ${(props) => props.theme.colors.whiteColor};
          text-align: center;
          padding: 32px 0 83px;
        }
      }
    }
  }
`;
