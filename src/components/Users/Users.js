import React from 'react';
import useUsers from './../../hook/useUsers';
import SingleUsers from './../SingleUsers/SingleUsers';

const Users = () => {
    const allUsers = useUsers("https://jsonplaceholder.typicode.com/users");
    return (
        <div className="container">
            <div className='row'>
                <h2>Total User : {allUsers.length}</h2>
                {
                    allUsers?.map(user => <SingleUsers user ={user} key={user.id}></SingleUsers>)
                }
            </div>
        </div>
    );
};

export default Users;