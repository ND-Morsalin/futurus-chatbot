import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import SideBar from "../Shared/SideBar/SideBar";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
