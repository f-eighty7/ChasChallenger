import axios from 'axios';

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from "./Navbar.module.css";
import ButtonOne from './ButtonOne';
import { Button } from '@material-tailwind/react';
import { FaUser } from "react-icons/fa";


function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeItem, setActiveItem] = useState(null);

    const handleItemClicked = (item) => {
        
        if (item === activeItem) {
            return;
        }
		setActiveItem(item === activeItem ? null : item);
		setMenuOpen(false);
	};
	return (
		<nav>
			<Link
				to={"/"}
				className={style.title}>
				fantasy ChasS
			</Link>
			<div
				className={style.menu}
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul className={` ${menuOpen ? style.open : ""}`}>
				<li>
					<NavLink
						to={"/"}
						onClick={() => handleItemClicked("howToPlay")}
						className={`${activeItem === "howToPlay" ? style["active"] : ""}`}>
						How to Play
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/"}
						onClick={() => handleItemClicked("news")}
						className={`${activeItem === "news" ? style["active"] : ""}`}>
						News
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/about"}
						onClick={() => handleItemClicked("about")}
						className={`${activeItem === "about" ? style["active"] : ""}`}>
						About
					</NavLink>
				</li>
				{/* <li>
					<NavLink
						to={"/characters"}
						onClick={() => handleItemClicked("characters")}
						className={`${activeItem === "characters" ? style["active"] : ""}`}>
						Characters
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/stories"}
						onClick={() => handleItemClicked("stories")}
						className={`${activeItem === "stories" ? style["active"] : ""}`}>
						Stories
					</NavLink>
				</li> */}
				<li>
					<NavLink
						to={"/login"}
						onClick={() => handleItemClicked("login")}
						className={`${activeItem === "login" ? style["active"] : ""}`}>
						Log in
					</NavLink>
				</li>
				<li>
                    <ButtonOne
                        buttonText={"Play Now!"} />
				</li>
			</ul>
		</nav>
	);
}


export default Navbar;