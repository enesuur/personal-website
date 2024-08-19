import {
  IoColorPaletteOutline,
  IoServerOutline,
  IoLogoNodejs,
} from "react-icons/io5";
import { AiOutlineTool } from "react-icons/ai";
import React from "react";
import styles from "./SkillSection.module.css";

const SkillSection: React.FC = () => {
  return (
    <section id="skills" className="container">
      <h2 className="sectionTextHeader">_skills</h2>
      <div className={styles.skillsContainer}>
        <h2>
          <IoColorPaletteOutline /> Front-End Stack{" "}
        </h2>
        <p>
          HTML,CSS,Javascript,React.js,Next.js,Vite,Redux,Context
          API,Bootstrap,Tailwind CSS,Material UI,Ant Design,
          Web3.js,Ether.js,SCSS.
        </p>
        <h2>
          <IoServerOutline /> Back-End Stack
        </h2>
        <p>Node.js,Express.js,MongoDB,Firebase,MySQL,PostgreSQL</p>
        <h2>
          <IoLogoNodejs /> Programming Languages
        </h2>
        <p>Javascript,Typescript,Java,Python,SQL,R.</p>
        <h2>
          <AiOutlineTool />
          Tools & Programs
        </h2>
        <p>
          Git,Visual Studio Code,R Studio,Postman,Eclipse,Pycharm,IntelliJ
          IDEA,Figma.
        </p>
      </div>
    </section>
  );
};

export default SkillSection;
