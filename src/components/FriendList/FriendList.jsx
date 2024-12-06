import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./friendList.module.css";





const FriendList = ({friends}) => {
    
    console.log(friends);
    
    
    return <ul>
        {friends.map(friend => (
          <li key={friend.id}>
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