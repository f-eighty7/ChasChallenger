import { MouseEventHandler } from "react";
import style from "./CharactersRoute.module.css";
import { Link } from "react-router-dom";

export type Character = {
  name: string;
  age: number;
  gender: string; //should be enum/string literal?
  class: string; //should be enum/string literal?
  level: number;
  hitpoints: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  constitution: number;
  charisma: number;
  backstory: string;
  professionName: null; //should be enum/string literal?
  speciesName: null; //should be enum/string literal?
  //favorite: bool;
  //image? (url)
};

const handleCharacterClicked = (character: Character) => {
  //TODO: set selected character and move on to next route in flow
  console.log(character.name, "selected!");
  console.warn("Not yet implemented");
};

const handleDeleteCharacterClicked = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.stopPropagation();

  console.warn("Not yet implemented");
};

const handleFavoriteCharacterClicked = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.stopPropagation();

  console.warn("Not yet implemented");
};

export const CharactersRoute = () => {
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
      professionName: null,
      speciesName: null,
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
      professionName: null,
      speciesName: null,
    },
  ]; //TODO: get from server

  return (
    <main className={style.page}>
      <h1>Your Characters</h1>
      <ul className={style.charactersList}>
        {characters.map((character, index) => {
          return (
            <li
              className={style.character}
              key={character.name + index}
              onClick={() => handleCharacterClicked(character)}
            >
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
                  onClick={handleDeleteCharacterClicked}
                >
                  <i className={"fa fa-trash"} />
                </button>
                <button
                  type="button"
                  title="Toggle if character is favorited"
                  onClick={handleFavoriteCharacterClicked}
                >
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
      <Link className={style.link} relative="path" to="new">
        New
      </Link>
    </main>
  );
};
