import "../../css/table.css";
import { Delete02Icon, PencilEdit02Icon, ViewIcon } from "hugeicons-react";
import { Link } from "react-router-dom";

interface Products {
  ID: number;
  NAME: string;
  IMG: string;
  PRICE: number;
  CATEGORY: string;
}
interface Props {
  data: Products[];
}
const Table: React.FC<Props> = ({ data }) => {
  const getProImageUrl: (id: number) => string = (id) => {
    return new URL(`../../assets/products/${id}.jpg`, import.meta.url).href;
  };
  return (
    <div
      id="productTable"
      className="mt-2 border rounded-xl bg-white overflow-hidden flex flex-col"
    >
      <div className="py-5"></div>
      <table className="w-full">
        <thead>
          <tr className="font-inter *:px-4 *:py-4 bg-gray-100 *:capitalize *:text-left *:border-t *:border-b">
            <th>#</th>
            <th>Product Info</th>
            <th>Category</th>
            <th>Price</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, index) => {
            return (
              <tr className="*:px-4 *:py-3 ">
                <th className="text-left px-5">{index + 1}</th>
                <td>
                  <div className="flex gap-3 items-center">
                    <img
                      src={getProImageUrl(p.ID)}
                      alt=""
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex flex-col">
                      <div className="font-poppins">{p.NAME}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="bg-slate-100 px-4 py-2 rounded-md inline capitalize font-semibold text-slate-500">
                    {p.CATEGORY}
                  </div>
                </td>
                <td className="font-poppins">RM {p.PRICE.toFixed(2)}</td>
                <td>
                  <div className=" bg-green-600 flex items-center w-12 rounded-full justify-end">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-green-600"></div>
                  </div>
                </td>
                <td>
                  <div className="flex gap-2  *:border *:border-gray-300 *:rounded-md *:p-2 *:text-gray-400 ">
                    <Link
                      to="#"
                      className="hover:bg-sky-500 hover:text-white hover:border-sky-500"
                    >
                      <ViewIcon size={20} />
                    </Link>
                    <Link
                      to="#"
                      className="hover:bg-yellow-500 hover:text-white hover:border-yellow-500"
                    >
                      <PencilEdit02Icon size={20} />
                    </Link>
                    <Link
                      to="#"
                      className="hover:bg-red-500 hover:text-white hover:border-red-500"
                    >
                      <Delete02Icon size={20} />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
