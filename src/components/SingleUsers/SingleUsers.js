import React from 'react';
import { Link } from 'react-router-dom';

const SingleUsers = ({user, children}) => {
    const {name, id, username} = user || {};
    const {email, phone} = children || {};

    return (
        <div className='col-4 gy-1'>
            <div className="card shadow p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">Username : {username}</p>                   
                    <p className="card-text">User ID : {id}</p>
                    {
                        email ? 
                        <>
                            <p className="card-text">Email : {email}</p>
                            <p className="card-text">Phone : {phone}</p>
                        </> 
                        : ""
                    }
                    
                    {
                        email ? "": 
                            <Link to= {`/users/${id}`}  className="card-link text-decoration-none">User Details</Link>                 
                    }
                    {/* <Link to= {`/users/${id}`}  className="card-link text-decoration-none">User Details</Link> */}
                </div>
            </div>
        </div>
    );
};

export default SingleUsers;