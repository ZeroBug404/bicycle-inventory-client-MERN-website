/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password)
    }

    const from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }

    const onSubmit = data => console.log(data);

    const navigateRegister = () => {
        navigate('/register')
    }

    return (
        <div className="text-center my-5">
        <h2 className="my-4">Please Login</h2>
        <form className="container" onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="Email" required/>
            <br />
            <br />
            <input type="password" name="password" placeholder="Password" required/>
            <br />
            <br />
            <input type="submit" placeholder=''/>
            <br />
            <br />
        </form>
        <p>Don't have an account? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

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

export default Login;