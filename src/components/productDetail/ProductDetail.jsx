import React from "react";
import HeaderSecundario from "../header/HeaderSecundario";
import { useParams } from "react-router-dom";
import data from "../../api";

const ProductDetail = () => {
  let { rutaProducto } = useParams();
  const producto = data.products.filter(
    (producto) => producto.ruta === rutaProducto
  );
  return (
    <>
      <HeaderSecundario />
      <section>
        <img src={producto[0].img} alt={producto[0].titulo} />
        <h1>{producto[0].titulo}</h1>
      </section>
    </>
  );
};

export default ProductDetail;
