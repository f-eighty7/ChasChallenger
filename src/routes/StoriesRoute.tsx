import { Stories } from "../components/Stories";
import { Link } from "react-router-dom";

export const StoriesRoute = () => {
  return (
    <main>
      <p>Stories</p>
      <Link to="/adventure">
        <button>Play Game</button>
      </Link>
      <Stories />
    </main>
  );
};
