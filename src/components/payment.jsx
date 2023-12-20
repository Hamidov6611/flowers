import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import "./index.css";

function Payment() {
  const [sum, setSum] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    let a = localStorage.getItem("full");
    if (a) {
      let b = JSON.parse(a);
      setSum(b.sumFinally);
    }
  }, []);

  useEffect(() => {
    let a = localStorage.getItem("id1");
    if (a) {
      let b = JSON.parse(a);
      setName(b[0].full_name);
    }
  }, []);
  return (
    <Wrapper>
      <div className="w-[100%]">
        <div>
          <div class="container">
            <p className="text-[#15100C] font-montserrat text-[48px] flex justify-center md:mb-6">
              Ваш заказ
            </p>
            <div class="wrap flex flex-col md:flex-row">
              <div class="left w-[100%] md:w-[60%] mx-auto">
                <div className="flex flex-col p-4">
                  <form
                    className="p-4"
                    method="POST"
                    action="https://buketnayamanufaktura.server.paykeeper.ru/create/"
                  >
                    <div className="flex lg:flex-row flex-col mb-[20px] lg:mb-[40px] items-center">
                      <p className="title mr-3 w-[100%] mb-[20px] lg:mb-0  lg:w-[48%]">
                        Введите имя
                      </p>
                      <input
                        type="text"
                        name="clientid"
                        value={name}
                        className="main-input w-[100%] lg:w-[48%] dark:bg-white p-2"
                      />
                    </div>
                    <div className="flex lg:flex-row flex-col mb-[20px] lg:mb-[40px] items-center">
                      <p className="title mr-3 w-[100%] mb-[20px] lg:mb-0  lg:w-[48%]">
                        Введите сумму оплаты:
                      </p>
                      <input
                        type="text"
                        name="sum"
                        value={sum}
                        className="main-input w-[100%] lg:w-[48%] dark:bg-white p-2"
                      />
                    </div>
                    <div className="flex lg:flex-row flex-col mb-[20px] lg:mb-[40px] items-center">
                      <p className="title mr-3 w-[100%] mb-[20px] lg:mb-0  lg:w-[48%]">
                        Введите номер заказа:
                      </p>
                      <input
                        className="main-input w-[100%] lg:w-[48%] dark:bg-white p-2"
                        type="text"
                        name="orderid"
                        value="1234568"
                      />{" "}
                      <br />
                    </div>
                    <div className="flex lg:flex-row flex-col mb-[20px] lg:mb-[40px] items-center">
                      <p className="title mr-3 w-[100%] mb-[20px] lg:mb-0  lg:w-[48%]">
                        Введите название услуги:
                      </p>
                      <input
                        className="main-input w-[100%] lg:w-[48%] dark:bg-white p-2"
                        type="text"
                        name="service_name"
                        value="Тестовая оплата"
                      />
                    </div>
                    <br />
                    <div className="w-[100%] flex justify-center">
                      <input
                        type="submit"
                        value="Перейти к оплате"
                        className="bg-[#443926] py-2 px-4 text-white rounded-lg cursor-pointer text-[16px] md:text-[20px] focus:underline mr-4"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Payment;

const Wrapper = styled.section`
  padding: 20px 0;

  // p {
  //   font-style: normal;
  //   font-weight: 600;
  //   font-size: 48px;
  //   line-height: 58px;
  //   color: #15100c;
  //   padding-left: 150px;
  //   margin-bottom: 100px;
  // }
  .title {
    // font-family: 'Cormorant';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #15100C;
    // margin-bottom: 32px;
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
    // height: 28px;
    border: 1px solid #779243;
    border-radius: 5px;
    // margin-bottom: 14px;
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
