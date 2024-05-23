import React, { useState } from "react";
import ButtonOne from "./ButtonOne";
import { Link, useNavigate } from "react-router-dom";
import CharacterStatsContainer from "./CharacterStats";

function CharacterCard({ character, onDelete, onFavorite, onSelect }) {
	const [showStats, setShowStats] = useState(false);

	const toggleStats = () => {
		setShowStats(!showStats);
	};

	const showCharacterStats = (character) => {
		console.log("Stats:", character);
		toggleStats();
	};

	return (
		<li
			className="flex flex-col justify-center h-full mb-12 items-center border rounded-xl  hover:border-lime-500  hover:border-2 cursor-pointer"
			onClick={() => onSelect(character)}>
			<div className="flex justify-center items-center text-center w-[45%] gap-3 py-2">
				<button
					className="opacity-60 hover:opacity-100"
					type="button"
					title="Delete character"
					onClick={(e) => {
						e.stopPropagation();
						showCharacterStats(character);
					}}>
					<img
						src="src/Images/info.png"
						alt="Trash delete character"
					/>
				</button>

				<button
					className="opacity-60 hover:opacity-100"
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
					className="opacity-60 hover:opacity-100"
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

			<div className="p-3 pt-0 flex flex-col justify-center items-center text-center">
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
				{showStats && <CharacterStatsContainer character={character} />}
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
