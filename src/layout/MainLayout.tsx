import React, { ReactNode, RefObject } from "react";
import styles from "./MainLayout.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.rootLayout}>
      <Navbar />
      <main className={`${styles.main}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
