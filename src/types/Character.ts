import Profession from "./Profession";
import Species from "./Species";

type Character = {
    name: string;
    age: number;
    gender: string;
    // class: string; //enum
    level: number;
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
  };

  export default Character;
  