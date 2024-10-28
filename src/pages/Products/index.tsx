import AuthLayout from "../../layouts/AuthLayout";
import Products from "../../data/product";
import {
  Settings03Icon,
  ArrowRight01Icon,
  CodesandboxIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  FilterHorizontalIcon,
} from "hugeicons-react";

import AddButton from "../../components/AddButton";
import SearchBar from "../../components/SearchBar2";
import Button from "../../components/Button";
import Table from "../../components/Table/ProductsTable";
import MaintenanceHeader from "../../components/MaintenanceHeader";
const ProductIndex: React.FC = () => {
  return (
    <AuthLayout>
      <MaintenanceHeader>
        <Settings03Icon size={24} className="text-gray-400" />
        <ArrowRight01Icon size={14} />
        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2 font-inter font-semibold">
          <CodesandboxIcon size={24} />
          <span>Products Management</span>
        </div>
      </MaintenanceHeader>

      <div className="flex-1 flex flex-col py-10 px-10">
        <div id="filter" className="bg-white py-5 rounded-xl border">
          <div className="flex px-5 ">
            <SearchBar />

            <div
              id="buttonField"
              className="flex px-4 items-center gap-2 ml-auto"
            >
              <Button
                text={"filter"}
                icon={<FilterHorizontalIcon size={16} />}
                className="mr-4 text-white bg-slate-400"
              />

              <Button text={"import"} icon={<CloudUploadIcon size={16} />} />
              <Button text={"export"} icon={<CloudDownloadIcon size={16} />} />
              <AddButton
                text={"Add Product"}
                location={"/product/create"}
              ></AddButton>
            </div>
          </div>
        </div>
        <Table data={Products} />
      </div>
    </AuthLayout>
  );
};

export default ProductIndex;
