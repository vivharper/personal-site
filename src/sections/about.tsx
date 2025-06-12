import styles from "../styles/page/about.module.scss";

const About = (props: any) => {
  return (
    <div className={styles.about}>
      <img
        className={styles.avatar}
        src="Image_015.jpg"
        alt="Brown haired woman with brown eyes, red lipstick, and silver eyeshadow wearing a black blazer with a beige shirt"
      ></img>
      <div className={styles.description}>
        <h1>Vivian Dickerson</h1>
        <p>
          Hi there, my name is Vivian, and I'm a frontend software engineer
          based in Scarborough, Maine. I currently work on the design system for
          American Airlines and have a passion for user experience and digital
          accessibility. I have six years experience creating consistent,
          robust, and intuitive atomic UI components for reuse across a myriad
          of different experiences across my company's digital space.
        </p>
      </div>
    </div>
  );
};

export default About;
