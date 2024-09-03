import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Root from "./routes/root.jsx";
import ErrorPage from "./components/errorPage.jsx";
import ProductDetails, {
  loader as productByIdLoader,
} from "./routes/product-details.jsx";
import Products, { loader as productLoader } from "./routes/products.jsx";
import ShoppingCart from "./routes/shopping-cart.jsx";
import Index from "./routes/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
        loader: productByIdLoader,
      },
      { path: "/products", element: <Products />, loader: productLoader },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
