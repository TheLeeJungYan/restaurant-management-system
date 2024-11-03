import React, { useState, createContext } from "react";
import {
  FieldErrors,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetError,
  useFieldArray,
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFieldArrayAppend,
  Control,
} from "react-hook-form";

interface AddProductContextType {
  // optionGroups: [] | OptionsGrp[];
  // optionGrpValueChange: (index: number, value: string) => void;
  // addOptionGroup: () => void;
  // removeOptionGrp: (index: number) => void;
  // addOption: (index: number) => void;
  // removeOption: (ogIndex: number, oIndex: number) => void;
  // optionInputValueChange: (
  //   ogIndex: number,
  //   oIndex: number,
  //   name: string,
  //   value: string | boolean
  // ) => void;
  // optionTableCollapse: (ogIndex: number) => void;

  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs, undefined>;
  errors: FieldErrors<Inputs>;
  setError: UseFormSetError<Inputs>;

  optionGroupFields: FieldArrayWithId<Inputs, "optionGroups", "id">[];
  removeOptionGroup: UseFieldArrayRemove;
  appendOptionGroup: UseFieldArrayAppend<Inputs, "optionGroups">;
  control: Control<Inputs, unknown>;
}
interface Options {
  option: string;
  desc: string;
  price: string;
  default: boolean;
}
interface OptionsGrp {
  name: string;
  collapse: boolean;
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
export const AddProductContext = createContext<
  AddProductContextType | undefined
>(undefined);

const AddProductContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  
  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      description: "",
      category: 0,
      price: undefined,
      image: undefined,
      optionGroups: [
        {
          name: "",
          collapse: false,
          options: [
            {
              option: "",
              desc: "",
              price: "0.00",
              default: false,
            },
          ],
        },
      ],
    },
  });

  const {
    fields: optionGroupFields,
    append: appendOptionGroup,
    remove: removeOptionGroup,
  } = useFieldArray({
    name: "optionGroups",
    control,
  });
 
  return (
    <AddProductContext.Provider
      value={{
        register,
        errors,
        setError,
        optionGroupFields,
        handleSubmit,
        appendOptionGroup,
        removeOptionGroup,
        control,
      }}
    >
      {children}
    </AddProductContext.Provider>
  );
};

export default AddProductContextProvider;
