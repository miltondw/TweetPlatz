import { useContext } from "react";
import { TwContext } from "../../../context/TweetsContext";
import { UseApi } from "../../../hooks/useApi";
import { RandomNumber } from "../../../utils/RandomNumber";
import Loading from "../../Atomic/Loading";
import { PublishTweet } from "../PublishTweet";
import { Tweet } from "../../Molecules/Tweet";
import styles from "./styles.module.scss";

export default function Timeline() {
  const URL = import.meta.env.VITE_API;
  const value = useContext(TwContext);

  const { data, error, loading } = UseApi(URL);
  error ?? console.log(error, "Error tweet");
  return (
    <div className={styles.timeline}>
      <PublishTweet />
      {value &&
        value.map((tweet) => (
          <Tweet
            key={`${tweet.tweet}-${RandomNumber()}`}
            fullName={tweet.name}
            username={tweet.username}
            profilePic="https://picsum.photos/400">
            <p>{tweet.tweet}</p>
            <img src="https://picsum.photos/501" alt="" />
          </Tweet>
        ))}
      {data &&
        data.map((tweet) => {
          const randomNumber = RandomNumber();
          const random = randomNumber % 2 === 0 ? true : false;

          return (
            <Tweet
              key={`${tweet.quote}-${randomNumber}`}
              fullName={tweet.author}
              username={tweet.author.split(" ")[0]}
              profilePic="https://picsum.photos/400"
              random={random}>
              <p>{tweet.quote}</p>
              {random && (
                <>
                  <img src={`https://picsum.photos/5${randomNumber}`} alt="" />
                </>
              )}
            </Tweet>
          );
        })}
      {loading && <Loading text="tweets" />}
    </div>
  );
}
