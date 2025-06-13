import styles from "../styles/component/footer.module.scss";

const Footer = (props: any) => {
  return (
    <footer className={styles.root}>
      <div className={styles.content}>
        <ul>
          <li>
            <a
              href="/Vivian_Dickerson_latest.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vivharper"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vivian-dickerson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
