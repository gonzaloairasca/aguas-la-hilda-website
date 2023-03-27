import React from "react";

const ProductosRetornables = ({ data }) => {
  return (
    <>
      {data.products.retornables.map((product) => (
        <div className="w-5/12" key={product.id}>
          <img src={product.img} alt={product.titulo} />
          <h3 className="text-center  text-sm font-semibold">
            {product.titulo}
          </h3>
        </div>
      ))}
    </>
  );
};

export default ProductosRetornables;
