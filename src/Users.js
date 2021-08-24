import {useState, useEffect} from 'react';
import axios from 'axios';

const Users = () => {

    const [users, setUsers] = useState([]);


    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => setUsers(response.data))
    }



    return (
        <div className="users">
            <h2>Users</h2>
            <button onClick={getUsers}>Get Users</button>
            <div className="users-cards">
            {users.map((user) => {
                return(
                    <div className="useritem">
                        <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
                        {user.name}
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Users;
