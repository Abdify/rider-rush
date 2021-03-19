import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./Nav.css";

const Nav = () => {
    const [currentUser] = useContext(userContext);
    return (
        <nav>
            <div className="logo">{/* <img src="logo.png" alt="logo" /> */}</div>

            <ul className="nav-items">
                <Link to="/" className="link-text">
                    <li>Home</li>
                </Link>
                <Link to="/" className="link-text">
                    <li>Destination</li>
                </Link>

                <li>Blog</li>
                <li>Contact</li>
                {
                    currentUser.email? currentUser.displayName : <Link to="/login">
                    <button className="btn login-btn">Log In</button>
                </Link>

                }
            </ul>
        </nav>
    );
};

export default Nav;
