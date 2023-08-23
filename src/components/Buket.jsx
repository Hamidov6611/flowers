import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link, useLocation, useParams, useRoutes } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { uri, url } from "../layout/config.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination } from "swiper";
import { useProduct } from "../config/context";
import Pagination1 from "./pagination";
import ProductContext from "../config/proontext";
import { ProductsContext } from "../context/ProductContext";

function Buket() {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [flowers1, setFlowers] = useState([]);
  const [isShow, setIsShow] = useState(false)
  const [price1, setPrice1] = useState(5000);
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const [title, setTitle] = useState("");
  const [id, setId] = useState(Number);
  const [subId, setSubId] = useState(0);
  const [pageSize, setPageSize] = useState(Number);
  const [filt, setFilt] = useState([{id: 1, sum: 5000}, {id: 2, sum: 10000}, {id: 3, sum: 100000}])
  const {state, setSate, getData} = useContext(ProductsContext)
  const [pageId, setPageId] = useState(1);

  const [show, setShow] = useState(false);
  // const { setstate } = useContext(ProductContext);

  const sasa = useParams()
  console.log(state)

  const location = useLocation();
  const plusHandler = () => {
    // setPrice1((prev) => prev + 2000);
    switch(price1) {
      case 5000: 
        setPrice1(price1 * 2)
        break
      case 10000:
        setPrice1(price1 * 10)
        break
      case 100000:
        setPrice1(5000)
        break
      default: setPrice1(5000)
    }
    sortHandler()
  };
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

          getData(basket);
        }
      });
    }
  };

  console.log(state)

  const minusHandler = () => {
    switch(price1) {
      case 5000: 
        setPrice1(100000)
        break
      case 10000:
        setPrice1(5000)
        break
      case 100000:
        setPrice1(10000)
        break
      default: setPrice1(5000)
    }

    sortHandler()
  };

  // category handler
  const categoryHandler = async () => {
    try {
      const { data } = await axios.get(`${url}/category_all_views/`);
      setCategory(data);
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  //filter handler
  const filterHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${url}/AllProductSearchView/?search=${title}`
      );
      setFlowers(data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  const sortHandler = async () => {
    // e.preventDefault();
    try {
      const { data } = await axios.get(
        `${url}/AllProductSearchView/?search=${price1}`
      );
      setFlowers(data?.results);
    } catch (error) {
      console.log(error);
    }
  }

  //get sub category
  const categorySubHandler = async () => {
    try {
      const { data } = await axios.get(
        `${url}/flowers_category_deteile/${id}/`
      );
      // setSubCategory(data);
      setFlowers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const subHandlerCat = async (id) => {
    try {
      const { data } = await axios.get(
        `${url}/flowers_sub_category_deteile/${id}/`
      );
      setFlowers(data);
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
      setId(id);
      const { data } = await axios.get(`${url}/sub_category_all_views/${sasa?.id}/`);
      setSubCategory(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    subHandler2()
  }, [sasa.id])

  useEffect(() => {
    categorySubHandler();
  }, [id]);
  useEffect(() => {
    categoryHandler();
    getFlowers();
  }, []);

  // console.log(flowers1);
  return (
    <Wrapper>
      <div className="w-[90%] lg:w-[94%] mx-auto">
        <p className="text-[48px]  font-semibold leading-[58px] text-[#15100C] flex justify-center md:justify-start">
          Букеты
        </p>
        <div className="flex pb-[40px] items-center flex-col md:flex-row">
          <div className="flex mb-[20px] md:mb-0 relative">
            <p className="text-[20px] font-medium text-[#656565] md:mr-4">
              до {price1}
            </p>
            <ArrowUpwardIcon className="cursor-pointer" onClick={plusHandler} />
            <ArrowDownwardIcon onClick={minusHandler} />

            {/* <div className="absolute top-8 left-0 h-25 w-28 flex flex-col">
                {filt?.map((item, index) => {
                  return (
                    <p key={item?.id} className="font-semibold text-[#15100C]">{item?.sum}</p>
                  )
                })}
            </div> */}
          </div>
          <form onSubmit={filterHandler}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="bg-[#F5F5F5] border-2 border-slate-400 md:ml-4 px-4 rounded-lg py-2"
              placeholder="Введите цену или название"
            />
          </form>
        </div>
        <div className="w-[100%] flex pb-[40px] flex-col md:flex-row flex-wrap">
          {category?.map((item) => (
            <>
              <button
                key={item?.id}
                onClick={() => subHandler(item?.id)}
                className={`bg-white text-[#443926] border-2 border-[#443926]
               py-1 md:py-2 mb-[20px] px-8 focus:bg-[#443926] focus:text-white text-[20px] font-medium rounded-3xl ml-5`}
              >
                {item?.title}
              </button>
            </>
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

        <div className="bgbgbg  rounded-3xl p-5 grid grid-cols-1  lg:grid-cols-2 gap-x-4 gap-y-4 mb-[40px]">
          {flowers1.length > 0 ? (
            flowers1?.map((item, index) => {
              return (
                ((location.pathname == "/" ? index < 4 : () => setPageId(1)) ||
                  show) && (
                  <div key={index} className=" mb-[20px] ">
                    <div className="bg-blue-350 border border-gray-200 rounded-lg ">
                      <Link to={`/букеты/${item.id}`}>
                        <Swiper
                          modules={[Pagination, A11y]}
                          spaceBetween={50}
                          slidesPerView={1}
                          pagination={{ clickable: true }}
                        >
                          {item?.flowers?.map((c, index) => (
                            <SwiperSlide key={index}>
                              <div
                                className={"h-[273px] sm:h-[440px] w-[100%]"}
                              >
                                <img
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
                      <div className="p-5">
                        <div>
                          <h5 className="mb-2 text-[16px] md:text-[18px] tracking-tight text-white dark:text-white font-montserrat line-clamp-1">
                            {item?.name}
                          </h5>
                        </div>
                        {/* <div className="flex">
                          <p className="mb-3 text-[14px] font-medium min-h-[20px] text-[#443926] mr-3 md:text-[16px] ">
                            В составе:
                          </p>{" "}
                          <p
                            className="mb-3 text-[14px] font-medium line-clamp-1 md:text-[16px] text-[#443926] md:text-[16px]"
                            dangerouslySetInnerHTML={{
                              __html: item?.rank,
                            }}
                          />
                        </div> */}
                        <div className="flex justify-between md:flex-row">
                          <div>
                            <button
                              onClick={() => basketHandler(item.id)}
                              className="mr-4 inline-flex items-center px-4 rounded-2xl md:px-24 py-2 text-center text-white bg-[#779243] md:rounded-3xl hover:bg-lime-500 justify-center mb-3 md:mb-0"
                            >
                              <p className="font-montserrat font-semibold text:[18px]">В корзину</p>
                            </button>
                            {/* <Link to={`/букеты/${item.id}`}>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1e29ac] rounded-lg hover:bg-blue-500 justify-center mb-3 md:mb-0">
                        Подробнее
                        </button>
                      
                      </Link> */}
                          </div>
                          <p className="text-white text-[24px] font-montserrat">
                            {item?.price} ₽
                          </p>
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
          {location.pathname == "/" && (
            <div className="w-[100%] flex justify-center" >
              {
                <Link to={location.pathname == "/" && "/букеты"} className="w-[100%] flex justify-center">
                  <button
                    className="py-[20px] px-[60px] text-[12px] lg:text-[20px] font-montserrat rounded-lg text-[#fff] bg-[#443926]"
                    onClick={() => setShow(!show)}
                  >
                    {show ? "Cократить" : "Смотреть все букеты"}
                  </button>
                </Link>
              }
            </div>
          )}

        {location.pathname === "/%D0%B1%D1%83%D0%BA%D0%B5%D1%82%D1%8B" && (
          <div className="flex justify-center my-8">
            <Pagination1 pageSize={pageSize} setPageId={setPageId} />
          </div>
        )}
      </div>
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
