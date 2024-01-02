import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { url } from "../../layout/config";
import { toast } from "react-toastify";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { uri } from "../../layout/config";

function Korzinka5() {
  const [swiper, setSwiper] = useState(null);
  const [data, setData] = useState([]);
  const [storageProduct, setStorageProduct] = useState([]);
  const [comment, setComment] = useState("");
  const [finallyData, setFinallyData] = useState([]);
  const [proId, setProID] = useState([]);
  const [id_size, setIdSize] = useState(2);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isStepTrue = queryParams.get("quick") == "true";
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const res = localStorage.getItem("full");
    if (res) {
      const res2 = JSON.parse(res);
      setData(res2);
      console.log(res2);
      const res3 = localStorage.getItem("id3");
      if (res3) {
        const res4 = JSON.parse(res3);
        setFinallyData(res4);
      }
    }
    const idd = localStorage.getItem("basket");
    if (idd != null) {
      const res5 = JSON.parse(idd);
      setStorageProduct(res5);
      res5.map((item) => setProID((prev) => prev.concat(item.id)));
    } else {
      let product = localStorage.getItem("quick");
      const res5 = JSON.parse(product);
      setStorageProduct(res5);
      setProID([parseInt(res5?.id)]);
      console.log(res5);
      setIdSize(res5?.id_size > 0 ? res5?.id_size : 2);
    }
  }, []);
  const postData = finallyData[0]?.[0];

  const submitHandler = async (e) => {
    e.preventDefault();
    const submitData = {
      flowers: storageProduct,
      id_size,
      id_flowers: proId,
      prcie: postData?.data.sumFinally,
      id_type_delivery: parseInt(postData?.data?.id?.id),
      full_name: postData?.full_name,
      phone: postData?.phone,
      full_name_payee: postData?.full_name_payee,
      phone_payee: postData?.phone_payee,
      address_street_home: finallyData[1]?.address_street_home,
      address_addition: finallyData[1]?.address_addition,
      date_delivery: finallyData[1]?.date_delivery,
      time_delivery: finallyData[1]?.time_delivery,
      and_time: finallyData[1]?.and_time,
      comment,
    };
    try {
      if (comment) {
        const data = await axios.post(
          `${url}/flowers_delivery_sites_views/`,
          submitData
        );
        console.log(data);
        navigate("/pay");
        // toast.success("Ваш заказ принят")
      } else {
        toast.error("Заполните все поля");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(storageProduct);

  useEffect(() => {
    if (isStepTrue) {
      const pro = localStorage.getItem("quick");
      if (pro) {
        setProduct(JSON.parse(pro)[0]);
      }
    }
    const basket = localStorage.getItem("basket");
    setImage(JSON.parse(basket));
  }, []);
  return (
    <Wrapper>
      <div className="container">
        <p className="title flex justify-center md:mb-6">Ваш заказ</p>
        <div className="wrap flex flex-col md:flex-row">
          <form
            onSubmit={submitHandler}
            className="left w-[100%] md:w-[60%] mx-auto"
          >
            <div className="flex flex-col p-4">
              <p className="leading-[24.38px] text-[20px] dark:text-slate-950 font-semibold font-montserrat my-3">
                Комментарий к заказу
              </p>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                type="text"
                className="border-2 dark:text-[#15100c] border-[#779243] h-[240px] rounded-[20px] p-3 resize-none focus:outline-0 focus:border-[#779243] dark:bg-white"
              />
            </div>

            <div className="left-footer">
              <span>4/4</span>
              <div className="btn1">
                <Link to={"/basket/4"} className="back">
                  Назад
                </Link>
                <button type="submit" className="next">
                  Далее
                </button>
              </div>
            </div>
          </form>
          <div className="right w-[100%] md:w-[40%] mx-auto">
            <h3 className="title-h3">Итого:</h3>
            <div className="price">
              <h4>{data?.countFinally} товар</h4>
              <span>{data?.sumFinally} ₽</span>
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
              <span>{data?.delivery} ₽</span>
            </div>
            <div className="price-3">
              <h4>К оплате</h4>
              <span>{data?.sumFinally} ₽</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Korzinka5;

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

  .box h3 {
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

  .left h4 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #443926;
    margin-bottom: 8px;
  }

  .left .checkbox1-p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #443926;
  }

  .checkbox1 {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }

  .time {
    display: flex;
    gap: 16px;
    margin-top: 20px;
  }

  .time .time-date .main-input-2 {
    border: 1px solid #779243;
    border-radius: 5px;
    width: 152px;
    height: 28px;
  }

  .time .time-time .main-input-2 {
    border: 1px solid #779243;
    border-radius: 5px;
    width: 152px;
    height: 28px;
  }

  .main-input {
    width: 335px;
    height: 28px;
    border: 1px solid #779243;
    border-radius: 5px;
    margin-bottom: 14px;
  }

  .main-input-1 {
    width: 521px;
    height: 28px;
    border: 1px solid #779243;
    border-radius: 5px;
  }

  .checkbox1 {
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

  .right .title-h3 {
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
