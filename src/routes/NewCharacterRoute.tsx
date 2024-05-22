import style from "./NewCharacterRoute.module.css";
import { Link } from "react-router-dom";

export const NewCharacterRoute = () => {
  return (
    <main>
      <h1>New Character</h1>
      <ul>
        <li>
          <Link className={style.link} relative="path" to="premade">
            Premade
          </Link>
        </li>
        <li>
          <Link className={style.link} relative="path" to="custom">
            Custom
          </Link>
        </li>
        <li>
          <Link className={style.backButton} relative="path" to="..">
            Back
          </Link>
        </li>
      </ul>
    </main>
  );
};
