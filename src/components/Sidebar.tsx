import Icon from "../assets/images/icon.png";
import React, { useContext } from "react";
import "../css/sidebar.css";
import {
  ShoppingBag01Icon,
  TransactionIcon,
  PackageIcon,
  UserGroupIcon,
  Dish01Icon,
  TableRoundIcon,
  Database01Icon,
  Invoice02Icon,
  Settings03Icon,
  UserListIcon,
  Layers01Icon,
} from "hugeicons-react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const SideBar: React.FC = () => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    return <div>Loading...</div>;
  }
  const { sideBarExpand, toggleSideBar } = authContext;
  return (
    <nav
      className={` bg-white flex flex-col overflow-x-hidden whitespace-nowrap transition-all duration-300 z-50 shadow-sm border-r shrink-0  fixed h-full ${
        sideBarExpand ? "w-72" : "w-22"
      }`}
      // onMouseEnter={() => toggleSideBar(true)}
      // onMouseLeave={() => toggleSideBar(false)}
    >
      <div
        className="flex flex-col flex-1 overflow-y-hidden overflow-x-hidden"
        id="sidebarCont"
      >
        <div className="px-5 flex items-center gap-4 py-7 relative">
          <button className="absolute w-5 h-5 rounded-full bg-gray-100 collapsibleButton shadow-xl border border-gray-300"></button>
          <div
            className={`h-12 rounded-2xl flex items-center justify-center px-2 bg-gray-100 shadow-md  shadow-gray-100/50 shrink-0 transition-all  ${
              sideBarExpand ? "w-20" : "w-14 "
            }`}
          >
            <img src={Icon} alt="" />
          </div>
          <div className="flex flex-col font-inter uppercase">
            <span className="font-black text-primaryColor text-2xl">
              <span className="text-white text-stoke-primary-color ">The</span>{" "}
              Steak
            </span>
          </div>
        </div>
        <div
          className="pl-4 py-2 flex flex-col  font-semibold font-poppins  overflow-x-hidden overflow-y-auto text-sm main"
          id="overflow-wrapper"
        >
          <div
            id="default"
            className={`flex flex-col gap-2 *:px-4 *:flex *:py-4 *:rounded-xl *:gap-8 border-gray-150 border-b pb-3`}
          >
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "bg-primaryColor text-white hover:text-white focus:text-white focus:bg-primaryColor"
                  : "text-gray-400 hover:bg-primaryColor hover:text-white focus:text-white focus:bg-primaryColor";
              }}
            >
              <div>
                <ShoppingBag01Icon size={24} />
              </div>

              <span>Ordering Process</span>
            </NavLink>
            <NavLink
              to="/transactions"
              className={({ isActive }) => {
                return isActive
                  ? "bg-primaryColor text-white hover:text-white focus:text-white focus:bg-primaryColor"
                  : "text-gray-400 hover:bg-primaryColor hover:text-white focus:text-white focus:bg-primaryColor";
              }}
            >
              <div>
                <TransactionIcon size={24} />
              </div>

              <span>Transactions</span>
            </NavLink>

            <a
              href="#"
              className=" text-gray-400 hover:bg-primaryColor hover:text-white"
            >
              <div>
                <UserGroupIcon size={24} />
              </div>

              <span>Customers</span>
            </a>
            <a
              href="#"
              className=" text-gray-400 hover:bg-primaryColor hover:text-white"
            >
              <div>
                <Database01Icon size={24} />
              </div>

              <span>Reservation</span>
            </a>
          </div>
          <div id="maintenance" className=" flex flex-col pt-3">
            <span className="uppercase ml-3 py-3 text-gray-400 text-sm">
              <Settings03Icon size={20} className="settingIcon" />
            </span>
            <div
              className="flex flex-col gap-2 *:px-4 *:flex *:py-4 *:rounded-xl *:text-sm *:gap-8 border-gray-150"
              id="maintenance"
            >
              <NavLink
                to="/products"
                className={({ isActive }) => {
                  return isActive
                    ? "bg-primaryColor text-white hover:text-white focus:text-white focus:bg-primaryColor"
                    : "text-gray-400 hover:bg-primaryColor hover:text-white focus:text-white focus:bg-primaryColor";
                }}
              >
                <div>
                  <Dish01Icon size={24} />
                </div>

                <span>Products</span>
              </NavLink>
              <NavLink
                to="/categories"
                className={({ isActive }) => {
                  return isActive
                    ? "bg-primaryColor text-white hover:text-white focus:text-white focus:bg-primaryColor"
                    : "text-gray-400 hover:bg-primaryColor hover:text-white focus:text-white focus:bg-primaryColor";
                }}
              >
                <div>
                  <Layers01Icon size={24} />
                </div>

                <span>Categories</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
