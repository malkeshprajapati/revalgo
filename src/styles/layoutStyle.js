import styled from "styled-components";

const NavbarStyle = styled.div`
  height: 70px;
  background: #ffffff;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
  transition: left 0.3s ease, width 0.3s ease;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  h1 {
    color: #b6ffa1;
  }
  .menu-svg {
    display: none;
  }
  @media (max-width: 575px) {
    .menu-svg {
      display: block;
      color: #b6ffa1;
      font-weight: bolder;
      font-size: 25px;
    }
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  background: #edebeb;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
  // top: 70px;
  overflow-y: scroll;
  padding: 10px 20px;
  transition: margin-left 0.3s ease;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 10px;
  margin: 0 30px 0 0;
  border-radius: 5px;
  background-color: #b6ffa1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 30px;
  width: 100px;
`;

const ProfileName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #639567;
`;

const LogOutButton = styled.div`
  position: absolute;
  top: 85%;
  background: #b6ffa1;
  width: 100px;
  margin-right: 50px;
  right: 0;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  z-index: 2;
  color: #347928;
  font-weight: bold;
  cursor: pointer;
`;

const MainLayout = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  top: 70px;
  height: calc(100% - 70px);
`;

const SidebarStyle = styled.div`
  width: 250px;
  height: calc(100vh - 90px);
  background: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  .close-menu {
    display: none;
  }
  @media (max-width: 767px) {
    width: 200px;
  }

  @media (max-width: 575px) {
    // width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100vh;
    // padding: 20px;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    .close-menu {
      display: block;
      color: #20630d;
      font-weight: bolder;
      font-size: 25px;
      position: relative;
      left: 90%;
    }
  }
`;

const SideBarChildren = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .active {
    background-color: #b6ffa1;
    color: #639567;
    font-weight: bolder;
  }
  li {
    width: 100%;
    // padding: 12px 10px;
    margin: 5px 0;
    font-size: 16px;
    color: #b6ffa1;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    text-align: left;
    border-radius: 4px;
    list-style: none;
    background-color: #b6ffa1;

    &:hover {
      background-color: #b6ffa1;
      color: #639567;
    }

    a {
      padding: 12px 10px;
      text-decoration: none;
      color: #333;
      display: block;
      width: 100%;
      transition: color 0.3s;
      color: #639567;
      &:hover {
        color: #639567;
        font-weight: bolder;
      }
    }
  }
`;

const SidebarHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export {
  NavbarStyle,
  LayoutContainer,
  MainContent,
  BadgeContainer,
  ProfileName,
  LogOutButton,
  SidebarStyle,
  MainLayout,
  SideBarChildren,
  SidebarHeader,
};
