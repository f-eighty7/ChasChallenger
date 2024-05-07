import axios from 'axios';

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from "./Navbar.module.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClicked = (item) => {
        setActiveItem(item === activeItem ? null : item);
    }
    // const classNameFunction = ({ isActive }) => (isActive ? "active_link" : "");
    
    return (
        <nav>
                    <Link to={'/'}
                    className={style.title}>Master Chass</Link>
                <div
                className={style.menu}
                onClick={() => {
                    setMenuOpen(!menuOpen)
                }}
                >
                <span></span>
                <span></span>
                <span></span>
                </div>
            <ul 
            className={`${menuOpen ? style.open : ''}`}
           >
                <li>
                    <NavLink 
                        to={'/welcome'}
                        onClick={() => handleItemClicked('welcome')}
                        className={`${activeItem === 'welcome' ? style['active'] : ''}`}>Welcome</NavLink>
                </li>
                <li>
                    <NavLink 

                        to={'/login'}
                        onClick={() => handleItemClicked('login')}
                        className={`${activeItem === 'login' ? style['active'] : ''}`}>Login</NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/characters'}
                        onClick={() => handleItemClicked('characters')}
                        className={`${activeItem === 'characters' ? style['active'] : ''}`}>Characters</NavLink>

                </li>
                <li>
                    <NavLink 
                        to={'/stories'}
                        onClick={() => handleItemClicked('stories')}
                        className={`${activeItem === 'stories' ? style['active'] : ''}`}>Stories</NavLink>
                    
                </li>


            </ul>
        </nav>
    )
}


export default Navbar;