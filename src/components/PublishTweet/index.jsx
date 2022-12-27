import { FaImage } from "react-icons/fa";
import { HiGift } from "react-icons/hi";
import { TfiFaceSmile } from "react-icons/tfi";
import { CgOptions } from "react-icons/cg";
import { MdOutlineDateRange } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import styles from "./styles.module.scss";
import { saveLocalStorage } from "../../utils/saveLocalStorage";

export const PublishTweet = () => {
  //TODO:max 280 characters
  //* height textarea textarea
  //* funcionalidad de btns

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: "miltondw",
      tweet: e.target.tweet.value,
      name: "milton",
    };
    saveLocalStorage("my-tweets", user);
  };
  return (
    <div className={styles.publishTweet}>
      <img
        className={`${styles.profilePic} img-default`}
        src="https://picsum.photos/50"
        alt="profile pic"
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          name="tweet"
          id="tweet"
          cols="30"
          rows="10"
          placeholder="What's happening?"></textarea>
        <div className={styles.footer}>
          <ul className={styles.list}>
            <li>
              <button>
                <FaImage />
              </button>
            </li>
            <li>
              <button>
                <HiGift />
              </button>
            </li>
            <li>
              <button>
                <CgOptions />
              </button>
            </li>
            <li>
              <button>
                <TfiFaceSmile />
              </button>
            </li>
            <li>
              <button>
                <MdOutlineDateRange />
              </button>
            </li>
            <li>
              <button>
                <SiGooglemaps />
              </button>
            </li>
          </ul>
          <button className={styles.Tweetear} type="submit">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};
