import React from "react";
export default function Navbar(){
    return(
        <nav class="navi">
            <img src="./public/images/logo.png" className="nav--logo" />
            <div className="nav-items">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact Us</h2>
            </div>
        </nav>
    )

}