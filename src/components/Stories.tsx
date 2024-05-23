//import { promptStoryText } from "../api/storiesApi";
import { Story, StoryText } from "../types/types";
import { StoryItem } from "./StoryItem";
import premadeStories from "../api/stories.json";

export const Stories = () => {
  const onSelected = (name: string, story: string) => {
    const storyText: StoryText = {
      name: name,
      summary: story,
    };
    //promptStoryText(storyText);
    console.log(storyText);
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