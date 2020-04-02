import React from "react";
import Layout from "../layouts/layout";
import layoutStyles from "../layouts/layout.module.css";

export default () => {
  return (
    <Layout>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.columnLeft}>
          <h1 className="heading">Projects</h1>
          <h2 className="subHeading">Ez</h2>
          <p>Project talk</p>
        </div>
        <div className={layoutStyles.columnRight}>
          <h1>Here comes projects</h1>
        </div>
      </div>
    </Layout>
  );
};
