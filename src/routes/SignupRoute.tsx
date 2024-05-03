import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";

export const SignupRoute = () => {
  return (
    <main>
      <p>Sign Up</p>
      <Link to="/login">Back to Login</Link>
      <SignUpForm />
    </main>
  );
};
