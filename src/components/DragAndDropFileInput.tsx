import { Image02Icon, ImageUploadIcon } from "hugeicons-react";
import { useRef, useState } from "react";
import React from "react";
import {
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
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  setValue: UseFormSetValue<Inputs>;
}

const DragAndDropFileInput: React.FC<Props> = ({
  register,
  errors,
  setValue,
}) => {
  const [overlayShow, setOverlayShow] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);
  const [dragOVer, setDragOver] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const acceptedTypes: string[] = ["image/jpeg", "image/png", "image/jpg"];
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy"; // Show the copy cursor

    // Only set the dragging state if not already true
    if (!isDraggingOver) {
      setIsDraggingOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false); // Reset state when leaving
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length === 0 || !inputRef.current) return;
    console.log(files[0]);
    setValue("image", files[0]);
  };
  return (
    <div className="flex flex-col">
      {previewImage ? (
        <div className="flex flex-col">
          <div
            className="relative h-60 w-full bg-gray-100 border border-gray-300 rounded-md overflow-hidden cursor-pointer"
            onMouseEnter={() => setOverlayShow(true)}
            onMouseLeave={() => setOverlayShow(false)}
          >
            <div
              className={`${
                overlayShow ? "h-60" : "h-0"
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
                  setPreviewImage(null);
                  setImageName(null);
                }}
              >
                Delete
              </button>
            </div>
            <img
              src={previewImage}
              className="h-full w-full object-cover"
            ></img>
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
              errors.image ? "border-primaryColor" : "border-gray-300"
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
          {errors.image?.message == "required" && (
            <span className="text-primaryColor font-poppins block text-xs  drop-shadow-error">
              * Image is required
            </span>
          )}
        </div>
      )}
      <input
        type="file"
        className="w-0 h-0 opacity-0"
        id="imgInput"
        accept="image/png, image/jpeg, image/jpg"
        {...register("image", {
          required: "required",
          onChange: (e) => {
            if (!e.target.files[0]) return;
            const file = e.target.files[0];
            // setPreviewImage(URL.createObjectURL(file));
            console.log(file.type);
            if (!acceptedTypes.includes(file.type)) {
              // setError("image", {
              //   type: "manual",
              //   message: "type",
              // });
              e.target.value = "";
              setPreviewImage(null);
              setImageName(null);
            } else {
              setPreviewImage(URL.createObjectURL(file));
              setImageName(file.name);
            }
          },
          validate: (value) => {
            if (!(value instanceof FileList) || value.length == 0) return true;
            const acceptedFormats = ["jpeg", "jpg", "png"];
            console.log(value);
            // Check if value[0] exists and retrieve the file extension
            const fileExtension = value[0].name.split(".").pop()?.toLowerCase();

            // Ensure fileExtension is defined before checking formats
            if (fileExtension && !acceptedFormats.includes(fileExtension)) {
              setPreviewImage(null);
              setImageName(null);
              if (inputRef.current) {
                inputRef.current.value = "";
              }
              return "type";
            }
            return true;
          },
        })}
        ref={(e) => {
          register("image").ref(e); // Register with React Hook Form
          inputRef.current = e; // Set the custom ref
        }}
      />
    </div>
  );
};

export default DragAndDropFileInput;
