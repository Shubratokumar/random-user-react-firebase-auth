import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState(false);
  const [confirmError, setConfirmError] = useState('');

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const [loginUser, loginLoading, loginError] = useAuthState(auth);

  //   for create user
  const [
      createUserWithEmailAndPassword, 
      createUser,
      createError
    ] =    useCreateUserWithEmailAndPassword(auth);
    if(createUser){
        // success message
    }

    // for login
    const [
        signInWithEmailAndPassword,
        user
      ] = useSignInWithEmailAndPassword(auth);
    

  const handleFormInput = (event) => {
    // console.log(event.target.value);
    userInfo[event.target.name] = event.target.value;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();   

    if(!login){
        if(userInfo.password !== userInfo.confirmPass){
            setConfirmError('Confirm password does not match with password !!!');
            return;
        }
        setConfirmError('')
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    else{
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    // console.log(userInfo);
  };
    const navigate = useNavigate();
    const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if(loginUser){
    navigate(from, { replace: true });
  }

  return (
    <div className="container w-50 mx-auto my-5">
      <h2 className="mt-2">{login ? "Please Login" : "Please Register"}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onBlur={(event) => {
              handleFormInput(event);
            }}
            name="email"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onBlur={(event) => {
              handleFormInput(event);
            }}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        {!login && (
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              onBlur={(event) => {
                handleFormInput(event);
              }}
              name="confirmPass"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        )}

        <div className="mb-3 form-check">
          <input
            onChange={() => setLogin(!login)}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            {!login ? "Already register? Login" : "New here? Register"}
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          {login ? "Login" : "Register"}
        </button>
      </form>
      <p className='text-danger mt-2'>{confirmError}</p>
      {
          createError && <p className='text-danger mt-2'>{createError}</p>
      }
      {
          createUser && <p className='text-success mt-2'>User created successfully.</p>
      }
      {
          user && <p className='text-success mt-2'>User Login Successfully.</p>
      }
    </div>
  );
};

export default Login;
