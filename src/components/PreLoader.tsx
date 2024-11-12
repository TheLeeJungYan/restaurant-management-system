import "../css/preloader.css";
import { useRef } from "react";

const PreLoader: React.FC = () => {
  return (
    <div className="bg-black/80 min-h-screen w-full flex items-center justify-center">
        <div className="bg-white/40 rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-white/30">
          <div className="loader3"></div>
        </div>
    </div>
  );
};

export default PreLoader;
