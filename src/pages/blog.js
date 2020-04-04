import React from "react";
import Layout, { Container } from "../layouts/layout";
import layoutStyles from "../layouts/layout.module.css";
import { graphql, useStaticQuery } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

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
          {posts.map(({ node: { frontmatter } }) => (
            <h1>{frontmatter.title}</h1>
          ))}
        </div>
      </div>
    </Layout>
  );
};
