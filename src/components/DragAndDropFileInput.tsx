import { Image02Icon, ImageUploadIcon } from "hugeicons-react";
import { useEffect, useRef, useState } from "react";
import React from "react";
import {
  FieldError,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { FieldErrors } from "react-hook-form";
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
interface Props {
  value?: File | null;
  onChange: (files: File | null) => void;
  errors: FieldErrors<Inputs>;
}

const DragAndDropFileInput: React.FC<Props> = ({ value, onChange, errors }) => {
  const [overlayShow, setOverlayShow] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const acceptedTypes: string[] = ["image/jpeg", "image/png", "image/jpg"];
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    if (isDraggingOver) return;
    console.log("dragging over");
    console.log(isDraggingOver);
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    const { files } = e.dataTransfer;

    if (files?.length > 1) return;

    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(files[0]);
    if (!inputRef.current) return;
    inputRef.current.files = dataTransfer.files;
    inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files;
      const type = file[0].type;
      if (acceptedTypes.includes(type)) {
        setImageName(file[0].name);
        setPreviewImage(URL.createObjectURL(file[0]));
        onChange(file[0]);
      } else {
        alert("only accept JPG,JPEG,PNG");
      }
    }
  };
  return (
    <div className="flex flex-col">
      {previewImage ? (
        <div className="flex flex-col">
          <div
            className={`relative h-60 w-full bg-gray-100 border border-dashed rounded-md overflow-hidden cursor-pointer ${
              isDraggingOver ? "border-green-600 border-2" : "border-gray-300"
            }`}
            onMouseEnter={() => {
              setOverlayShow(true);
            }}
            onMouseLeave={() => {
              setOverlayShow(false);
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div
              className={` bg-green-500/50 flex items-center justify-center text-white absolute top-0 left-0 h-60 w-full z-50 transition-all duration-100 ${
                isDraggingOver ? "opacity-100" : "opacity-0"
              }`}
            >
              <ImageUploadIcon size={24} />
            </div>

            <div
              className={`${
                overlayShow && !isDraggingOver ? "h-60" : "h-0"
              } w-full overflow-hidden flex gap-2 items-center justify-center bg-black/50 absolute top-0 left-0 z-50`}
            >
              <label
                htmlFor="imgInput"
                className="bg-white rounded-full px-3 font-poppins py-2 cursor-pointer"
              >
                Browse
              </label>
              <button
                className="bg-white rounded-full px-3 font-poppins py-2 cursor-pointer"
                onClick={() => {
                  if (!inputRef.current) return;
                  inputRef.current.value = "";
                  console.log(inputRef.current);
                  onChange(null);
                  setPreviewImage(null);
                  setImageName(null);
                }}
              >
                Delete
              </button>
            </div>
            <img
              src={previewImage}
              className="h-full w-full object-cover z-10"
            />
          </div>
          <div className="text-sm font-poppins underline text-blue-500 cursor-pointer text-center">
            {imageName ? imageName : ""}
          </div>
        </div>
      ) : (
        <div>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`${
              errors.image && !isDraggingOver
                ? "border-primaryColor"
                : "border-gray-300"
            } h-60 border rounded-md border-dashed flex items-center justify-center flex-col font-poppins ${
              isDraggingOver &&
              "border-green-600 border-2 bg-green-50 text-green-600"
            }`}
          >
            {isDraggingOver ? (
              <>
                <ImageUploadIcon size={24} />
              </>
            ) : (
              <>
                <Image02Icon
                  size={24}
                  className={`${
                    errors.image
                      ? "text-primaryColor  drop-shadow-error"
                      : "text-gray-400"
                  }`}
                />
                <span className="text-sm text-gray-500 mt-2">
                  Drag and Drop your product Image
                </span>
                <span className="text-xs text-gray-400">or</span>
                <label
                  htmlFor="imgInput"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Browse
                </label>
              </>
            )}
          </div>
          <span
            className={`text-xs font-poppins mt-1 ${
              errors.image?.message == "type"
                ? "text-primaryColor drop-shadow-error"
                : "text-gray-400"
            }`}
          >
            * Only PNG, JPG, JPEG are allowed
          </span>
          {errors.image && (
            <span className="text-primaryColor font-poppins block text-xs  drop-shadow-error">
              * {errors.image.message}
            </span>
          )}
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        className="w-0 h-0 opacity-0"
        id="imgInput"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleChange}
      />
    </div>
  );
};

export default DragAndDropFileInput;
