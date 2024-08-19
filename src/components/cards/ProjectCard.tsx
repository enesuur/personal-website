import { FaGithub, FaLink } from "react-icons/fa6";
import React from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title?: string;
  alt?: string;
  description?: string;
  imgPath?: string;
  githubUrl?: string;
  demoUrl?: string;
  cardType?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgPath,
  alt,
  githubUrl,
  demoUrl,
  cardType,
}) => {
  return (
    <div
      className={`${styles.projectCardContainer} ${
        cardType === false ? styles.cardTypeFalse : ""
      }`}
    >
      <figure>
        <img
          src={imgPath || "/sailing.png"}
          alt={alt || "Project image"}
        />
      </figure>
      <article>
        <h2>{title}</h2>
        <p className={styles.projectDescription}>{description}</p>
        <p className={styles.projectCardLinks}>
          {githubUrl && (
            <a
              href={githubUrl}
              className={`
              ${cardType === false ? styles.cardTypeFalse : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              className={`
              ${cardType === false ? styles.cardTypeFalse : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink />
            </a>
          )}
        </p>
      </article>
    </div>
  );
};

export default ProjectCard;
