import FriendListItem from "../FriendListItem/FriendListItem";
import styles from  "./friendList.module.css";



const FriendList = ({friends}) => {
    
    console.log(friends);
    
    
    return <ul className={styles.list}>
        {friends.map(friend => (
            <li className={styles.listItem} key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    status={friend.isOnline ? "Online" : "Offline"}
                />
        </li>
     ))}
       
    </ul>;
}

export default FriendList;