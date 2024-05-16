import { ChangeEvent, useState } from "react";
import premadeStories from "../api/stories.json";
//import { promptStoryText } from "../api/storiesApi";
import { StoryText } from "../types/types";

export function StoryItemDropdown() {
  const [selectValue, setSelectValue] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const findStory = premadeStories.find((item) => item.name === value);

    if (findStory) {
      const storyText: StoryText = {
        name: findStory.name,
        summary: findStory.summary,
      };
      setSelectValue(value);
      //promptStoryText(storyText);
      console.log(storyText);
    }
  };

  return (
    <>
      <div>
        <select value={selectValue} onChange={onChange}>
          <option value="Story">Story/scenarios</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Apocalyptic">Apocalyptic</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Horror">Horror</option>
        </select>
      </div>
    </>
  );
}