import { CardTrending } from "../../Molecules/CardTrending";
import { Search } from "../../Atomic/Search";
import styles from "./styles.module.scss";

export const AsideTrending = () => {
  const trending = [
    { category: "sport", title: "#ORVECDK", views: "125K" },
    { title: "Festivals", views: "54.2K", country: "Colombia" },
    { category: "Tech", title: "Platzi", views: "45.2K" },
    { title: "#ANGUALRJS", views: "28.9K", country: "Venezuela" },
    { category: "Entertainment", title: "News Movies", views: "13.4K" },
  ];
  return (
    <aside className={styles.asideTrending}>
      <Search />
      <div className={styles.cardsTrending}>
        <h2 className={styles.CardTitle}>What’s happening</h2>
        {trending.map((card, index) => (
          <CardTrending
            category={card?.category}
            country={card?.country}
            title={card.title}
            views={card.views}
            key={index}
          />
        ))}
      </div>
    </aside>
  );
};
