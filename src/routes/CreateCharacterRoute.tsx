import { Link } from "react-router-dom";

export const CreateCharacterRoute = () => {
  return (
    <main>
      <p>Create Character</p>
      <Link to="/characters">
        <button>Back</button>
      </Link>
    </main>
  );
};
