import Profession from "./Profession";
import Species from "./Species";

type Character = {
    id?: number;
    name: string;
    age: number;
    gender: string; //TODO: refactor to enum like Species.ts
    // class: string; //enum
    healthPoints: number;
    strength: number;
    dexterity: number;
    intelligence: number;
    wisdom: number;
    constitution: number;
    charisma: number;
    backstory: string;
    profession: Profession;
    species: Species;
    imageURL: string;
    favourite: boolean;
  };

  export default Character;
  