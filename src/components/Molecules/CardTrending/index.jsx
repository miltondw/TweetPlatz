import { AiOutlineEllipsis } from "react-icons/ai";
import styles from "./styles.module.scss";
export const CardTrending = ({ category, title, views, country }) => {
  return (
    <div className={styles.cardTrending}>
      <div className={styles.contentTrending}>
        <h3 className={styles.trendingCategory}>
          {category && `${category}. `}Trending {country && `in ${country}`}
        </h3>
        <h2 className={styles.trendingTitle}>{title}</h2>
        <p className={styles.trendingViews}>{views}</p>
      </div>
      <button>
        <AiOutlineEllipsis />
      </button>
    </div>
  );
};
