import React, { RefObject } from "react";
import styles from "./ProjectSection.module.css";
import ProjectCard from "@/components/cards/ProjectCard";
import projectData from "@/data/projectData.json";

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="container">
      <h1 className="sectionTextHeader">_projects</h1>
      <div className={styles.projectsContainer}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgPath={project.imgPath}
            alt={project.alt}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            cardType={project.cardType}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
