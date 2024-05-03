import { StoryItemProps } from "../types/types";
import style from "./StoryItem.module.css";
import { useState } from "react";

export const StoryItem = ({ story, onSelected }: StoryItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSelected = () => {
    onSelected(story.summery);
  };
  const handleToggleCard = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <li className={style.card}>
        <h4 className={style.name}>{story.name}</h4>
        <p
          className={`${
            isExpanded ? style["summery-expanded"] : style.summery
          }`}
        >
          {story.summery}
        </p>
        <button
          className={style["choose-story-button"]}
          onClick={handleToggleCard}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
        <button
          className={style["choose-story-button"]}
          onClick={handleSelected}
        >
          Select
        </button>
      </li>
    </>
  );
};
