import AuthLayout from "../../layouts/AuthLayout";
import {
  Settings03Icon,
  ArrowRight01Icon,
  CodesandboxIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  FilterHorizontalIcon,
  Alert01Icon,
} from "hugeicons-react";

import AddButton from "../../components/AddButton";
import SearchBar from "../../components/SearchBar2";
import Button from "../../components/Button";
import Table from "../../components/Table/ProductsTable";
import MaintenanceHeader from "../../components/MaintenanceHeader";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../config";
import { Products, DeleteProduct } from "../../Types/type";
import SuccessMsg from "../../components/SuccessMsg";
import FlashState from "../../FlashState";
import CloseIcon from "../../assets/hugeIcons/Close";
import { redirect, useNavigate } from "react-router-dom";

const ProductIndex: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Products[] | []>([]);
  const [deleteModalShow, setDeleteModalShow] = useState<boolean>(false);
  const [deleteProduct, setDeleteProduct] = useState<null | DeleteProduct>(
    null
  );
  const [successMessage, setSuccessMessage] = useState<null | string>(null);
  const [deleting, setDeleting] = useState<boolean>(false);
  const [shouldRefresh, setShouldRefresh] = useState<boolean>(true);

  useEffect(() => {
    if (shouldRefresh) {
      if (deleting) {
        FlashState.set(
          "product-success-msg",
          `${deleteProduct?.name} has deleted successfully!`
        );
        setDeleting(false);
        setDeleteModalShow(false);
        setDeleteProduct(null);
      }
      fetchProduct();
      console.log("refresh");
      setShouldRefresh(false);
    }
  }, [shouldRefresh]);

  const authContext = useContext(AuthContext);
  if (authContext == undefined) return;
  const { token } = authContext;
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data.data);
      FlashState.set("product-success-msg", `test has updated successfully!`);
      const flashMessage = FlashState.get("product-success-msg");
      if (flashMessage) {
        setSuccessMessage(flashMessage);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const openDeleteModal: (id: number, name: string) => void = (id, name) => {
    setDeleteModalShow(true);
    setDeleteProduct({
      id,
      name,
    });
  };

  const closeDeleteModal: () => void = () => {
    setDeleteModalShow(false);
    setDeleteProduct(null);
  };

  const deleteAction: () => void = async () => {
    console.log(deleteProduct);
    setDeleting(true);
    try {
      const response = await axios.delete(
        `${BASE_URL}/product/${deleteProduct?.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response);
      setShouldRefresh(true);
    } catch (error) {
      setDeleting(false);
      console.error(error);
    }
  };
  return (
    <AuthLayout>
      {deleteModalShow && (
        <div className="fixed top-0 right-0 w-full h-full bg-black/50 z-100 flex items-center justify-center">
          <div className="bg-white flex flex-col rounded-md font-poppins overflow-hidden min-w-96 relative shadow-md border border-gray-500">
            <div className="font-inters font-semibold flex justify-between px-5 py-3 border-b border-gray-300">
              <div className="flex items-center gap-3">
                <div className="relative" style={{ top: "1.5px" }}>
                  Are you sure ?
                </div>
              </div>
              <button
                className="h-fit"
                onClick={() => closeDeleteModal()}
                disabled={deleting}
              >
                <CloseIcon size={15} color={"rgb(209 213 219)"} />
              </button>
            </div>
            <div className="flex flex-col py-3 px-5">
              <div className="max-w-96">
                This action <b>CANNOT</b> be undone. This will permanently
                delete the{" "}
                <span className="font-bold">{deleteProduct?.name}</span> !
              </div>
              <div className="mt-5 flex justify-end gap-2 *:font-semibold font-inters">
                <button
                  className={`${
                    deleting
                      ? "bg-gray-200 text-gray-400"
                      : "bg-gray-200 text-gray-600"
                  } px-4 py-2 rounded-md  w-32`}
                  disabled={deleting}
                  onClick={() => closeDeleteModal()}
                >
                  No, Keep it.
                </button>
                <button
                  className={`${
                    deleting ? "bg-red-400" : "bg-red-500"
                  } px-4 py-2 rounded-md text-white w-32 flex items-center justify-center`}
                  disabled={deleting}
                  onClick={() => deleteAction()}
                >
                  {deleting ? (
                    <div className="loaderDlt"></div>
                  ) : (
                    "Yes, Delete it!"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <MaintenanceHeader>
        <Settings03Icon size={24} className="text-gray-400" />
        <ArrowRight01Icon size={14} />
        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2 font-inter font-semibold">
          <CodesandboxIcon size={24} />
          <span>Products Management</span>
        </div>
      </MaintenanceHeader>

      <div className="flex-1 flex flex-col py-10 px-10">
        <SuccessMsg msg={successMessage} />
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

              <Button
                text={"import"}
                icon={<CloudUploadIcon size={16} />}
                onClick={() => {
                  console.log("adad");
                  window.location.reload();
                }}
              />
              <Button text={"export"} icon={<CloudDownloadIcon size={16} />} />
              <AddButton
                text={"Add Product"}
                location={"/product/create"}
              ></AddButton>
            </div>
          </div>
        </div>
        <Table products={products} openDeleteModal={openDeleteModal} />
      </div>
    </AuthLayout>
  );
};

export default ProductIndex;
