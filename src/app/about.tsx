import Image from "next/image";
import styles from "../styles/page/about.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <Image
        className={styles.avatar}
        src="Image_015.jpg"
        alt="Brown haired woman with brown eyes, red lipstick, and silver eyeshadow wearing a black blazer with a beige shirt"
      ></Image>
      <div className={styles.description}>
        <h1>Vivian Dickerson</h1>
        <p>
          Hi there, my name is Vivian {"\[she/her\]"}, and I{`&apos;`}m a UX
          software engineer based in Scarborough, Maine. I currently lead the
          design system effort for American Airlines and have a passion for user
          experience and digital accessibility. I completed my Bachelors of
          Science in Computer Engineering at Texas A&M University and since then
          have dedicated my life to elevating the digital space and helping make
          it usable for all kinds of people.
        </p>
        <br />
        <div className={styles.skills}>
          <div>
            <h2>Professional</h2>
            <ul>
              <li>6 years of frontend development experience</li>
              <li>Fluency with JavaScript, TypeScript, React, HTML, CSS</li>
              <li>Atomic and responsive design foundational skills</li>
              <li>Expertise in digital accessibility (W3C, WCAG, WAI)</li>
              <li>Strong knowledge of design technologies (Figma)</li>
            </ul>
          </div>
          <br />
          <div>
            <h2>Personal</h2>
            <ul>
              <li>Solving problems and establishing standards</li>
              <li>Engaging with new people</li>
              <li>Spending time on a mountain or volleyball court</li>
              <li>Striving to improve and expand my skills</li>
              <li>Coffee, DIY, and my cat Freya</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
