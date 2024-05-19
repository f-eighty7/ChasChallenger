import React, { useState } from "react";
import ButtonOne from "./ButtonOne";
import { Link, useNavigate } from "react-router-dom";

function CharacterCard({ character, onDelete, onFavorite, onSelect }) {
	return (
		<li
			className="flex flex-col justify-center h-full mb-12 items-center border rounded-xl hover:bg-radial-gradient cursor-pointer"
			onClick={() => onSelect(character)}>
			<div className="flex justify-center items-center text-center w-[45%] gap-3 py-2">
				<button
					type="button"
					title="Delete character"
					onClick={(e) => {
						e.stopPropagation();
						// show stats
					}}>
					<img
						src="src/Images/info.png"
						alt="Trash delete character"
					/>
				</button>

				<button
					type="button"
					title="Toggle if character is favorite"
					onClick={(e) => {
						e.stopPropagation();
						onFavorite(character);
					}}>
					<img
						src="src/Images/favorite.png"
						alt="Trash delete character"
					/>
				</button>

				<button
					type="button"
					title="Delete character"
					onClick={(e) => {
						e.stopPropagation();
						onDelete(character);
					}}>
					<img
						// className="w-[40%] border"
						src="src/Images/trash.png"
						alt="Trash delete character"
					/>
				</button>
			</div>

			<div className="p-3 pt-0 w-[50%]">
				<img
					src={character.image || "/images/defaultCharacterIcon.png"}
					alt=""
					className="w-52 mt-2 p-0"
				/>
				<h2
					className="text-2xl text-center py-5"
					style={{
						fontFamily: '"Cinzel Decorative", serif',
						margin: "0",
						fontWeight: "600",
						textShadow: "4px 4px 6px rgba(0, 0, 0, 0.8)",
					}}>
					{character.name}
				</h2>
			</div>

			{/* 
			<div>
				<button></button>

				<p>{character.class}</p>
				<p>lvl {character.level}</p>
				<p>{character.hitpoints} hp</p>
			</div> */}
		</li>
	);
}

export default CharacterCard;
