import { Image02Icon } from "hugeicons-react";
import { AddProductContext } from "../context/AddProductContext";
import { useContext, useState } from "react";
import "../css/error.css";
const DragAndDropFileInput: React.FC = () => {
  const [overlayShow, setOverlayShow] = useState<boolean>(false);
  const addProductContext = useContext(AddProductContext);
  if (addProductContext == undefined) return;
  const {
    image,
    setImage,
    setImageError,
    imageError,
    setPreviewImage,
    previewImage,
  } = addProductContext;
  console.log(image);
  const acceptedTypes: string[] = ["image/jpeg", "image/png", "image/jpg"];
  const checkFileType: (file: File) => boolean = (file) => {
    return acceptedTypes.includes(file.type);
  };
  const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    if (e.target.files == null) return;
    const file: File = e.target.files[0];

    if (checkFileType(file)) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
      setImageError(false);
      console.log("true");
    } else {
      setImage(null);
      setPreviewImage(null);
      setImageError(true);
      return;
    }
  };
  return (
    <div className="flex flex-col">
      {previewImage ? (
        <div className="flex flex-col">
          <div
            className="relative h-72 w-full bg-gray-100 border border-gray-300 rounded-md overflow-hidden cursor-pointer"
            onMouseEnter={() => setOverlayShow(true)}
            onMouseLeave={() => setOverlayShow(false)}
          >
            <div
              className={`${
                overlayShow ? "h-72" : "h-0"
              } w-full overflow-hidden flex items-center justify-center bg-black/50 absolute top-0 left-0 z-50`}
            >
              <label
                htmlFor="imgInput"
                className="bg-white rounded-full px-3 font-poppins py-2 cursor-pointer"
              >
                Browse
              </label>
            </div>
            <img
              src={previewImage}
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="text-sm font-poppins underline text-blue-500 cursor-pointer text-center">
            {image ? image.name : ""}
          </div>
        </div>
      ) : (
        <div>
          <div
            className={`${
              imageError ? "border-primaryColor" : "border-gray-300"
            } h-72 border rounded-md border-dashed flex items-center justify-center flex-col font-poppins`}
          >
            <Image02Icon
              size={24}
              className={`${
                imageError
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
              imageError
                ? "text-primaryColor drop-shadow-error"
                : "text-gray-400"
            }`}
          >
            * Only PNG, JPG, JPEG are allowed
          </span>
        </div>
      )}
      <input
        type="file"
        onChange={handleChange}
        className="w-0 h-0"
        id="imgInput"
      />
    </div>
  );
};

export default DragAndDropFileInput;
