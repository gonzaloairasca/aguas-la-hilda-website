import React from "react";
import Img from "./nosotros-img.jpg";
import ImgDos from "./nosotros-img2.jpg";
import ImgTres from "./nosotros-img3.jpg";

const HeroNosotros = () => {
  return (
    <section className="mt-32">
      <div className="h-64 md:h-96 banner flex items-center">
        <h1 className="f-montserrat font-extrabold text-2xl lg:text-5xl text-center mx-auto text-white text-shadow px-3">
          Trayectoria, experiencia y responsabilidad.
        </h1>
      </div>
      <div className="px-8 mt-8 lg:px-16">
        <h2 className="font-semibold text-lg text-zinc-900	">
          Somos La Hilda, una empresa que produce agua mineral.
        </h2>
        <h2 className="font-semibold text-lg text-zinc-900 mt-2	">
          Nuestro compromiso con el cliente es cumplirle, para poder proveerle
          una excelente agua para uso residencial, comercial e industrial.
        </h2>
        <p className="text-zinc-700 mt-4">
          Nuestra trayectoria, experiencia y responsabilidad nos caracteriza en
          el rubro y con cada cliente.
        </p>
        <p className="mt-4 text-zinc-700">
          El agua que producimos es saludable, porque además de ser natural, ha
          sido cuidadosamente purificada para eliminar los contaminantes
          físicos, químicos y biológicos que pudieran estar presentes. Logrando
          calidad en nuestro producto, caracterizado por se un agua fina y
          liviana, con los minerales justos que el cuerpo necesita.
        </p>
      </div>
      <div className=" lg:flex lg:justify-between lg:gap-3 lg:px-16 lg:mt-8">
        <img
          src={Img}
          alt="imagen la planta potabilizadora la hilda"
          className="p-8 lg:p-0 lg:w-[32%]"
        />
        <img
          src={ImgDos}
          alt="imagen la planta potabilizadora la hilda"
          className="px-8 lg:p-0 lg:w-[32%]"
        />
        <img
          src={ImgTres}
          alt="imagen la planta potabilizadora la hilda"
          className="p-8 lg:p-0 lg:w-[32%]"
        />
      </div>
      <div className="border-dotted border-t-2 border-b-2 my-8 mx-8">
        <p className="italic f-montserrat font-semibold text-zinc-700 text-xl p-8 mb-8 text-center">
          "Productos de calidad para tu mesa y tu negocio."
        </p>
      </div>
    </section>
  );
};

export default HeroNosotros;
