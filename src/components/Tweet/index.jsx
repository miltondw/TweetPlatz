import React, { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { TbUpload } from "react-icons/tb";
import styles from "./styles.module.scss";

export const Tweet = ({
  fullName,
  username,
  profilePic = "https://picsum.photos/100",
  children,
}) => {
  const [likes, setLikes] = useState([false, 7]);
  const [comments, setComments] = useState(10);
  const [rt, setRt] = useState([false, 12]);
  const handleLike = () => {
    if (likes[0]) {
      setLikes([false, likes[1] - 1]);
    } else {
      setLikes([true, likes[1] + 1]);
    }
  };
  const handleRt = () => {
    if (rt[0]) {
      setRt([false, rt[1] - 1]);
    } else {
      setRt([true, rt[1] + 1]);
    }
  };
  return (
    <article className={styles.tweet}>
      <div className={styles.header}>
        <img
          src={profilePic}
          alt="Profile pic"
          className={`${styles.profilePic} img-default`}
        />
        <div className={styles.container}>
          <span className={styles.fullName}>{fullName}</span>
          <span className={styles.gray}>@{username}</span>
          <span className={styles.gray}>20h</span>
          <button>
            <AiOutlineEllipsis />
          </button>
        </div>
      </div>
      <div className={styles.children}>{children}</div>
      <div className={styles.footer}>
        <ul className={styles.list}>
          <li>
            <button>
              <FaRegComment />
            </button>
            {comments}
          </li>
          <li>
            <button onClick={handleRt}>
              <FaRetweet />
            </button>
            {rt[1]}
          </li>
          <li>
            <button onClick={handleLike}>
              {!likes[0] ? <BsSuitHeart /> : <BsSuitHeartFill />}
            </button>
            {likes[1]}
          </li>
          <li>
            <button>
              <TbUpload />
            </button>
          </li>
        </ul>
      </div>
    </article>
  );
};
