import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"


export const RootLayout = () => {
  return (
    <>
      <Navbar isLoggedIn={false}/>
      <Outlet />
    </>
  );
};
