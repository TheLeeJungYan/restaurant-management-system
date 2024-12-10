import { Products } from "@/Types/type";
import { ColumnDef } from "@tanstack/react-table";

import { Link } from "react-router-dom";
import { Delete02Icon, ViewIcon, PencilEdit02Icon } from "hugeicons-react";
import DataTableRowActions from "./dataTableRowAction";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
interface ProductColumnProps {
  onDelete: (value: Products) => void;
}
export const columns = ({
  onDelete,
}: ProductColumnProps): ColumnDef<Products>[] => [
  {
    accessorKey: "index",
    header: ({ column }) => {
      return (
        <Button
          className="h-auto hover:bg-gray-200"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          #
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <span className="text-left">{row.index + 1}</span>;
    },
    sortingFn: (rowA, rowB, columnId) => {
      // Custom sorting function to sort by index
      return rowA.index - rowB.index;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="h-auto hover:bg-gray-200"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Info
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
    header: ({ column }) => {
      return (
        <Button
          className="h-auto hover:bg-gray-200"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
    header: ({ column }) => {
      return (
        <Button
          className="h-auto hover:bg-gray-200"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
