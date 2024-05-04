import { Link } from "react-router-dom";

export const HomeRoute = () => {
  return (
    <main>
      <h1 style={{ padding: "1rem", marginTop: "5rem", marginBottom: "3rem" }}>
        Master Chass
      </h1>
      <Link to={"/welcome"}>
        <button>Start</button>
      </Link>
    </main>
  );
};
