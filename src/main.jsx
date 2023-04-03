import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductDetail from "./components/productDetail/ProductDetail";
import Contacto from "./components/contacto/Contacto";
import Nosotros from "./components/nosotros/Nosotros";
import "./index.css";
import {
  createHashRouter,
  RouterProvider,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/productos/:rutaProducto",
//     element: <ProductDetail />,
//   },
//   {
//     path: "/contacto",
//     element: <Contacto />,
//   },
//   {
//     path: "/nosotros",
//     element: <Nosotros />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/productos/:rutaProducto" element={<ProductDetail />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
