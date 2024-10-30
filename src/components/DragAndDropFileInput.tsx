import { Image02Icon } from "hugeicons-react";
import { useRef, useState } from "react";
import React from "react";
import { UseFormRegister, UseFormSetError } from "react-hook-form";
import { FieldErrors } from "react-hook-form";

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
interface Props {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  setError: UseFormSetError<Inputs>;
}

const DragAndDropFileInput: React.FC<Props> = ({
  register,
  errors,
  setError,
}) => {
  const [overlayShow, setOverlayShow] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const acceptedTypes: string[] = ["image/jpeg", "image/png", "image/jpg"];

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
              <button className="bg-white rounded-full px-3 font-poppins py-2 cursor-pointer">
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
            className={`${
              errors.image ? "border-primaryColor" : "border-gray-300"
            } h-60 border rounded-md border-dashed flex items-center justify-center flex-col font-poppins`}
          >
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
            setPreviewImage(URL.createObjectURL(file));
            return;
            if (!acceptedTypes.includes(file.type)) {
              setError("image", {
                type: "manual",
                message: "type",
              });
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
