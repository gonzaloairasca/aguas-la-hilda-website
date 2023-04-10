import React from "react";
import divisor from "./divisor.png";
import divisorLg from "./divisor-lg.png";
import Carrousel from "./carrousel/Carrousel";

const Hero = () => {
  return (
    <main className="portada mt-4">
      <Carrousel autoPlay={true} controls={false} />
      <div className="relative top-10">
        <img
          src={window.innerWidth > 700 ? divisorLg : divisor}
          className="w-full"
          alt="divisor"
        />
        <h3 className="text-white f-mplus font-medium italic text-xl px-12 md:top-8 md:left-10 lg:top-10 lg:left-[11rem] xl:left-80 xl:top-16 2xl:left-[36rem] 2xl:top-[6rem] 2xl:text-4xl md:text-3xl text-center absolute top-12 text-shadow-separador ">
          Agua baja en sodio para tu mesa y tu negocio.
        </h3>
      </div>
    </main>
  );
};

export default Hero;
