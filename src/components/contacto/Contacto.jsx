import React from "react";
import HeaderSecundario from "../header/HeaderSecundario";
import SectionContacto from "./sectionContacto/SectionContacto";
import Formulario from "./formaulario/Formulario";
import InfoContacto from "./infoContacto/InfoContacto";

const Contacto = () => {
  return (
    <>
      <HeaderSecundario />
      <SectionContacto />
      <section className="flex flex-col items-center scroll-m-20 lg:flex-row lg:justify-center ">
        <Formulario />
        <InfoContacto />
      </section>
    </>
  );
};

export default Contacto;
