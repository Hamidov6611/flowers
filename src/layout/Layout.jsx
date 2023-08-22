import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import StickyBtns from "../components/stickyBtn";

const Layout = ({ children, title, logo, kor, desc }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={desc} />
        {/* <meta property="og:title" content={"Title of your page"} />
        <meta property="og:description" content={"Description of your page"} />
        <meta property="og:image" content={"URL of the image you want to use"} />
        <meta property="og:url" content={"URL of your page"} />
        <meta property="og:type" content="website" /> */}
      </Helmet>
      <Header logo={logo} lay={kor} />
      <main>{children}</main>
      <StickyBtns
       />
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Букетная-мануфактура",
};

export default Layout;
