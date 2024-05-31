import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaLinkedin,
	FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import "./Footer.css"

export default function Footer() {
	return (
		<footer className="w-[100vw] pt-4 mt-auto">
			<div className="bg-custom-darkestGreen mx-auto grid grid-cols-3 items-start py-9">
				<Link
					to={"/"}
					className={`${style.title} mb-4`}>
					fantasy ChasS
				</Link>
				<div className="flex gap-4 mb-4">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer">
						<FaFacebook className="text-white" />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer">
						<FaInstagram className="text-white" />
					</a>
					<a
						href="https://youtube.com"
						target="_blank"
						rel="noopener noreferrer">
						<FaYoutube className="text-white" />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer">
						<FaLinkedin className="text-white" />
					</a>
				
                </div>
                <div className="grid grid-cols-2 text-xs gap-2">
                    <h5>Privacy Notice</h5>
                    <h5>Terms of Service</h5>
                    <h5>Cookie Policy</h5>
                    <h5>About Us</h5>
                    <h5>Disclaimer</h5>
                    <h5>Support</h5>
                    <h5>Contact Us</h5>
                    <h5>Accessibility</h5>

                </div>

			</div>
				<p className="text-white w-full bg-black h-full text-center font-thin text-xs p-2">
					Copyright © 2024 Fantasy Chass. All rights reserved.
				</p>
		</footer>
	);
}
