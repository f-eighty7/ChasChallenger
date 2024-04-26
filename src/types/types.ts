export interface Register {
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Story {
  id: string;
  name: string;
  summery: string;
}

export interface StoryItemProps {
  story: Story;
  onSelected: (id: string) => void;
}
export interface StoryId {
  id: string;
}

export interface Character {
  name: string;
  age: number;
  gender: string;
  level: number;
  healthPoints: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  constitution: number;
  charisma: number;
  backstory: string;
  professionName: string;
  speciesName: string;
}
