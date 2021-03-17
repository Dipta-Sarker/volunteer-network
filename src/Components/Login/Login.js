import React, { useContext } from 'react';
import img from "../../logos/Group 1329.png";
import Css from './Login.css';
import image from '../../logos/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const history =useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const signInGoogle=() =>{
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    const{displayName,email}= result.user;
    const signInfo ={name:displayName,email}
    setLoggedInUser(signInfo)
    history.replace(from);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }

    return (
        <div className="login">
            <div className="login-part">
                <img src={img} alt="img"/>
                <div className="login-area">
                    <div className="google">
                        <h4>Login with</h4>
                        <button onClick={signInGoogle}><img src={image} alt="Google"/>Continue With Google</button>
                        <p>
                            Don't have an account?
                            <Link to="#">Create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;