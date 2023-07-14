import { Checkbox } from "@mui/material";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { styled } from "styled-components";

function Korzinka4() {
  const [data, setData] = useState([]);
  const [adress, setAddress] = useState("");
  const [fullData, setFullData] = useState("");
  const [date, setDate] = useState(Number);
  const [time, setTime] = useState(Number);
  const [andTime, setAndTime] = useState(Number);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const res = localStorage.getItem("full");
    if (res) {
      const res2 = JSON.parse(res);
      setData(res2);
    }
    const res2 = localStorage.getItem("id1");
    if (res2) {
      const res3 = JSON.parse(res2);
      setAllData(res3);
      console.log(allData);
    }
  }, []);
  const navigate = useNavigate()

  localStorage.setItem(
    "id3",
    JSON.stringify([
      allData,
      {
        address_street_home: adress,
        address_addition: fullData,
        date_delivery: date,
        time_delivery: time,
        and_time: andTime,
      },
    ])
  );

  const next = () => {
    if(adress && fullData && date && time && andTime) {
      navigate("/корзина/5")
    }else {
      toast.error("Заполните все поля")
    }
  }
  return (
    <Wrapper>
      <div class="container">
        <p className="title flex justify-center md:mb-6">Ваш заказ</p>
        <div class="wrap flex flex-col md:flex-row">
          <div class="left w-[100%] md:w-[60%] mx-auto">
            <div class="box">
              <h3>Уточните детали доставки</h3>
              <div class="input-label">
                <div class="input-label-1">
                  <h4>Адрес доставки (нас. пункт, улица, дом)</h4>
                  <input
                    class="main-input dark:bg-white p-2 dark:text-slate-950"
                    type="text"
                    value={adress}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label for=""></label>
                </div>
                <div class="checkbox1 flex items-center">
                  <Checkbox />
                  <label class="checkbox1-p" for="">
                    Я не знаю адрес получателя. Уточните по телефону.
                  </label>
                </div>
                <div class="input-label-2">
                  <h4>
                    Дополнительная информация (подъезд, домофон, квартира):
                  </h4>
                  <input
                    class="main-input-1 dark:bg-white p-2 dark:text-slate-950"
                    type="text"
                    value={fullData}
                    onChange={(e) => setFullData(e.target.value)}
                  />
                  <label for=""></label>
                  <div class="time">
                    <div class="time-date">
                      <h4>Дата доставки</h4>
                      <input
                        class="main-input-2 dark:bg-white p-2 dark:text-slate-950"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />

                      <label for=""></label>
                    </div>
                    <div class="time-time">
                      <h4>Время доставки</h4>
                      <input
                        class="main-input-2 mr-[20px] dark:bg-white p-2 dark:text-slate-950"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                      <input
                        class="main-input-2 dark:bg-white p-2 dark:text-slate-950"
                        type="time"
                        value={andTime}
                        onChange={(e) => setAndTime(e.target.value)}
                      />
                      <label for=""></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="left-footer">
              <span>3/4</span>
              <div class="btn1">
                <Link to={'/корзина'} class="back">
                  Назад
                </Link>
                <button onClick={() => next()} class="next">
                  Далее
                </button>
              </div>
            </div>
          </div>
          <div class="right w-[100%] md:w-[40%] mx-auto">
            <h3 class="title-h3">Итого:</h3>
            <div class="price">
              <h4>{data?.countFinally} товар</h4>
              <span>{data?.sumFinally} ₽</span>
            </div>
            <div class="price-1">
              <img src="../images/korzinka11.svg" alt="+18" />
              <h4>Букет с подсолнухами</h4>
            </div>

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

export default Korzinka4;

const Wrapper = styled.section`
padding: 20px 0;

.title {
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100C;
    margin-bottom: 32px;
}

.box h3 {
    font-family: 'Montserrat';
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
    background: #FFFFFF;
    border: 1px solid #779243;
    border-radius: 20px;
}

.left h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #443926;
    margin-bottom: 8px;
}

.left .checkbox1-p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #443926;
}

// .checkbox1 {
//     display: flex;
//     gap: 12px;
//     margin-bottom: 20px;
// }

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
    font-family: 'Montserrat';
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
    font-family: 'Montserrat';
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    margin-bottom: 20px;
}

.right .price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.right .price h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .price span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .price-1 {
    display: flex;
    align-items: center;
    gap: 24px;
}

.right .price-1 h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .border-bottom {
    width: 100%;
    height: 0px;
    border: 1px solid #FFFFFF;
    margin: 20px 0;
}

.right .price-2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.right .price-2 h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .price-2 span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .price-3 {
    display: flex;
    justify-content: space-between;
}

.right .price-3 h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .price-3 span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}
@media screen and (max-width: 768px) {
  .wrap .left {
    min-height: 450px;
  }
  .main-input {
    width: 90%;
    margin 0 auto;
  }
  .main-input-1 {
    width: 90%;
  }
  .time {
    width: 90%;
  }
}
@media screen and (max-width: 600px) {
  .time {
    display: flex;
    flex-direction: column;
    
  }
  .time .time-date .main-input-2 {
    width: 100%;
  }
  .time .time-time .main-input-2 {
    width: 100%;
  }
  .wrap .left {
    min-height: 530px;
  }
}
`;
