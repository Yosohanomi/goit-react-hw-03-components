export const FriendListItem = ({friends}) => {
    return (
        <ul>
            {
                friends.map(element => {
                    return <li key={element.id}>
                        <span>{`Is online: ${String(element.isOnline)}`}</span>
                        <img src={element.avatar} alt={element.name} width="48" />
                        <p>{element.name}</p>
                    </li>
                })
            }
        </ul>
    )
}