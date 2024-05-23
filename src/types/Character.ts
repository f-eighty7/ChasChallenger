import Profession from "./Profession";
import Species from "./Species";

type Character = {
    name: string;
    age: number;
    gender: string; //TODO: refactor to enum like Species.ts
    // class: string; //enum
    // level: number;
    healthpoints: number;
    strength: number;
    dexterity: number;
    intelligence: number;
    wisdom: number;
    constitution: number;
    charisma: number;
    backstory: string;
    profession: Profession;
    species: Species;
    imageUrl: string;
    isFavorite: boolean;
    // id
  };

  export default Character;
  