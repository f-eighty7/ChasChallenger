import { StoryItemProps } from "../types/types";
import style from "./StoryItem.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const StoryItem = ({ story, onSelected }: StoryItemProps) => {
  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    if (!selected) {
      onSelected(story.name, story.summary);
    }
    setSelected(!selected);
  };
  return (
    <>
      <ul className={style["story-wrapper"]}>
        <li className={style.card}>
          <p className={style.summary}>{story.summary}</p>
        </li>
        <Link to="/adventure">
          <button title="Next" className={style["next-button"]} onClick={handleSelected}>
            Next
          </button>
        </Link>
      </ul>
    </>
  );
};
