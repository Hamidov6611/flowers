import React from "react";
import { styled } from "styled-components";
import Action from "../components/Action";
import Buket from "../components/Buket";
import Dostavka from "../components/Dostavka";
import Blog from "../components/Blog";
import MainOnas from "../components/MainOnas";
import MainDostavka from "../components/MainDostavka";
import Reviews from "../components/Reviews";
import BlogSection from "../components/BlogSection";
import { useLocation } from "react-router-dom";

function Home() {
  const loction = useLocation()
  console.log(loction.pathname)
  return (
    <Wrapper>
      <div className="md:h-[340px] lg:h-[600px] sm:h-[249px] h:[150px]">
        <img src="./images/hero_bg.png" alt="" width={"100%"} height={"100%"} />
      </div>
      <div className="md:mt-[180px]">
        <Action />
      </div>
      <div className="mt-0 md:mt-[50px]">
        <Buket />
      </div>
      <Dostavka />
      <MainOnas />
      <MainDostavka />
      <Reviews />
      <BlogSection />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div``;
