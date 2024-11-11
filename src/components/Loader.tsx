import "../css/loader.css";
import { SentIcon } from "hugeicons-react";
interface props {
  show: boolean;
}
const Loader: React.FC<props> = ({ show }) => {
  return (
    <div
      className={`fixed uploader bg-black/80 z-200 flex items-center justify-center overflow-hidden top-0 left-0 ${
        show ? "w-full h-full" : "w-0 h-0 "
      }`}
    >
      <div className="flex flex-col items-center gap-2 rounded-xl py-2 px-2">
        <div className="flex items-center justify-center shadow-md p-2 bg-white/40 rounded-xl">
          <div className="loader2"></div>
        </div>
        <div className="text-gray-200 uppercase font-poppins">Uploading..</div>
      </div>
    </div>
  );
};

export default Loader;

/* HTML: <div classNameName="loader"></div> */
