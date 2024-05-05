import { CountinueStory } from "../components/CountinueStory";
import { Link } from "react-router-dom";

export const CountinueStoryRoute = () => {
  return (
    <main>
      <h1 style={{ padding: "1rem", marginTop: "5rem" }}>
        Summary of story and character
      </h1>
      <CountinueStory /> <br />
      <Link to="/selectcharacter">Back</Link>
    </main>
  );
};
