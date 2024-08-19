import React, { RefObject } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "./IntroductionSection.module.css";

const Introduction: React.FC = () => {
  const [text] = useTypewriter({
    words: ["passion ❤️", "coffee ☕", "creativity 🧠"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section id="introduction" className="container">
      <h1 className="sectionTextHeader">_introduction</h1>
      <div className={styles.introductionContainer}>
        <article>
          <h2>Hi! 👋</h2>
          <h3>My name is Enes.</h3>
          <p className={styles.articleContent}>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products.
          </p>
          <p className={styles.animationText}>
            I code with {text}
            <Cursor cursorStyle="|" />
          </p>
          <a
            className="btn-primary"
            href="https://www.linkedin.com/in/enesuur/"
          >
            _linkedin
          </a>
        </article>

        <figure>
          <img
            src="/assets/img/profileImage.jpeg"
            alt="Profile picture of me ^^"
          />
        </figure>
      </div>
    </section>
  );
};

export default Introduction;
