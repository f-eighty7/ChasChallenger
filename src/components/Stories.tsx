import { promptStoryText } from "../api/storiesApi";
import { Story, StoryText } from "../types/types";
import { StoryItem } from "./StoryItem";
import premadeStories from "../api/stories.json";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";

export const Stories = () => {
  const { id } = useSelector((state: RootState) => state.character);

  const onSelected = (name: string, story: string) => {
    const storyText: StoryText = {
      characterId: id,
      name: name,
      basePrompt: story,
    };
    promptStoryText(storyText);
  };

  return (
    <>
      <div>
        <ul>
          {premadeStories.map((story: Story) => {
            return (
              <StoryItem key={story.id} story={story} onSelected={onSelected} />
            );
          })}
        </ul>
      </div>
    </>
  );
};
