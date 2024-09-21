import { createBrowserRouter } from "react-router-dom";
import { Home } from "./page/home/home";
import { Products } from "./page/products/products";
import { DetailsProduct } from "./page/products/details/details";
import Layout from "./components/layout";
import { Favorites } from "./page/products/favorites/favorites";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:idCategory",
        element: <Products />,
      },
      {
        path: "/products/selectBuild/:id",
        element: <DetailsProduct />,
      },
      {
        path: "/Favorites",
        element: <Favorites />,
      },
    ],
  },
]);
