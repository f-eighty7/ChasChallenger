import axios from 'axios';

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}
                    className='title'>Master Chass</Link>
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