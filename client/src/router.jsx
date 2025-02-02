import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ManageProduct from "./pages/ManageProduct";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import DetailProduct from "./pages/DetailProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/product",
    element: <MainLayout />,
    children: [
      { path: "manage", element: <ManageProduct /> },
      { path: "add", element: <AddProduct /> },
      { path: "edit/:id", element: <EditProduct /> },
      { path: "detail/:id", element: <DetailProduct /> },
    ],
  },
]);

export default router;
