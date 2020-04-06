import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layouts/layout";
import layoutStyles from "../layouts/layout.module.css";
import Image from "gatsby-image";
import styled from "styled-components";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      detailed
      technologies
      features
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
  padding-top: 3rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Url = styled.p`
  margin: 0;
  color: #333;
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;

  return (
    <Layout>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.columnLeft}>
          <Link to="/projects">
            <strong>&larr; Back to all projects</strong>
          </Link>
          <h1>{project.title}</h1>
          <Url>
            <a href={project.url}>{project.url}</a>
          </Url>
          <p>{project.detailed}</p>
          <Container>
            <div>
              <h4>Technologies</h4>
              <ul>
                {project.technologies.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Features</h4>
              <ul>
                {project.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
        <ImageContainer>
          <Image
            fluid={project.image.childImageSharp.fluid}
            alt={project.title}
          />
        </ImageContainer>
      </div>
    </Layout>
  );
};

export default ProjectTemplate;
