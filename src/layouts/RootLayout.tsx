import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
