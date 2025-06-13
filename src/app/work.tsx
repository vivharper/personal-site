import styles from "../styles/page/work.module.scss";
import WorkCard from "@/components/WorkCard";

const Work = () => {
  const workCards = [
    {
      title: "USAA",
      dates: ["2019", "2023"],
      description:
        "Rolling out USAA's proprietary design system: Reveille. Designing, developing, documenting, and teaching designers and developers the benefits of design systems.",
      imgSrc: "/personal-site/usaa-building.jpeg",
      imgAlt: "Entrance to USAA headquarters in San Antonio, TX",
      route: "/usaa",
    },
    {
      title: "American Airlines",
      dates: ["2023", "Present"],
      description:
        "Elevating American Airlines' design system Aileron to new heights. Focusing on flexibility and accessibility, introducing foundational design tokens for commercial and enterprise applications, and initiating tech modernization efforts.",
      imgSrc: "/personal-site/aa-plane.jpg",
      imgAlt: "Image of American Airlines plane mid-flight",
      route: "/aa",
    },
  ];
  return (
    <div className={styles.work}>
      <div className={styles["cards-container"]}>
        {workCards.map((item, index) => (
          <WorkCard key={`work-item-${index}`} {...item}></WorkCard>
        ))}
      </div>
    </div>
  );
};

export default Work;
