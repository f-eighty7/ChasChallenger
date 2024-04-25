//import { useSelector } from "react-redux";
import { Story } from "../types/types";
//import { RootState } from "../Store/Store";
import { useEffect, useState } from "react";
import { getStories } from "../api/storiesApi";
import { Link } from "react-router-dom";

export const CountinueStory = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const fetchStory = async () => {
      const stories = await getStories();
      setStories(stories);
    };
    fetchStory();
  }, []);

  return (
    <>
      <h2>Summary of story and character</h2>
      <div>
        {stories.map((story, id) => (
          <div key={id}>
            <p>{story.name}</p>
            <p>{story.summery}</p>
          </div>
        ))}
      </div>
      <Link to={"/adventure"}>
        <button style={{ color: "black" }}>Fortsätt påbörjad story</button>
      </Link>
    </>
  );
};
