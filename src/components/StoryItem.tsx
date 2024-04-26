import { StoryItemProps } from "../types/types";

export const StoryItem = ({ story, onSelected }: StoryItemProps) => {
  const handleSelected = () => {
    onSelected(story.id);
  };
  return (
    <>
      <div style={{ border: "2px solid gray" }}>
        <p>{story.name}</p>
        <p>{story.summery}</p>
        <button style={{ color: "black" }} onClick={handleSelected}>
          Välj story
        </button>
      </div>
    </>
  );
};
