import { TfiWrite } from "react-icons/tfi";
import { MdHeight, MdOutlineWorkOutline } from "react-icons/md";
import React from "react";
import styles from "./BackgroundSection.module.css";
import Education from "@/assets/icons/Education";
import Link from "next/link";
import Flag from "@/assets/icons/Flag";

const Background: React.FC = () => {
  return (
    <section id="background" className="container">
      <h1 className="sectionTextHeader">_background</h1>
      <div className={styles.timelineContainer}>
        <div className={styles.timelineCard}>
          <article className={styles.leftCard}>
            <div className={styles.timelineInfo}>
              <h2>Muğla Sıtkı Koçman University</h2>
              <p>
                Preparation School
                <Education width={20} height={20} />
              </p>
              <p className={styles.cardContent}>Grade: 88.8/100</p>
            </div>
          </article>
          <div className={styles.timelineDateRight}>2019-2020</div>
        </div>

        <div className={styles.timelineCard}>
          <article className={styles.rightCard}>
            <div className={styles.timelineInfo}>
              <h2>Muğla Sıtkı Koçman University</h2>
              <p>
                Computer Engineering
                <Education width={20} height={20} />
              </p>
              <p className={styles.cardContent}>GPA: 3.40/4.00</p>
            </div>
          </article>
          <div className={styles.timelineDateLeft}>2020-2024</div>
        </div>

        <div className={styles.timelineCard}>
          <article className={styles.leftCard}>
            <div className={styles.timelineInfo}>
              <h2>Avalanche</h2>
              <p>
                Content Creator
                <TfiWrite width={20} height={20} />
              </p>
              <p className={styles.cardContent}>
                I created social content to spread awareness about blockchain
                technology and the Avalanche Network.
              </p>
            </div>
          </article>
          <div className={styles.timelineDateRight}>2021-2023</div>
        </div>

        <div className={styles.timelineCard}>
          <article className={styles.rightCard}>
            <div className={styles.timelineInfo}>
              <h2>Freelance Full Stack Engineer</h2>
              <p>
                Self-Employed
                <MdOutlineWorkOutline width={20} height={20} />
              </p>
              <p className={styles.cardContent}>
                Focus: Developed robust web applications, optimized backend
                systems, and implemented modern tech stacks.
              </p>
            </div>
          </article>
          <div className={styles.timelineDateLeft}>2023-Present</div>
        </div>

        <div className={styles.timelineCard}>
          <article className={styles.leftCard}>
            <div className={styles.timelineInfo}>
              <h2>Idamobile</h2>
              <p>
                Fullstack Engineer Intern
                <MdOutlineWorkOutline width={20} height={20} />
              </p>
              <p className={styles.cardContent}>
                Architected integrations, resolved legacy project issues, and
                developed reusable components.
              </p>
            </div>
          </article>
          <div className={styles.timelineDateRight}>May 2024 - July 2024</div>
        </div>

        <div className={styles.timelineBorder}>
          <Flag width={32} height={32} strokeWidth={0} />
        </div>
      </div>
    </section>
  );
};

export default Background;
