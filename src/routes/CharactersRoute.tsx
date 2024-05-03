import { Link } from "react-router-dom";

export const CharactersRoute = () => {
  return (
    <main>
      <p>Characters</p>
      <Link to="/createcharacter">
        <button>Create character</button>
      </Link>{" "}
      <br />
      <Link to="/selectcharacter">
        <button>Select character</button>
      </Link>
    </main>
  );
};
