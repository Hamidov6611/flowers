import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { styled } from "styled-components";
// import axios from 'axios'
import axios from "axios";
import { url } from "../../layout/config";
import { Checkbox } from "@mui/material";

function Korzinka2() {
  const [delivery, setDelivery] = useState(false);
  const [next, setNext] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);
  const [product, setProduct] = useState([]);
  const nextStep = () => {
    if (!delivery && !next) {
      toast.warning("Выберите способ получения!!!");
    } else if (delivery) {
      localStorage.setItem(
        "full",
        JSON.stringify({
          id: arr[0],
          countFinally: data.countFinally,
          sumFinally: data?.sumFinally + parseInt(arr[0]?.price),
        })
      );
      navigate("/корзина/3");
    } else if (next) {
      localStorage.setItem(
        "full",
        JSON.stringify({
          id: arr[1],
          countFinally: data.countFinally,
          sumFinally: data?.sumFinally })
      );
      navigate("/корзина/3");
    }
  };
  console.log(data);
  const deleveryHandler = (id) => {
    setDelivery((prev) => !prev);
  };

  const nextHandler = (id) => {
    setNext((prev) => !prev);
  };

  const getSelect = async () => {
    const { data } = await axios.get(`${url}/flowers_delivery_category/`);
    console.log(data[0]);
    setArr(data);
  };
  console.log(next);

  useEffect(() => {
    const res = localStorage.getItem("full");
    if (res) {
      const res2 = JSON.parse(res);
      setData(res2);
      console.log(data);
    }
    getSelect();
  }, []);
  console.log(data);

  return (
    <Wrapper>
      <div className="container">
        <p className="title flex justify-center md:mb-6">Ваш заказ</p>
        <div className="wrap flex flex-col md:flex-row">
          <div className="left w-[100%] md:w-[60%] mx-auto">
            <div className="box">
              <p>Выберите способ получения</p>
              <div className="checkbox1">
                <div className="checkbox1 flex items-center">
                  {/* <input
                  className="dark:bg-white"
                    type="checkbox"
                    onClick={() => deleveryHandler(arr[0]?.id)}
                  /> */}
                  <Checkbox  onClick={() => deleveryHandler(arr[0]?.id)} />
                  <label for="" className="dark:text-black">Доставка</label>
                </div>
                <div className="checkbox2 flex  items-center">
                  {/* <input
                  className="dark:bg-slate-50 dark:text-white"
                    type="checkbox"
                    onClick={() => nextHandler(arr[1]?.id)}
                  /> */}
                  <Checkbox  onClick={() => nextHandler(arr[1]?.id)} />
                  <label for="" className="dark:text-black">Самовывоз</label>
                </div>
              </div>
            </div>

            <div className="left-footer">
              <span>1/4</span>
              <div className="btn1">
                <Link to={"/корзина"} className="back">
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
              <h4>{data?.countFinally} товар</h4>
              <span>{data?.sumFinally} ₽</span>
            </div>
            <div className="price-1">
              <img src="../images/korzinka11.svg" alt="+18" />
              <h4>Букет с подсолнухами</h4>
            </div>

            <hr className="border-bottom" />

            <div className="price-2">
              <h4>Доставка</h4>
              <span>{delivery ? parseInt(arr[0]?.price) : 0} ₽</span>
            </div>
            <div className="price-3">
              <h4>К оплате</h4>
              <span>
                {delivery
                  ? data?.sumFinally + parseInt(arr[0]?.price)
                  : data?.sumFinally}{" "}
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
