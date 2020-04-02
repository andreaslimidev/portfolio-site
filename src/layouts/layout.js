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
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;