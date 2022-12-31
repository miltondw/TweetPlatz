import { AsideTrending } from "../../Organism/AsideTrending";
import { Navbar } from "../../Molecules/Navbar";
import Timeline from "../../Organism/Timeline";
import styles from "./styles.module.scss";
import { TweetsContext } from "../../../context/TweetsContext";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <TweetsContext>
        <Timeline />
      </TweetsContext>
      <AsideTrending />
    </div>
  );
};
