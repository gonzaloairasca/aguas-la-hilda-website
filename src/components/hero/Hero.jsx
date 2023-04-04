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
          src={window.innerWidth > 768 ? divisorLg : divisor}
          className="w-full"
          alt="divisor"
        />
        <h3 className="text-white f-mplus font-medium italic text-xl px-12 lg:left-80 lg:top-16 2xl:left-[36rem] 2xl:top-[6rem] 2xl:text-4xl md:text-3xl text-center absolute top-12 text-shadow-separador ">
          Agua saludable para tu mesa y tu negocio.
        </h3>
      </div>
    </main>
  );
};

export default Hero;
