/* eslint-disable no-unused-vars */
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google2 from '../../../images/google2.png';
import './SocialLogin.css';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
 
    if (user) {
        navigate('/');
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}  className='googleSignIn'> <img width={'30px'} src={google2} alt="" /> Sign in with Google</button>
        </div>
    );
};

export default SocialLogin;