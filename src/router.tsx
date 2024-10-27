import { createBrowserRouter } from "react-router-dom";
import Order from "./pages/Order";
import Products from "./pages/Products";
import ProductManagement from "./pages/ProductManagement";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Order />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path:"/productManagement",
    element:<ProductManagement/>
  }
]);
