import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/layout";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;

  return (
    <Layout>
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </Layout>
  );
};

export default ProjectTemplate;
