import React from "react";

const ProductosDeMesa = ({ data }) => {
  return (
    <>
      {data.products.DeMesa.map((product) => (
        <div className="w-5/12" key={product.id}>
          <img src={product.img} alt={product.titulo} />
          <h3 className="text-center text-sm font-semibold">
            {product.titulo}
          </h3>
        </div>
      ))}
    </>
  );
};

export default ProductosDeMesa;