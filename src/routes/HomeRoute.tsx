import { Link } from "react-router-dom";
import ButtonGradientBlue from "../components/ButtonGradientBlue";

export const HomeRoute = () => {
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: '"Cinzel Decorative", serif',
            fontSize: "3.4rem",
            padding: "0",
            margin: "0",
            textShadow: "4px 4px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          MasteR
        </h2>
        <h1
          style={{
            fontFamily: '"Cinzel Decorative", serif',
            fontSize: "5rem",
            lineHeight: "80%",
            textShadow: "4px 4px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          ChasS
        </h1>
      </div>
      <Link to={"/welcome"}>
        <ButtonGradientBlue buttonText={"Start"} />
      </Link>
    </main>
  );
};
