import React from "react";
import  { Link } from "react-router-dom"
import "./Pages.css"

const Navbar = () => {
    return (
        <div>
            <ul className="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/engineering">Engineering Projects</a></li>
                <li><a href="/programming">Programming Projects</a></li>
                <li><a href="/networking">Networking and Operating System Projects</a></li>
            </ul>
        </div>
    );
}
export default Navbar;