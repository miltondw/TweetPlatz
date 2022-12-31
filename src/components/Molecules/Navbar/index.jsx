import {
  AiOutlineMail,
  AiTwotoneHome,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { BsBookmarks, BsTwitter } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiFileList3Line } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import styles from "./styles.module.scss";
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <BsTwitter />
      </span>
      <ul className={styles.list}>
        <li>
          <span>
            <AiTwotoneHome />
          </span>
          <a href="/">Home</a>
        </li>
        <li>
          <span>
            <FaHashtag />
          </span>
          <a href="/">Explore</a>
        </li>
        <li>
          <span>
            <IoMdNotificationsOutline />
          </span>
          <a href="/">Notifications</a>
        </li>
        <li>
          <span>
            <AiOutlineMail />
          </span>
          <a href="/">Messages</a>
        </li>
        <li>
          <span>
            <BsBookmarks />
          </span>
          <a href="/">Bookmarks</a>
        </li>
        <li>
          <span>
            <RiFileList3Line />
          </span>
          <a href="/">Lists</a>
        </li>
        <li>
          <span>
            <CiUser />
          </span>
          <a href="/">Profile</a>
        </li>
        <li>
          <span>
            <CgMoreO />
          </span>
          <button>More</button>
          <ul className={styles.subList}>
            <li>Topics</li>
            <li>Twitter Circle</li>
          </ul>
        </li>
        <li>
          <button className={styles.btnTw}>Tweet</button>
        </li>
      </ul>
      <div className={styles.footerData}>
        <div className={styles.footerContent}>
          <img
            className={styles.profile}
            src="https://picsum.photos/50"
            alt="profile"
          />
          <div className={styles.profileData}>
            <h1>Milton Estrada</h1>
            <p>@Miltondw01</p>
          </div>
        </div>
        <button>
          <AiOutlineEllipsis />
        </button>
      </div>
    </nav>
  );
};
