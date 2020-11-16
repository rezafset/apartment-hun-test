import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import classes from './login.module.css';
import {UserContext} from '../../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const [userInfo, setUserInfo] = useState({
        loggedInUser: false
    });
    const [newUser, setNewUser] = useState(false);


    // Stop firebase from initializing infinite number of times
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // Set form info into state
    const handleBlur = (e) => {
        const currentUserInfo =  {...userInfo};
        currentUserInfo[e.target.name] = e.target.value;
        setUserInfo(currentUserInfo);
        console.log(currentUserInfo);
    }

    // Create Password based account
    const handleCreateAccount = () => {
        firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then( result => {
            console.log(result);
            const currentUserInfo = {...userInfo};
            currentUserInfo.loggedInUser = true;
            console.log('Account created successfully.');
            console.log(userInfo);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    // Login in password based account
    const loginPassBasedAccount = () => {
        firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((result) => {
            console.log(result);
            console.log("logged in successfully");
            const currentUserInfo = {...userInfo};
            currentUserInfo.loggedInUser = true;
            setUserInfo(currentUserInfo);
            console.log(userInfo);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

    }

    // Logout from password based account
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
    });

    // Google login
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                success: true,
            }
            setUserInfo(signedInUser);
            setLoggedInUser(signedInUser);
            // history.replace(from)
            console.log(user)
            
        }).catch(error => {
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

    // Set the DOM Structure for form
    let formContent;
    if (newUser) {
        formContent = (
            <div>
                <p>Create an Account</p>
                <input onBlur={handleBlur} type="text" placeholder="First Name" name="firstName" />
                <br/>
                <input onBlur={handleBlur} type="text" placeholder="Last Name" name="lastName" />
                <br/>
                <input onBlur={handleBlur} type="email" placeholder="Email" name="email" />
                <br/>
                <input onBlur={handleBlur} type="password" placeholder="Password" name="password" />
                <br/>
                <input onBlur={handleBlur} type="password" placeholder="Password" name="cpassword" />
                <br/>
                <button onClick={handleCreateAccount} className={classes.authenticationBtn}>Create an account</button>
            </div>
        )
    } else {
        formContent = (
            <div>
                <h4>Login</h4>
                <input onBlur={handleBlur} name="email" type="email" placeholder="Username or Email"  />
                <br/>
                <input onBlur={handleBlur} name="password" type="password" placeholder="Enter your password"  />
                <br/>
                <button onClick={loginPassBasedAccount} className={classes.authenticationBtn}>Login</button>
            </div>
        )
    }

    
    return (
        <Container>
            <div className={classes.authenticationContainer}>
                <div className={classes.formContainer}>
                    {formContent}
                    {newUser 
                        ? 
                    <p className={classes.newUserIdentifier}>Already have an account?<span onClick={() => setNewUser(!newUser)} style={{"textDecoration":"underline"}}>Login</span></p> 
                        :
                    <p className={classes.newUserIdentifier}>Don't have an account?<span onClick={() => setNewUser(!newUser)} style={{"textDecoration":"underline"}}>Create an Account</span></p>
                    }
                </div>
                <span className={classes.alternateAuthenticationDivider}>Or</span>
                <div className={classes.alternateAuth}>
                    <button onClick={handleGoogleSignIn}>Continue with Facebook</button>
                    <button>Continue with Google</button>
                </div>
            </div>
        </Container>
            
    );
};

export default Login;