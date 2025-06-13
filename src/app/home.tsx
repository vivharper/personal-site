import styles from "../styles/page/home.module.scss";
import About from "./about";
import Work from "./work";

const Home = (props: any) => {
  return (
    <div className={styles.content}>
      <About />
      <Work />
    </div>
  );
};

export default Home;
