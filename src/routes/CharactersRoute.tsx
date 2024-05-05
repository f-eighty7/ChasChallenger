import { Link } from "react-router-dom";

export const CharactersRoute = () => {
  return (
    <main>
      <h1 style={{ padding: "1rem", marginTop: "5rem", marginBottom: "3rem" }}>
        Characters
      </h1>
      <Link to="/createcharacter">
        <button>Create character</button>
      </Link>{" "}
      <br />
      <Link to="/selectcharacter">
        <button>Select character</button>
      </Link>
      <Link to="/login" style={{ padding: "0.5rem", margin: "1rem" }}>
        Back
      </Link>
    </main>
  );
};
