import { Search01Icon } from "hugeicons-react";

const SearchBar2: React.FC = () => {
  return (
    <label className="flex items-center bg-gray-100 rounded-xl text-gray-600 px-4 py-3 gap-2 min-w-96 font-poppins">
      <Search01Icon size={16} />
      <input
        type="text"
        className="bg-gray-100 outline-0 flex-1"
        placeholder="Search...."
      />
    </label>
  );
};

export default SearchBar2;
