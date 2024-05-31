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
  summary: string;
}

export interface StoryItemProps {
  story: Story;
  onSelected: (name: string, summary: string) => void;
}
export interface StoryText {
  characterId: number | undefined;
  name: string;
  basePrompt: string;
}

export interface ResumeStory {
  id: string;
  name: string;
  summary: string;
}
export interface ResumeStoryProps {
  resumeStory: ResumeStory;
}

export interface StoryMessages {
  id: number;
  message: string;
  characterName: number | null;
  timestamp: string;
}
export interface StoryMessageItemProps {
  storyMessages: StoryMessages;
}

export interface GameSettingsPopupProps {
  trigger: boolean;
  setTrigger: (value: boolean) => void;
}
