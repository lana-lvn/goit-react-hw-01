const FriendListItem = ({avatar, name, status}) => {
    return <div>
        <img src="avatar" alt="Avatar" width="48" />
        <p>{name}</p>
        <p>{status}</p>
    </div>;
}

export default FriendListItem;