import style from "./CharactersRoute.module.css";
import { Link, useNavigate } from "react-router-dom";
import Character from "../types/Character";
import Profession from "../types/Profession";
import Species from "../types/Species";
import SimpleSlider from "../components/Carrousel";

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
						<li
							className={style.character}
							key={character.name + index}
							onClick={() => handleCharacterClicked(character)}>
							<div className={style.characterIdentity}>
								<img
									className={style.characterIcon}
									src="/images/defaultCharacterIcon.png" /*TODO: load actual image and have default as error*/
									alt={`${character.name}`}
								/>
								<h2>{character.name}</h2>
							</div>
							<div className={style.characterActions}>
								<button
									type="button"
									title="Delete character"
									onClick={handleDeleteCharacterClicked}>
									<i className={"fa fa-trash"} />
								</button>
								<button
									type="button"
									title="Toggle if character is favorited"
									onClick={handleFavoriteCharacterClicked}>
									<i className={"fa fa-star-o"} />
								</button>
							</div>
							<div className={style.characterInformation}>
								<p>{character.class}</p>
								<p>lvl {character.level}</p>
								<p>{character.hitpoints} hp</p>
							</div>
						</li>
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
