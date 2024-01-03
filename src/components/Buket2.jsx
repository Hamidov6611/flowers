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

function Buket2() {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [flowers1, setFlowers] = useState([]);
  const [ceo, setCeo] = useState({ title: "", desc: "" });
  const [isSort, setIsSort] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [newSum, setNewSum] = useState([
    { id: 1, name: "до 5000р.", visible: false },
    { id: 2, name: "от 5 000р. - 10 000р.", visible: false },
    { id: 3, name: "свыше 10 000р.", visible: false },
  ]);
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
  const sasa = useParams();

  const location = useLocation();

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFlowers();
  }, [pageId]);
  const subHandler = async (e, id) => {
    e.stopPropagation();
    try {
      setIsFilter(true);
      setId(id);
      const { data } = await axios.get(`${url}/sub_category_all_views/${id}/`);
      setSubCategory(data);
      setIsFilter(false);
    } catch (error) {
      console.log(error);
    }
  };

  const subHandler2 = async () => {
    try {
      //   setId(id);
      const { data } = await axios.get(
        `${url}/flowers_sub_category_deteile/${sasa?.id}/`
      );
      setFlowers(data);
      console.log(data);
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
  }, []);

  const SortBySum1 = async () => {
    const { data } = await axios.get(
      `${url}/flowers_all_sites_views/?page=${pageId}`
    );
    let newArr = [];
    data?.results?.map((item) => {
      if (parseInt(item?.price) < 5000) {
        newArr.push(item);
      }
    });
    setFlowers(newArr);
    setPageSize(newArr.length);
  };

  const SortBySum2 = async () => {
    const { data } = await axios.get(
      `${url}/flowers_all_sites_views/?page=${pageId}`
    );
    let newArr = [];
    data?.results?.map((item) => {
      if (parseInt(item?.price) < 10000) {
        newArr.push(item);
      }
    });
    setFlowers(newArr);
    setPageSize(newArr.length);
  };
  const SortBySum3 = async () => {
    const { data } = await axios.get(
      `${url}/flowers_all_sites_views/?page=${pageId}`
    );
    let newArr = [];
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

  // For ceo
  useEffect(() => {
    getAndSetCeo();
  }, [sasa.id]);

  const sortResultsByPrice = (e) => {
    e.stopPropagation();
    if (flowers1) {
      setIsSort(false);

      const res = flowers1.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
      console.log(res);
      setFlowers(res);
    } else {
      console.log("flowers not found");
    }
  };

  const sortByPriceDescending = (e) => {
    e.stopPropagation();
    if (flowers1) {
      setIsSort(false);
      const res = flowers1.sort(
        (a, b) => parseInt(b.price) - parseInt(a.price)
      );
      console.log(res);
      setFlowers(res);
    } else {
      console.log("flowers not found");
    }
  };

  return (
    <Wrapper>
      <Layout title={ceo.title} desc={ceo.desc}>
        <div
          className="w-[100%] md:px-4 lg:w-[94%] mx-auto"
          onClick={() => {
            setIsSort(false);
            setIsFilter(false);
          }}
        >
          <div className="flex items-center mt-[20px] px-3">
            <b className="font-semibold w-[55%] text-[28px] md:text-[40px] text-[#15100C] text-center flex justify-end md:justify-start  md:text-start">
              Букеты
            </b>
            <p
              className="w-[45%] flex justify-end gap-x-1 md:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setIsSort((prev) => !prev);
              }}
            >
              <b className="text-[12px] ml-2 text-[#443926] cursor-pointer">
                Сортировать по:
              </b>
              <div className="flex gap-x-1 ml-2">
                <img
                  src="/bot.png"
                  alt=""
                  width={10}
                  height={5}
                  className="object-cover"
                />
                <img
                  src="/top.png"
                  alt=""
                  width={10}
                  height={5}
                  className="object-cover"
                />
              </div>

              {isSort && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-3 text-[12px] shadow-xl text-[#443926] top-[130px] rounded-md md:rounded-xl flex flex-col gap-y-2 bg-[#EDFCD6] py-2 px-2 border border-[#443926] z-30"
                >
                  <p
                    onClick={(e) => sortResultsByPrice(e)}
                    className="cursor-pointer"
                  >
                    ВОЗРАСТАНИЮ ЦЕНЫ
                  </p>
                  <p
                    onClick={(e) => sortByPriceDescending(e)}
                    className="cursor-pointer"
                  >
                    УБЫВАНИЮ ЦЕНЫ
                  </p>
                </div>
              )}
            </p>
          </div>
          <div className="w-[100%] md:w-[80%] flex items-end gap-x-2 py-[10px] pt-[30px] px-2">
            <div
              className="mb-1 md:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setIsFilter((prev) => !prev);
              }}
            >
              <img src="/filter.svg" alt="" width={25} height={20} />
            </div>
            <div className="flex gap-x-2 md:gap-x-3 items-center relative">
              {newSum?.map((item) => (
                <>
                  <button
                    onClick={
                      (item?.id == 1 && SortBySum1) ||
                      (item?.id == 2 && SortBySum2) ||
                      (item?.id == 3 && SortBySum3)
                    }
                    className={`bg-white text-[#443926] border border-[#443926] md:border-gray-400
               h-[40px] md:min-w-[180px]  md:px-8 focus:bg-[#ECCEB4] focus:text-black text-[12px] sm:text-[14px] px-[2px] md:text-[20px] font-medium rounded-lg md:rounded-lg font-montserrat`}
                  >
                    {item?.name}
                  </button>
                </>
              ))}
              <p
                className="hidden md:flex items-center justify-end gap-x-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSort((prev) => !prev);
                }}
              >
                <b className="text-[20px] ml-2 text-[#443926] cursor-pointer font-semibold">
                  Сортировать по:
                </b>
                <div className="flex gap-x-1 ml-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    cursor={"pointer"}
                  >
                    <path
                      d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"
                      fill="#443926"
                    />
                  </svg>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    cursor={"pointer"}
                  >
                    <path
                      d="M16 8L14.59 6.59L9 12.17V0H7V12.17L1.42 6.58L0 8L8 16L16 8Z"
                      fill="#443926"
                    />
                  </svg>
                </div>

                {isSort && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-3 text-[18px] shadow-xl text-[#443926] w-[30%] top-[50px] rounded-md md:rounded-xl flex flex-col gap-y-2 bg-[#EDFCD6] py-2 px-2 border border-[#443926] z-30"
                  >
                    <p
                      onClick={(e) => sortResultsByPrice(e)}
                      className="cursor-pointer"
                    >
                      ВОЗРАСТАНИЮ ЦЕНЫ
                    </p>
                    <p
                      onClick={(e) => sortByPriceDescending(e)}
                      className="cursor-pointer"
                    >
                      УБЫВАНИЮ ЦЕНЫ
                    </p>
                  </div>
                )}
              </p>
            </div>
          </div>
          {isFilter && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-[220px] left-4 p-2 md:hidden flex flex-col gap-y-1 bg-[#EDFCD6] z-[999999] border border-[#443926] rounded-lg "
            >
              {category?.map((c, idx) => (
                <p
                  onClick={(e) => subHandler(e, c?.id)}
                  key={idx}
                  className="text-[#443926] text-[13px] cursor-pointer font-medium"
                >
                  {c?.title}
                </p>
              ))}
            </div>
          )}

          {/* subCategory, muted */}

          {/* <div className="hidden flex pb-[30px] flex-col md:flex-row">
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
                  {item?.title}
                </button>
              ))}
            </div>
          </div> */}

          {/* Flowers section */}
          <div className="relative py-5 flex px-2 flex-wrap gap-x-4 gap-y-4 mb-[40px]">
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
                      className={`${
                        item?.visible
                          ? "min-h-max left-0 sticky z-[99999] rounded-[30px]"
                          : " rounded-[30px]"
                      } z-[8]  mb-[20px] ${
                        !(index % 2 == 0)
                          ? "w-full md:w-[55%] rounded-[30px]"
                          : "w-full md:w-[43%] rounded-[30px]"
                      } sticky z-0 shadow-md border rounded-[30px]`}
                    >
                      <div className=" rounded-[30px]">
                        <Link
                          to={`/bouquets/${item.id}`}
                          onClick={() => {
                            window.scrollTo({
                              top: 0,
                            });
                          }}
                          className=""
                        >
                          <Swiper
                            modules={[Pagination, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            className=""
                          >
                            {item?.flowers?.map((c, index) => (
                              <SwiperSlide
                                key={index}
                                className=" rounded-[30px]"
                              >
                                <div
                                  className={`h-[372px] blur-div sm:h-[620px] w-[100%] blur-load rounded-[30px] ${
                                    ((uri + c?.img).length < 0 ||
                                      c?.img?.length < 0) &&
                                    "blurimage "
                                  } rounded-[30px]`}
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
                                    className="w-[100%] h-[100%] bg-contain rounded-[30px] "
                                    alt={"flower"}
                                  />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </Link>
                        <div className="p-3 sm:p-5">
                          <div>
                            <h5 className="mb-2 lg:font-medium text-[16px] text-center md:text-[24px] tracking-tight text-[#000] font-montserrat font-normal line-clamp-1">
                              {item?.name}
                            </h5>
                          </div>

                          <div className="flex justify-center md:flex-row">
                            <p className="text-[#000] font-semibold text-[24px] md:text-[32px] font-montserrat">
                              {item?.price} ₽
                            </p>
                          </div>

                          {item?.visible && (
                            <>
                              <div className="gap-x-3 font-semibold  text-[17px] md:text-[20px] font-montserrat text-[#000]">
                                {item?.rank && (
                                  <>
                                    <p className="inline mr-2">Цветы:</p>
                                    <p
                                      className="font-normal inline m-0 p-0 text-[#000] font-montserrat"
                                      dangerouslySetInnerHTML={{
                                        __html: item?.rank.replace(
                                          /<[^>]*>/g,
                                          ""
                                        ),
                                      }}
                                    />
                                  </>
                                )}
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3 mt-6">
                                <button
                                  onClick={() => basketHandler(item.id)}
                                  className="bg-[#585E50]  rounded-xl text-white py-[10px]  text-[18px] md:text-[20px] font-medium font-montserrat"
                                >
                                  В КОРЗИНУ
                                </button>
                                <button
                                  onClick={() => handleQuickDelivery(item)}
                                  className="border-2 border-[#585E50] rounded-xl text-[#585E50] py-[10px]  text-[18px] md:text-[20px] font-medium font-montserrat"
                                >
                                  БЫСТРЫЙ ЗАКАЗ
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                );
              })
            ) : (
              <div className="w-[100%] flex justify-center border-2 border-[#585E50] py-3 px-4 rounded-xl">
                <p className="font-montserrat text-[24px] text-[#585E50]">
                  Нет таких цветов
                </p>
              </div>
            )}
          </div>
          {location.pathname == "/" ? (
            <div className="w-[100%] flex justify-center"></div>
          ) : (
            <div className="flex justify-center my-8">
              {flowers1?.length > 0 && (
                <Pagination1 pageSize={pageSize} setPageId={setPageId} />
              )}
            </div>
          )}
        </div>
      </Layout>
    </Wrapper>
  );
}

export default Buket2;

const Wrapper = styled.section`
  .card {
    background-color: #edfcd6;
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
