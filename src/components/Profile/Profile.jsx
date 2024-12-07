import styles from "./profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return <div className={styles.wrapper}>
        <div className={styles.person}>
            <img
                src={image}
                alt="User avatar"
                className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.personText}>@{tag}</p>
            <p className={styles.personText}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.followers}>
                <span className={styles.statsText}>Followers</span>
                <span className={styles.statsNum}>{stats.followers}</span>
            </li>
            <li className={styles.views}>
                <span className={styles.statsText}>Views</span>
                <span className={styles.statsNum}>{stats.views}</span>
            </li>
            <li className={styles.likes}> 
                <span className={styles.statsText}>Likes</span>
                <span className={styles.statsNum}>{stats.likes}</span>
            </li>
        </ul>
    </div>;

}

export default Profile;





