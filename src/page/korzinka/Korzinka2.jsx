import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { styled } from "styled-components";
import axios from "axios";
import { uri, url, url2 } from "../../layout/config";
import { Checkbox } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper";

function Korzinka2() {
  const [swiper, setSwiper] = useState(null);
  const [delivery, setDelivery] = useState(false);
  const [next, setNext] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isStepTrue = queryParams.get("quick") == "true";
  console.log(isStepTrue);

  const nextStep = () => {
    const quickProduct = JSON.parse(localStorage?.getItem("quick"));
    if (!delivery && !next) {
      toast.warning("Выберите способ получения!!!");
    } else if (delivery) {
      localStorage.setItem(
        "full",
        JSON.stringify({
          id: arr[0],
          countFinally: isStepTrue ? 1 : data.countFinally,
          sumFinally: isStepTrue
            ? parseInt(quickProduct[0]?.price) + parseInt(arr[0]?.price)
            : data?.sumFinally + parseInt(arr[0]?.price),
        })
      );
      isStepTrue &&
        localStorage.setItem("basket", JSON.stringify(quickProduct));
      isStepTrue ? navigate(`/basket/3?quick=true`) : navigate("/basket/3");
      window.scrollTo({top: 0})
    } else if (next) {
      localStorage.setItem(
        "full",
        JSON.stringify({
          id: arr[1],
          countFinally: isStepTrue ? 1 : data.countFinally,
          sumFinally: isStepTrue
            ? parseInt(quickProduct[0]?.price)
            : data?.sumFinally,
        })
      );
      isStepTrue &&
        localStorage.setItem("basket", JSON.stringify(quickProduct));

        isStepTrue ? navigate(`/basket/3?quick=true`) : navigate("/basket/3");
        window.scrollTo({top: 0})
    }
  };
  const deleveryHandler = (id) => {
    setDelivery((prev) => !prev);
    setNext(false);
  };

  const nextHandler = (id) => {
    setNext((prev) => !prev);
    setDelivery(false);
  };

  const getSelect = async () => {
    const { data } = await axios.get(`${url}/flowers_delivery_category/`);
    console.log(data[0]);
    setArr(data);
  };

  useEffect(() => {
    const res = localStorage.getItem("full");
    if (res) {
      const res2 = JSON.parse(res);
      setData(res2);
    }
    getSelect();
  }, []);
  useEffect(() => {
    const pro = localStorage.getItem("quick");
    if (pro) {
      setProduct(JSON.parse(pro)[0]);
    }
    const basket = localStorage.getItem("basket");
    setImage(JSON.parse(basket));
  }, []);
  console.log(product);
  return (
    <Wrapper>
      <div className="container">
        <p className="title flex justify-center md:mb-6">Ваш заказ</p>
        <div className="wrap flex flex-col md:flex-row">
          <div className="left w-[100%] md:w-[60%] mx-auto">
            <div className="box">
              <p className="text-center sm:text-start text-[#443926] text-[16px] sm:text-[20px] mb-[20px] font-montserrat font-medium">
                Выберите способ получения
              </p>
              <div className="checkbox1 flex flex-col sm:flex-row">
                <div className="checkbox1 flex items-center">
                  <Checkbox
                    checked={delivery}
                    onClick={() => deleveryHandler(arr[0]?.id)}
                  />
                  <label for="" className="dark:text-black">
                    Доставка
                  </label>
                </div>
                <div className="checkbox2 flex  items-center">
                  <Checkbox
                    checked={next}
                    onClick={() => nextHandler(arr[1]?.id)}
                  />
                  <label for="" className="dark:text-black">
                    Самовывоз
                  </label>
                </div>
              </div>
            </div>

            <div className="left-footer">
              <span>1/4</span>
              <div className="btn1">
                <Link to={"/basket"} className="back">
                  Назад
                </Link>
                <button className="next" onClick={nextStep}>
                  Далее
                </button>
              </div>
            </div>
          </div>
          <div className="right w-[100%] md:w-[40%] mx-auto">
            <p className="title-p">Итого:</p>
            <div className="price">
              <h4>{isStepTrue ? 1 : data?.countFinally} товар</h4>
              <span>{isStepTrue ? product?.price : data?.sumFinally} ₽</span>
            </div>
            <div className="price-1">
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
              </div>
            </div>

            <hr className="border-bottom" />

            <div className="price-2">
              <h4>Доставка</h4>
              <span>{delivery ? parseInt(arr[0]?.price) : 0} ₽</span>
            </div>
            <div className="price-3">
              <h4>К оплате</h4>
              <span>
                {!isStepTrue
                  ? delivery
                    ? data?.sumFinally + parseInt(arr[0]?.price)
                    : data?.sumFinally
                  : delivery
                  ? parseInt(product?.price) + parseInt(arr[0]?.price)
                  : parseInt(product?.price)}{" "}
                ₽
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Korzinka2;

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

  .checkbox {
    display: flex;
    gap: 80px;
  }

  .checkbox1 {
    display: flex;
    gap: 12px;
  }

  .checkbox2 {
    display: flex;
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
    bottom: 28px;
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
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 80px;
    height: 28px;
    border: 1px solid #443926;
    border-radius: 5px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
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
`;
