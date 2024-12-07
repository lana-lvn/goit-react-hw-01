import clsx from "clsx";
import styles from "./friendListItem.module.css";

const FriendListItem = ({ avatar, name, status }) => {
    
    return <div className={styles.itemWrap}>
        <img className={styles.avatar} src={avatar} alt="Avatar" />
        <p className={styles.name}>{name}</p>
        {/* <p className={styles.status}>{status}</p> */}
        <p className={clsx(styles.isOnline, status === "Online" ? styles.green : styles.red)}>{status}</p>
    </div>;
}

export default FriendListItem;