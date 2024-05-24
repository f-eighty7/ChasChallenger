import Profession from "./Profession";
import Species from "./Species";

type Character = {
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
    // id
  };

/*
        name: "string",
        age: 0,
        gender: "string",
        level: 0,
        healthPoints: 0,
        strength: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        constitution: 0,
        charisma: 0,
        favourite: true,
        imageURL: "http// någonting string",
        backstory: "string",
        profession: "string",
        species: "string",
*/

  export default Character;
  