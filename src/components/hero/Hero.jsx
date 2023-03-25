import React from "react";
import data from "../../api";
import divisor from "./divisor.png";
import { useState, useEffect } from "react";
import { Carrousel } from "./carrousel/Carrousel";

const Hero = () => {
  const imgArray = [
    data.hero.productos.sifones.img,
    data.hero.productos.agua2l.img,
  ];
  const [indiceFoto, setIndiceFoto] = useState(0);

  return (
    <main className="portada min-h-screen mt-8">
      <Carrousel autoPlay={true} controls={false} />
      <div className="mt-10 relative">
        <img src={divisor} alt="" />
        <h3 className="text-white f-mplus font-medium italic text-xl px-12 absolute top-12 text-shadow-separador ">
          Agua saludable para tu mesa y tu negocio.
        </h3>
      </div>
    </main>
  );
};

export default Hero;
