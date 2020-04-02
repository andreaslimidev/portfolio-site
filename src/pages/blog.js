import React from "react";
import Layout, { Container } from "../layouts/layout";
import layoutStyles from "../layouts/layout.module.css";

export default () => {
  return (
    <Layout>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.columnLeft}>
          <h1 className="heading">Blog</h1>
          <h2 className="subHeading">For the occasional post</h2>
          <p>Blog talk</p>
        </div>
        <div className={layoutStyles.columnRight}>
          <h1>Here comes posts</h1>
        </div>
      </div>
    </Layout>
  );
};
