import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductDetail from "./components/productDetail/ProductDetail";
import Contacto from "./components/contacto/Contacto";
import Nosotros from "./components/nosotros/Nosotros";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/productos/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
