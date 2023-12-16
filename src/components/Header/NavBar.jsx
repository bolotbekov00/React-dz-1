import React from "react";
import "./NavBar.css"
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/cardBlock">Card pages</NavLink>
                </li>
                <li>
                    <NavLink to="/createBlock">Create pages</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;