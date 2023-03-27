import React from "react";
import data from "../../api";
import ProductosDeMesa from "./ProductosDeMesa";
import ProductosRetornables from "./ProductosRetornables";

const Productos = () => {
  return (
    <section className="pb-10 pt-10">
      <h2 className="bg-[#39B5FF] text-shadow-separador w-max ml-4  px-2 py-1 f-mplus font-bold text-2xl text-white rounded-[3px] text-center mt-12 shadow-portada">
        NUESTROS PRODUCTOS
      </h2>
      <div>
        <h4 className="bg-[#39B5FF] text-shadow-separador w-max f-mplus font-bold text-xs text-white rounded-[3px] p-1 shadow-portada mx-4 mt-12 mb-4">
          LINEA DE MESA
        </h4>
        <div className="flex flex-wrap justify-around pb-8">
          <ProductosDeMesa data={data} />
        </div>
      </div>
      <div className="bg-productosRetornables p-px">
        <h3 className="bg-[#39B5FF] text-shadow-separador w-max f-mplus font-bold text-xs text-white rounded-[3px] p-1 shadow-portada  mx-4 mt-12 mb-4">
          LINEA RETORNABLE
        </h3>
        <div className="flex flex-wrap justify-around ">
          <ProductosRetornables data={data} />
        </div>
      </div>
    </section>
  );
};

export default Productos;
