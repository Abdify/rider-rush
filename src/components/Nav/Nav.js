import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./Nav.css";

const Nav = () => {
    const [currentUser] = useContext(userContext);
    const [nav, setNav] = useState(false);
    return (
        <div>
            <div className={nav ? "topnav responsive" : "topnav"} onClick={() => setNav(!nav)}>
                <div className="logo"></div>
                <div className="nav-items">
                    <Link to="/" className="link-text">
                        <li>Home</li>
                    </Link>
                    <Link to="/" className="link-text">
                        <li>Destination</li>
                    </Link>
                    <Link to="/" className="link-text">
                        <li>Blog</li>
                    </Link>
                    <Link to="/" className="link-text">
                        <li>Contact</li>
                    </Link>

                    <div>
                        {currentUser.email ? (
                            <Link to="/" className="link-text">
                                {currentUser.displayName}
                            </Link>
                        ) : (
                            <Link to="/login" className="link-text">
                                <button className="btn login-btn">Log In</button>
                            </Link>
                        )}
                    </div>
                </div>
                <a href="javascript:void(0);" className="icon" onClick={() => setNav(!nav)}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </div>
        </div>
    );
};

export default Nav;
