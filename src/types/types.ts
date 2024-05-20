import React from "react";

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
  name: string;
  summary: string;
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
  text: string;
  sender: string;
}
export interface StoryMessageItemProps {
  storyMessages: StoryMessages;
}

export interface GameSettingsPopupProps {
  trigger: boolean;
  setTrigger: (value: boolean) => void;
  children: React.ReactNode;
}