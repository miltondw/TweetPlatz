import { UseApi } from "../../hooks/useApi";
import Loading from "../Loading";
import { PublishTweet } from "../PublishTweet";
import { Tweet } from "../Tweet";
import styles from "./styles.module.scss";

export default function Timeline() {
  const URL = import.meta.env.VITE_API;
  const { data, error, loading } = UseApi(URL);
  error ?? console.log(error, "Error tweet");
  return (
    <div className={styles.timeline}>
      <PublishTweet />
      {data &&
        data.map((tweet) => (
          <Tweet
            key={`${tweet.quote}-${Math.round(Math.random() * 100)}`}
            fullName={tweet.author}
            username={tweet.author.split(" ")[0]}
            profilePic="https://picsum.photos/400">
            <p>{tweet.quote}</p>
            <img src="https://picsum.photos/501" alt="" />
          </Tweet>
        ))}
      {loading && <Loading text="tweets" />}
    </div>
  );
}
