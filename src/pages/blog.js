import React from "react";
import Layout, { Container } from "../layouts/layout";
import layoutStyles from "../layouts/layout.module.css";
import blogStyles from "./blog.module.css";
import BlogPreview from "../components/BlogPreview";
import { graphql, useStaticQuery } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 60)
            frontmatter {
              title
              date
            }
            fields {
              slug
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
        <div className={blogStyles.columnRight}>
          {posts.map(({ node: post }) => {
            const title = post.frontmatter.title;
            const date = post.frontmatter.date;
            const excerpt = post.excerpt;
            const slug = post.fields.slug;

            return (
              <BlogPreview
                title={title}
                date={date}
                excerpt={excerpt}
                slug={slug}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
