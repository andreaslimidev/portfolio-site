import React from "react";
import Layout, { Container } from "../layouts/layout";
import styled from "styled-components";
import layoutStyles from "../layouts/layout.module.css";
import { graphql, useStaticQuery } from "gatsby";
import BlogPreview from '../components/BlogPreview'
import indexStyles from './index.module.css'




export default () => {

  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      edges {
        node {
           excerpt
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
  }`)

  const posts = data.allMarkdownRemark.edges

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
        <div className={indexStyles.columnRight}>
          <h1>Recent posts.</h1>
          {posts.map(({node : post}) => {
            const title = post.frontmatter.title
            const date = post.frontmatter.date
            const excerpt = post.excerpt
            const slug = post.fields.slug

            return (
              <BlogPreview title={title} date={date} excerpt={excerpt} slug={slug} />
            )
          })}
        </div>
      </div>
    </Layout>
  );
};
