import { CountinueStory } from "../components/CountinueStory";
import { Link } from "react-router-dom";

export const CountinueStoryRoute = () => {
  return (
    <main>
      <p>Countinue Story</p>
      <CountinueStory /> <br />
      <Link to="/adventure">
      </Link>
    </main>
  );
};
