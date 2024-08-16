import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useState } from "react";
// import { useTheme } from "../provider/theme/themeProvider";

const HomeLayout = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  // const { isDarkMode } = useTheme();

  return (
    <>
      <Header
        toggleSideBar={toggleSideBar}
        setToggleSideBar={setToggleSideBar}
      />
      <Outlet />
      {/*   <div className="flex">
        <SideBar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
        />
        <div
        style={{
          backgroundImage: `${isDarkMode?'':`url(${whitebg})`}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`h-[calc(100vh-70px)] dark:bg-slate-800 container md:p-8 p-4  w-full`}>
         
        </div>
      </div> */}
    </>
  );
};

export default HomeLayout;
