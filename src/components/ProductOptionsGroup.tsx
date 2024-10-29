import React, { useContext } from "react";
import { AddProductContext } from "../context/AddProductContext";
import {
  ArrowDown01Icon,
  Settings05Icon,
  TextFirstlineRightIcon,
  TriangleIcon,
  PlusSignIcon,
  Delete02Icon,
  Money03Icon,
} from "hugeicons-react";
import "../css/optionTable.css";
import SuccessIcon from "../assets/icons/Success";
const ProductOptionsGroup: React.FC = () => {
  const addProductContext = useContext(AddProductContext);
  if (addProductContext == undefined) return;
  const {
    optionGroups,
    optionGrpValueChange,
    removeOptionGrp,
    addOption,
    removeOption,
    optionInputValueChange,
    optionTableCollapse,
  } = addProductContext;

  return (
    <div className="flex flex-col gap-5 font-poppins">
      {optionGroups &&
        optionGroups.map((og, ogIndex) => {
          return (
            <div key={ogIndex} className="flex flex-col">
              <div className="relative">
                <button className="absolute z-40 w-5 h-5 flex items-center justify-center rounded-full bg-primaryColor text-white optionDlt">
                  <Delete02Icon
                    size={14}
                    onClick={() => removeOptionGrp(ogIndex)}
                  />
                </button>
                <div className="flex relative border w-full overflow-hidden rounded-md border-gray-300 bg-white">
                  <input
                    type="text"
                    value={og.name}
                    className="font-poppins px-4 py-2 flex-1 outline-0"
                    placeholder="Option Group"
                    onChange={(e) =>
                      optionGrpValueChange(ogIndex, e.target.value)
                    }
                  />
                  <button
                    className="border-l border-gray-300 px-3 bg-gray-100 "
                    onClick={() => optionTableCollapse(ogIndex)}
                  >
                    <ArrowDown01Icon
                      size={18}
                      className={`${og.collapse ? "" : "rotate-180"}`}
                    />
                  </button>
                </div>
              </div>

              <div
                className={`mt-2 w-full transition-all duration-500 overflow-hidden ${
                  og.collapse ? "hidden" : ""
                }`}
              >
                <table id="productOptionTable" className="w-full">
                  <thead>
                    <tr className="*:text-left *:font-poppins *:font-normal *:border-b *:border-t *:px-2 *:py-2 *:text-gray-500 *:text-xs">
                      <th onClick={() => addOption(ogIndex)}>
                        <PlusSignIcon size={16} />
                      </th>
                      <th>
                        <div className="flex items-center gap-2 capitalize">
                          <Settings05Icon size={16} />
                          option
                        </div>
                      </th>
                      <th>
                        <div className="flex items-center gap-2 capitalize">
                          <TextFirstlineRightIcon size={16} />
                          Description
                        </div>
                      </th>
                      <th>
                        <div className="flex items-center gap-2 capitalize">
                          <Money03Icon size={16} />
                          Price
                        </div>
                      </th>
                      <th>
                        <div className="flex items-center gap-2 capitalize">
                          <TriangleIcon size={16} />
                          Default
                        </div>
                      </th>
                      <th className="text-gray-800"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {og.options.length &&
                      og.options.map((o, oIndex) => {
                        return (
                          <tr className="*:border-b *:py-1 *:px-2" key={oIndex}>
                            <td></td>
                            <td className="border-l border-r">
                              <input
                                onChange={(e) =>
                                  optionInputValueChange(
                                    ogIndex,
                                    oIndex,
                                    "option",
                                    e.target.value
                                  )
                                }
                                placeholder="Option"
                                type="text"
                                value={o.option}
                                className="w-full capitalize outline-0 py-2 px-2 bg-slate-100 rounded-md border border-slate-300"
                              />
                            </td>
                            <td>
                              <input
                                onChange={(e) =>
                                  optionInputValueChange(
                                    ogIndex,
                                    oIndex,
                                    "desc",
                                    e.target.value
                                  )
                                }
                                placeholder="Description"
                                type="text"
                                value={o.desc}
                                className="w-full capitalize outline-0 py-2 px-2 bg-slate-100 rounded-md border border-slate-300"
                              />
                            </td>
                            <td className="border-l border-r">
                              <label className="flex w-full outline-0 *:py-2 *:px-2  overflow-hidden *:bg-slate-100 rounded-md border border-slate-300">
                                <div className="border-r border-slate-300">
                                  RM
                                </div>
                                <input
                                  onChange={(e) => {
                                    if (/^\d*\.?\d*$/.test(e.target.value)) {
                                      optionInputValueChange(
                                        ogIndex,
                                        oIndex,
                                        "price",
                                        e.target.value
                                      );
                                    }
                                  }}
                                  placeholder="0.00"
                                  type="text"
                                  value={o.price}
                                  className="flex-1 capitalize outline-0"
                                />
                              </label>
                            </td>
                            <td className="border-r">
                              <div className="flex justify-center ">
                                <label className="flex">
                                  <input
                                    type="checkbox"
                                    className="checkBoxInput w-0 h-0"
                                    checked={o.default}
                                    onChange={(e) =>
                                      optionInputValueChange(
                                        ogIndex,
                                        oIndex,
                                        "default",
                                        e.target.checked
                                      )
                                    }
                                  ></input>
                                  <div className="border cursor-pointer text-white border-slate-400 rounded-full w-5 h-5 checkBoxDummy flex items-center justify-center">
                                    <SuccessIcon size={14} color={"#fff"} />
                                  </div>
                                </label>
                              </div>
                            </td>

                            <td>
                              {oIndex ? (
                                <button
                                  onClick={() => {
                                    removeOption(ogIndex, oIndex);
                                  }}
                                  className="flex items-center mx-auto justify-center border-primaryColor rounded-md w-7 h-7 bg-primaryColor text-white"
                                >
                                  <Delete02Icon size={16} />
                                </button>
                              ) : (
                                <div className="w-7 h-7"></div>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default ProductOptionsGroup;
