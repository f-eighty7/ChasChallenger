import { getStory } from "../api/storiesApi";
import { createStoryId } from "../api/saveId";
import { useState, useEffect } from "react";
import { Story, StoryId } from "../types/types";
import { StoryItem } from "./StoryItem";

export const Stories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  //const [story, setStory] = useState<string>("");

  useEffect(() => {
    const fetchStory = async () => {
      const allStories = await getStory();
      setStories(allStories);
    };
    fetchStory();
  }, []);

  const onSelected = (id: string) => {
    const storyId: StoryId = {
      id: id,
    };
    createStoryId(storyId);
  };

  return (
    <>
      <div>
        <ul>
          {stories.map((story: Story) => {
            return (
              <StoryItem key={story.id} story={story} onSelected={onSelected} />
            );
          })}
        </ul>
      </div>
      <button style={{ color: "black" }}>Skapa ny story</button>
    </>
  );
};
