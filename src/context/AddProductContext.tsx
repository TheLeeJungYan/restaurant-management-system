import React, { useState, createContext } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
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
interface AddProductContextType {
  optionGroups: [] | OptionsGrp[];
  optionGrpValueChange: (index: number, value: string) => void;
  addOptionGroup: () => void;
  removeOptionGrp: (index: number) => void;
  addOption: (index: number) => void;
  removeOption: (ogIndex: number, oIndex: number) => void;
  optionInputValueChange: (
    ogIndex: number,
    oIndex: number,
    name: string,
    value: string | boolean
  ) => void;
  optionTableCollapse: (ogIndex: number) => void;
  image: null | File;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  imageError: boolean;
  setImageError: React.Dispatch<React.SetStateAction<boolean>>;
  previewImage: null | string;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
  register: UseFormRegister<Inputs>
}

interface Inputs {
  name:string;
  description:string;
  category:number;
  price:number;
}
export const AddProductContext = createContext<
  AddProductContextType | undefined
>(undefined);

const AddProductContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    register,
    handleSubmit,
    formState: {errors,isSubmitting},
    reset,
    getValues
  } = useForm<Inputs>();
  const [image, setImage] = useState<null | File>(null);
  const [imageError, setImageError] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<null | string>(null);
  const [optionGroups, setOptionGroups] = useState<[] | OptionsGrp[]>([
    {
      name: "",
      collapse: false,
      options: [
        {
          option: "",
          desc: "",
          price: "",
          default: false,
        },
      ],
    },
  ]);

  const optionGrpValueChange: (index: number, value: string) => void = (
    index,
    value
  ) => {
    const newOptions = [...optionGroups];
    newOptions[index].name = value;
    setOptionGroups(newOptions);
  };

  const addOptionGroup: () => void = () => {
    console.log("create");
    setOptionGroups((prevOptionGroup) => [
      ...prevOptionGroup,
      {
        name: "",
        collapse: false,
        options: [
          {
            option: "",
            desc: "",
            price: "",
            default: false,
          },
        ],
      },
    ]);
  };

  const removeOptionGrp: (index: number) => void = (index) => {
    const newOptions = optionGroups.filter((_, i) => i !== index); // Remove option at the specified index
    setOptionGroups(newOptions); // Update state with the new options array
  };

  const addOption: (index: number) => void = (index) => {
    const newOption = { option: "", desc: "", price: "", default: false }; // New option to be added
    const newOptions = [...optionGroups]; // Create a copy of the current option groups
    newOptions[index].options = [
      ...newOptions[index].options,
      newOption, // Add the new option first
      // Then spread the existing options
    ];
    setOptionGroups(newOptions);
  };

  const removeOption: (ogIndex: number, oIndex: number) => void = (
    ogIndex,
    oIndex
  ) => {
    const newOptions = [...optionGroups];
    newOptions[ogIndex].options = newOptions[ogIndex].options.filter(
      (_, i) => i !== oIndex
    );
    setOptionGroups(newOptions);
  };

  const optionInputValueChange: (
    ogIndex: number,
    oIndex: number,
    name: string,
    value: string | boolean
  ) => void = (ogIndex, oIndex, name, value) => {
    const newOptions = [...optionGroups];
    const optionGrp = newOptions[ogIndex];
    switch (name) {
      case "option":
        optionGrp.options[oIndex].option = value as string;
        break;
      case "desc":
        optionGrp.options[oIndex].desc = value as string;
        break;
      case "price":
        optionGrp.options[oIndex].price = value as string;
        break;
      case "default":
        console.log("default");
        optionGrp.options.forEach((o) => (o.default = false));
        optionGrp.options[oIndex].default = value as boolean;

        break;
    }
    setOptionGroups(newOptions);
  };

  const optionTableCollapse: (ogIndex: number) => void = (ogIndex) => {
    const newOptions = [...optionGroups];
    newOptions[ogIndex].collapse = !newOptions[ogIndex].collapse;
    setOptionGroups(newOptions);
  };
  return (
    <AddProductContext.Provider
      value={{
        register,
        image,
        setImage,
        previewImage,
        setPreviewImage,
        imageError,
        setImageError,
        optionGroups,
        optionGrpValueChange,
        addOptionGroup,
        removeOptionGrp,
        addOption,
        removeOption,
        optionInputValueChange,
        optionTableCollapse,
      }}
    >
      {children}
    </AddProductContext.Provider>
  );
};

export default AddProductContextProvider;
