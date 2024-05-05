import { StoryItemProps } from "../types/types";
import style from "./StoryItem.module.css";
import { useState } from "react";

export const StoryItem = ({ story, onSelected }: StoryItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    if (!selected) {
      onSelected(story.summery);
    }
    setSelected(!selected);
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
        <div className={style["story-buttons"]}>
          <button
            className={style["read-more-button"]}
            onClick={handleToggleCard}
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
          <button
            className={`${style["select-story-button"]} ${
              selected ? style["selected-story-button"] : ""
            }`}
            onClick={handleSelected}
          >
            {selected ? "Selected" : "Select"}
          </button>
        </div>
      </li>
    </>
  );
};
