import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { uri } from "../../layout/config";
import { ProductsContext } from "../../context/ProductContext";

function Korzinka1() {
  const [defaultPrice, setDefaultPrice] = useState(0);
  const [price, setPrice] = useState(defaultPrice);
  const [count, setCount] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [sum, setSum] = useState(delivery);
  const [kor, setKor] = useState([]);
  const [price2, setPrice2] = useState(0);
  const [tovar, setTovar] = useState(Number);
  const [selected, setSelected] = useState(true);
  const [id1, setId1] = useState(Number);
  // const {state, getData, removeData} = useContext(ProductsContext)
  const addHandler = (id) => {
    kor?.map((item) => {
      if (item.id === id) {
        item.count = item.count >= 0 && item.count + 1;
        console.log(item);
        setSum((prev) => prev + parseInt(item.price));
        setTovar((prev) => prev + 1);
        const storageProduct = localStorage.getItem("basket");
        const updateProduct = JSON.parse(storageProduct)
        updateProduct.map(c => {
          console.log(c)
          if(c?.id == id) {
            c.count = c?.count + 1
            localStorage.setItem("basket", JSON.stringify(updateProduct))
          }
        })
        console.log("updateProduct", updateProduct)

      }
    });
  };
  
  useEffect(() => {
    const a = localStorage.getItem("basket");
    if (a) {
      const res = JSON.parse(a);
      setKor(res);
      // console.log(JSON.parse(a))
      res?.map((item) => {
        setSum((prev) => prev +( parseInt(item?.count) * parseInt(item?.price)));
        setTovar((prev) => prev + parseInt(item?.count))
      });
    }
  }, []);
  const removeHandler = (id) => {
    // getData(kor)
    kor?.map((item) => {
      if (item.id === id) {
       if(item?.count > 1) {
        item.count = item.count > 0 ? item.count - 1 : 0;
        if (sum > 0 && tovar > 0 && item.count >= 0) {
          setSum((prev) => prev - parseInt(item.price));
          setTovar((prev) => prev - 1);
          setSelected(item.selected);
        }
        const storageProduct = localStorage.getItem("basket");
        const updateProduct = JSON.parse(storageProduct)
        updateProduct.map(c => {
          console.log(c)
          if(c?.id == id) {
            c.count = c?.count - 1
            localStorage.setItem("basket", JSON.stringify(updateProduct))
          }
        })
        console.log(updateProduct)
       }
      }
    });
  };

  localStorage.setItem(
    "full",
    JSON.stringify({ countFinally: tovar, sumFinally: sum })
  );

  const selectedHandler = (id) => {
    kor?.map((item) => item.id == id && (item.selected = true));
  };

  const len = kor?.length;

  const removeProduct = (id) => {
    let a = kor?.filter((i) => i?.id !== id);
    console.log(a);
    setKor(a);
    kor?.map(c => {
      if(c.id == id) {
        setSum(prev => prev - ( parseInt(c?.count) * parseInt(c?.price)))
      }
    })
    localStorage.setItem("basket", JSON.stringify(a));
    // removeData()
  };
  return (
    <Wrapper>
      <div className="container">
        <p className="text-[#343434] text-[24px] md:text-[32px] mb-6 md:mb-12 font-semibold font-montserrat flex justify-center ">Ваш заказ</p>

        <div className="wrap flex flex-col md:flex-row">
          <div className="flex flex-col left w-[100%] md:w-[60%]">
            {kor &&
              kor?.map((item, index) => (
                <div key={index} className="w-full">
                  <hr className="w-[100%]" />
                  <div className="container-section gap-[5px] sm:gap-[30px] md:gap-[60px] flex flex-row  items-center">
                    <div className="container1 p-2">
                      <button onClick={() => removeProduct(item.id)}>
                        <img
                          src="./images/korzinka12.svg"
                          alt=""
                          className="cursor-pointer object-cover"
                        />
                      </button>
                      <div className="w-[119px] h-[106px] flex">
                        <img
                          width={"100%"}
                          height={"100%"}
                          className="rounded-lg"
                          src={`${uri}${item?.flowers[0]?.img}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="container2 gap-2 md:gap-8 mb-[10px] sm:mb-0">
                      <div className="count">
                        <button
                          className="plus cursor-pointer"
                          onClick={() => addHandler(item.id)}
                        >
                          +
                        </button>
                        <span>{item?.count}</span>
                        {item.count > 0 ? (
                          <button
                            className="minus cursor-pointer"
                            onClick={() => removeHandler(item.id)}
                          >
                            -
                          </button>
                        ) : (
                          <button disabled className="minus cursor-pointer">
                            -
                          </button>
                        )}
                      </div>
                      <h5 className="flex text-[17px] text-[#343434] font-semibold">
                        {item.price} <p className="ml-1 ">₽</p>
                      </h5>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
          </div>

          <div className="right w-[100%] md:w-[40%]">
            <p>Итого:</p>
            <div className="price">
              <p>{tovar} товар</p>
              <h4>{sum} ₽</h4>
            </div>

            <hr />
            <div className="price">
              <p>Доставка</p>
              <h4>{delivery} ₽</h4>
            </div>
            <div className="price">
              <p>К оплате</p>
              <h4>{sum} ₽</h4>
            </div>

            <Link
              to={tovar > 0 && "/basket/2"}
              onClick={() => {
                window.scrollTo({top: 0})
              }}
              className="btn1 flex justify-center my-4"
            >
              <button className="bg-[#8c5c38] py-4 px-4 rounded-3xl w-full text-[18px] text-white">Оформить заказ</button>
            </Link>

            <span className="btn-p">
              Нажимая кнопку "Оформить заказ" вы соглашаетесь с условиями
              обработки персональных данных и публичной офертой.
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Korzinka1;

const Wrapper = styled.section`
  padding: 20px 0;

  .wrap {
    display: flex;
    gap: 30px;
    margin: 20px 0;
  }

  .title {
    margin-bottom: 32px;
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100c;
  }

  hr {
    border-bottom: 1px solid #779243;
  }

  .right {
    background: #779243;
    border-radius: 20px;
    padding: 40px;
  }

  .right p {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }

  .right hr {
    border: 1px solid #ffffff;
  }

  .container-section {
    display: flex;
  }

  .container-section img {
    display: flex;
    gap: 14px;
  }

  .container1 {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .container2 {
    display: flex;
    align-items: center;
  }

  .count {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .container1 p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #443926;
    margin-top: 64px;
    margin-bottom: 64px;
  }

  .container2 span {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #443926;
  }

  .container2 .plus,
  .container2 .minus {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(197, 197, 197, 0.25);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #443926;
    text-align: center;
  }

  .container2 h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #443926;
  }

  .section {
    position: absolute;
    width: 445px;
    height: 485px;
    left: 830px;
    top: 90px;
    background: #779243;
    border-radius: 20px;
    padding: 30px;
  }

  .section p {
    background: #779243;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }

  .price {
    display: flex;
    justify-content: space-between;
    background: #779243;
  }

  .price p {
    background: #779243;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .price h4 {
    background: #779243;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .btn-p {
    background: #779243;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #ffffff;
  }

  .btn1 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 992px) {
  }
`;
