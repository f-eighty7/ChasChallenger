import React from "react";

function CharacterStatsContainer({ character }) {
	return (
		<div className="p-4 w-96 m-0">
			<h2 className="text-2xl font-bold mb-2 bg-gray-900 px-4 py-2 rounded-full ">
				Stats
			</h2>
			<div className=" bg-gray-900 px-4 py-2 rounded-xl ">
				<p>Age: {character.age}</p>
				<p>Gender: {character.gender}</p>
				<p>Class: {character.class}</p>
				<p>Strength: {character.strength}</p>
				<p>Dexterity: {character.dexterity}</p>
				<p>Intelligence: {character.intelligence}</p>
				<p>Wisdom: {character.wisdom}</p>
				<p>Constitution: {character.constitution}</p>
				<p>Charisma: {character.charisma}</p>
				<p>Backstory: {character.backstory}</p>
				<p>Profession: {character.profession}</p>
				<p>Species: {character.species}</p>
			</div>
		</div>
	);
}

export default CharacterStatsContainer;
