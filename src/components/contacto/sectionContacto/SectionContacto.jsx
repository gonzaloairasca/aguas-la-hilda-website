import React from "react";
import wsp from "../../seDistribuidor/whatsapp.svg";

const SectionContacto = () => {
  return (
    <section className="mt-32 md:mt-24 2xl:mt-32">
      <div className="h-64 md:h-96 bannerContacto flex flex-col justify-center items-center">
        <h1 className="f-montserrat font-extrabold text-2xl lg:text-5xl text-center mx-auto text-white text-shadow px-3">
          Contacto Directo
        </h1>
        <a
          href="https://api.whatsapp.com/send?phone=+5493515937318&text=Hola,%20quiero%20consultar%20para%20ser%20distribuidor"
          target="_blank"
        >
          <button className="bg-[#39B5FF] py-1 px-3 m-3 text-white font-bold flex items-center rounded-xl shadow-elementos hover:bg-[#2d8dc5] lg:text-xl lg:mt-8">
            <img className="pr-1 lg:h-6 " src={wsp} alt="wsp icon" />
            CONTACTANOS
          </button>
        </a>
      </div>
    </section>
  );
};

export default SectionContacto;
