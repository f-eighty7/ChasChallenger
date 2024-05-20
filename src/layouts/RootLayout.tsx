import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
// import NavbarTailwind from "../components/NavbarTailwind";

export const RootLayout = () => {
  return (
    <>
      <Navbar />

      {/* <NavbarTailwind /> */}
      <Outlet />
    </>
  );
};
