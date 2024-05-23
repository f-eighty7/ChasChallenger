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
      level: 1,
      healthpoints: 10,
      strength: 10,
      dexterity: 10,
      intelligence: 10,
      wisdom: 10,
      constitution: 10,
      charisma: 10,
      backstory: "Bondafan",
      profession: Profession.profession1,
      species: Species.human,
      imageUrl: "src/Images/catA.png",
      isFavorite: false,
    },
    {
      name: "Bar",
      age: 30,
      gender: "female",
      level: 5,
      healthpoints: 10,
      strength: 10,
      dexterity: 10,
      intelligence: 10,
      wisdom: 10,
      constitution: 10,
      charisma: 10,
      backstory: "Arbetslös",
      profession: Profession.profession2,
      species: Species.human,
      imageUrl: "src/Images/fada.png",
      isFavorite: false,
    },
  ]; //TODO: get from server

  const handleCharacterClicked = (character: Character) => {
    //TODO: set selected character and move on to next route in flow
    console.log(character.name, "selected!");

    navigate("/adventure", { replace: true });
  };

  return (
    <main>
      <h1>Your Characters</h1>
      <ul>
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
      <Link className={style.link} relative="path" to="new">
        New
      </Link>
    </main>
  );
};
