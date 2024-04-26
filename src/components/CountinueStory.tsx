//import { useSelector } from "react-redux";
import { Story } from "../types/types";
//import { RootState } from "../Store/Store";
import { useEffect, useState } from "react";
import { getResumeStory } from "../api/resumeStoryApi";
import { Link } from "react-router-dom";

export const CountinueStory = () => {
  const [resumeStories, setResumeStories] = useState<Story[]>([]);

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
      <div>
        {resumeStories.map(({ id, name, summery }) => (
          <div key={id}>
            <p>{name}</p>
            <p>{summery}</p>
          </div>
        ))}
      </div>
      <Link to={"/adventure"}>
        <button style={{ color: "black" }}>Fortsätt påbörjad story</button>
      </Link>
    </>
  );
};
 