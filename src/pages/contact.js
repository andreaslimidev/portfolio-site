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
            Shoot me an email at <strong>andreaslimidev@gmail.com</strong> or
            feel free to use the contact form on the right.
          </p>
        </div>
        <div className={layoutStyles.columnRight}>
          <h1>Here comes form</h1>
        </div>
      </div>
    </Layout>
  );
};
