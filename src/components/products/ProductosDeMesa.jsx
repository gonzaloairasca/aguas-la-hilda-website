import React from "react";
import { Link } from "react-router-dom";

const ProductosDeMesa = ({ data }) => {
  return (
    <>
      {data.products.DeMesa.map((product) => (
        <div
          className="w-5/12 lg:w-1/5 hover:bg-[#0000000c] hover:rounded-xl"
          key={product.id}
        >
          <Link to={`productos/${product.id}`}>
            <img src={product.img} alt={product.titulo} />
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
