import { ResumeStory } from "../types/types";
import { useEffect, useState } from "react";
import { getResumeStory } from "../api/resumeStoryApi";
import { Link } from "react-router-dom";
import { CountinueStoryItem } from "./CountinueStoryItem";

export const CountinueStory = () => {
  const [resumeStories, setResumeStories] = useState<ResumeStory[]>([]);

  useEffect(() => {
    const fetchStory = async () => {
      const stories = await getResumeStory();
      setResumeStories(stories);
    };
    fetchStory();
  }, []);

  return (
    <>
      <h2>Summary of story and character</h2>
      <ul>
        {resumeStories.map((resumeStory: ResumeStory) => {
          return (
            <CountinueStoryItem
              key={resumeStory.id}
              resumeStory={resumeStory}
            />
          );
        })}
      </ul>
      <Link to={"/adventure"}>
        <button style={{ color: "black" }}>Countinue Story</button>
      </Link>
    </>
  );
};
