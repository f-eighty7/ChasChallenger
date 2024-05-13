// @ts-ignore

import { Link } from "react-router-dom";
import ButtonGradientBlue from "../components/ButtonGradientBlue";

export const MastersWelcomeRoute = () => {
  return (
    <main>

      <h1 style={{ 
        padding: "1rem", 
        marginTop: "5rem",
        fontFamily: '"Cinzel Decorative", serif',
        fontSize: "3rem",
      
        }}>Master's Welcome</h1>
      <p
        style={{
          padding: "1rem",
          marginBottom: "1rem",
          background: "#454545",
          borderRadius: "20px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, similique
        saepe corporis eos quod nulla eveniet ipsum cupiditate vitae? Debitis
        hic cumque quas odit ex nemo libero possimus. Possimus, ab.
      </p>
      <Link to={"/login"}>
        <ButtonGradientBlue buttonText={'Next'} />
      </Link>
    </main>
  );
};
