import "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdCoffee } from "react-icons/md";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <nav className="container">
        <ul>
          <li>
            <a href="https://github.com/enesuur">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/enesuur/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto::enesuurmail@gmail.com">
              <CiMail />
            </a>
          </li>
          <li>
            <a href="https://www.buymeacoffee.com/enesugur">
              <MdCoffee />
            </a>
          </li>
        </ul>
        <p>
          This website was designed and coded by{" "}
          <a className={styles.developer} href="#">
            raidev
          </a>{" "}
          with ❤️
        </p>
      </nav>
    </footer>
  );
}
