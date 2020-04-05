import React from "react";
import blogPreviewStyles from "./blogPreview.module.css";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";


const ProjectPreview = ({ title, slug, date, excerpt }) => {
  return (
    <div>
    <Fade bottom>
        <div className={blogPreviewStyles.card}>
          
          <Link to={`/blog/${slug}`}>
            <h2> {title} </h2>
            <p> {date} </p>
            <p>{excerpt}</p>
            </Link>
            
        </div>
        </Fade>
        </div>
  );
};

export default ProjectPreview;
