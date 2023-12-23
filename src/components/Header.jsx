import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import "./index.css";
import { useEffect } from "react";
import { uri, url, url2 } from "../layout/config";
import axios from "axios";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { IconButton } from "@mui/material";
import "./header.css";

function Header() {
  const [menu, setMenu] = useState(true);
  const menuHandler = () => setMenu((prev) => !prev);
  const [data, setData] = useState([]);
  const [isView, setIsView] = useState(true);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);
  const [menu5, setMenu5] = useState(false);
  const [menu6, setMenu6] = useState(false);
  const [id, setId] = useState([]);
  const [category, setCategory] = useState([]);
  const [isCat, setIsCat] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const num = () => {
      const a = localStorage.getItem("basket");
      if (a) {
        const res = JSON.parse(a);
        setId(res);
      }
    };
    num();
  }, []);

  const clickHandler = () => {
    setMenu1(false);
    setMenu2(false);
    setMenu3(false);
    setMenu4(false);
    setMenu5(false);
    setMenu6(false);
  };

  const active1 = () => {
    setMenu1((prev) => !prev);
    setMenu2(false);
    setMenu3(false);
    setMenu4(false);
    setMenu5(false);
    setMenu6(false);
  };

  const active2 = () => {
    setIsCat((prev) => !prev);
    setMenu2((prev) => !prev);
    setMenu1(false);
    setMenu3(false);
    setMenu4(false);
    setMenu5(false);
    setMenu6(false);
  };
  const active3 = () => {
    setMenu3((prev) => !prev);
    setMenu1(false);
    setMenu2(false);
    setMenu4(false);
    setMenu5(false);
    setMenu6(false);
  };
  const active4 = () => {
    setMenu4((prev) => !prev);
    setMenu1(false);
    setMenu2(false);
    setMenu3(false);
    setMenu5(false);
    setMenu6(false);
  };
  const active5 = () => {
    setMenu5((prev) => !prev);
    setMenu1(false);
    setMenu2(false);
    setMenu4(false);
    setMenu3(false);
    setMenu6(false);
  };
  const active6 = () => {
    setMenu6((prev) => !prev);
    setMenu1(false);
    setMenu2(false);
    setMenu4(false);
    setMenu3(false);
    setMenu5(false);
  };

  const subHandlerCat = async (id) => {
    try {
      const { data } = await axios.get(
        `${url2}/sub_categoriya_base_all_views/`
      );
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    subHandlerCat();
  }, []);

  const searchFlowers = async () => {
    try {
      if (search.length > 0) {
        const { data } = await axios.get(
          `${url}/AllProductSearchView/?name=${search}`
        );
        setData(data?.data);
        console.log(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchFlowers();
  }, [search]);

  return (
    <div
      style={{ backgroundColor: "rgba(88, 94, 80, 1)" }}
      className="w-[100%] shadow-xl"
    >
      <div className="md:w-[96%] w-[90%] mx-auto p-0 m-0 h-[70px]  left-0 top-0 flex flex-row justify-between items-center">
        <div className="hidden xl:flex w-[45%] justify-start items-center relative">
          <Link
            class=" md:mr-[10px] lg:mr-[20px] group relative cursor-pointer py-2"
            // to={"/bouquets"}
          >
            <div class="flex items-center justify-between space-x-1">
              <a class="menu-hover my-2 text-base font-medium text-white">
                <p
                  className={` ${
                    menu2 ? "text-white font-bold " : "text-white font-semibold"
                  } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
                >
                  Каталог
                </p>
              </a>
              <div className="ml-1">
                <img src="./images/Vector.svg" alt="" />
              </div>
            </div>
            <div
              class="invisible absolute z-50 flex flex-col bg-[#EDFCD6] boredr rounded-md py-1 px-4 text-[#000] w-[300px] shadow-xl group-hover:visible"
              // onClick=""
            >
              {category?.map((item, index) => (
                <Link
                  to={`/bouquets/categories/${item?.id}`}
                  className={`${
                    index === category.length - 1
                      ? "border-b-0"
                      : `border-b border-green-400`
                  }`}
                >
                  <p className="px-3 py-2 text-[#000] font-semibold">
                    {item?.title}
                  </p>
                </Link>
              ))}
            </div>
          </Link>

          <Link
            to="/about-us"
            className={` md:mr-[10px] lg:mr-[20px]`}
            onClick={active1}
          >
            <p
              className={` ${
                menu1 ? "text-white font-bold " : "text-white font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px] flex  `}
            >
              <p className="mr-2"> О</p> <p>нас</p>
            </p>
          </Link>

          <Link
            to="/delivery"
            className="md:mr-[10px] lg:mr-[20px]"
            onClick={active3}
          >
            <p
              className={` ${
                menu3 ? "text-white font-bold " : "text-white font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Доставка
            </p>
          </Link>

          <Link
            to="/reviews"
            className="md:mr-[10px] lg:mr-[20px]"
            onClick={active4}
          >
            <p
              className={` ${
                menu4 ? "text-white font-bold " : "text-white font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Отзывы
            </p>
          </Link>

          <Link
            to="/blog"
            className="md:mr-[10px] lg:mr-[20px]"
            onClick={active5}
          >
            <p
              className={` ${
                menu5 ? "text-white font-bold " : "text-white font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Блог
            </p>
          </Link>

          <Link
            to="/contact"
            onClick={active6}
            className="md:mr-[10px] lg:mr-[20px]"
          >
            <p
              className={` ${
                menu6 ? "text-white font-bold " : "text-white font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Контакты
            </p>
          </Link>
        </div>

        <div className="md:w-[15%] w-[40%] flex items-center justify-between sm:w-[60%] cursor-pointer">
          <div className="xl:hidden mr-5 flex text-[#fff] ">
            {menu ? (
              <DehazeIcon size={"large"} onClick={menuHandler} sx={{}} />
            ) : (
              <ClearIcon size={"large"} onClick={menuHandler} sx={{}} />
            )}
          </div>
          <Link to={"/"} onClick={clickHandler}>
            <div className="w-[113px] h-[46px] lg:w-[171px] lg:h-[70px] mt-1 flex items-center">
              <div className="w-[80px] lg:w-[200px] xl:w-[300px]">
                <img src="/1.svg" alt="" className="w-[100%] h-[100%]" />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-row md:w-[30%] gap-x-3 w-[60%] sm:w-[40%] justify-end items-center">
          <Link to={"tel: +79119276162"} className="flex items-center">
            <IconButton>
              <LocalPhoneIcon sx={{ color: "#fff" }} />
            </IconButton>
            <p className="text-[12px] sm:ml-2 hidden  sm:flex mr-2  lg:text-[17px] xl:text-[18px] text-[#fff] font-semibold font-montserrat">
              + 7 (911) 927-61-62
            </p>
          </Link>
          <div className="mr-1 relative md:inline-block hidden">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="bg-white py-1 rounded-md px-2 outline-none placeholder:text-[#000] text-black font-medium"
              placeholder="поиск цветов..."
            />
            {data?.length > 0 && search?.length > 0 && (
              <div className="w-full h-[60vh] over bg-white overflow-y-auto absolute border p-3 rounded-md left-0 top-[40px] z-20 flex flex-col">
                <>
                  {data?.map((c, i) => (
                    <div key={i} className="z-30 border-b border-navcolor">
                      <div className="w-24 h-24">
                        <img
                          src={uri + c?.flowers[0]?.img}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <Link
                        to={`/bouquets/${c.id}`}
                        onClick={() => setSearch("")}
                        className="text-[14px] font-montserrat text-blue-700 cursor-pointer"
                      >
                        {c?.name}
                      </Link>
                      {/* <p className="text-[12px] font-normal line-clamp-6 mb-3">{c?.description}</p> */}
                    </div>
                    // <div>{c?.name}</div>
                  ))}
                </>
              </div>
            )}
          </div>
          <Link
            to={"/basket"}
            className="flex items-center mr-4 sm:mr-4"
            onClick={clickHandler}
          >
            <div className="w-[20px] h-[18px] md:w-[31.88px] md:h-[29px]">
              <svg
                viewBox="0 0 32 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33333 0C5.97222 0 6.52222 0.463887 6.64444 1.10506L6.72778 1.8125H30.1C31.2278 1.8125 32.1278 2.95947 31.8111 4.11551L28.8111 14.9928C28.5944 15.7744 27.8944 16.3125 27.1 16.3125H9.48333L9.99444 19.0312H27.1111C27.85 19.0312 28.4444 19.6373 28.4444 20.3906C28.4444 21.1439 27.85 21.75 27.1111 21.75H8.83889C8.25 21.75 7.7 21.2855 7.57778 20.6455L4.23 2.71875H1.33333C0.597222 2.71875 0 2.10986 0 1.35938C0 0.608887 0.597222 0 1.33333 0H5.33333ZM7.11111 26.2812C7.11111 24.7803 8.30556 23.5625 9.77778 23.5625C11.25 23.5625 12.4444 24.7803 12.4444 26.2812C12.4444 27.7822 11.25 29 9.77778 29C8.30556 29 7.11111 27.7822 7.11111 26.2812ZM28.4444 26.2812C28.4444 27.7822 27.25 29 25.7778 29C24.3056 29 23.1111 27.7822 23.1111 26.2812C23.1111 24.7803 24.3056 23.5625 25.7778 23.5625C27.25 23.5625 28.4444 24.7803 28.4444 26.2812Z"
                  fill="#fff"
                />
              </svg>
            </div>

            {/* {id.length > 0 && ( */}
            {/* <div className="bg-red-600  min-w-[16px] md:min-w-[30px] min-h-[15px] md:min-h-[20px] flex justify-center items-center rounded-full relative top-[-10px] ml-1 text-[12px] md:text-[14px]">
                <p className=" text-white  md:p-1 font-montserrat">
                  {state?.length}
                </p>
              </div> */}
            {/* )} */}
          </Link>
        </div>
      </div>
      {!menu && (
        <div className={`absolute top-0 left-0 flex flex-col ${(data?.length > 0 && search?.length > 0) ? 'min-h-[80vh]' : "min-h-[40vh]"} overflow-auto z-[999999]  w-full bg-[#758867] xl:hidden`}>
          <div className="flex justify-between h-[70px] w-[100%] items-center ">
            <div className="xl:hidden flex ml-[2%] text-[#fff] ">
              {menu ? (
                <DehazeIcon size={"large"} onClick={menuHandler} />
              ) : (
                <ClearIcon size={"large"} onClick={menuHandler} />
              )}
            </div>
            <div className="md:w-[15%] w-[40%] sm:w-[60%] cursor-pointer ml-4">
              <Link to={"/"} onClick={clickHandler}>
                <div className="w-[113px] lg:w-[171px] lg:h-[70px]">
                  <img src="./images/1.svg" alt="" />
                </div>
              </Link>
            </div>
            <div className="flex flex-row md:w-[30%] w-[60%] sm:w-[40%] justify-end items-center mr-4">
              <Link to={"tel: +79119276162"} className="flex items-center">
                <img src="../images/tel2.svg" alt="" className="mr-6" />
              </Link>

              <Link
                to={"/basket"}
                className="flex items-center mr-3"
                onClick={clickHandler}
              >
                <div className="w-[20px] h-[18px] md:w-[31.88px] md:h-[29px] ">
                  <svg
                    viewBox="0 0 32 29"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.33333 0C5.97222 0 6.52222 0.463887 6.64444 1.10506L6.72778 1.8125H30.1C31.2278 1.8125 32.1278 2.95947 31.8111 4.11551L28.8111 14.9928C28.5944 15.7744 27.8944 16.3125 27.1 16.3125H9.48333L9.99444 19.0312H27.1111C27.85 19.0312 28.4444 19.6373 28.4444 20.3906C28.4444 21.1439 27.85 21.75 27.1111 21.75H8.83889C8.25 21.75 7.7 21.2855 7.57778 20.6455L4.23 2.71875H1.33333C0.597222 2.71875 0 2.10986 0 1.35938C0 0.608887 0.597222 0 1.33333 0H5.33333ZM7.11111 26.2812C7.11111 24.7803 8.30556 23.5625 9.77778 23.5625C11.25 23.5625 12.4444 24.7803 12.4444 26.2812C12.4444 27.7822 11.25 29 9.77778 29C8.30556 29 7.11111 27.7822 7.11111 26.2812ZM28.4444 26.2812C28.4444 27.7822 27.25 29 25.7778 29C24.3056 29 23.1111 27.7822 23.1111 26.2812C23.1111 24.7803 24.3056 23.5625 25.7778 23.5625C27.25 23.5625 28.4444 24.7803 28.4444 26.2812Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="mb-4 relative md:hidden  mt-2 w-[90%] mx-auto" >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="bg-white py-1 w-full rounded-md px-2 outline-none placeholder:text-[#000] text-black font-medium"
              placeholder="поиск цветов..."
            />
            {data?.length > 0 && search?.length > 0 && (
              <div className="w-full h-[60vh] over bg-white overflow-y-auto absolute border p-3 rounded-md left-0 top-[40px] z-20 flex flex-col">
                <>
                  {data?.map((c, i) => (
                    <div key={i} className="z-30 border-b border-navcolor">
                      <div className="w-24 h-24">
                        <img
                          src={uri + c?.flowers[0]?.img}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <Link
                        to={`/bouquets/${c.id}`}
                        onClick={() => {
                          setMenu(true)
                          setSearch("")
                        }
                        }
                        className="text-[14px] font-montserrat text-blue-700 cursor-pointer"
                      >
                        {c?.name}
                      </Link>
                      {/* <p className="text-[12px] font-normal line-clamp-6 mb-3">{c?.description}</p> */}
                    </div>
                  ))}
                  <div className="flex w-full justify-end text-white">
                <IconButton onClick={() => {
                  setIsView(true)
                  setSearch("")
                }}>
                  <ChevronLeftIcon fontSize="large" sx={{ color: "black" }} />
                </IconButton>
              </div>
                </>
              </div>
            )}
          </div>
          {isView ? (
            <div className="flex  mt-2 w-[90%] mx-auto flex-col mb-[5px]">
              <Link
                className="flex flex-col mb-3 w-full"
                onClick={() => setIsView(false)}
              >
                <div className="flex items-center justify-start">
                  <Link className="font-montserrat flex items-center text-[24px] font-semibold  text-[#fff]  lg:text-[17px] xl:text-[18px]">
                    {/* <div className="w-[15px] mr-3 h-[3px] bg-white"></div> */}
                    Каталог
                  </Link>
                </div>
              </Link>
              <Link to="/about-us" onClick={() => setMenu(true)}>
                <p className="font-montserrat flex items-center text-[24px] font-semibold mb-3 text-[#fff]  lg:text-[17px] xl:text-[18px]">
                  {/* <div className="w-[15px] mr-3 h-[3px] bg-white"></div> */}
                  О нас
                </p>
              </Link>

              <Link to="/delivery" onClick={() => setMenu(true)}>
                <p className="font-montserrat flex items-center text-[24px] font-semibold mb-3 text-[#fff]  lg:text-[17px] xl:text-[18px]">
                  {/* <div className="w-[15px] mr-3 h-[3px] bg-white"></div> */}
                  Доставка
                </p>
              </Link>

              <Link to="/reviews" onClick={() => setMenu(true)}>
                <p className="font-montserrat text-[24px] flex items-center font-semibold mb-3 text-[#fff]  lg:text-[17px] xl:text-[18px]">
                  {/* <div className="w-[15px] mr-3 h-[3px] bg-white"></div> */}
                  Отзывы
                </p>
              </Link>

              <Link to="/blog" onClick={() => setMenu(true)}>
                <p className="font-montserrat flex items-center text-[24px] font-semibold mb-3 text-[#fff]  lg:text-[17px] xl:text-[18px]">
                  {/* <div className="w-[15px] mr-3 h-[3px] bg-white"></div> */}
                  Блог
                </p>
              </Link>
              <Link to="/contact" onClick={() => setMenu(true)}>
                <p className="font-montserrat flex items-center text-[24px] font-semibold mb-3 text-[#fff]  lg:text-[17px] xl:text-[18px]">
                  {/* <div className="w-[15px] mr-3 h-[3px] bg-white"></div> */}
                  Контакты
                </p>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-y-2">
              {category?.map((item) => (
                <div className="flex flex-col gap-y-2 relative">
                  <Link
                    to={`/bouquets/categories/${item?.id}`}
                    onClick={() => setMenu(true)}
                    className="ml-[10%]"
                  >
                    <p className="px-3 flex items-center py-2 text-[#fff] font-semibold ">
                      <div className="w-[10px] mr-3 h-[2px] bg-white"></div>{" "}
                      {item?.title}
                    </p>
                  </Link>
                </div>
              ))}
              <div className="flex w-full justify-end text-white">
                <IconButton onClick={() => setIsView(true)}>
                  <ChevronLeftIcon fontSize="large" sx={{ color: "white" }} />
                </IconButton>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
