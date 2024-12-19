import React from "react";
import { NavbarStyle } from "../styles/layoutStyle";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "../components/search";
import { IoMdMenu } from "react-icons/io";

const Navbar = ({ setSidebarShow }) => {
  const location = useLocation();

  return (
    <NavbarStyle>
      <IoMdMenu className="menu-svg" onClick={() => setSidebarShow()} />
      <h1>Dashboard</h1>
      {location.pathname === "/" && <Search />}
    </NavbarStyle>
  );
};

export default Navbar;
