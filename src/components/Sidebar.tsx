import Icon from "../assets/icon.png";
import "../css/sidebar.css";
import {
  ShoppingBag01Icon,
  TransactionIcon,
  PackageIcon,
  UserGroupIcon,
  Settings02Icon,
  ArrowDown01Icon,
  ArrowShrinkIcon,
} from "hugeicons-react";
const SideBar: React.FC = () => {
  return (
    <nav className="bg-white flex flex-col w-72">
      <div className="px-5 flex items-center gap-5 py-7">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center px-2 bg-gray-100 shadow-md shadow-gray-100/50">
          <img src={Icon} alt="" className=" object-contain" />
        </div>
        <div className="flex flex-col font-inter uppercase">
          <span className="font-black text-primaryColor text-2xl">
            <span className="text-white text-stoke-primary-color ">The</span>{" "}
            Steak
          </span>
        </div>
      </div>
      <div className="px-4 py-8 flex flex-col gap-4 *:px-4 *:flex *:py-4 *:rounded-xl *:gap-4 *:font-semibold *:font-poppins flex-1 ">
        <a
          href="#"
          className=" bg-primaryColor text-white hover:bg-primaryColor hover:text-white"
        >
          <ShoppingBag01Icon size={24} />
          <span>Ordering Process</span>
        </a>
        <a
          href="#"
          className=" text-gray-400 hover:bg-primaryColor hover:text-white"
        >
          <TransactionIcon size={24} />
          <span>Transactions</span>
        </a>
        <a
          href="#"
          className=" text-gray-400 hover:bg-primaryColor hover:text-white"
        >
          <PackageIcon size={24} />
          <span>Stocks Management</span>
        </a>
        <a
          href="#"
          className=" text-gray-400 hover:bg-primaryColor hover:text-white"
        >
          <UserGroupIcon size={24} />
          <span>Customers</span>
        </a>
        <a
          href="#"
          className=" text-gray-400 hover:bg-primaryColor hover:text-white"
        >
          <Settings02Icon size={24} />
          <span className="flex-1">Maintenance</span>
          <ArrowDown01Icon size={24} />
        </a>
      </div>
      <div className="px-4 py-8 flex flex-col items-end gap-4 *:px-4 *:flex *:py-4 *:rounded-xl *:gap-4 *:font-semibold *:font-poppins">
        <button className="bg-gray-100 text-gray-800 shadow-lg">
          <ArrowShrinkIcon size={24} />
        </button>
      </div>
    </nav>
  );
};

export default SideBar;
