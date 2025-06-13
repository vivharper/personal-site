import styles from "../styles/page/home.module.scss";
import About from "./about";
import Work from "./work";

export default function Page() {
  return (
    <div className={styles.content}>
      <About />
      <Work />
    </div>
  );
}
