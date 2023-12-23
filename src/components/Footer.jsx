import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  const topFunction = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div style={{ background: "rgba(88, 94, 80, 1)" }} className="w-[100%]">
      <div className="w-[90%] mx-auto flex md:flex-row flex-col md:p-[40px]">
        <div className="flex flex-row md:w-[55%] justify-between mr-[50px]">
          <div className="w-[40%] md:mr-[40px] mt-[20px]">
            <Link to={"/"} onClick={topFunction}>
              <div className="lg:w-[202px] lg:h-[96px] w-[140px] h-[67px]">
                <img src="/3.png" alt="" className="w-full" />
              </div>
            </Link>
          </div>

          <p className="w-[60%] lg text-[14px]:md:text-[16px] hidden md:flex text-[12px] font-montserrat text-white leading-[40px]">
            Мы обожаем цветы и чувствуем особую роль в жизни города. Воплощаем в
            современных букетах чувства современных людей.
          </p>
        </div>

        <div className="md:w-[45%] w-[100%] flex flex-row justify-between">
          <div className="w-[100%] flex md:flex-row flex-col">
            <div className="md:w-[50%] w-[100%] justify-between ">
              <Link to="/about-us" onClick={topFunction}>
                <p className="mb-[20px] text-white font-montserrat text-[20px]">
                  О нас
                </p>
              </Link>

              <Link to="/bouquets/categories/46" onClick={topFunction}>
                <p className="mb-[20px] text-white font-montserrat text-[20px]">
                  Букеты
                </p>
              </Link>

              <Link to="/delivery" onClick={topFunction}>
                <p className="mb-[20px] text-white font-montserrat text-[20px]">
                  Доставка
                </p>
              </Link>
            </div>

            <div>
              <Link to="/reviews" onClick={topFunction}>
                <p className="mb-[20px] text-white font-montserrat text-[20px]">
                  Отзывы
                </p>
              </Link>
              <Link to="/blog" onClick={topFunction}>
                <p className="mb-[20px] text-white font-montserrat text-[20px]">
                  Блог
                </p>
              </Link>
              <Link to="/contact" onClick={topFunction}>
                <p className="mb-[20px] text-white font-montserrat text-[20px]">
                  Контакты
                </p>
              </Link>
            </div>
          </div>

          <div className="ul-list contact w-[100%]">
            <ul className="nav gap-y-4 space-y-4">
              <li className="nav-item flex items-center">
                <img className="w-5 h-5" src="/mail.svg" alt="" />
                <Link to={"mail: info@"} onClick={topFunction}>
                  <p className="ml-3 text-white font-montserrat text-[14px] md:text-[16px]">
                    info@exapmle.com
                  </p>
                </Link>
                <span></span>
              </li>
              <li className="nav-item flex items-center">
                <img className="w-5 h-5" src="/tel.svg" alt="" />
                <Link to={"tel: +79119276162"} onClick={topFunction}>
                  <p className="ml-3 text-white font-montserrat text-[14px] md:text-[16px]">
                    +79119276162
                  </p>
                </Link>
              </li>
              <li className="nav-item flex items-center ">
                <img className="w-5 h-5" src="/location.svg" alt="" />
                <Link
                  to={"tel: +79119276162"}
                  onClick={topFunction}
                  style={{ maxWidth: "228px" }}
                >
                  <p className="ml-3 text-white font-montserrat text-[14px] md:text-[16px]">
                    Большой Сампсониевский проспект, д. 25
                  </p>
                </Link>
              </li>
              <li>
                <div className="flex mt-2 ">
                  <Link
                    className="mr-6 fill-white"
                    to={`https://www.instagram.com/buketmanuf/`}
                    onClick={topFunction}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </Link>
                  <Link
                    to={`https://vk.com/buketmanuf `}
                    className="fill-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      viewBox="0 0 448 512"
                    >
                      {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                      <path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z" />
                    </svg>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[85%] pb-4 mx-auto">
        <p className="text-white text-center sm:text-start">
          Букетная Мануфактура © 2023 Все права защищены
        </p>
      </div>
    </div>
  );
}

export default Footer;
