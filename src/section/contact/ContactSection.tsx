import React from "react";
import styles from "./ContactSection.module.css";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="container">
      <h1 className="sectionTextHeader">_contact</h1>
      <div className={styles.contactContainer}>
        <h2>Thanks for visiting my website, visitor.</h2>
        <p>
          If you have any questions, suggestions, or just want to say hello,
          feel free to reach out. I'm always open to new connections and
          collaborations!
        </p>
        <p>For other projects, you can take a look at my GitHub account. ✔️</p>
        <p>Feel free to connect with me on socials!</p>
        <ul>
          <li>
            🚀
            <a
              href="https://linkedin.com/in/enesuur"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin Profile
            </a>
          </li>
          <li>
            🚀
            <a
              href="https://github.com/enesuur"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>

          <li>
            🚀
            <a
              href="mailto:enesuurmail@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mail
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
