import styles from "./profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return <div className="wrapper">
        <div className="person">
            <img
                src={image}
                alt="User avatar"
                className="avatar"
            />
            <p className="name">{name}</p>
            <p className="person-text">@{tag}</p>
            <p className="person-text">{location}</p>
        </div>

        <ul className="stats">
            <li className="stats-item">
                <span className="stats-text">Followers</span>
                <span className="stats-num">{stats.followers}</span>
            </li>
            <li className="stats-item">
                <span className="stats-num">Views</span>
                <span>{stats.views}</span>
            </li>
            <li className="stats-item"> 
                <span className="stats-num">Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    </div>;

}

export default Profile;





