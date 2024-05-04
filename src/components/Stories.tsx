import { promptStoryText } from "../api/storiesApi";
import { Story, StoryText } from "../types/types";
import { StoryItem } from "./StoryItem";
import premadeStories from "../api/stories.json";

export const Stories = () => {
  const onSelected = (story: string) => {
    const storyText: StoryText = {
      text: story,
    };
    promptStoryText(storyText);
    console.log(storyText);
  };

  return (
    <>
      <button style={{margin: "1rem"}}>Make your own story</button>
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
