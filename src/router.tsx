import { createBrowserRouter } from "react-router-dom";
import Order from "./pages/Order";
import Products from "./pages/Products/index";
import ProductsCreate from "./pages/Products/create";
import Login from "./pages/Authentication/Login";
import PrivateRoute from "./route/PrivateRoute";




export const router = createBrowserRouter([

  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Order />,
      },
      {
        path: "/products",
        element: <Products />,
       
      },
      {
        path: "/product/create",
        element: <ProductsCreate />,
       
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
