import "../css/preloader.css";
import { useRef } from "react";

const PreLoader: React.FC = () => {
  return (
    <div className="z-50 fixed top-0 right-0 w-full h-full bg-gray-200 flex items-center justify-center">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="450"
        height="450"
        color="#000000"
        fill="none"
        id="svg"
      >
        <path
          d="M2.5 17.5C2.5 19.3856 2.5 20.3284 3.08579 20.9142C3.67157 21.5 4.61438 21.5 6.5 21.5H17.5C19.3856 21.5 20.3284 21.5 20.9142 20.9142C21.5 20.3284 21.5 19.3856 21.5 17.5"
          stroke="currentColor"
          stroke-width="1"
          stroke-linejoin="round"
      
        />
        <path
          d="M10 19.5H14"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 5.5V8.5M15 5.5H18C18.4659 5.5 18.6989 5.5 18.8827 5.42388C19.1277 5.32239 19.3224 5.12771 19.4239 4.88268C19.5 4.69891 19.5 4.46594 19.5 4C19.5 3.53406 19.5 3.30109 19.4239 3.11732C19.3224 2.87229 19.1277 2.67761 18.8827 2.57612C18.6989 2.5 18.4659 2.5 18 2.5H15C14.5341 2.5 14.3011 2.5 14.1173 2.57612C13.8723 2.67761 13.6776 2.87229 13.5761 3.11732C13.5 3.30109 13.5 3.53406 13.5 4C13.5 4.46594 13.5 4.69891 13.5761 4.88268C13.6776 5.12771 13.8723 5.32239 14.1173 5.42388C14.3011 5.5 14.5341 5.5 15 5.5Z"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.5 17.5H2.5L3.80394 11.6323C4.13763 10.1306 4.30448 9.37983 4.85289 8.93992C5.4013 8.5 6.17043 8.5 7.70869 8.5H16.2913C17.8296 8.5 18.5987 8.5 19.1471 8.93992C19.6955 9.37983 19.8624 10.1306 20.1961 11.6323L21.5 17.5Z"
          stroke="currentColor"
          stroke-width="1"
          stroke-linejoin="round"
        />
        <path
          d="M7.5 11.5H8M11.75 11.5H12.25M16 11.5H16.5"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.5 14.5H8M11.75 14.5H12.25M16 14.5H16.5"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg> */}
    </div>
  );
};

export default PreLoader;