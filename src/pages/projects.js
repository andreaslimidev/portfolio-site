import React, { useState } from "react";
import Layout from "../layouts/layout";
import layoutStyles from "../layouts/layout.module.css";
import { graphql, useStaticQuery } from "gatsby";
import ProjectPreview from "../components/ProjectPreview";

export default () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.edges;

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
          {projects.map(({ node: project }) => {
            const title = project.title;
            const description = project.description;
            const slug = project.slug;
            const imageData = project.image.childImageSharp.fluid;

            return (
              <ProjectPreview
                title={title}
                description={description}
                imageData={imageData}
                slug={slug}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
