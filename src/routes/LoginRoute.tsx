import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

export const LoginRoute = () => {
  return (
    <main>
      <h1>Login</h1>
      <Link to="/characters">To characters</Link>
      <LoginForm />
    </main>
  );
};
