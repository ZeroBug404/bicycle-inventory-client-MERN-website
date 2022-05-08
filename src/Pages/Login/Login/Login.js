/* eslint-disable no-unused-vars */
import React from 'react';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import {useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef(true)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    const from = location.state?.from?.pathname || "/";

    let errorElement;

    if(user){
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const onSubmit = data => console.log(data);

    const navigateRegister = () => {
        navigate('/register')
    }

    const handleResetPass = (e) => {
        const email = emailRef.current.value
       if (email) {
            sendPasswordResetEmail(email);
            toast('Check your mail to reset your password');
       }
       else{
           toast('Please enter ypur email')
       }
    }

    return (
        <div className="text-center my-5">
        <h2 className="my-4">Please Login</h2>
        <form className="container" onSubmit={handleLogin}>
            <input ref={emailRef} type="email" name="email" placeholder="Email" required/>
            <br />
            <br />
            <input type="password" name="password" placeholder="Password" required/>
            <br />
            <br />
            <input type="submit" placeholder=''/>
            <br />
            <br />
        </form>
        {errorElement}
        <p>Don't have an account? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

        <p>Forget your password? <button onClick={handleResetPass} className='btn btn-secondary'>Reset password</button></p>

        <div className="or-section">
          <div></div>
          <p>or</p>
          <div></div>
        </div>

        <div>
          <SocialLogin></SocialLogin>
        </div>
        <ToastContainer />
    </div>
    );
};

export default Login;