import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import MyProfile from "./pages/profile/myProfile";
import List from "./pages/list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <List /> },
      { path: "/list/:id", element: <MyProfile /> },
      { path: "/profile", element: <MyProfile /> },
    ],
  },
]);
export default router;
