import {useState, useEffect} from 'react';
import axios from 'axios';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [newUsers, setNewUsers] = useState([]);

    const data = [
        {id: 11, name: 'Jenny Doe'},
        {id: 12, name: 'Jason Response'},
        {id: 13, name: 'Miles Tone'},
    ]



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error))

        // axios({
        //     url: 'https://jsonplaceholder.typicode.com/users',
        //     method: 'GET'
        // })
        // .then((response) => setUsers(response.data))

        // axios('https://jsonplaceholder.typicode.com/users')
        // .then((response) => setUsers(response.data))
    },[])

    const postNewUsers = () => {
        // axios.post('https://jsonplaceholder.typicode.com/posts', {data})
        // .then((response) => setNewUsers(response.data.data))

        axios({
            url: 'https://jsonplaceholder.typicode.com/postss',
            method: 'POST',
            data: {data}
        })
        .then((r) => setNewUsers(r.data.data))
        .catch((e) => console.error(e))
    }



    return (
        <div className="users">
            <h2>Users</h2>
            <button onClick={postNewUsers}>Post New Users</button>
            <div className="users-cards">
            {users.map((user) => {
                return(
                    <div className="useritem" key={user.id}>
                        <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
                        {user.name}
                    </div>
                )
            })}
            {newUsers.map((user) => {
                return(
                    <div className="useritem" key={user.id}>
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
