import React from "react";
import divisor from "./divisor.png";
import Carrousel from "./carrousel/Carrousel";

const Hero = () => {
  return (
    <main className="portada mt-8">
      <Carrousel autoPlay={true} controls={false} />
      <div className="relative top-10">
        <img src={divisor} alt="" />
        <h3 className="text-white f-mplus font-medium italic text-xl px-12 absolute top-12 text-shadow-separador ">
          Agua saludable para tu mesa y tu negocio.
        </h3>
      </div>
    </main>
  );
};

export default Hero;
