import React from "react";
import Layout from "../layouts/layout";
import layoutStyles from "../layouts/layout.module.css";

export default () => {
  return (
    <Layout>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.columnLeft}>
          <h1 className="heading">Contact me</h1>
          <h2 className="subHeading">I'll get back to you soon.</h2>
          <p>
            Shoot me an email at <strong>andreaslimidev@gmail.com</strong>.
          </p>
        </div>
      
      </div>
    </Layout>
  );
};
