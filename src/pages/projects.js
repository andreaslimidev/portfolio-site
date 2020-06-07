import React from "react";
import Layout from "../layouts/layout";
import layoutStyles from "../layouts/layout.module.css";
import projectStyles from "./project.module.css";
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
      <div className={projectStyles.scroll}>
        <div className={projectStyles.grid}>
          {projects.map(({ node: project }) => {
            const title = project.title;
            const description = project.description;
            const slug = project.slug;
            const imageData = project.image.childImageSharp.fluid;

            return (
              <ProjectPreview
                key={project.id}
                className={projectStyles.project}
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
