import Link from "next/link";
import styles from "../styles/component/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.content}>
        <ul>
          <li>
            <Link
              passHref
              href="https://vivharper.github.io/personal-site/Vivian-Dickerson-latest.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              passHref
              href="https://github.com/vivharper"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              passHref
              href="https://www.linkedin.com/in/vivian-dickerson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
