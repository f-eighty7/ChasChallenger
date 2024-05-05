import axios from 'axios';

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav>
                    <Link to={'/'}
                    className='title'>Master Chass</Link>
                <div
                className='menu'
                onClick={() => {
                    setMenuOpen(!menuOpen)
                }}
                >
                <span></span>
                <span></span>
                <span></span>
                </div>
            <ul 
            className={menuOpen ? "open" : ""}
           >
                <li>
                    <NavLink to={'/welcome'}>Welcome</NavLink>
                </li>
                <li>
                    <NavLink to={'/login'}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={'/characters'}>Characters</NavLink>

                </li>
                <li>
                    <NavLink to='/stories'>Stories</NavLink>
                    
                </li>


            </ul>
        </nav>
    )
}


export default Navbar;