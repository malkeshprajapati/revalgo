import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutContainer,
  MainContent,
  MainLayout,
} from "../styles/layoutStyle";
import Sidebar from "./sidebar";
import { useDispatch } from "react-redux";
import { setScroll } from "../features/layoutSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const location = useLocation();
  const path = location.pathname;

  const [sidebarShow, setSidebarShow] = useState(false);

  const handleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };

  useEffect(() => {
    dispatch(setScroll(ref.current));
  }, []);

  useEffect(() => {
    ref.current.scrollTo(0, 0);
  }, [path]);

  return (
    <LayoutContainer>
      <Navbar setSidebarShow={handleSidebar} />
      <MainLayout>
        <Sidebar sidebarShow={sidebarShow} closeSidebar={handleSidebar} />
        <MainContent ref={ref}>
          <Outlet />
        </MainContent>
      </MainLayout>
    </LayoutContainer>
  );
};

export default Layout;
