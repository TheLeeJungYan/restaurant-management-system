import { Row } from "@tanstack/react-table";
import { Delete02Icon } from "hugeicons-react";
import { PencilEdit02Icon } from "hugeicons-react";
import { ViewIcon } from "hugeicons-react";
import React from "react";
import { Link } from "react-router-dom";
interface DataTableRowActionsProp<TData> {
  row: Row<TData>;
  onDelete: (value: TData) => void;
}
const DataTableRowActions = <TData,>({
  row,
  onDelete,
}: DataTableRowActionsProp<TData>) => {
  return (
    <div className="flex gap-2  *:rounded-lg *:shadow-sm *:p-2">
      <Link
        to={"/product/view/" + row.getValue("id")}
        className="bg-gray-50 text-gray-500 hover:border-blue-500 hover:text-white hover:bg-blue-500 hover:shadow-md "
      >
        <ViewIcon size={22} />
      </Link>
      <Link
        to={"/product/edit/" + row.getValue("id")}
        className="bg-gray-50 text-gray-500  hover:border-yellow-500 hover:text-white hover:bg-yellow-500 hover:shadow-md "
      >
        <PencilEdit02Icon size={22} />
      </Link>
      <button
        className="bg-gray-50 text-gray-500  hover:border-red-500 hover:text-white hover:bg-red-500 hover:shadow-md"
        onClick={() => {
          onDelete(row.original);
        }}
      >
        <Delete02Icon size={22} />
      </button>
    </div>
  );
};

export default DataTableRowActions;
