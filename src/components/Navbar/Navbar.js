import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from './../CustomLink/CustomLink';
import './Navbar.css'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';



const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        navigate('/login')
    };

    return (
        <div className='stickytop'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container shadow-sm p-3 mb-2 bg-body rounded ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/">Random User</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <CustomLink className="nav-link active" aria-current="page" to="/home">Home</CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink className="nav-link" to="/users">Users</CustomLink>
                    </li>
                    <li className="nav-item">
                        {/* <CustomLink className="nav-link" to="#" >Others</CustomLink> */}
                    </li>
                </ul>
                <div className="d-flex">
                    <span>
                        {
                            !user ? <CustomLink className="nav-link" to="/login" >
                            Login</CustomLink> : <CustomLink onClick={logout} className="nav-link" to="/login" >
                            Logout</CustomLink>
                        }                        
                    </span>
                </div>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;