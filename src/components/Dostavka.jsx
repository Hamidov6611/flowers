import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import ContactForm from "./ContactForm";

function Dostavka() {
  const [isOrder, setIsOrder] = useState(false);
  return (
    <Wrapper className="w-[98%] mx-auto flex flex-col">
      <div className="hidden md:block relative w-[70%] mx-auto ">
        <div className="absolute right-0 top-0">
          <img src="./images/dostavka_bg.png" alt="" />
        </div>
        <div className="title-div">
          <p className="title">Доставка цветов</p>
          <div className="circle"></div>
        </div>

        <div className="info">
          <p>
            Мы работаем только с лучшими поставщиками, чтобы наши клиенты
            получали цветы высочайшего качества. Наша главная цель - порадовать
            наших клиентов красивыми и свежими букетами в любой ситуации.
          </p>
          <Button onClick={() => setIsOrder(true)}>Заказать букет</Button>
        </div>
      </div>
      {isOrder && <ContactForm setIsOrder={setIsOrder} />}
      <div className="flex flex-col md:mt-[220px] w-[90%] mx-auto">
        <div className="flex md:flex-row gap-y-12 flex-col border-2 border-[#343434]">
          <div className="w-[100%] md:w-[55%] flex flex-col relative justify-center items-center">
            <div className="w-[80%] dm:w-[60%] z-20 flex justify-center items-center">
              <p className="text-[#8DA15C] text-[20px] sm:text-[24px] md:text-[32px] lg:text-[48px] font-medium">
                Индивидуальный заказ <br /> букета / композиции
              </p>
            </div>
            <div className="w-[80%] mt-3 flex justify-center items-center">
              <p className="text-[#343434] text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium z-10">
                Опишите пожелания и наши флористы соберут и рассчитают букет или
                композицию в соответствии в Вашими предпочтениями
              </p>
            </div>
            <div className="absolute left-[15%] top-[8%] w-[45%] box-border h-[500px]">
              <img
                src="./images/newflo2.svg"
                alt="new flower"
                width={"100%"}
                height={"60%"}
              />
            </div>
          </div>
          <div className="w-[100%] md:w-[45%] relative ">
            <div className="absolute  top-0 left-0 flex items-center justify-center w-full h-full ">
              <button
                onClick={() => setIsOrder(true)}
                className="bg-[#ECCEB4] flex items-center justify-center py-[8px] md:py-[23px]  px-[48px] rounded-lg md:h-[72px] md:w-[283px] font-medium text-[18px] sm:text-[20px] md:text-[24px] text-[#50583B]"
              >
                Заказать букет
              </button>
            </div>
            <div className="w-[100%] h-[100%]">
              <img
                src="./images/newflo.svg"
                alt=""
                width={"100%"}
                height={"100%"}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <p className="text-[#343434] w-[80%] mx-auto text-[18px] sm:text-[24px] font-montserrat md:text-[32px] lg:text-[55px] md:font-medium text-center">
          Доставка букетов и цветов <br /> по Санкт-Петербургу
        </p>
        <p className="text-[#343434] hidden sm:flex text-[14px] w-[90%] md:w-[80%] mx-auto font-montserrat text-center mt-8 sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
          Доставка цветов от нашей студии в Санкт-Петербурге выручает множество
          людей ежедневно. <br /> Мы поможем Вам определиться с выбором цветов к
          любому событию! <br /> Если захотите что-то неповторимое, то флористы
          сделают абсолютно любой букет в соответствии с вашими пожеланиями.
        </p>
        <p className="text-[#343434] sm:hidden text-center  text-[14px] w-[90%] md:w-[80%] mx-auto font-montserrat mt-8 sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
          Доставка цветов от нашей студии в Санкт-Петербурге выручает множество
          людей ежедневно. Мы поможем Вам определиться с выбором цветов к любому
          событию! Если захотите что-то неповторимое, то флористы сделают
          абсолютно любой букет в соответствии с вашими пожеланиями.
        </p>
      </div>
    </Wrapper>
  );
}

export default Dostavka;

const Wrapper = styled.section`
  margin: 80px 0;
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;

  .title-div {
    position: relative;
  }

  .title {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 78px;
    color: ${(props) => props.theme.colors.blackColor};
  }

  .circle {
    width: 93px;
    height: 93px;
    background: ${(props) => props.theme.colors.secondaryBackground};
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: -30px;
    z-index: -1;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: 20px;

    p {
      max-width: 448px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: ${(props) => props.theme.colors.primaryColor};
    }
  }
  @media screen and (max-width: 621px) {
    .info {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
`;
