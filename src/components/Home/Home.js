import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from './../../hook/useUsers';
import SingleUsers from './../SingleUsers/SingleUsers';

const Home = () => {

    const usersData = useUsers("https://jsonplaceholder.typicode.com/users");

    if(usersData.length){
        usersData.length = 4;
    }
    return (
        <div className='container'>
            <h2>User available :{usersData.length}.</h2>
            <div className='row'>
                {
                    usersData?.map(user => <SingleUsers user= {user} key={user.id}></SingleUsers>)
                }
            </div>
            <Link to="/users" className='text-decoration-none'>Load More...</Link>
        </div>
    );
};

export default Home;