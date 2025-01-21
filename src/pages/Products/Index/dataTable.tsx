import React, { useEffect, useState } from "react";
import AddButton from "@/components/AddButton";
import SearchBar from "@/components/SearchBar2";
import HeaderButton from "@/components/Button";
import { Button } from "@/components/ui/button";
import {
  CloudDownloadIcon,
  CloudUploadIcon,
  Search01Icon,
} from "hugeicons-react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  useEffect(() => {
    table.setGlobalFilter(searchValue);
  }, [searchValue]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <>
      <div id="filter" className="bg-white py-5 rounded-xl border">
        <div className="flex px-5 ">
          <SearchBar
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <div
            id="buttonField"
            className="flex px-4 items-center gap-2 ml-auto"
          >
            <HeaderButton
              text={"import"}
              icon={<CloudUploadIcon size={16} />}
              onClick={() => {
                console.log("adad");
                window.location.reload();
              }}
            />
            <HeaderButton
              text={"export"}
              icon={<CloudDownloadIcon size={16} />}
            />
            <AddButton
              text={"Add Product"}
              location={"/product/create"}
            ></AddButton>
          </div>
        </div>
      </div>
      <div className="mt-2 border rounded-xl bg-white overflow-hidden flex flex-col font-geist">
        <div className="py-8"></div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="font-inter  bg-gray-100 *:capitalize *:text-left *:border-t *:border-b hover:bg-gray-100"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`${
                        header.id.includes("index") ? "px-4 py-4" : "px-4 py-4"
                      } ${header.id.includes("id") ? "w-60" : ""}`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`${
                        cell.id.includes("index") ? "px-9 py-3" : "px-4 py-3"
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end border-t px-5 gap-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
