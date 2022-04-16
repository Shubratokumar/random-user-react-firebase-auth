import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from './../../hook/useUsers';
import SingleUsers from './../SingleUsers/SingleUsers';

const UserDetails = () => {
    const { userId } = useParams();
    const allUsers = useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    console.log(allUsers[0])

    return (
        <div className='container'>
            <h2>My ID is : {userId}</h2>
            <SingleUsers user={allUsers[0]} key={userId}>
                {
                    {email:allUsers[0]?.email, phone:allUsers[0]?.phone}
                }
            </SingleUsers>
        </div>
    );
};

export default UserDetails;