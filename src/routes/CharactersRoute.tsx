import style from "./CharactersRoute.module.css";
import { Link, useNavigate } from "react-router-dom";
import Character from "../types/Character";
import Profession from "../types/Profession";
import Species from "../types/Species";
import CharacterCard from "../components/CharacterCard";

const handleDeleteCharacterClicked = (
	event: React.MouseEvent<HTMLButtonElement>
) => {
	event.stopPropagation();

	//maybe disable on favorited characters
	//have some sort of confirmation

	console.warn("Not yet implemented");
};

const handleFavoriteCharacterClicked = (
	event: React.MouseEvent<HTMLButtonElement>
) => {
	event.stopPropagation();

	console.warn("Not yet implemented");
};

export const CharactersRoute = () => {
	const navigate = useNavigate();

	const characters: Character[] = [
		{
			name: "Foo",
			age: 26,
			gender: "male",
			class: "Wizard",
			level: 1,
			hitpoints: 10,
			strength: 10,
			dexterity: 10,
			intelligence: 10,
			wisdom: 10,
			constitution: 10,
			charisma: 10,
			backstory: "Bondafan",
			profession: Profession.profression1,
			species: Species.human,
			image: "src/Images/catA.png",
		},
		{
			name: "Bar",
			age: 30,
			gender: "female",
			class: "Rogue",
			level: 5,
			hitpoints: 10,
			strength: 10,
			dexterity: 10,
			intelligence: 10,
			wisdom: 10,
			constitution: 10,
			charisma: 10,
			backstory: "Arbetslös",
			profession: Profession.profression2,
			species: Species.goblin,
			image: "src/Images/fada.png",
		},
	]; //TODO: get from server

	const handleCharacterClicked = (character: Character) => {
		//TODO: set selected character and move on to next route in flow
		console.log(character.name, "selected!");

		navigate("/adventure", { replace: true });
	};

	return (
		<main className={style.page}>
			<h1>Your Characters</h1>
			<ul className={style.charactersList}>
				{characters.map((character, index) => {
					return (
						<CharacterCard
							key={character.name + index}
							character={character}
							onDelete={handleDeleteCharacterClicked}
							onFavorite={handleFavoriteCharacterClicked}
							onSelect={handleCharacterClicked}
						/>
					);
				})}
			</ul>
			<Link
				className={style.link}
				relative="path"
				to="new">
				New
			</Link>
		</main>
	);
};

/*
import { Link } from "react-router-dom";

export const CharactersRoute = () => {
  return (
    <main>
      <h1 style={{ padding: "1rem", marginTop: "5rem", marginBottom: "3rem" }}>
        Characters
      </h1>
      <Link to="/createcharacter">
        <button>Create character</button>
      </Link>{" "}
      <br />
      <Link to="/selectcharacter">
        <button>Select character</button>
      </Link>
      <Link to="/login" style={{ padding: "0.5rem", margin: "1rem" }}>
        Back
      </Link>
    </main>
  );
};
*/
