import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import "./index.css";
import { useEffect } from "react";
import { useProduct } from "../config/context";
import { useSelector } from "react-redux";

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

  return (
    <div className="w-[100%] bg-[#EDFCD6]">
      <div className="md:w-[100%] w-[90%] sticky top-0 mx-auto flex flex-row justify-between items-center">
        <div className="hidden xl:flex w-[55%] justify-start sticky top-0">
          <Link
            to="/oнас"
            className={` md:mr-[10px] lg:mr-[40px] lg:ml-[40px] md:ml-[30px] `}
            onClick={active1}
          >
            <p
              className={` ${
                menu1
                  ? "text-[#443926] font-bold "
                  : "text-[#8C5C38] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px] flex  `}
            >
              <p> О</p> <p>нас</p>
            </p>
          </Link>

          <Link
            to="/букеты"
            className="md:mr-[10px] lg:mr-[40px]"
            onClick={active2}
          >
            <p
              className={` ${
                menu2
                  ? "text-[#443926] font-bold "
                  : "text-[#8C5C38] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Букеты
            </p>
          </Link>

          <Link
            to="/доставка"
            className="md:mr-[10px] lg:mr-[40px]"
            onClick={active3}
          >
            <p
              className={` ${
                menu3
                  ? "text-[#443926] font-bold "
                  : "text-[#8C5C38] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Доставка
            </p>
          </Link>

          <Link
            to="/oтзывы"
            className="md:mr-[10px] lg:mr-[40px]"
            onClick={active4}
          >
            <p
              className={` ${
                menu4
                  ? "text-[#443926] font-bold "
                  : "text-[#8C5C38] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Отзывы
            </p>
          </Link>

          <Link
            to="/блог"
            className="md:mr-[10px] lg:mr-[40px]"
            onClick={active5}
          >
            <p
              className={` ${
                menu5
                  ? "text-[#443926] font-bold "
                  : "text-[#8C5C38] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Блог
            </p>
          </Link>

          <Link
            to="/контакт"
            onClick={active6}
            className="md:mr-[10px] lg:mr-[40px]"
          >
            <p
              className={` ${
                menu6
                  ? "text-[#443926] font-bold "
                  : "text-[#8C5C38] font-semibold"
              } font-montserrat text-[14px]  lg:text-[17px] xl:text-[18px]  `}
            >
              Контакт
            </p>
          </Link>
        </div>

        <div className="md:w-[15%] w-[40%] sm:w-[60%] cursor-pointer">
          <Link to={"/"} onClick={clickHandler}>
            <div className="w-[113px] h-[46px] lg:w-[171px] lg:h-[70px]">
              <svg
                viewBox="0 0 171 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                // style={{fill:"#8C5C38"}}
              >
                <rect width={171} height={70} fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_88_6"
                      transform="matrix(0.00194387 0 0 0.0047486 -0.00151916 -0.442857)"
                    />
                  </pattern>
                  <image
                    id="image0_88_6"
                    width={516}
                    height={358}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgQAAAFmCAYAAAAS1oJaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNC0yMFQxNToyNzowOCswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDQtMjBUMTU6MzA6MTcrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDQtMjBUMTU6MzA6MTcrMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NDczOTZjOC04ZTczLWUwNGEtODhlNy0xNzNhNjMwMzY5YzciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxNjRkMWUwOS1mNGVlLWM0NDUtYjEzNS1iOWZmNmRlZTA5NGMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZmZmZTNmMS01NGZkLWFhNDctOTAzNi0xZDE2MGM2YmRlMzYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFmZmZlM2YxLTU0ZmQtYWE0Ny05MDM2LTFkMTYwYzZiZGUzNiIgc3RFdnQ6d2hlbj0iMjAyMy0wNC0yMFQxNToyNzowOCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NDczOTZjOC04ZTczLWUwNGEtODhlNy0xNzNhNjMwMzY5YzciIHN0RXZ0OndoZW49IjIwMjMtMDQtMjBUMTU6MzA6MTcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4LiPnDAACBS0lEQVR4nO29d5gc13mn+3ZPnkGOBAkQIAnmnDNFUoGyJEuWZEkOkmU5r8N6o73h7t31eu9e3/Xe3WuvveucJEuyAkUFJiVmkRQJZoIJIECAAJHz5ND3j199W9XVVdXV3dU9A/B7n2ceEjMdqk6d8DtfOqVKpYLjOI7jOG9vyrN9AY7jOI7jzD4uCBzHcRzHcUHgOI7jOI4LAsdxHMdxcEHgOI7jOA4uCBzHcRzHwQWB4ziO4zi4IHAcx3EcBxcEjuM4juPggsBxHMdxHFwQOI7j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"
                  />
                </defs>
              </svg>
            </div>
          </Link>
        </div>

        <div className="flex flex-row md:w-[30%] w-[60%] sm:w-[40%] justify-around items-center">
          <Link to={"tel: +79119276162"} className="flex items-center">
            <img
              src="../images/tel2.svg"
              alt=""
              className="mr-3 hidden lg:flex"
            />
            <p className="text-[12px]   lg:text-[17px] xl:text-[18px] text-[#8C5C38] font-semibold font-montserrat">
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
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33333 0C5.97222 0 6.52222 0.463887 6.64444 1.10506L6.72778 1.8125H30.1C31.2278 1.8125 32.1278 2.95947 31.8111 4.11551L28.8111 14.9928C28.5944 15.7744 27.8944 16.3125 27.1 16.3125H9.48333L9.99444 19.0312H27.1111C27.85 19.0312 28.4444 19.6373 28.4444 20.3906C28.4444 21.1439 27.85 21.75 27.1111 21.75H8.83889C8.25 21.75 7.7 21.2855 7.57778 20.6455L4.23 2.71875H1.33333C0.597222 2.71875 0 2.10986 0 1.35938C0 0.608887 0.597222 0 1.33333 0H5.33333ZM7.11111 26.2812C7.11111 24.7803 8.30556 23.5625 9.77778 23.5625C11.25 23.5625 12.4444 24.7803 12.4444 26.2812C12.4444 27.7822 11.25 29 9.77778 29C8.30556 29 7.11111 27.7822 7.11111 26.2812ZM28.4444 26.2812C28.4444 27.7822 27.25 29 25.7778 29C24.3056 29 23.1111 27.7822 23.1111 26.2812C23.1111 24.7803 24.3056 23.5625 25.7778 23.5625C27.25 23.5625 28.4444 24.7803 28.4444 26.2812Z"
                  fill="#8C5C38"
                />
              </svg>
            </div>

            {id.length > 0 && (
              <div className="bg-red-600  min-w-[16px] md:min-w-[30px] min-h-[15px] md:min-h-[20px] flex justify-center items-center rounded-full relative top-[-10px] ml-1 text-[12px] md:text-[14px]">
                <p className=" text-white  md:p-1 font-montserrat">
                  {id?.length}
                </p>
              </div>
            )}
          </Link>

          <div className="xl:hidden flex text-[#8C5C38] ">
            {menu ? (
              <DehazeIcon size={"large"} onClick={menuHandler} />
            ) : (
              <ClearIcon size={"large"} onClick={menuHandler} />
            )}
          </div>
          {!menu && (
            <div className="fixed top-[43px] lg:top-[70px] left-0 flex flex-col h-[100vh] z-[999999] w-full bg-[#EDFCD6]">
              <div className="flex justify-center items-center mt-8 w-[90%] flex-col mb-[5px]">
                <Link to="/oнас" onClick={() => setMenu(true)}>
                  <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#8C5C38]  lg:text-[17px] xl:text-[18px]">
                    О нас
                  </p>
                </Link>

                <Link to="/букеты" onClick={() => setMenu(true)}>
                  <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#8C5C38]  lg:text-[17px] xl:text-[18px]">
                    Букеты
                  </p>
                </Link>

                <Link to="/доставка" onClick={() => setMenu(true)}>
                  <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#8C5C38]  lg:text-[17px] xl:text-[18px]">
                    Доставка
                  </p>
                </Link>

                <Link to="/oтзывы" onClick={() => setMenu(true)}>
                  <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#8C5C38]  lg:text-[17px] xl:text-[18px]">
                    Отзывы
                  </p>
                </Link>

                <Link to="/блог" onClick={() => setMenu(true)}>
                  <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#8C5C38]  lg:text-[17px] xl:text-[18px]">
                    Блог
                  </p>
                </Link>
                <Link to="/контакт" onClick={() => setMenu(true)}>
                  <p className="font-montserrat text-[24px] font-semibold mb-3 text-[#8C5C38]  lg:text-[17px] xl:text-[18px]">
                    Контакт
                  </p>
                </Link>

                <div className="absolute bottom-[40px] flex justify-center">
                  <p className="font-montserrat font-semibold mb-3 text-[#8C5C38] text-[12px] text-center w-[100%]">
                    Букетная Мануфактура © 2023 Все права защищены
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
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
