import Profession from "./Profession";
import Species from "./Species";

type Character = {
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
	profession: Profession;
	species: Species;
	image: String;
	//favorite: bool;
	// image? (url)
	//id?
};

  export default Character;
  