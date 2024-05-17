import { StoryInput } from "../components/StoryInput";
import style from "./StoriesRoute.module.css"

export const StoriesRoute = () => {
  return (
    <main>
      <h2 className={style.heading}>
        Before we continue...
      </h2>
      <StoryInput />
    </main>
  );
};
