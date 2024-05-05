import { ResumeStoryProps } from "../types/types";
import style from "./CountinueStoryItem.module.css";

export const CountinueStoryItem = ({ resumeStory }: ResumeStoryProps) => {
  return (
    <>
      <li className={style["story-resume-item"]}>
        <p className={style.name}>{resumeStory.name}</p>
        <p className={style.summery}>{resumeStory.summery}</p>
      </li>
    </>
  );
};
