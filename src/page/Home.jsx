import React, { useState } from "react";
import { styled } from "styled-components";
import Action from "../components/Action";
import Buket from "../components/Buket";
import Dostavka from "../components/Dostavka";
import MainOnas from "../components/MainOnas";
import MainDostavka from "../components/MainDostavka";
import Reviews from "../components/Reviews";
import BlogSection from "../components/BlogSection";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination } from "swiper";
import HomeCategory from "./HomeCategory";
import NewHeros from "../components/NewHeros";

function Home() {
  const [swiper, setSwiper] = useState(null);

  return (
    <Wrapper>
      <div className="relative">
        <Swiper
          className="my-0 py-0"
          modules={[Pagination, A11y, Navigation]}
          spaceBetween={3}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(s) => {
            setSwiper(s);
          }}
        >
          <SwiperSlide>
            <NewHeros
              img={"./images/ban1.png"}
              img2={"/md1.png"}
              svg={"/images/ban1a.svg"}
              heroTitle={
                "Не упускайте возможность приобрести этот восхитительный букет прямо сейчас!"
              }
              cardTitle={
                "Украсьте свою жизнь нежностью и красотой! Шляпная коробка с лизиантусом и розами - олицетворение элегантности и изящества!Вы можете подарить эту прекрасную композицию своим близким, друзьям или коллегам, и они наверняка оценят вашу заботу и хороший вкус. от 6 000 ₽ Смотреть все букеты"
              }
              price={6000}
              link={"/bouquets/category/43"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewHeros
              img={"/ban2.png"}
              img2={"/ban2.png"}
              svg={"/images/ban2a.svg"}
              heroTitle={
                "Наша команда опытных флористов с любовью и вниманием соберет для вас любую композицию, гармонично сочетая цвета и формы."
              }
              cardTitle={`Мечтаете о необычной и стильной композиции, которая поразит всех своей красотой? Тогда наша "Корзина с тыквой и розами" идеально подойдет для вас!  Она станет ярким акцентом в вашем интерьере, идеальным подарком или просто великолепным способом выразить свои чувства.`}
              price={5750}
              link={"/bouquets/category/42"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewHeros
              img={"./images/ban3.png"}
              img2={"/md3.png"}
              svg={"/images/ban3a.svg"}
              heroTitle={
                "Купите живое растение прямо сейчас и позвольте своему интерьеру расцвести вместе с нами!"
              }
              cardTitle={`Подарите себе и своему дому неповторимый шарм с фантастическим растением Фикус эластика белиз! С его густой зеленью и оригинальным рисунком листьев, он станет идеальным украшением вашего интерьера. `}
              price={5750}
              link={"/bouquets/category/41"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewHeros
              img={"./images/ban4.png"}
              img2={"/md4.png"}
              svg={"/images/ban4a.svg"}
              heroTitle={
                "Приобретайте сегодня товары со скидками у нас и заботьтесь о себе и о своих близких. "
              }
              cardTitle={`У нас вы найдете широкий выбор ваз, открыток, свечей и сертификатов, чтобы добавить нотку красоты в вашу жизнь. Наши прекрасные товары идеально подойдут для подарков или для создания атмосферы уюта в вашем доме. `}
              price={1150}
              link={"/bouquets/category/40"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-12 w-[100%] hidden md:flex justify-center">
        <button
          onClick={() => swiper.slidePrev()}
          className="mr-8 border-[3px] sm:border-[3px] border-[#343434] h-[40px] w-[40px] rounded-full flex justify-center items-center"
        >
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.962"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.3369 0.622048C11.6547 0.561208 12.0991 1.15361 11.6699 2.39939C8.98018 5.07771 6.30275 7.76656 3.63769 10.4658C6.30275 13.165 8.98018 15.8539 11.6699 18.5322C11.8978 18.988 11.8978 19.4436 11.6699 19.8994C11.1952 20.3484 10.6597 20.4282 10.0635 20.1386C7.06708 17.1423 4.07061 14.1458 1.07422 11.1494C0.846375 10.6936 0.846375 10.238 1.07422 9.7822C4.13371 6.68846 7.2213 3.63506 10.3369 0.622048Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="border-[3px] sm:border-[3px] border-[#343434] h-[40px] w-[40px] rounded-full flex justify-center items-center"
        >
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.962"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.66309 20.378C0.345255 20.4388 -0.099081 19.8464 0.33008 18.6006C3.01982 15.9223 5.69725 13.2334 8.36231 10.5342C5.69725 7.83496 3.01982 5.14612 0.330082 2.4678C0.102239 2.01204 0.102239 1.55636 0.330082 1.10061C0.804837 0.651555 1.3403 0.57178 1.93653 0.86135C4.93292 3.85775 7.92939 6.85421 10.9258 9.85061C11.1536 10.3064 11.1536 10.762 10.9258 11.2178C7.86629 14.3115 4.7787 17.3649 1.66309 20.378Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <HomeCategory />
      <div className="mt-8 hidden md:block md:mt-[50px] ">
        <Buket />
      </div>
      <Dostavka />
      <MainOnas />
      <MainDostavka />
      <div className="md:block hidden">
        <Reviews />
      </div>
      <BlogSection />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  // .swiper-pagination-horizontal {
  //   position: absolute;
  //   bottom:"20px";
  //   right:"10px";
  // }
`;
