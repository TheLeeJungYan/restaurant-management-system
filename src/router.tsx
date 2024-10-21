import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import Products from "./pages/Products";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);
