import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import layoutStyles from "./layout.module.css";
import Fade from "react-reveal/Fade";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.layout}>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Helmet>
      <Header />
      <Fade>
      {children}
      </Fade>
      <Footer  />
    </div>
  );
};

export default Layout;
