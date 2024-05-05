import axios from 'axios';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
                <li>
                    <Link to={'/characters'}>Characters</Link>

                </li>
                <li>
                    <Link to='/stories'>Stories</Link>
                    
                </li>


            </ul>
        </nav>
    )
}


export default Navbar;