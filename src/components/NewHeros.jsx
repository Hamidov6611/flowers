import React from "react";
import { Link } from "react-router-dom";

const NewHeros = ({ img, svg, heroTitle, cardTitle, price, link }) => {
  return (
    <Link className="relative md:w-[94%] mx-auto" to={link}>
      <div className="w-full h-[441px] md:h-[660px]">
        <img src={img} alt={"NewHero"} width={"100%"} height={"100%"} />
      </div>
      <div className="absolute left-[8%] top-[15%] hidden md:flex w-[40%] text-start">
        <p className="text-white lg:text-[40px] font-bold line-clamp-3">
          {heroTitle}
        </p>
      </div>
      <div className="absolute md:top-[10%] md:hidden  top-0 left-0 md:right-[6%] p-4 md:p-0 w-[100%] md:w-[40%] h-full md:h-[400px] bg-modal2 md:rounded-xl border">
        <div className="absolute bottom-4 right-4 flex md:hidden items-center justify-center">
          <div className="md:w-[66px]  md:h-[66px] flex items-center justify-center">
            <img src={svg} alt={"NewHero"} width={"100%"} height={"100%"} />
          </div>
        </div>
        <div className="md:hidden flex text-start">
          <p className="text-white lg:text-[40px] font-bold line-clamp-4">
            {heroTitle}
          </p>
        </div>
        <div className="w-[100%] flex flex-row justify-between items-center px-2">
          <div className="md:flex hidden w-[18%] h-[385px] items-center justify-center">
            <div className="md:w-[66px]  md:h-[66px] flex items-center justify-center">
              <img src={svg} alt={"NewHero"} width={"100%"} height={"100%"} />
            </div>
          </div>
          <div className="w-[95%] md:w-[80%] mr-4">
            <p className="font-medium md:font-semibold text-[14px]  mt-4 text-start md:text-[17px] lg:text-[20px] font-montserrat text-white">
              {cardTitle}
            </p>
            <p className="text-white text-[24px] md:text-[28px] py-1 lg:text-[36px] text-start line-clamp-1">
              от {price} ₽
            </p>
            <div className="flex items-center">
              <Link className="text-white mr-3 sm:mr-8 font-medium md:font-semibold text-[14px]  text-start md:text-[19px] lg:text-[24px] font-montserrat">
                Смотреть все букеты
              </Link>
              <svg
                width={59}
                height={16}
                viewBox="0 0 59 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.7071 8.70711C59.0976 8.31659 59.0976 7.68342 58.7071 7.2929L52.3431 0.928937C51.9526 0.538412 51.3195 0.538412 50.9289 0.928937C50.5384 1.31946 50.5384 1.95263 50.9289 2.34315L56.5858 8L50.9289 13.6569C50.5384 14.0474 50.5384 14.6805 50.9289 15.0711C51.3195 15.4616 51.9526 15.4616 52.3431 15.0711L58.7071 8.70711ZM-8.74228e-08 9L58 9.00001L58 7.00001L8.74228e-08 7L-8.74228e-08 9Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:top-[10%] md:flex hidden md:right-[6%] p-4 md:p-0 w-[100%] md:w-[40%] h-full md:h-[400px] bg-modal2 md:rounded-xl border">
        <div className="absolute bottom-4 right-4 flex md:hidden items-center justify-center">
          <div className="md:w-[66px]  md:h-[66px] flex items-center justify-center">
            <img src={svg} alt={"NewHero"} width={"100%"} height={"100%"} />
          </div>
        </div>
        <div className="md:hidden flex text-start">
          <p className="text-white lg:text-[40px] font-bold line-clamp-4">
            {heroTitle}
          </p>
        </div>
        <div className="w-[100%] flex flex-row justify-between items-center px-2">
          <div className="md:flex hidden w-[18%] h-[385px] items-center justify-center">
            <div className="md:w-[66px]  md:h-[66px] flex items-center justify-center">
              <img src={svg} alt={"NewHero"} width={"100%"} height={"100%"} />
            </div>
          </div>
          <div className="w-[95%] md:w-[80%] mr-4">
            <p className="font-medium md:font-semibold text-[14px]  mt-4 text-start md:text-[17px] lg:text-[20px] font-montserrat text-white">
              {cardTitle}
            </p>
            <p className="text-white text-[24px] md:text-[28px] py-1 lg:text-[36px] text-start line-clamp-1">
              от {price} ₽
            </p>
            <div className="flex items-center mb-3">
              <Link className="text-white mr-3 sm:mr-8 font-medium md:font-semibold text-[14px]  text-start md:text-[19px] lg:text-[20px] font-montserrat">
                Смотреть все букеты
              </Link>
              <svg
                width={59}
                height={16}
                viewBox="0 0 59 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.7071 8.70711C59.0976 8.31659 59.0976 7.68342 58.7071 7.2929L52.3431 0.928937C51.9526 0.538412 51.3195 0.538412 50.9289 0.928937C50.5384 1.31946 50.5384 1.95263 50.9289 2.34315L56.5858 8L50.9289 13.6569C50.5384 14.0474 50.5384 14.6805 50.9289 15.0711C51.3195 15.4616 51.9526 15.4616 52.3431 15.0711L58.7071 8.70711ZM-8.74228e-08 9L58 9.00001L58 7.00001L8.74228e-08 7L-8.74228e-08 9Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewHeros;
