import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import { signInWithGoogle } from './LoginManager';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(data => {
            setLoggedInUser(data);
            history.replace(from);
        })
        .catch(err => console.error(err))
    }

    return (
        <Container className="login-container text-center">
            <Link to="/">
                <img className="logo mt-5 mb-5" src="https://i.imgur.com/Aq9mvuW.png" alt=""/>
            </Link>
            <div className="login">
                <h3 className="login-title mb-4">Login with</h3>
                <button onClick={handleGoogleSignIn} className="login-btn mb-2">
                    <img className="google-icon" src="https://img.icons8.com/color/48/000000/google-logo.png" alt=""/>
                    Continue with Google
                </button>
                <p>
                    Don’t have an account? <span className="login-special">Create an account</span>
                </p>
            </div>
        </Container>
    );
};

export default Login;