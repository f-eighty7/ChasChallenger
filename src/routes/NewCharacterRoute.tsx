import { Link } from "react-router-dom";

export const NewCharacterRoute = () => {
  return (
    <main>
      new character
      <Link relative="path" to="..">
        Back
      </Link>
    </main>
  );
};
