import React from "react";
import { styled } from "styled-components";

function Action() {
  return (
    <Wrapper>
      <div
        className="mt-0  action w-[100%] md:w-[94%] mx-auto h-[441px] md:h-[660px] relative"
      >
        <div className="w-[100%] mx-auto h-[441px] md:h-[660px] absolute top-0">
            <img
              src="./images/action_bg.png"
              alt=""
              height={"100%"}
              className="absolute top-0 z-0 w-[100%]"
            />
          </div>
        <div className="container z-20 absolute top-16">
          <p className="title w-[40%]">Акция</p>

          <div className="card w-[40%]">
            <img src="./images/action.png" alt=""  />

            <span>
              При самовывозе любой напиток из нашего меню в подарок, например
              ароматный кофе из зёрен свежей обжарки, или Айс матча латте
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Action;

const Wrapper = styled.section`
  width: 100%;

  .action {
    width: 100%;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .title {
      font-family: "Cormorant";
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 58px;
      color: ${(props) => props.theme.colors.whiteColor};
    }
  }
  .card {
    background: rgba(0, 0, 0, 0.34);
    border: 1px solid ${(props) => props.theme.colors.whiteColor};
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 24px 40px;
    margin-top: 32px;
    img {
      width: 85px;
      height: 95px;
    }
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: ${(props) => props.theme.colors.whiteColor};
    }
  }

  @media screen and (max-width: 992px) {
    .body {
      margin: 0;
    }
    .action {
      width: 100%;
      margin: 0 auto;
    }
    .card {
      width: 100%;
      border-radius: 30px;
      display: flex;
      align-items: center;
      height: 249px;
      position: relative;
      bottom: 40px;
      gap: 0px;
      margin-top: 52px;

      background: none;
    border: none;

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: ${(props) => props.theme.colors.whiteColor};
      }
    }
    .action {
    }
    .card img {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50px;
      height: 60px;
    }
    .card span {
      font-size: 20px;
    }
  }
`;
