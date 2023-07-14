import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { url } from "../../layout/config";
import { toast } from "react-toastify";

function Korzinka5() {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [finallyData, setFinallyData] = useState([]);
  const [proId, setProID] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const res = localStorage.getItem("full");
    if (res) {
      const res2 = JSON.parse(res);
      setData(res2);
      const res3 = localStorage.getItem("id3");
      if (res3) {
        const res4 = JSON.parse(res3);
        setFinallyData(res4);
      }
    }
    const idd = localStorage.getItem("basket")
    if(idd) {
      const res5 = JSON.parse(idd)
      res5.map(item => setProID(prev => prev.concat(item.id)))
    }
  }, []);
  const postData = finallyData[0]?.[0];
  
  const submitData = {id_flowers:proId,prcie:postData?.data.sumFinally,id_type_delivery:parseInt(postData?.data?.id?.id),full_name:postData?.full_name,phone:postData?.phone,full_name_payee:postData?.full_name_payee,phone_payee:postData?.phone_payee,address_street_home:finallyData[1]?.address_street_home,address_addition:finallyData[1]?.address_addition,date_delivery:finallyData[1]?.date_delivery,time_delivery:finallyData[1]?.time_delivery,and_time:finallyData[1]?.and_time,comment}
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
     if(comment) {
      const data = await axios.post(`${url}/flowers_delivery_sites_views/`,submitData)
      console.log(data)
      navigate('/оплата')
      // toast.success("Ваш заказ принят")
      
    }else {
      toast.error("Заполните все поля")
    }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Wrapper>
      <div class="container">
        <p className="title flex justify-center md:mb-6">Ваш заказ</p>
        <div class="wrap flex flex-col md:flex-row">
          <form onSubmit={submitHandler} class="left w-[100%] md:w-[60%] mx-auto">
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
                <Link to={"/корзина/4"} class="back">
                  Назад
                </Link>
                <button type="submit" className="next">Далее</button>
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
              <img src="../images/korzinka11.svg" alt="+18" />
              <h4>Букет с подсолнухами</h4>
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
