import React from "react";
import { styled } from "styled-components";

function MainOnas() {
  return (
    <Wrapper>
      <div className="w-[85%] sm:w-[80%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-4">
          <div className="flex items-center justify-center flex-col border-2 px-6 py-6 gap-y-4 md:py-12 rounded-tl-[70px] md:rounded-tl-[150px] rounded-br-[70px]  md:rounded-br-[150px] border-[#779243]">
            <div className="h-[50%]">
              <div className="w-16 h-16 md:w-32 md:h-32 ">
                <img src="/aa1.svg" alt="" />
              </div>
            </div>
            <b className="text-center h-[50%] line-clamp-3 md:line-clamp-none font-medium md:mt-4 text-[#443926] text-[14px] md:text-[20px]">
              Только свежие <br /> цветы <br />
              со всего мира<div className="br"></div> Экзотика у нас!
            </b>
          </div>
          <div className="flex items-center justify-center flex-col border-2 px-6 py-6 gap-y-4 md:py-12 rounded-tl-[70px] md:rounded-tl-[150px] rounded-br-[70px]  md:rounded-br-[150px] border-[#779243]">
            <div className="h-[50%]">
              <div className="w-16 h-16 md:w-32 md:h-32 md:ml-9 ml-4">
                <img src="/aa2.svg" alt="" />
              </div>
            </div>
            <b className="text-center h-[50%]  font-medium md:mt-4 text-[#443926] text-[14px] md:text-[20px]">
              Поможем <br /> определитьсяс <br /> выбором
            </b>
          </div>
          <div className="flex items-center justify-center flex-col border-2 px-6 py-6 gap-y-4 md:py-12 rounded-tl-[70px] md:rounded-tl-[150px] rounded-br-[70px]  md:rounded-br-[150px] border-[#779243]">
            <div className="h-[50%]">
              <div className="w-16 h-16 md:w-32 md:h-32 ">
                <img src="/aa3.svg" alt="" />
              </div>
            </div>
            <b className="text-center h-[50%] line-clamp-3 md:line-clamp-none font-medium md:mt-4 text-[#443926] text-[14px] md:text-[20px]">
              Сборка букета  непосредственно перед <div className="hidden md:inline">  отправкой 
              гарантировано из  свежих цветов</div> 
            </b>
          </div>
          <div className="flex items-center justify-center flex-col border-2 py-6 gap-y-4 md:py-12 rounded-tl-[70px] md:rounded-tl-[150px] rounded-br-[70px]  md:rounded-br-[150px] border-[#779243]">
            <div className="h-[50%]">
              <div className="w-16 h-16 md:w-32 md:h-32">
                <img src="/aa4.svg" alt="" />
              </div>
            </div>
            <b className="text-center h-[50%] line-clamp-3 md:line-clamp-none font-medium md:mt-4 text-[#443926] text-[14px] md:text-[20px]">
              Быстрая доставка и ко <br /> времени
            </b>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MainOnas;

const Wrapper = styled.section`
  p {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    color: #15100c;
  }

  .card-item1 {
    border: 2px solid #779243;
    border-radius: 127.5px 0px 127.5px 40px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
      display: flex;
      margin-top: 10px;
      height: 60%;
    }

    p {
      // height: 38%;
      text-align: start;
      // width: 60%;
      margin-top: 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      color: #443926;
    }
  }
  //
  @media screen and (max-width: 992px) {
    .hero-img {
      width: 95%;
      margin: 0 auto;
    }
    .card-item1 {
      padding: 20px;
    }
    .card-item1 p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 720px) {
    .result {
      display: flex;
      flex-direction: column;
    }
    .card-item1 {
      padding: 20px;
    }
    .card-item1 p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    .result {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .card-item1 {
      padding: 10px;
    }
    .card-item1 p {
      font-size: 18px;
    }
    p {
      font-size: 28px;
      text-align: center;
    }
  }
`;
