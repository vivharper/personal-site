import Link from "next/link";
import Image from "next/image";
import styles from "../styles/component/work-card.module.scss";
import { prefix } from "../../utils/prefix";

const WorkCard = (props) => {
  const { title, dates, imgSrc, imgAlt, description, route } = props;

  return (
    <div className={styles.root}>
      <div className={styles["image-container"]}>
        <Image src={`${prefix}/${imgSrc}`} alt={imgAlt}></Image>
      </div>
      <div className={styles["content-container"]}>
        <div className={styles.title}>
          <span>{title}</span>
          <span>
            {dates[0]} - {dates[1]}
          </span>
        </div>
        <div className={styles.description}>{description}</div>
        <Link href={route}>
          Read more{" "}
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
        {props.children}
      </div>
    </div>
  );
};

export default WorkCard;
