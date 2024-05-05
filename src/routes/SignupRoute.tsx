import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";

export const SignupRoute = () => {
  return (
    <main>
      <Link to="/login">Back to Login</Link>
      <SignUpForm />
    </main>
  );
};
