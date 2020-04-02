import React from "react";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

const IconContainer = styled.div`
  font-size: 2.2rem;
  display: flex;
`;

const Icon = styled.div`
  margin-right: 1rem;
`;

const Footer = () => {
  return (
    <footer>
      <IconContainer>
        <Icon>
          <FaGithubSquare />
        </Icon>
        <Icon>
          <FaLinkedin />
        </Icon>
        <Icon>
          <FaEnvelopeSquare />
        </Icon>
      </IconContainer>
    </footer>
  );
};

export default Footer;
