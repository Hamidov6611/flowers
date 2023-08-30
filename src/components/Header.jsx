import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";

import "./index.css";
import { useEffect } from "react";
import { useProduct } from "../config/context";
import { useSelector } from "react-redux";
import { url } from "../layout/config";
import axios from "axios";
import { ProductsContext } from "../context/ProductContext";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Divider, IconButton, ListItem, ListItemText } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./header.css";

function Header() {
  const [menu, setMenu] = useState(true);
  const menuHandler = () => setMenu((prev) => !prev);
  const [kor, setKor] = useState([]);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);
  const [menu5, setMenu5] = useState(false);
  const [menu6, setMenu6] = useState(false);
  const [id, setId] = useState([]);
  const [counter, setCounter] = useProduct();
  const [category, setCategory] = useState([]);
  const [isCat, setIsCat] = useState(false);

  const { state, count } = useContext(ProductsContext);

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

  const categoryHandler = async () => {
    try {
      const { data } = await axios.get(`${url}/category_all_views/`);
      setCategory(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categoryHandler();
  }, []);

  return (
    <div className="w-[100%] bg-[#EDFCD6] shadow-xl mb-8">
      <div className="md:w-[96%] w-[90%] mx-auto h-[70px]  left-0 top-0 flex flex-row justify-between items-center">
        <div className="hidden xl:flex w-[45%] justify-start items-center relative">
          <Link
            class=" md:mr-[10px] lg:mr-[20px] group relative cursor-pointer py-2"
            to={"/букеты"}
          >
            <div class="flex items-center justify-between space-x-1">
              <a
                class="menu-hover my-2 text-base font-medium text-black"
                // onClick=""
              >
                <p
                  className={` ${
                    menu2
                      ? "text-[#000] font-bold "
                      : "text-[#000] font-semibold"
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
                <Link to={`/букеты/категория/${item?.id}`} className={`${index === category.length - 1 ? 'border-b-0' : `border-b border-green-400`}`}>
                  <p className="px-3 py-2 text-[#000] font-semibold ">
                    {item?.title}
                  </p>
                </Link>
              ))}
            </div>

          </Link>

          <Link
            to="/oнас"
            className={` md:mr-[10px] lg:mr-[20px]`}
            onClick={active1}
          >
            <p
              className={` ${
                menu1
                  ? "text-[#443926] font-bold "
                  : "text-[#000] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px] flex  `}
            >
              <p> О</p> <p>нас</p>
            </p>
          </Link>

          <Link
            to="/доставка"
            className="md:mr-[10px] lg:mr-[20px]"
            onClick={active3}
          >
            <p
              className={` ${
                menu3
                  ? "text-[#443926] font-bold "
                  : "text-[#000] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Доставка
            </p>
          </Link>

          <Link
            to="/oтзывы"
            className="md:mr-[10px] lg:mr-[20px]"
            onClick={active4}
          >
            <p
              className={` ${
                menu4
                  ? "text-[#443926] font-bold "
                  : "text-[#000] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Отзывы
            </p>
          </Link>

          <Link
            to="/блог"
            className="md:mr-[10px] lg:mr-[20px]"
            onClick={active5}
          >
            <p
              className={` ${
                menu5
                  ? "text-[#443926] font-bold "
                  : "text-[#000] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Блог
            </p>
          </Link>

          <Link
            to="/контакт"
            onClick={active6}
            className="md:mr-[10px] lg:mr-[20px]"
          >
            <p
              className={` ${
                menu6
                  ? "text-[#443926] font-bold "
                  : "text-[#000] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Контакт
            </p>
          </Link>
        </div>

        <div className="md:w-[15%] w-[30%] sm:w-[60%] cursor-pointer">
          <Link to={"/"} onClick={clickHandler}>
            <div className="w-[113px] h-[46px] lg:w-[171px] lg:h-[70px] mt-1 flex items-center">
              <div className="w-[80px] lg:w-[200px] xl:w-[300px]">
                <img
                  src="./images/1.svg"
                  alt=""
                  className="w-[100%] h-[100%]"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-row md:w-[30%] w-[70%] sm:w-[40%] justify-end items-center">
          <Link to={"tel: +79119276162"} className="flex items-center md:mr-10">
            <IconButton>
              <LocalPhoneIcon sx={{ color: "#000" }} />
            </IconButton>
            <p className="text-[12px] sm:ml-2 mr-2  lg:text-[17px] xl:text-[18px] text-[#000] font-semibold font-montserrat">
              + 7 (911) 927-61-62
            </p>
          </Link>

          <Link
            to={"/корзина"}
            className="flex items-center mr-1 sm:mr-4"
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
                  fill="#000"
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

          <div className="xl:hidden flex text-[#000] ">
            {menu ? (
              <DehazeIcon size={"large"} onClick={menuHandler} />
            ) : (
              <ClearIcon size={"large"} onClick={menuHandler} />
            )}
          </div>
        </div>
      </div>
      {!menu && (
        <div className="fixed top-0 left-0 flex flex-col h-[100vh] z-[999999]  w-full bg-[#EDFCD6] xl:hidden">
          <div className="flex justify-between h-[70px] w-[100%] items-center shadow-xl ">
            <div className="md:w-[15%] w-[40%] sm:w-[60%] cursor-pointer ml-4">
              <Link to={"/"} onClick={clickHandler}>
                <div className="w-[113px] lg:w-[171px] lg:h-[70px]">
                  <img src="./images/1.svg" alt="" />
                </div>
              </Link>
            </div>
            <div className="flex flex-row md:w-[30%] w-[60%] sm:w-[40%] justify-around items-center mr-4">
              <Link to={"tel: +79119276162"} className="flex items-center">
                <img
                  src="../images/tel2.svg"
                  alt=""
                  className="mr-3 hidden lg:flex"
                />
                <p className="text-[12px]   lg:text-[17px] xl:text-[18px] text-[#000] font-semibold font-montserrat">
                  + 7 (911) 927-61-62
                </p>
              </Link>

              <Link
                to={"/корзина"}
                className="flex items-center"
                onClick={clickHandler}
              >
                <div className="w-[20px] h-[18px] md:w-[31.88px] md:h-[29px] ">
                  <svg
                    viewBox="0 0 32 29"
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.33333 0C5.97222 0 6.52222 0.463887 6.64444 1.10506L6.72778 1.8125H30.1C31.2278 1.8125 32.1278 2.95947 31.8111 4.11551L28.8111 14.9928C28.5944 15.7744 27.8944 16.3125 27.1 16.3125H9.48333L9.99444 19.0312H27.1111C27.85 19.0312 28.4444 19.6373 28.4444 20.3906C28.4444 21.1439 27.85 21.75 27.1111 21.75H8.83889C8.25 21.75 7.7 21.2855 7.57778 20.6455L4.23 2.71875H1.33333C0.597222 2.71875 0 2.10986 0 1.35938C0 0.608887 0.597222 0 1.33333 0H5.33333ZM7.11111 26.2812C7.11111 24.7803 8.30556 23.5625 9.77778 23.5625C11.25 23.5625 12.4444 24.7803 12.4444 26.2812C12.4444 27.7822 11.25 29 9.77778 29C8.30556 29 7.11111 27.7822 7.11111 26.2812ZM28.4444 26.2812C28.4444 27.7822 27.25 29 25.7778 29C24.3056 29 23.1111 27.7822 23.1111 26.2812C23.1111 24.7803 24.3056 23.5625 25.7778 23.5625C27.25 23.5625 28.4444 24.7803 28.4444 26.2812Z"
                      fill="#000"
                    />
                  </svg>
                </div>

                {/* {id.length > 0 && (
                  <div className="bg-red-600  min-w-[16px] md:min-w-[30px] min-h-[15px] md:min-h-[20px] flex justify-center items-center rounded-full relative top-[-10px] ml-1 text-[12px] md:text-[14px]">
                    <p className=" text-white  md:p-1 font-montserrat">
                      {count}
                    </p>
                  </div>
                )} */}
              </Link>

              <div className="xl:hidden flex text-[#000] ">
                {menu ? (
                  <DehazeIcon size={"large"} onClick={menuHandler} />
                ) : (
                  <ClearIcon size={"large"} onClick={menuHandler} />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 w-[90%] flex-col mb-[5px]">
            <Link
              // to="/букеты"

              className="flex flex-col mb-3 items-center"
            >
              <div className="flex items-center">
                <Link className="font-montserrat text-[24px] font-semibold  text-[#000]  lg:text-[17px] xl:text-[18px]">
                  Каталог
                </Link>
                <div
                  className="ml-3"
                  onClick={(e) => {
                    // e.stopPropagation();
                    //  setMenu(true)
                    setIsCat((prev) => !prev);
                  }}
                >
                  <img src="./images/Vector.svg" alt="" />
                </div>
              </div>
              {isCat &&
                category?.map((item) => (
                  <Link to={`/букеты/категория/${item?.id}`} onClick={() => setMenu(false)} className="">
                    <p className="px-3 py-2 text-[#000] font-semibold ">
                      {item?.title}
                    </p>
                  </Link>
                ))}
            </Link>
            <Link to="/oнас" onClick={() => setMenu(true)}>
              <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#000]  lg:text-[17px] xl:text-[18px]">
                О нас
              </p>
            </Link>

            <Link to="/доставка" onClick={() => setMenu(true)}>
              <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#000]  lg:text-[17px] xl:text-[18px]">
                Доставка
              </p>
            </Link>

            <Link to="/oтзывы" onClick={() => setMenu(true)}>
              <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#000]  lg:text-[17px] xl:text-[18px]">
                Отзывы
              </p>
            </Link>

            <Link to="/блог" onClick={() => setMenu(true)}>
              <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#000]  lg:text-[17px] xl:text-[18px]">
                Блог
              </p>
            </Link>
            <Link to="/контакт" onClick={() => setMenu(true)}>
              <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#000]  lg:text-[17px] xl:text-[18px]">
                Контакт
              </p>
            </Link>

            <div className="absolute bottom-0 flex justify-center">
              <p className="font-montserrat font-semibold mb-8 ml-3 text-[#000] text-[12px] text-center w-[100%]">
                Букетная Мануфактура © 2023 Все права защищены
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

// const Wrapper = styled.header`
//   height: 70px;
//   background-color: ${(props) => props.theme.colors.secondaryBackground};

//   .logo {
//     cursor: pointer;
//   }
//   .menu {
//     display: none;
//   }
//   .navbar {
//     display: flex;
//     align-items: center;
//     gap: 46px;

//     .ul-list {
//       width: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;

//       .nav {
//         list-style: none;
//         display: flex;
//         align-items: center;
//         gap: 20px;

//         a {
//           text-decoration: none;
//           color: ${(props) => props.theme.colors.whiteColor};
//           font-style: normal;
//           font-weight: 500;
//           font-size: 18px;
//           line-height: 22px;
//         }
//       }
//       @media screen and (max-width: 992px) {
//         .nav1 {
//           display: none;
//         }
//         .nav {
//           gap: 10px;
//         }
//         .navbar {
//           justify-content: space-between;
//         }
//         .menu {
//           display: inline;
//           color: #fff;
//         }
//         .logo {
//           width: 113px;
//         }
//         .number {
//           font-size: 12px;
//         }
//       }
//     }
//   }
// `;
