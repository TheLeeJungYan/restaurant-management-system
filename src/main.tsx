import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "./index.css";
import "rsuite/dist/rsuite.min.css"; // or 'rsuite/styles/index.less';
import { CustomProvider } from "rsuite";
import AuthProvider from "./context/AuthContext.tsx";
import "non.geist";
import "non.geist/mono";
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AuthProvider>
    <CustomProvider>
      <RouterProvider router={router}></RouterProvider>
    </CustomProvider>
  </AuthProvider>
  // </StrictMode>
);
