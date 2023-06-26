/* eslint-disable react/prop-types */
import practiceIcon from "../../assets/icons/practice.png";
import hrIcon from "../../assets/icons/hrround.png";
import ieltsIcon from "../../assets/icons/ielts.png";
import financeIcon from "../../assets/icons/finance.png";

import practiceIconWhite from "../../assets/iconWhite/practice.png";
import hrIconWhite from "../../assets/iconWhite/hrround.png";
import ieltsIconWhite from "../../assets/iconWhite/ielts.png";
import financeIconWhite from "../../assets/iconWhite/finance.png";
import { useTheme } from "../../provider/theme/themeProvider";

const sideItems = [
  {
    name: "Practice",
    path: "",
    icon: practiceIcon,
    iconWhite: practiceIconWhite,
  },
  {
    name: "HR Round",
    path: "",
    icon: hrIcon,
    iconWhite: hrIconWhite,
  },
  {
    name: "Finance",
    path: "",
    icon: financeIcon,
    iconWhite: financeIconWhite,
  },
  {
    name: "IELTS",
    path: "",
    icon: ieltsIcon,
    iconWhite: ieltsIconWhite,
  },
];
const SideBar = ({ toggleSideBar, setToggleSideBar }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={` ${
        toggleSideBar ? "absolute w-full" : "w-fit"
      } md:relative h-[calc(100vh-65px)] flex`}
    >
      <div
        className={`md:w-[200px] ${
          toggleSideBar ? "w-fit" : " w-20"
        }  h-full  bg-blue-50 dark:bg-slate-900  space-y-3 px-4 py-8`}
      >
        {sideItems.map((item) => (
          <div
            key={item?.name}
            className={`flex  items-center  gap-4 md:justify-start ${
              toggleSideBar ? "justify-start" : "justify-center"
            }`}
          >
            <div className=" relative z-10 p-px md:p-1">
              <div className="relative p-2 bg-white dark:bg-slate-900 rounded-full flex items-center justify-between gap-2 z-20 ">
                <img
                  src={isDarkMode ? item.iconWhite : item.icon}
                  alt={item.name}
                  className="md:w-8 md:h-8 w-6 h-6"
                />
                <p
                  className={`dark:text-white whitespace-nowrap text-lg font-semibold ml-2 hidden md:block ${
                    toggleSideBar && "!block"
                  }`}
                >
                  {item.name}
                </p>
                {/* gradient border */}
              </div>
              <div className="absolute w-full h-full bg-gradient-to-tl from-[#0066FF]  to-[#FF00E5]   bg-red-500 left-0 top-0 z-0 rounded-full "></div>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => setToggleSideBar(!toggleSideBar)}
        className="flex-1 md:hidden cursor-pointer h-full bg-red-900/20"
      ></div>
    </div>
  );
};

export default SideBar;
