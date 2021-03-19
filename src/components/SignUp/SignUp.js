import firebase from "firebase/app";
import React, { useContext, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";
import { auth } from "../../firebase";
import "../LogIn/LogIn.css";

const SignUp = () => {
    const displayNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [error, setError] = useState();
    const [currentUser, setCurrentUser] = useContext(userContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/go/bus" } };

    function handleLogIn(e) {
        e.preventDefault();
        const displayName = displayNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        displayName && email && password ?
        password === confirmPassword ?
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                auth.currentUser.updateProfile({
                    displayName,
                });
                const newUser = {displayName, email};
                setCurrentUser(newUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                setError(errorMessage);
            })
            :
            setError("Passwords not matched!")
            :
            setError("Provide all information");

    }
    function googleLogIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                setCurrentUser(user);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorMessage = error.message;
                setError(errorMessage);
            });
    }
    

    return (
        <div className="log-in">
            <LogInForm />
            <span className="divider">Or</span>
            <button className="btn other-log-in-btn" onClick={googleLogIn}>
                Continue with Google
            </button>
        </div>
    );
    function LogInForm() {
        return (
            <form onSubmit={handleLogIn} className="log-in-form">
                <h2>Create an account</h2>
                {error && <p className="error">{error}</p>}
                <input type="text" placeholder="name" required ref={displayNameRef} />
                <input
                    ref={emailRef}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    placeholder="Email"
                    onInvalid={(e) => e.target.setCustomValidity("Enter your valid email here")}
                />
                <input
                    type="password"
                    ref={passwordRef}
                    pattern="(?=.*\d)(?=.*[a-z]).{6,}"
                    required
                    placeholder="password"
                    onInvalid={(e) =>
                        e.target.setCustomValidity(
                            "Passwords without numbers and less than 6 characters are not passwords!"
                        )
                    }
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    ref={confirmPasswordRef}
                    required
                />

                <button className="btn submit-btn">Create an account</button>
                <small>
                    Already have an account?{" "}
                    <Link to="/login" className="link-text">
                        Log in here
                    </Link>
                </small>
            </form>
        );
    }
};

export default SignUp;