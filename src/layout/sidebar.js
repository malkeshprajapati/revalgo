import React from "react";
import { SideBarChildren, SidebarStyle } from "../styles/layoutStyle";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = ({ sidebarShow, closeSidebar }) => {
  return (
    <SidebarStyle isOpen={sidebarShow}>
      <IoCloseSharp className="close-menu" onClick={() => closeSidebar()} />
      <SideBarChildren>
        <li>
          <Link to={"/"}> Users</Link>
        </li>
        <li>
          <Link to={"profile"}>My Profile</Link>
        </li>
      </SideBarChildren>
    </SidebarStyle>
  );
};

export default Sidebar;
