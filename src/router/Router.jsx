import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
/* import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register"; */
import Error from "../pages/Error/Error";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import AuthLayout from "../layout/AuthLayout";
import Private from "../layout/PrivateLayout";
import PrivateLayout from "../layout/PrivateLayout";
import Practice from "../pages/PracticeRound/Practice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "bot",
    element: <PrivateLayout />,
    children: [
      {
        path: "",
        element: <Practice />,
      },
    ],
  },
   {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  }, /**/
]);

export default router;
