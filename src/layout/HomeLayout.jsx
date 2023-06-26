import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import SideBar from "../Shared/SideBar/SideBar";
import { useState } from "react";

const HomeLayout = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <>
      <Header
        toggleSideBar={toggleSideBar}
        setToggleSideBar={setToggleSideBar}
      />
      <div className="flex">
        <SideBar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
        />
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
