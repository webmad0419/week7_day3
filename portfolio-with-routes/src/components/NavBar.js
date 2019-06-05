import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <nav className="nav-style">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><NavLink to="/about" activeStyle={{ color: 'red', textTransform: 'uppercase' }}>About</NavLink></li>
                <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>
            </ul>
        </nav>
    )
}

export default navbar;