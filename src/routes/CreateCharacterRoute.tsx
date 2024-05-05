import { Link } from "react-router-dom";

export const CreateCharacterRoute = () => {
  return (
    <main>
      <h1 style={{ padding: "1rem", marginTop: "5rem", marginBottom: "3rem" }}>
        Create Character
      </h1>
      <Link to="/characters">
        <button>Back</button>
      </Link>
    </main>
  );
};
