import { Products } from "@/Types/type";
import { ColumnDef } from "@tanstack/react-table";

import { Link } from "react-router-dom";
import { Delete02Icon, ViewIcon, PencilEdit02Icon } from "hugeicons-react";
import DataTableRowActions from "./dataTableRowAction";

interface ProductColumnProps {
  onDelete: (value: Products) => void;
}
export const columns = ({
  onDelete,
}: ProductColumnProps): ColumnDef<Products>[] => [
  {
    accessorKey: "index",
    header: "#",
    cell: ({ row }) => {
      return <span className="text-left">{row.index + 1}</span>;
    },
  },
  {
    accessorKey: "name",
    header: "product info",
    cell: ({ row }) => {
      return (
        <div className="flex gap-3 items-center">
          <img
            src={row.original.image_url}
            alt=""
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="flex flex-col">
            <div className="font-poppins">{row.getValue("name")}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "category",
    cell: ({ row }) => {
      return (
        <div className="bg-slate-100 px-4 py-2 rounded-md inline capitalize font-semibold text-slate-500">
          {row.getValue("category")}
        </div>
      );
    },
  },

  {
    accessorKey: "price",
    header: "price",
    cell: ({ row }) => {
      const amount: number = parseFloat(row.getValue("price"));
      const formattedAmount = new Intl.NumberFormat("ms-MY", {
        style: "currency",
        currency: "MYR",
      }).format(amount);
      return formattedAmount;
    },
  },
  {
    accessorKey: "",
    header: "status",
    cell: ({ row }) => {
      return (
        <div className=" bg-green-600 flex items-center w-12 rounded-full justify-end">
          <div className="w-6 h-6 bg-white rounded-full border-2 border-green-600"></div>
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: "action",
    cell: ({ row }) => <DataTableRowActions row={row} onDelete={onDelete} />,
  },
];
