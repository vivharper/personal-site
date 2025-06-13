import Link from "next/link";
import styles from "../../styles/page/usaa.module.scss";

const Page = () => {
  return (
    <div>
      <h1>USAA</h1>
      <p>
        During my time with USAA, I was able to help stand up the brand new
        design system: Reveille.
      </p>
      <br />
      <p>
        I entered USAA as a product frontend developer as a part of the Bank IT
        org and shortly after joining the company, the design system team made
        an announcement asking for volunteers to help kickstart the component
        library should they have capacity on their teams. I soon began a
        residency on the design systems team and began working on component
        after component to add to the React and JavaScript libraries. Eventually
        I secured a position fully on the team where I stayed until 2023.
      </p>
      <br />
      <p>
        Component build was to follow a strict process in order to reach a
        publish-ready state.
      </p>
      <ol className={styles.list}>
        <li>Write the component usage and accessibility document</li>
        <li>
          Create tests to ensure enumerated features from the prior step were
          met
        </li>
        <li>
          Code to satisfy feature and accessibility requirements, reaching 100%
          code coverage and test success
        </li>
        <li>Pending code review approval, publish to test environment</li>
        <li>Publish to developer community during next scheduled release</li>
      </ol>
      <p>
        In addition to coding for the libraries, I co-hosted support hours for
        the library twice a week where design, development, and accessibility
        concerns were fielded and addressed. Once quarterly I would partner with
        USAA{`&apos;`}s onboarding team to educate newly hired employees on the
        benefits of a design system and the importance of digital accessibility
        through presentation and a prepared workshop. Towards the end of my time
        with the team I had contribution rate second only to our team technical
        lead for bug fixes, component enhancements, contributed components, and
        documentation maintenance.
      </p>
      <br />
      <p>
        When I moved on from USAA in 2023 the design system had grown to
        encompass of over 100 patterns and components utilized by 150 design and
        development teams in the U.S. My time at USAA was critical and formative
        in my career and I took everything I learned into my next role at
        American Airlines.
      </p>
      <br />
      <Link href="/aa" className={styles["next-link"]}>
        On to American Airlines{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </Link>
    </div>
  );
};

export default Page;
