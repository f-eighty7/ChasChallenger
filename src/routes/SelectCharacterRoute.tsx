import { Link } from "react-router-dom";

export const SelectCharacterRoute = () => {
  return (
    <main>
      <p>Select Character</p>
      <Link to="/countinuestory">
        <button>Countinue Story</button>
      </Link>{" "}
      <br />
      <Link to="/stories">
        <button>New story</button>
      </Link>
    </main>
  );
};
