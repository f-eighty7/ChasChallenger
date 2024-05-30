import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import Footer  from "../components/Footer"

export const LoginRoute = () => {
  return (
    <>
    <main>
      <Link to="/characters">To characters</Link>
      <LoginForm />
      
    </main>
    <Footer />
    </>
  );
};
