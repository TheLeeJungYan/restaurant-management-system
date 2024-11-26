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
import { Inputs, OptionsGrp, Options, Products, ViewOptionGroups } from "../Types/type"
interface ManageProductContextType {
  edit?:boolean
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
  image?:File,
  image_url?:string
  image_name:string | null,
  productId:number | undefined
}

export const ManageProductContext = createContext<
ManageProductContextType | undefined
>(undefined);

const ManageProductContextProvider: React.FC<{ children: React.ReactNode,edit?:boolean,product:Products| null, optionGrps:null | ViewOptionGroups[], image?:File  }> = ({
  children,edit,product,optionGrps,image
}) => {
  let optionGroups:OptionsGrp[] = []
  const image_url:string|undefined = product?.image_url;
  const url_parts:string[] | undefined = image_url?.split('.');
  let image_name = null;
  const productId:number | undefined = product?.id;
  if(edit){
    image_name = product?.name+"."+(url_parts?.[url_parts.length - 1] || '');
  }
  
  if(optionGrps){
    optionGroups = [];
    
    optionGrps.forEach((og)=>{
      const options: Options[] = [];
      let defaultOption = '0';
      og.options.forEach((o,oIndex)=>{
          const currentOpt = {
            option:o.option,
            desc:o.description,
            price: parseFloat(String(o.price)).toFixed(2).toString()
          }
          if(o.default){
            defaultOption = oIndex.toString()
          }
          options.push(currentOpt);
      });
      const currentOptionsGrps = {
        name:og.name,
        collapse:false,
        default:defaultOption,
        options:options
      }
      optionGroups.push(currentOptionsGrps);
    })
  }else{
     optionGroups = [
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
      
    ];
  }

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
      name: product?.name,
      description: product?.description,
      category: product?.category,
      price: product? product.price : undefined,
      image: image,
      optionGroups: optionGroups,
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
    <ManageProductContext.Provider
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
        edit,
        image,
        image_url,
        image_name,
        productId
      }}
    >
      {children}
    </ManageProductContext.Provider>
  );
};

export default ManageProductContextProvider;
