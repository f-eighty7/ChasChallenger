import { Link } from "react-router-dom";

export const MastersWelcomeRoute = () => {
  return (
    <main>
      <h1>Master's Welcome</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, similique
        saepe corporis eos quod nulla eveniet ipsum cupiditate vitae? Debitis
        hic cumque quas odit ex nemo libero possimus. Possimus, ab.
      </p>
      <Link to={"/login"}>
        <button>Next</button>
      </Link>
    </main>
  );
};
