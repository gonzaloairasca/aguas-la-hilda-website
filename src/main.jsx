import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductDetail from "./components/productDetail/ProductDetail";
import Contacto from "./components/contacto/Contacto";
import Nosotros from "./components/nosotros/Nosotros";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
