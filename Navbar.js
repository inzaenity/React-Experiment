import React from "react"
import logo from '../images/logo192.png'

function NavBar() {
    return (
        <nav>
            <img src = {logo} alt="Logo" />;
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>

    )
}

export default NavBar