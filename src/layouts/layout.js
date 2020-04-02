import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import layoutStyles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.layout}>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
