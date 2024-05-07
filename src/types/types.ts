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
export interface StoryText {
  text: string;
}

export interface ResumeStory {
  id: string;
  name: string;
  summery: string;
}
export interface ResumeStoryProps {
  resumeStory: ResumeStory;
}

export interface StoryMessages {
  text: string;
  sender: string;
}
export interface StoryMessageItemProps {
  storyMessages: StoryMessages;
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
