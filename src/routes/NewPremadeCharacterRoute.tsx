import style from "./NewPremadeCharacterRoute.module.css";
import { Link } from "react-router-dom";

export const NewPremadeCharacterRoute = () => {
  return (
    <main>
      NewPremadeCharacterRoute
      <Link className={style.backButton} relative="path" to="..">
        Back
      </Link>
    </main>
  );
};
