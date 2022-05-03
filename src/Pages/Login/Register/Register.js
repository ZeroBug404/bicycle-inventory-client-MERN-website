/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    
    const onSubmit = data => console.log(data);

    const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      createUserWithEmailAndPassword(email, password)
  }

  if (user) {
    navigate('/home')
  }

    const navigateLogin = () => {
        navigate('/login');
    }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="text-center my-5">
        <h2 className="my-4">Please Register</h2>
        <form className="container" onSubmit={handleRegister}>
            <input type="text" name="name" placeholder="Name" required/>
            <br />
            <br />
            <input type="email" name="email" placeholder="Email" required/>
            <br />
            <br />
            <input type="password" name="password" placeholder="Password" required/>
            <br />
            <br />
            <input type="submit" />
            <br />
            <br />
        </form>
        <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

        <div className="or-section">
          <div></div>
          <p>or</p>
          <div></div>
        </div>

        <div>
          <SocialLogin></SocialLogin>
        </div>
    </div>
  );
};

export default Register;
