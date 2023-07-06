/* eslint-disable no-unused-vars */
import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import SideBar from "../Shared/SideBar/SideBar";
import whitebg from "../assets/whitebg.jpg";
import { useState } from "react";
import { useTheme } from "../provider/theme/themeProvider";

/* eslint-disable react/prop-types */
const PrivateLayout = ({ children }) => {
  // const { user, loading, error } = useAuth();
  const location = useLocation();
  console.log(location);
  localStorage.getItem("jwtToken");

  /* if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!user)
    return (
      <Navigate
        to={"/auth/login"}
        state={{
          from: location,
        }}
        replace
      />
    ); */

  const [toggleSideBar, setToggleSideBar] = useState(false);
  const { isDarkMode } = useTheme();
  console.log(isDarkMode);
  if (!localStorage.getItem("jwtToken")) {
    return (
      <Navigate
        to={"/auth/login"}
        state={{
          from: location,
        }}
        replace={true}
      />
    );
  }

  return (
    <>
      <Header
        toggleSideBar={toggleSideBar}
        setToggleSideBar={setToggleSideBar}
        sidebar={true}
      />
      <div className="flex">
        <SideBar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
        />
        <div
          style={{
            backgroundImage: `${isDarkMode ? "" : `url(${whitebg})`}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className={`h-[calc(100vh-70px)] dark:bg-slate-800 container md:p-8 p-4  w-full`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
