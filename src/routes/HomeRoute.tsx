import { Link } from "react-router-dom";

export const HomeRoute = () => {
  return (
    <main>
      <h1>Master Chass</h1>
      <p>Home</p>
      <Link to={"/welcome"}>
        <button>Start</button>
      </Link>
    </main>
  );
};
