import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className="uk-navbar-container" uk-navbar='true'>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li>
                        <Link to="/games">Игры</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
