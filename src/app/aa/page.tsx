import styles from "../../styles/page/aa.module.scss";

const Page = (props: any) => {
  return (
    <div>
      <h1>American Airlines</h1>
      <p>
        At American Airlines I served as a Senior UX Engineer leading the
        Aileron design system team.
      </p>
      <br />
      <p>
        When joining American in 2023 I assumed ownership of a web components
        library written in Lit consisting of 35 components. Quickly I had to
        adapt to this new library and JavaScript framework, new design
        principles, and new community of designers and developers at the
        company. The goal was to take the existing component library and design
        kit and bring them into parity with one another so that we could have a
        true design system and start standardizing for the company.
      </p>
      <br />
      <p>
        Key gaps in the design system developer offerings were lack of
        flexibility, failing accessibilty, no documentation, and relucatance
        from potential adopters. The design kit also suffered from poor
        documentation and non-standardized design foundations (colors,
        typography, etc.).
      </p>
      <br />
      <p>
        To begin tackling the problems at hand, I established a WCAG 2.1 AA
        inspired component checklist that we audited each of the 35 components
        with and corrected any failures along the way. In tandem with the
        accessibility overhaul, I partnered with my UX counterpart to solidify
        our design token taxonomy and ensure that what was established in Figma
        would integrate into our repository and we could keep the primitive and
        semantic tokens in sync automatically between softwares. We eventually
        completed our accessibility rework and published our tokens in Q3 2024,
        bringing much needed consistency to the AA digital environment.
      </p>
      <br />
      <p>
        Over the course of those months, we encountered some specific issues in
        regards to accessibility, analytics, and server side rendering using Lit
        web components. We came to the conclusion that the design system needed
        to expand to better accommodate our frontend landscape in IT, and this
        promted a technology investigation to propose to Director level
        stakeholders. The frontend space at AA spans both Angular and React, and
        Lit was chosen as a framework agnostic solution to accommodate both.
        With the goal to expand the design system and close the gaps stated
        before, we approached leadership with a comprehensive study and
        recommendation on the route we felt the design system should take. After
        compromising, our directive shifted to creating additional component
        packages to support modern Angular versions and upon completion of the
        initial 12 component for Angular we would supplement the same 12 in
        React and repeat until our library had all our previous components
        offered in Lit and could expand in the future.
      </p>
      <br />
      <p>
        The dedication of my team to pursue this component creation structure
        was supported by IT pushing a modernization effort to align Angular
        users on an acceptable rolling band of versions to align with the design
        system and to mitigate securtiy vulnerabilities. IT leadership was not
        in a position to comfortably align on a tech standard for frontend
        development and we were instructed to accommodate both JS frameworks for
        the time being.
      </p>
      <br />
      <p>
        In addition to my responsibilities described above, we were still
        committed to supporting our adopters twice a week in dedicated office
        hours sessions and I participated 3 times a week in UX office hours to
        promote good accessible design and adherence to the design system. On
        multiple occasions I helped solution for accessibility risks, broken
        design system component instances, and lay groundwork for new components
        to be added to the system. I am proud of the impact I have within my
        space at American Airlines.
      </p>
      <br />
      <a href="/" className={styles["next-link"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>{" "}
        Home
      </a>
    </div>
  );
};

export default Page;
