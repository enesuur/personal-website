import React, { useRef, useState, useEffect } from "react";
import Logo from "@/assets/icons/Logo";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node) &&
      overlayRef.current &&
      !overlayRef.current.contains(event.target as Node)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`${styles.header} container-fluid`}>
      <nav
        ref={navRef}
        className={`${isMobileMenuOpen ? styles.showMenu : ""} container`}
      >
        <div
          className={styles.logoContainer}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span>raidev</span>
          <Logo width={32} height={32} />
        </div>

        <span className={styles.hamburgerIcon} onClick={handleMobileMenuClick}>
          &#9776;
        </span>

        <ul
          className={`${styles.navItems} ${
            isMobileMenuOpen ? styles.showMenu : ""
          }`}
        >
          <li>
            <Link
              to="introduction"
              smooth={true}
              offset={-84}
              duration={768}
              onClick={handleLinkClick}
            >
              _introduction
            </Link>
          </li>
          <li>
            <Link
              to="background"
              smooth={true}
              offset={-84}
              duration={768}
              onClick={handleLinkClick}
            >
              _background
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              offset={-84}
              duration={768}
              onClick={handleLinkClick}
            >
              _skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              offset={-84}
              duration={768}
              onClick={handleLinkClick}
            >
              _projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-84}
              duration={768}
              onClick={handleLinkClick}
            >
              _contact
            </Link>
          </li>
        </ul>
      </nav>
      {isMobileMenuOpen && (
        <div ref={overlayRef} className={styles.overlay}></div>
      )}
    </header>
  );
};

export default Navbar;
