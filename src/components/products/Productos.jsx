import React from "react";
import data from "../../api";

const Productos = () => {
  return (
    <section>
      <h2 className="bg-[#39B5FF] text-shadow-separador w-max  px-2 py-1 f-mplus font-bold text-2xl text-white rounded-[3px] text-center mt-12 mx-auto shadow-portada">
        NUESTROS PRODUCTOS
      </h2>
      <div>
        <h4 className="bg-[#39B5FF] text-shadow-separador w-max f-mplus font-bold text-xs text-white rounded-[3px] p-1 shadow-portada mx-4 mt-12 mb-4">
          LINEA DE MESA
        </h4>
        <div className="flex flex-wrap justify-around">
          {data.products.DeMesa.map((product) => (
            <>
              <div className="w-5/12" key={product.titulo}>
                <img src={product.img} alt={product.titulo} />
                <h3 className="text-center text-sm font-semibold">
                  {product.titulo}
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>
        <h3 className="bg-[#39B5FF] text-shadow-separador w-max f-mplus font-bold text-xs text-white rounded-[3px] p-1 shadow-portada  mx-4 mt-12 mb-4">
          LINEA RETORNABLE
        </h3>
        <div className="flex flex-wrap justify-around">
          {data.products.retornables.map((product) => (
            <>
              <div className="w-5/12" key={product.titulo}>
                <img src={product.img} alt={product.titulo} />
                <h3 className="text-center  text-sm font-semibold">
                  {product.titulo}
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;
