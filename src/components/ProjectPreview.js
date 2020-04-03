import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";

const ProjectPreview = ({ title, slug, url, description, imageData }) => {
  return (
    <div>
      <Link to={`/${slug}/`}>
        <Image fluid={imageData} alt={title} />
        <h2>
          <Link to={`/${slug}/`}>{title}</Link>
        </h2>
        <p>{description}</p>
        <p>
          <Link to={`/${slug}/`}>View this project</Link>
        </p>
      </Link>
    </div>
  );
};

export default ProjectPreview;
