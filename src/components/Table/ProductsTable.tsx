import "../../css/table.css";
import { Delete02Icon, PencilEdit02Icon,ViewIcon } from "hugeicons-react";
import { Link } from "react-router-dom";

import { Products } from "../../Types/type"
interface Props {
  products: Products[];
  openDeleteModal:(id:number,name:string)=>void
}
const Table: React.FC<Props> = ({ products,openDeleteModal }) => {

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
            <th className="w-60">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => {
            return (
              <tr className="*:px-4 *:py-3 " key={index}>
                <th className="text-left px-5">{index + 1}</th>
                <td>
                  <div className="flex gap-3 items-center">
                    <img
                      src={p.image_url}
                      alt=""
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex flex-col">
                      <div className="font-poppins">{p.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="bg-slate-100 px-4 py-2 rounded-md inline capitalize font-semibold text-slate-500">
                    {p.category}
                  </div>
                </td>
                <td className="font-poppins">RM {p.price.toFixed(2)}</td>
                <td>
                  <div className=" bg-green-600 flex items-center w-12 rounded-full justify-end">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-green-600"></div>
                  </div>
                </td>
                <td>
                  <div className="flex gap-2  *:rounded-lg *:shadow-sm *:p-2">
                    <Link
                      to={"/product/"+p.id}
                      key={p.id}
                      className="bg-gray-50 text-gray-500 hover:border-blue-500 hover:text-white hover:bg-blue-500 hover:shadow-md "
                    >
                      <ViewIcon size={22} />
                    </Link>
                    <Link
                      to="#"
                      className="bg-gray-50 text-gray-500  hover:border-yellow-500 hover:text-white hover:bg-yellow-500 hover:shadow-md "
                    >
                      <PencilEdit02Icon size={22} />
                    </Link>
                    <button
                      className="bg-gray-50 text-gray-500  hover:border-red-500 hover:text-white hover:bg-red-500 hover:shadow-md"
                      onClick={()=>openDeleteModal(p.id,p.name)}
                    >
                      <Delete02Icon size={22} />
                    </button>
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
