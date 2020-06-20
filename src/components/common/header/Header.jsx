import React from 'react';
import {Link} from "react-router-dom";
import {NavBar} from "../index";

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <h1>eGamings</h1>
            </Link>
            <NavBar/>
        </header>
    )
};

export default Header;
