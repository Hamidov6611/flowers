import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../layout/config";
import { toast } from "react-toastify";

function ContactSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      const postData = {full_name: firstName, phone, content: message}
      if(firstName && phone && message) {
        const data = await axios.post(`${url}/forma_post_sites_views/`, postData)
        console.log(data)
      toast.success("Сообщение было отправлено")
      }else {
        toast.error("Заполните все поля")
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <div className="md:w-[80%] w-[96%] mx-auto min-h-[40vh]">
        <div className="w-[100%] flex md:flex-row flex-col p-3">
          <div className="md:w-[50%] w-[100%]">
            <p className="title mb-3 md:mb-6 text-[#443926]">Контакт</p>

            <p className="title2 text-[#443926]">
              Большой Сампсониевский проспект, д. 25
            </p>
            <p className="title2 text-[#443926]">Тел. +7(911) 927-61-62</p>

            <div className="flex">
              <Link
                className="mr-6"
                to={`https://www.instagram.com/buketmanuf/`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="60px"
                  viewBox="0 0 448 512"
                >
                  {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </Link>
              <Link to={`https://vk.com/buketmanuf `}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="60px"
                  viewBox="0 0 448 512"
                >
                  {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="md:w-[50%] w-[100%] mt-6 md:mt-0">
            <form class="left w-[100%]" onSubmit={submitForm}>
              <div class="box p-6">
                <h3 className="w-[100%] flex justify-center title2">
                  Введите контактные данные
                </h3>
                <div class="input-label flex flex-col ">
                  <div className="flex md:flex-row flex-col md:justify-between">
                    <div class="input-label-1 md:w-[48%] w-[100%]">
                      <h4>Ваше имя и фамилия</h4>
                      <input
                        class="main-input  w-[100%] p-3 dark:bg-white"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label for=""></label>
                    </div>
                    <div class="input-label-2 md:w-[48%] w-[100%]">
                      <h4>Ваш телефон</h4>
                      <input
                        class="main-input dark:bg-white  w-[100%]  p-3"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <label for=""></label>
                    </div>
                  </div>
                  <div className="flex w-[100%] justify-between">
                    <div className="w-[100%]">
                      <h4>Ваш комментарий </h4>
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="border-2   p-3 resize-none focus:outline-0 focus:border-[#779243] rounded-lg border-[#779243] h-[100px] outline-0 w-[100%] dark:bg-white"></textarea>
                    </div>
                  </div>
                  <button type="submit" className="bg-[#779243] md:mt-4 p-2 text-white rounded-lg w-[100%]">
                    Отправить
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          className="w-[100%] rounded-2xl"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <a
            href="https://yandex.ru/maps/org/buketnaya_manufaktura/117992422020/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: 12,
              position: "absolute",
              top: 0,
            }}
          >
            Букетная Мануфактура
          </a>
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/category/flower_shop/184108325/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: 12,
              position: "absolute",
              top: 14,
            }}
          >
            Магазин цветов в Санкт‑Петербурге
          </a>
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/category/flowers_and_bouquets_delivery/184108319/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: 12,
              position: "absolute",
              top: 28,
            }}
          >
            Доставка цветов и букетов в Санкт‑Петербурге
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/org/buketnaya_manufaktura/117992422020/?ll=30.343557%2C59.965202&z=14"
            width={"100%"}
            height={400}
            frameBorder={1}
            allowFullScreen="true"
            style={{ position: "relative" }}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactSection;

const Wrapper = styled.section`
  padding: 40px 0;
  .title {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    // color: ${(props) => props.theme.colors.blackColor};
  }

  .title2 {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #443926;
    margin-bottom: 20px;
  }

  .left {
    position: relative;
    box-sizing: border-box;

    // min-height: 380px;
    background: #ffffff;
    border: 1px solid #779243;
    border-radius: 20px;
  }

  .input-label {
    display: flex;
    gap: 21px;
  }

  .main-input  {
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
`;
