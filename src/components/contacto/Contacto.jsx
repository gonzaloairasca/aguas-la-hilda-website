import React from "react";
import HeaderSecundario from "../header/HeaderSecundario";
import SectionContacto from "./sectionContacto/SectionContacto";
import Formulario from "./formaulario/Formulario";
import InfoContacto from "./infoContacto/InfoContacto";
import Footer from "../footer/Footer";
import Redes from "../redes/Redes";
import Loader from "../loader/Loader";
import { useState, useEffect } from "react";

const Contacto = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  return (
    <>
      <HeaderSecundario />
      {loading ? (
        <Loader />
      ) : (
        <>
          <SectionContacto />
          <section className="flex flex-col items-center lg:flex-row lg:justify-around ">
            <Formulario />
            <div className=" flex flex-col">
              <InfoContacto />
              <div className="py-4 mb-16 mx-auto">
                <Redes celeste={true} />
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Contacto;
