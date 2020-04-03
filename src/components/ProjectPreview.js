import React from "react";
import projectPreviewStyles from "./projectPreview.module.css";
import { Link } from "gatsby";
import Image from "gatsby-image";
import Fade from "react-reveal/Fade";

const ProjectPreview = ({ title, slug, url, description, imageData }) => {
  return (
    <div>
      <Fade bottom>
        <h2>
          <Link to={`/${slug}/`}>{title}</Link>
        </h2>
        <div className={projectPreviewStyles.card}>
          <Link to={`/${slug}/`}>
            <Image fluid={imageData} alt={title} />
            <div className={projectPreviewStyles.cardContent}>
              <p>{description}</p>
              <p>
                <Link to={`/${slug}/`}>View this project</Link>
              </p>
            </div>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default ProjectPreview;
