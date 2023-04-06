import React from "react";
import Img from "./nosotros-img.jpg";
import ImgDos from "./nosotros-img2.jpg";
import ImgTres from "./nosotros-img3.jpg";

const HeroNosotros = () => {
  return (
    <section className="mt-32 md:mt-24 2xl:mt-32 ">
      <div className="h-64 md:h-96 banner flex items-center">
        <h1 className="f-montserrat font-extrabold text-2xl lg:text-5xl text-center mx-auto text-white text-shadow px-3 2xl:text-6xl">
          Trayectoria, experiencia y responsabilidad.
        </h1>
      </div>
      <div className="px-8 mt-8 lg:px-16 2xl:max-w-[1500px] 2xl:mx-auto  2xl:mt-20 ">
        <h2 className="font-semibold text-lg text-zinc-900 2xl:text-3xl	">
          ¡HOLA! Somos Aguas La Hilda, una empresa dedicada a la producción y
          envasado de agua baja en sodio.
        </h2>

        <p className="text-zinc-700 mt-4 2xl:text-2xl">
          Trabajamos diariamente para llegar a las casas de familia, comercios y
          empresas en la ciudad de Cordoba y el interior; mediante un servicio
          de distribución y atención al cliente de calidad, siendo así nuestro
          objetivo acompañar su hidratación.
        </p>

        <h2 className="font-semibold text-lg mt-6 text-zinc-900 2xl:text-3xl	">
          Nuestra Mision
        </h2>
        <p className="mt-2 text-zinc-700  2xl:text-2xl">
          Producir y vender agua baja en tanto dentro de la ciudad de Cordoba
          como en el interior, llegando a las personas mediante un servicio
          distribución y atención al cliente de calidad, con el fin de
          satisfacer y acompañar su hidratación en las distintas actividades de
          la vida diaria
        </p>

        <h2 className="font-semibold text-lg mt-6 text-zinc-900 2xl:text-3xl	">
          Nuestros Visión
        </h2>
        <p className="mt-2 text-zinc-700  2xl:text-2xl">
          Lograr ser una empresa con presencia nacional, siendo reconocida y
          elegida por brindar un producto y servicio de calidad.
        </p>
        <h2 className="font-semibold text-lg mt-6 text-zinc-900 2xl:text-3xl	">
          Nuestros Valores
        </h2>
        <ul className="mt-2 text-zinc-700  2xl:text-2xl">
          <li>Trabajo en equipo</li>
          <li>Pasión por lo que hacemos</li>
          <li>Responsabilidad</li>
          <li>Compromiso</li>
          <li>Calidad en el producto y servicio</li>
        </ul>
      </div>
      <div className=" md:flex md:justify-between lg:gap-3 md:px-8 lg:px-16 md:mt-8  2xl:max-w-[1500px] 2xl:mx-auto  2xl:mt-14 ">
        <img
          src={Img}
          alt="imagen la planta potabilizadora la hilda"
          className="p-8 md:p-0 md:w-[32%]"
        />
        <img
          src={ImgDos}
          alt="imagen la planta potabilizadora la hilda"
          className="px-8 md:p-0 md:w-[32%]"
        />
        <img
          src={ImgTres}
          alt="imagen la planta potabilizadora la hilda"
          className="p-8 md:p-0 md:w-[32%]"
        />
      </div>
      <div className="border-dotted border-t-2 border-b-2 my-8 mx-8">
        <p className="italic f-montserrat font-semibold text-zinc-700 text-xl p-8 mb-8 text-center  2xl:text-3xl">
          "Productos de calidad para tu mesa y tu negocio."
        </p>
      </div>
    </section>
  );
};

export default HeroNosotros;
