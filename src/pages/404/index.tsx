import React from "react";
import styles from "./NotFound.module.css";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <section className={`${styles.notFoundSection} container`}>
        <div className={styles.notFoundContainer}>
          <h1>_Oops! 🐾</h1>
          <p>Looks like you’ve wandered off the beaten path.</p>
          <p>Don’t worry, it happens to the best of us! The page you’re looking for is not here.</p>
          <Link className="btn-primary" href={'/'}>
            Return Home
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFound;
