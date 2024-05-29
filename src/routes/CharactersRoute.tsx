import style from "./CharactersRoute.module.css";
import Character from "../types/Character";
import CharacterCard from "../components/CharacterCard";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const handleDeleteCharacterClicked = async (
  element: HTMLUListElement,
  characters: Character[],
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>,
  id?: number
) => {
  //TODO: maybe disable on favorited characters
  //TODO: some sort of confirmation

  try {
    if (!id) throw "Character ID is undefined";

    /*const response =*/ await axios.delete(
      "https://chasfantasy.azurewebsites.net/api/Character/DeleteCharacter",
      {
        data: {
          id: id,
        },
      }
    );

    //Remove visually
    setCharacters([...characters.filter((character) => character.id != id)]);
  } catch (error) {
    console.error(error);
  }
};

const handleFavoriteCharacterClicked = () => {
  console.warn("Not yet implemented");
};

const getCharacters = async (): Promise<Character[] | undefined> => {
  try {
    const response = await axios.get(
      "https://chasfantasy.azurewebsites.net/api/Character/GetCharacters"
    );

    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const CharactersRoute = () => {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      setCharacters((await getCharacters()) as Character[]);
    })();
  }, []);

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
              onDelete={(element: HTMLUListElement) =>
                handleDeleteCharacterClicked(
                  element,
                  characters,
                  setCharacters,
                  character.id
                )
              }
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
