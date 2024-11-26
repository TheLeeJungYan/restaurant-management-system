import { createBrowserRouter } from "react-router-dom";
import Order from "./pages/Order";
import Products from "./pages/Products/index";
import ProductsCreate from "./pages/Products/create";
import Login from "./pages/Authentication/Login";
import PrivateRoute from "./route/PrivateRoute";
import ProductView from "./pages/Products/view"
import ProductEdit from "./pages/Products/edit"


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
      {
        path:"/product/view/:id",
        element:<ProductView/>
      },{
        path:"/product/edit/:id",
        element:<ProductEdit/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
