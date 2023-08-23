import React from "react";
import { styled } from "styled-components";
import video from '../videos/20220219_175115.mp4'

function MainDostavka() {
  return (
    <Wrapper>
      <div className="w-[94%] mx-auto">
        <p>Доставка</p>

        <div className="content">
          <ul className="info">
            <li className="item">
              <div className="image flex items-center">
                <img src="./images/dostavka2.png" alt="" />
                <span className="md:ml-3">Быстро</span>
              </div>
              <p className="text">Доставка до 3 часов по Санкт-Петербургу</p>
            </li>

            <li className="item ">
              <div className="image flex items-center">
                <img src="./images/dostavka3.png" alt="" />
                <span className="ml-3">Бесплатно</span>
              </div>

              <p className="text">
                При заказе от 5000 доставка в пределах Санкт-Петербурга
                бесплатна
              </p>
            </li>
          </ul>
          <div className="youtube z-50 w-[100%]">
            <iframe
              width={"100%"}
              height="441"
              src={video}
              title=""
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <img className="bg" src="./images/dostavka1.png" alt="" />
      
    </Wrapper>
  );
}

export default MainDostavka;

const Wrapper = styled.section`
  padding: 80px 0;
  position: relative;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bg {
    width: 337.5px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 390px;
    margin-top: 135px;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100c;
    padding-left: 150px;
    margin-bottom: 100px;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    color: #443926;
    padding-left: 10px;
  }

  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #443926;
    padding-left: 45px;
    max-width: 320px;
    margin-top: 12px;
  }

  .info {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 145px;
  }

  .item-2 {
    padding-left: 70px;
  }

  .youtube {
    width: 493px;
    height: 702.39px;
    left: 782px;
    top: 3700.58px;
    background: #c4d7a7;
    backdrop-filter: blur(10px);
    border-radius: 257.5px 257.5px 0px 0px;
    overflow: hidden;
    padding: 45px 39px;

    iframe {
      width: 100%;
      height: 100%;
      border-radius: 257.5px 257.5px 0px 0px;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 992px) {
    .content {
      display: flex;
      flex-direction: column;
      justify-content
    }
    .youtube {
      width: 360px;
      height: 400.39px;
      left: 12px;
      top: 50.58px;
      background: #c4d7a7;
      backdrop-filter: blur(10px);
      border-radius: 257.5px 257.5px 0px 0px;
      overflow: hidden;
      padding: 5px 9px;
    }
    .container {
        width: 90% !important;
        margin: 0 auto;
        text-align: center;
    }
    .bg {
        display: none;
    }
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: #15100c;
      padding-left: 15px;
      margin-bottom: 50px;
      
    }
    .image {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .info {
      margin-bottom: 50px;
    }
  }
`;
