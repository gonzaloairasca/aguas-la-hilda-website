import React from "react";
import { Link } from "react-router-dom";

const ProductosDeMesa = ({ data }) => {
  const productosDeMesa = data.products.filter(
    (producto) => producto.linea === "LINEA DE MESA"
  );
  return (
    <>
      {productosDeMesa.map((product) => (
        <div
          className="w-5/12 md:w-4/12 lg:w-1/5 hover:bg-[#0000000c] hover:rounded-xl"
          key={product.id}
        >
          <Link to={`productos/${product.ruta}`}>
            <img
              src={product.img}
              alt={product.titulo}
              className="h-auto w-auto"
            />
            <h3 className="text-center text-sm font-semibold lg:text-lg lg:font-bold">
              {product.titulo}
            </h3>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductosDeMesa;
