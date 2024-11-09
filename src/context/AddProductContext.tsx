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
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { Inputs } from "../Types/type"
interface AddProductContextType {
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs, undefined>;
  errors: FieldErrors<Inputs>;
  setError: UseFormSetError<Inputs>;
  optionGroupFields: FieldArrayWithId<Inputs, "optionGroups", "id">[];
  removeOptionGroup: UseFieldArrayRemove;
  appendOptionGroup: UseFieldArrayAppend<Inputs, "optionGroups">;
  control: Control<Inputs, unknown>;
  getValues: UseFormGetValues<Inputs>;
  setValue: UseFormSetValue<Inputs>;
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
    setValue,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      price: undefined,
      image: undefined,
      optionGroups: [
        {
          name: "",
          collapse: false,
          default: "0",
          options: [
            {
              option: "",
              desc: "",
              price: "0.00",
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
        getValues,
        setValue,
      }}
    >
      {children}
    </AddProductContext.Provider>
  );
};

export default AddProductContextProvider;
