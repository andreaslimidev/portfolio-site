import React from "react";
import Layout, { Container } from "../layouts/layout";
import styled from "styled-components";
import layoutStyles from "../layouts/layout.module.css";
import { graphql, useStaticQuery } from "gatsby";
import particlesJS from "particles.js";

export default () => {
  return (
    <Layout>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.columnLeft}>
          <h1 className="heading">Hello, I'm Andreas</h1>
          <h2 className="subHeading">Oslo, Norway</h2>
          <p>
            I am an aspiring software developer currently studying at the
            University of Oslo. Welcome to my steamy new portfolio where I will
            share my personal projects and maybe even a blog post from time to
            time.
          </p>
        </div>
        <div className={layoutStyles.columnRight}>
          <h1>Blog posts will go here.</h1>
        </div>
      </div>
    </Layout>
  );
};
