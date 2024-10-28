import { ArrowDown01Icon } from "hugeicons-react";
import UserImg from "../assets/images/user.jpg";
interface Props {
  children: React.ReactNode; // Add this line to accept children
}
const MaintenanceHeader: React.FC<Props> = ({ children }) => {
  return (
    <header className="flex items-center justify-between bg-white border-b py-3">
      <div className="flex-1 inline-flex px-10 items-center gap-3">
        {children}
      </div>
      <div className="border-l  flex px-5 items-center gap-3">
        <img
          src={UserImg}
          alt=""
          className="rounded-lg w-10 h-10 object-cover border-10"
        />
        <div className="flex flex-col ">
          <span className="font-inter font-semibold">Jimmy Abraham</span>
          <span className="text-gray-500 font-poppins text-xs">Cashier</span>
        </div>
        <ArrowDown01Icon size={16} />
      </div>
    </header>
  );
};

export default MaintenanceHeader;
