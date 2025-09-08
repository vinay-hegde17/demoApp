import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

function UserData() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const data = await fetchUsers();
            setUsers(data);
        };
        loadUsers();
    }, []);

    return (
        <div>
            <h3>Fetched Users data:</h3>
            <ul style={{listStyle:'none'}}>
                {users.map(user => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserData