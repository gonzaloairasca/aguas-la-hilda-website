import React from "react";
import data from "../../api";
import ProductosDeMesa from "./ProductosDeMesa";
import ProductosRetornables from "./ProductosRetornables";

const Productos = () => {
  return (
    <section className="bg-gradient-to-b from-[#52c1fd54] to-[#52c1fd2a] pt-10">
      <h2 className="bg-[#39B5FF] text-shadow-separador w-max ml-4  px-2 py-1 f-mplus font-bold text-2xl text-white rounded-[3px] text-center mt-12 shadow-portada lg:text-3xl lg:ml-12 lg:py-2 lg:px-3">
        NUESTROS PRODUCTOS
      </h2>
      <div className="">
        <h4 className="bg-[#39B5FF] text-shadow-separador w-max f-mplus font-bold text-xs text-white rounded-[3px] p-1 shadow-portada mx-4 mt-12 mb-4 lg:ml-12 lg:text-base">
          LINEA DE MESA
        </h4>
        <div className="flex flex-wrap justify-around pb-8 lg:justify-start  text-blue-900">
          <ProductosDeMesa data={data} />
        </div>
      </div>
      <div className=" p-px pb-10">
        <h3 className="bg-[#39B5FF] text-shadow-separador w-max f-mplus font-bold text-xs text-white rounded-[3px] p-1 shadow-portada  mx-4 mt-12 mb-4 lg:ml-12 lg:text-base">
          LINEA RETORNABLE
        </h3>
        <div className="flex flex-wrap justify-around lg:justify-start  text-blue-900">
          <ProductosRetornables data={data} />
        </div>
      </div>
    </section>
  );
};

export default Productos;
