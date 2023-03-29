import React from "react";
import wsp from "./whatsapp.svg";

const SeDistribuidor = () => {
  return (
    <section className="bg-seDistribuidor lg:bg-cover f-mplus">
      <div className="bg-[#39b6ff2f] ">
        <div className=" px-4 py-10 lg:py-20 lg:w-3/6 md:mx-auto">
          <div className="bg-[#39B5FF] rounded-t-xl shadow-elementos">
            <h1 className="py-6 px-3 text-2xl font-bold text-white text-shadow-separador lg:text-4xl lg:pl-5">
              ¡SE DISTRIBUIDOR!
            </h1>
          </div>
          <div className="bg-[#ffffff91] rounded-b-xl font-medium  pb-1 lg:pb-4 lg:px-3">
            <p className="p-3 lg:text-2xl">
              Nos encontramos en proceso de expansión y estamos buscando
              distribuidores para ampliar nuestra cobertura.
            </p>
            <p className="px-3 lg:text-2xl">
              Unite a nuestro equipo y trabaja con nosotros!
            </p>
            <button className="bg-[#39B5FF] py-2 px-3 m-3 text-white font-bold flex items-center rounded-xl shadow-elementos hover:bg-[#2d8dc5] lg:text-2xl lg:mt-8">
              <img className="pr-1 lg:h-12 " src={wsp} alt="wsp icon" />
              CONTACTANOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeDistribuidor;
