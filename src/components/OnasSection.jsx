import React from "react";
import { styled } from "styled-components";
import MyCarousel from "./MyCarousel";

function OnasSection() {
  return (
    <Wrapper>
      <div className="w-[98%] md:w-[90%] mx-auto">
        <p>О нас</p>
        <p className="pre">
          Мы- команда профессиональных флористов, работающая на цветочном рынке
          уже несколько лет. За это время у нас сформировалась база клиентов,
          которые доверяют нам воплощение любых флористических идей, передачу
          своих чувств к любимым получателям на языке цветов. Наша миссия-
          вызывать положительные эмоции!
        </p>
        <p className="pre">
          Чтобы букеты вызывали восторженные эмоции, наши флористы регулярно
          проходят курсы по повышению квалификации и флористического мастерства.
        </p>
        <p className="pre">
          Мы работаем с лучшими поставщиками, тщательно отбираем цветы и всегда
          стараемся держать в своем холодильнике самые необычные сорта.
        </p>
        <div className=" w-[100%] flex items-center justify-center mb-3 md:mb-6">
          <img src="./images/onas1.svg" alt="" className="h-full w-full" />
          {/* <img className="card" src="./images/dostavka2.svg" alt="" /> */}
        </div>
        {/* <div className="w-[100%] flex items-center justify-center relative">
          <img className="hero-img w-full h-full" src="./images/onas1.svg" alt="" />
        </div> */}
        <div className="my-8 w-full flex justify-center md:justify-start">
          <b className="font-semibold text-[28px] md:text-[40px] text-[#15100C]">Наша миссия</b>
        </div>
        <p className="nash-p">
          Миссия нашего цветочного магазина в Санкт-Петербурге - создавать
          красоту и радость в жизни людей, предоставляя качественные цветы и
          букеты для всех случаев, от повседневных до торжественных. Мы
          становимся надежным партнером для наших клиентов, предоставляя
          индивидуальный подход к каждому заказу и обеспечивая быстрое и
          качественное обслуживание. Мы стремимся к тому, чтобы наш цветочный
          магазин стал символом красоты и уюта для всех наших клиентов.
        </p>
        <div className="my-8 w-full flex justify-center md:justify-start">
          <b className="font-semibold text-[28px] md:text-[40px] text-[#15100C]" >Наша компания в цифрах</b>
        </div>

        <ul className="result">
          <li className="result-numbers">
            <h2 className="h2">300 тыс.</h2>
            <p className="p">Довольных покупателей</p>
          </li>
          <li className="result-numbers">
            <h2 className="h2">60%</h2>
            <p className="p">Повторных заказов</p>
          </li>
          <li className="result-numbers">
            <h2 className="h2">22</h2>
            <p className="p">Вежливых курьера</p>
          </li>
        </ul>
        <div className="my-8 w-full flex justify-center md:justify-start">
          <b className="font-semibold text-[28px] md:text-[40px] text-[#15100C]">Почему выбирают нас?</b>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-6">
          <div className="h-full flex items-center justify-center flex-col border-2 py-8 md:py-16 rounded-tl-[70px] md:rounded-tl-[120px] px-4 rounded-br-[70px]  md:rounded-br-[120px] border-[#779243]">
            <div className="w-16 h-[50%] md:w-32 md:h-32">
              <img src="/aa1.svg" alt="" />
            </div>
            <b className="font-medium h-[50%] mt-4 text-[#443926] sm:line-clamp-3 line-clamp-2 text-center text-[16px] sm:text-[14px] lg:text-[20px]">
              Свежие цветы со всего мира
            </b>
          </div>
          <div className="h-full flex items-center justify-center flex-col border-2 py-8 md:py-16 rounded-tl-[70px] md:rounded-tl-[120px] px-4 rounded-br-[70px]  md:rounded-br-[120px] border-[#779243]">
            <div className="w-16 h-[50%] md:w-32 md:h-32">
              <img src="/aa2.svg" alt="" />
            </div>
            <b className="font-medium h-[50%] mt-4 text-[#443926] sm:line-clamp-3 line-clamp-2 text-center text-[16px] sm:text-[14px] lg:text-[20px]">
              Никакой химии в производстве
            </b>
          </div>
          <div className="h-full flex items-center justify-center flex-col border-2 py-8 md:py-16 rounded-tl-[70px] md:rounded-tl-[120px] px-4 rounded-br-[70px]  md:rounded-br-[120px] border-[#779243]">
            <div className="w-16 h-[50%] md:w-32 md:h-32">
              <img src="/aa3.svg" alt="" />
            </div>
            <b className="font-medium h-[50%] mt-4 text-[#443926] sm:line-clamp-3 line-clamp-2 text-center text-[16px] sm:text-[14px] lg:text-[20px]">
            Каждый букет собирает флорист
            </b>
          </div>
          <div className="h-full flex items-center justify-center flex-col border-2 py-8 md:py-16 rounded-tl-[70px] md:rounded-tl-[120px] px-4 rounded-br-[70px]  md:rounded-br-[120px] border-[#779243]">
            <div className="w-16 h-[50%] md:w-32 md:h-32">
              <img src="/aa4.svg" alt="" />
            </div>
            <b className="font-medium h-[50%] mt-4 text-[#443926] sm:line-clamp-3 line-clamp-2 text-center text-[16px] sm:text-[14px] lg:text-[20px]">
            Быстрая доставка
            </b>
          </div>
        </div>

        <div className="my-8 w-full flex justify-center md:justify-start">
          <b className="font-semibold text-[28px] md:text-[40px] text-[#15100C]">Наш ассортимент</b>
        </div>
        <p className="nash-p">
          Наша компания предоставляет более 1200 композиций цветов, на любой
          вкус и цвет. Мы являемся прямым импортером цветов из Голландии,
          Эквадора, Колумбии, Израиля. Силами наших профессиональных флористов
          мы собрали для Вас лучшие композии мировой флористики. Мы импортируем
          более 2500 разновидностей цветов.
        </p>
        <h3>Мы доставляем больше чем цветы...</h3>
        <p className="nash-p">
          За весь наш многолетний опыт – наша компания научилась давать больше
          чем цветы, наши курьеры и менеджеры дарят позитивное настроение и
          чувство высокой удовлетворенности после пользования услугами нашего
          сервиса. Так же, мы доставляем сладкие сюрпризы, живые цветы и другие
          товары!
        </p>
      </div>
    </Wrapper>
  );
}

export default OnasSection;

const Wrapper = styled.section`
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100c;
    // padding-left: 150px;
    margin-bottom: 10px;
  }
  .pre {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #443926;
    margin-bottom: 20px;
  }

  .hero-img {
    // width: 1110px;
    height: 346px;
    margin-bottom: 80px;
    margin-top: 40px;
  }

  .nash-p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #443926;
    margin-top: 40px;
    margin-bottom: 80px;
  }

  h3 {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100c;
    margin-bottom: 40px;
  }

  .result-numbers h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    color: #443926;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 12px;
  }

  .p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #443926;
    display: flex;
    justify-content: center;
  }

  .result {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 40px;
    margin-bottom: 80px;
  }

  .card1 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

  .card-item1 {
    border: 2px solid #779243;
    border-radius: 127.5px 0px 127.5px 40px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 49px 56px;

    p {
      text-align: start;
      width: 137px;
      margin-top: 20px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #443926;
    }
  }

  .card1 img {
    width: 49px;
    height: 53px;
  }

  .end-h3 {
    margin-top: 80px;
  }

  .end-p {
    margin-bottom: 80px;
  }
  @media screen and (max-width: 992px) {
    .card1 {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    .hero-img {
      width: 95%;
      margin: 0 auto;
    }
    .card-item1 {
      padding: 16px;
    }
    .card-item1 p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 720px) {
    .card1 {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .result {
      display: flex;
      flex-direction: column;
    }
    .card-item1 {
      padding: 16px;
    }
    .card-item1 p {
      font-size: 12px;
    }
  }
`;
