import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout
    children: [
      { index: true, element: <Home /> },          // /
      { path: "product/:id", element: <ProductDetails /> }, // /product/1
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
