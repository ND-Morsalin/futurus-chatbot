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
        <div className="h-[calc(100vh-70px)] dark:bg-slate-800 container md:p-8 p-4  mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
