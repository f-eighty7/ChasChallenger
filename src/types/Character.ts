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
    professionName: null; //should be enum/string literal?
    speciesName: null; //should be enum/string literal?
    //favorite: bool;
    //image? (url)
  };

  export default Character;
  