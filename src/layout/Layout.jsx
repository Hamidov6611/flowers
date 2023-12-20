import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import StickyBtns from "../components/stickyBtn";
import {BiMessageDetail} from 'react-icons/bi'
import { Link } from "react-router-dom";

const Layout = ({ children, title, logo, kor, desc }) => {
  const [len, setLen] = useState(0);
  const [isMessage, setIsMessage] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Helmet>
      <header>
      <Header logo={logo} lay={kor} />
      </header>
      <main>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { len, setLen })
        )}
      </main>
      <div
        className="bg-slate-800 z-50 h-[50px] md:h-[50px] w-[50px] md:w-[50px] rounded-full fixed flex items-center justify-center z-50 left-2 top-[76%] md:top-[83%] cursor-pointer"
        onClick={() => setIsMessage((prev) => !prev)}
      >
       
        <BiMessageDetail fontSize={24} />
        {isMessage && (
          <div
            className="relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col  absolute top-[-55px] gap-y-6 md:gap-y-8 left-4">
              <Link
                to={`https://api.whatsapp.com/send?phone=79119276162`}
                className="bg-[#41A96AF5] w-[230px] sm:w-[230px] md:w-[300px] flex items-center justify-between px-2 md:px-4 py-0 md:py-0 rounded-md "
              >
                <p className="text-white tracking-[1px]  sm:tracking-[2px] font-montserrat text-[14px] md:text-[18px]">
                  Написать в Вотсап
                </p>
                <div className="w-[40px] h-[40px]">
                  <img
                    src={"/images/t2.svg"}
                    alt="message"
                    width={"100%"}
                    height={"100%"}
                    className="p-2"
                  />
                </div>
              </Link>
              <Link
                to={`https://t.me/+79119276162`}
                className="bg-[#7DAAE5] w-[250px] sm:w-[250px] md:w-[350px] flex items-center justify-between px-2 md:px-4 py-0 md:py-0 rounded-md "
              >
                <p className="text-white tracking-[1px] sm:tracking-[2px]  font-montserrat text-[14px] md:text-[18px]">
                  Написать в Телеграм
                </p>
                <div className="w-[40px] h-[40px]">
                  <img
                    src={"/images/t1.svg"}
                    alt="message"
                    width={"100%"}
                    height={"100%"}
                    className="p-2"
                  />
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Букетная-мануфактура",
};

export default Layout;
