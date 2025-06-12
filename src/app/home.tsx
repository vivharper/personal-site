import styles from "../styles/page/home.module.scss";
import About from "../sections/about";

const Home = (props: any) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <About />

        {/* <div>
          <h2>Timeline</h2>
          <h3>School</h3>
          <p>Texas A&M</p>

          <h3>Work</h3>
          <h4>USAA</h4>
          <p>Stuff I did</p>

          <h4>American Airlines</h4>
          <p>Stuff I did</p>

          <h3>Skills</h3>
          <h4>USAA</h4>
          <ul>
            <li>coding</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
