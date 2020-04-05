import React from "react";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare, FaMapMarkerAlt } from "react-icons/fa";
import { graphql, useStaticQuery } from 'gatsby'


const IconContainer = styled.div`
  font-size: 2.2rem;
  display: flex;
  margin-top: 4rem;
`;

const Icon = styled.a`
  margin-right: 1rem;
`;

const Footer = () => {

  const data = useStaticQuery(graphql`
{
  site {
    siteMetadata {
      title, 
      github, 
      linkedin,
      email
    }
  }
}
`)

  return (
    <footer>
      <IconContainer>
        <Icon href={data.site.siteMetadata.github}>
          <FaGithubSquare />
        </Icon>
        <Icon href={data.site.siteMetadata.linkedin}>
          <FaLinkedin />
        </Icon>
        <Icon href={data.site.siteMetadata.email}>
          <FaEnvelopeSquare />
        </Icon>
      </IconContainer>
    </footer>
  );
};

export default Footer;
