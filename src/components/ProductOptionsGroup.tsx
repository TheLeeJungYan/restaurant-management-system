import React, { useContext } from "react";
import { AddProductContext } from "../context/AddProductContext";
import OptionInputContainer from "./OptionInputContainer";
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
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import ErrorText from "./ErrorText";
interface Options {
  option: string;
  desc: string;
  price: string;
}
interface OptionsGrp {
  name: string;
  collapse: boolean;
  default: string;
  options: Options[];
}
interface Inputs {
  name: string;
  description: string;
  category: number;
  price: number;
  image: File | undefined;
  optionGroups: [] | OptionsGrp[];
}

const ProductOptions: React.FC<{
  ogIndex: number;
  control: Control<Inputs, unknown>;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}> = ({ ogIndex, control, register, errors }) => {
  const {
    fields: optionFields,
    append: appendOption,
    remove: removeOption,
  } = useFieldArray<Inputs>({
    name: `optionGroups.${ogIndex}.options`,
    control,
  });

  // Move useFieldArray outside of the conditional check
  return (
    <table id="productOptionTable" className="w-full">
      <thead>
        <tr className="*:text-left *:font-poppins *:font-normal *:border-b *:border-t *:px-2 *:py-2 *:text-gray-500 *:text-xs">
          <th
            onClick={() => {
              appendOption({
                option: "",
                desc: "",
                price: "0.00",
              });
            }}
          >
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
        {optionFields.map((o, oIndex) => {
          return (
            <tr className="*:border-b  *:px-2" key={`${ogIndex}-${oIndex}`}>
              <td></td>
              <td className="border-l border-r">
                <OptionInputContainer>
                  <input
                    placeholder="Option"
                    type="text"
                    className={`w-full capitalize outline-0 py-2 px-2 rounded-md border bg-slate-100  ${
                      errors.optionGroups?.[`${ogIndex}`]?.options?.[
                        `${oIndex}`
                      ]?.option
                        ? "border-primaryColor"
                        : "border-slate-300"
                    } `}
                    {...register(
                      `optionGroups.${ogIndex}.options.${oIndex}.option`,
                      { required: "Option value is required" }
                    )}
                  />

                  <ErrorText
                    text={
                      errors.optionGroups?.[`${ogIndex}`]?.options?.[
                        `${oIndex}`
                      ]?.option?.message
                    }
                  />
                </OptionInputContainer>
              </td>
              <td>
                <OptionInputContainer>
                  <input
                    placeholder="Description"
                    type="text"
                    className="w-full capitalize outline-0 py-2 px-2 bg-slate-100 rounded-md border border-slate-300"
                    {...register(
                      `optionGroups.${ogIndex}.options.${oIndex}.desc`
                    )}
                  />
                  <ErrorText
                    text={
                      errors.optionGroups?.[`${ogIndex}`]?.options?.[
                        `${oIndex}`
                      ]?.desc?.message
                    }
                  />
                </OptionInputContainer>
              </td>
              <td className="border-l border-r">
                <OptionInputContainer>
                  <label
                    className={`flex w-full outline-0 *:py-2 *:px-2  overflow-hidden *:bg-slate-100 rounded-md border ${
                      errors.optionGroups?.[`${ogIndex}`]?.options?.[
                        `${oIndex}`
                      ]?.price
                        ? "border-primaryColor"
                        : "border-slate-300"
                    } `}
                  >
                    <div className="border-r border-slate-300">RM</div>
                    <input
                      placeholder="0.00"
                      type="text"
                      className="flex-1 capitalize outline-0"
                      {...register(
                        `optionGroups.${ogIndex}.options.${oIndex}.price`,
                        {
                          required: "Price is required",
                        }
                      )}
                    />
                  </label>

                  <ErrorText
                    text={
                      errors.optionGroups?.[`${ogIndex}`]?.options?.[
                        `${oIndex}`
                      ]?.price?.message
                    }
                  />
                </OptionInputContainer>
              </td>
              <td className="border-r">
                <div className="flex justify-center ">
                  <label className="flex">
                    <input
                      type="radio"
                      className="checkBoxInput w-0 h-0"
                      {...register(`optionGroups.${ogIndex}.default`)}
                      value={oIndex}
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
                    type="button"
                    onClick={() => {
                      removeOption(oIndex);
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
  );
};

const ProductOptionsGroup: React.FC = () => {
  const addProductContext = useContext(AddProductContext);
  if (addProductContext == undefined) return;
  const { register, optionGroupFields, removeOptionGroup, errors, control } =
    addProductContext;

  return (
    <div className="flex flex-col gap-5 font-poppins">
      {optionGroupFields &&
        optionGroupFields.map((og, ogIndex) => {
          return (
            <div key={ogIndex} className="flex flex-col">
              <div className="relative">
                <button
                  type={"button"}
                  onClick={() => removeOptionGroup(ogIndex)}
                  className="absolute z-40 w-5 h-5 flex items-center justify-center rounded-full bg-primaryColor text-white optionDlt"
                >
                  <Delete02Icon size={14} />
                </button>
                <div
                  className={`flex relative border w-full overflow-hidden rounded-md shadow-sm bg-white ${
                    errors.optionGroups?.[`${ogIndex}`]?.name &&
                    "border-primaryColor"
                  }`}
                >
                  <input
                    type="text"
                    className="font-poppins px-4 py-2 flex-1 outline-0"
                    placeholder="Option Group"
                    {...register(`optionGroups.${ogIndex}.name`, {
                      required: "Option Group is required",
                    })}
                  />
                  <button
                    className="border-l border-gray-300 px-3 bg-gray-100"
                    type="button"
                  >
                    <ArrowDown01Icon
                      size={18}
                      className={`${og.collapse ? "" : "rotate-180"}`}
                    />
                  </button>
                </div>
              </div>
              {errors.optionGroups?.[`${ogIndex}`]?.name?.message && (
                <ErrorText
                  text={errors.optionGroups?.[`${ogIndex}`]?.name?.message}
                />
              )}
              <div
                className={`mt-2 w-full transition-all duration-500 overflow-hidden ${
                  og.collapse ? "hidden" : ""
                }`}
              >
                <ProductOptions
                  ogIndex={ogIndex}
                  control={control}
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default ProductOptionsGroup;
