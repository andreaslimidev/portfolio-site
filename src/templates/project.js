import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/layout";
import Image from "gatsby-image";
import styled from 'styled-components'

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      technologies
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


const ImageContainer = styled.div`
  max-width: 700px;
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;

  return (
    <Layout>
      <h1>{project.title}</h1>
      <ImageContainer>
      <Image fluid={project.image.childImageSharp.fluid} alt={project.title} />
      </ImageContainer>
      <p>{project.description}</p>
      <h4>Technologies used</h4>
      <ul>
        {project.technologies.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default ProjectTemplate;
