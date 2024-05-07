import { Stories } from "../components/Stories";
import { Link } from "react-router-dom";

export const StoriesRoute = () => {
  return (
    <main>
      <h1 style={{ padding: "1rem", margin: "1rem"}}>
        Stories
      </h1>
      <Link to="/adventure">
        <button>Play Game</button>
      </Link>
      <Stories />
    </main>
  );
};
