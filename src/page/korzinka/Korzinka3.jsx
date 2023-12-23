import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { styled } from "styled-components";
import { uri } from "../../layout/config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
function Korzinka3() {
  const [swiper, setSwiper] = useState(null);
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [sendPhone, setSendPhone] = useState("");
  const [id1, setId1] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isStepTrue = queryParams.get("quick") == "true";
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const res = localStorage.getItem("full");
    if (res) {
      const res2 = JSON.parse(res);
      setData(res2);
      console.log(res2);
    }
    if (isStepTrue) {
      const pro = localStorage.getItem("quick");
      if (pro) {
        setProduct(JSON.parse(pro)[0]);
      }
    }
    const basket = localStorage.getItem("basket");
    setImage(JSON.parse(basket));
  }, []);
  const navigate = useNavigate();
  console.log(id1);

  localStorage.setItem(
    "id1",
    JSON.stringify([
      {
        data,
        full_name: firstName,
        phone: phone,
        full_name_payee: name,
        phone_payee: sendPhone,
      },
    ])
  );
  console.log(id1);
  const next = () => {
    if (firstName && phone) {
      isStepTrue ? navigate(`/basket/4?quick=true`) : navigate("/basket/4");
      window.scrollTo({top: 0})
    } else {
      toast.error("Заполните имя и телефон");
    }
  };

  return (
    <Wrapper>
      <div class="container">
        <p className="title flex justify-center md:mb-6">Ваш заказ</p>
        <div class="wrap flex flex-col md:flex-row">
          <div class="left w-[100%] md:w-[60%] mx-auto">
            <div class="box">
              <p>Введите контактные данные</p>
              <div class="input-label flex flex-col md:flex-row">
                <div class="input-label-1">
                  <h4>Ваше имя</h4>
                  <input
                    class="main-input dark:bg-white p-2 dark:text-slate-950"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label for=""></label>
                </div>
                <div class="input-label-2">
                  <h4>Ваш телефон</h4>
                  <input
                    class="main-input dark:bg-white p-2 dark:text-slate-950"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label for=""></label>
                </div>
              </div>
              <div class="checkbox1 flex items-center">
                {/* <input type="checkbox" className="dark:bg-indigo-50" />
                <label for="">Я сам получу заказ</label> */}
                <Checkbox />
                <label for="" className="dark:text-black">
                  Я сам получу заказ
                </label>
              </div>
              <div class="input-label flex flex-col md:flex-row">
                <div class="input-label-1">
                  <h4>Имя получателя</h4>
                  <input
                    class="main-input dark:text-slate-950 dark:bg-white p-2"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label for=""></label>
                </div>
                <div class="input-label-2">
                  <h4>Телефон получателя</h4>
                  <input
                    class="main-input dark:bg-white p-2 dark:text-slate-950"
                    type="text"
                    value={sendPhone}
                    onChange={(e) => setSendPhone(e.target.value)}
                  />
                  <label for=""></label>
                </div>
              </div>
              <div class="checkbox2 flex items-center">
                <Checkbox />
                {/* <label for="" className="dark:text-slate-950">Добавить в заказ открыткуз</label> */}
                <label for="" className="dark:text-black">
                  Добавить в заказ открытку
                </label>
              </div>
            </div>

            <div class="left-footer">
              <span>2/4</span>
              <div class="btn1">
                <Link to={"/basket"} class="back">
                  Назад
                </Link>
                <button class="next" onClick={() => next()}>
                  Далее
                </button>
              </div>
            </div>
          </div>
          <div class="right w-[100%] md:w-[40%] mx-auto">
            <p class="title-p">Итого:</p>
            <div class="price">
              <h4>{data?.countFinally} товар</h4>
              <span>{data?.sumFinally} ₽</span>
            </div>
            <div class="price-1">
            <div className="w-full flex flex-col gap-y-3">
                {isStepTrue ? (
                  <div className="w-full">
                    <Swiper
                      spaceBetween={20}
                      className="w-full"
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(s) => {
                        setSwiper(s);
                      }}
                    >
                      {product?.flowers?.map((c) => (
                        <SwiperSlide>
                          <div className="flex w-full gap-x-4 items-center">
                            <div className="w-[109px]">
                              <img
                                src={`${uri}${c?.img}`}
                                alt=""
                                className="w-full h-[106px] rounded-md"
                              />
                            </div>
                            <h4 className="text-center w-[159px]">
                              {product?.name}
                            </h4>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                ) : (
                  <div className="w-full">
                    <Swiper
                      spaceBetween={20}
                      className="w-full"
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(s) => {
                        setSwiper(s);
                      }}
                    >
                      {image?.map((c) => (
                        <SwiperSlide>
                          <div className="flex w-full gap-x-4 items-center">
                            <div className="w-[109px]">
                              <img
                                src={`${uri}${c?.flowers[0]?.img}`}
                                alt=""
                                className="w-full h-[106px] rounded-md"
                              />
                            </div>
                            <h4 className="text-center w-[159px]">{c?.name}</h4>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
                <div className="mt-3 w-[100%] w-full flex justify-center z-50">
                  <button
                    onClick={() => swiper.slidePrev()}
                    className="mr-8 border-[3px] sm:border-[3px] border-[#fff] h-[30px] w-[30px] rounded-full flex justify-center items-center"
                  >
                    <svg
                      width="6"
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
                        fill="#fff"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => swiper.slideNext()}
                    className="border-[3px] sm:border-[3px] border-[#fff] h-[30px] w-[30px] rounded-full flex justify-center items-center"
                  >
                    <svg
                      width="6"
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
                        fill="#fff"
                      />
                    </svg>
                  </button>
                </div>
              </div>            </div>

            <hr class="border-bottom" />

            <div class="price-2">
              <h4>Доставка</h4>
              <span>{data?.delivery} ₽</span>
            </div>
            <div class="price-3">
              <h4>К оплате</h4>
              <span>{data?.sumFinally} ₽</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Korzinka3;

const Wrapper = styled.section`
  padding: 20px 0;

  .title {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100c;
    margin-bottom: 32px;
  }

  .dark .bg-white {
    background-color: white;
  }

  .box p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #443926;
    margin-bottom: 20px;
  }

  .wrap {
    display: flex;
    gap: 30px;
    align-items: flex-start;
  }

  .wrap .left {
    position: relative;
    box-sizing: border-box;
  
    min-height: 380px;
    background: #ffffff;
    border: 1px solid #779243;
    border-radius: 20px;
  }

  .input-label {
    display: flex;
    gap: 21px;
  }

  .main-input {
    border: 1px solid #779243;
    border-radius: 5px;
    margin-bottom: 14px;

    height: 28px;
  }

  .input-label h4 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #443926;
    margin-bottom: 8px;
  }

  .checkbox1 {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }

  .checkbox2 {
    display: flex;
    gap: 12px;
  }

  .checkbox1 .checkbox2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #443926;
  }

  .left-footer {
    position: absolute;
    width: calc(100% - 56px);
    bottom: 10px;
    left: 28px;
    right: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .box {
    margin-top: 28px;
    margin-left: 28px;
  }

  .left-footer span {
    height: 15px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #443926;
  }

  .left-footer .btn1 {
    display: flex;
    gap: 12px;
  }

  .btn1 .back {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 80px;
    height: 28px;
    background: #443926;
    border-radius: 5px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .btn1 .next {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 80px;
    height: 28px;
    background: #443926;
    border-radius: 5px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  /*right section*/

  .right {
    
    min-height: 485px;
    background: #779243;
    border-radius: 20px;
    padding: 40px;
  }

  .right .title-p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .right .price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .right .price h4 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }

  .right .price span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }

  .right .price-1 {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .right .price-1 h4 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }

  .right .border-bottom {
    width: 100%;
    height: 0px;
    border: 1px solid #ffffff;
    margin: 20px 0;
  }

  .right .price-2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .right .price-2 h4 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }

  .right .price-2 span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }

  .right .price-3 {
    display: flex;
    justify-content: space-between;
  }

  .right .price-3 h4 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }

  .right .price-3 span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    .wrap .left {
      min-height: 550px;
    }
    .main-input {
      width: 90%;
      margin 0 auto;
    }
  }
`;
