import { Link } from "react-router-dom";

export const SelectCharacterRoute = () => {
  return (
    <main>
      <h1 style={{ padding: "1rem", marginTop: "5rem", marginBottom: "3rem" }}>
        Select Character
      </h1>
      <Link to="/countinuestory">
        <button>Countinue Story</button>
      </Link>{" "}
      <br />
      <Link to="/stories">
        <button>New story</button>
      </Link>
      <Link to="/characters" style={{ padding: "0.5rem", margin: "1rem" }}>
        Back
      </Link>
    </main>
  );
};
