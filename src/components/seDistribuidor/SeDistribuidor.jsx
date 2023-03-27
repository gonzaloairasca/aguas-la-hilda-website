import React from "react";
import wsp from "./whatsapp.svg";

const SeDistribuidor = () => {
  return (
    <section className="bg-seDistribuidor f-mplus">
      <div className="bg-[#39b6ff2f]">
        <div className=" px-4 py-10 shadow-elementos">
          <div className="bg-[#39B5FF] rounded-t-xl shadow-elementos">
            <h1 className="py-6 px-3 text-2xl font-bold text-white text-shadow-separador">
              ¡SE DISTRIBUIDOR!
            </h1>
          </div>
          <div className="bg-[#ffffff91] rounded-b-xl font-medium  pb-1">
            <p className="p-3">
              Nos encontramos en proceso de expansión y estamos buscando
              distribuidores para ampliar nuestra cobertura.
            </p>
            <p className="px-3 ">
              Unite a nuestro equipo y trabaja con nosotros!
            </p>
            <button className="bg-[#39B5FF] py-2 px-3 m-3 text-white font-bold flex items-center rounded-xl shadow-elementos hover:bg-[#2d8dc5]">
              <img className="pr-1" src={wsp} alt="wsp icon" /> CONTACTANOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeDistribuidor;
