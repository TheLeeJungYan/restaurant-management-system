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
      <div className="flex items-center gap-4 rounded-xl bg-white/10 py-2.5 px-4">
        <div className="flex items-center justify-center shadow-md p-2 bg-white/20 rounded-xl">
          <div className="loader2"></div>
        </div>
        <div className="font-sans text-gray-200 font-semibold text-xl flex gap-2 items-end">
          <div className="loadingText">UPLOADING</div>
          <div className="flex gap-1">
            <div
              className="dot bg-gray-200 w-1 h-1 rounded-full"
              style={{ "--delay": "0.0s" } as React.CSSProperties}
            ></div>
            <div
              className="dot bg-gray-200 w-1 h-1 rounded-full"
              style={{ "--delay": "0.2s" } as React.CSSProperties}
            ></div>
            <div
              className="dot bg-gray-200 w-1 h-1 rounded-full"
              style={{ "--delay": "0.4s" } as React.CSSProperties}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

/* HTML: <div classNameName="loader"></div> */
