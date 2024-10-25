import React, { useContext } from "react";
import { Search01Icon } from "hugeicons-react";
import { ProductContext } from "../context/ProductContext";
const SearhBar: React.FC = () => {
  const productContext = useContext(ProductContext);
  if (productContext == undefined) return null;
  const { searchQuery, updateSearchQuery } = productContext;
  return (
    <label
      id="search"
      className="border flex items-center bg-white rounded-full overflow-hidden py-2.5 px-4 gap-2 font-poppins min-w-96 w-1/3"
    >
      <Search01Icon size={20} className="text-gray-400" />
      <input
        type="text"
        name=""
        id=""
        className="flex-1 outline-0 text-gray-800 relative truncate"
        style={{ top: ".5px" }}
        placeholder="Search..."
        value={searchQuery || ""}
        onChange={(e) => updateSearchQuery(e.target.value)}
      />
    </label>
  );
};

export default SearhBar;
