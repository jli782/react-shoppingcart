import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Root from "./routes/root.jsx";
import ErrorPage from "./components/errorPage.jsx";
import ProductDetails from "./routes/product-details.jsx";
import Products from "./routes/products.jsx";
import ShoppingCart from "./routes/shopping-cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      { path: "/products", element: <Products /> },
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
