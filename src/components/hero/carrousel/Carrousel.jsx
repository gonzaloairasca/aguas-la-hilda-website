import React from "react";
import data from "../../../api";
import { useState, useEffect } from "react";

const Carrousel = (props) => {
  const products = [
    data.hero.productos.sifones,
    data.hero.productos.agua2l,
    data.hero.productos.sodasMedioLitro,
    data.hero.productos.aguaMedioLitro,
    data.hero.productos.bidonVeinteLitrosConBase,
    data.hero.productos.bidonVeinteLitrosConPico,
    data.hero.productos.bidonVeinteLitrosRetornable,
    data.hero.productos.baseBidon,
    data.hero.productos.dispenserRed,
    data.hero.productos.cafeBidon,
    data.hero.productos.bidonSeisLitrosDescartable,
    data.hero.productos.dispenser,
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(
    products[selectedIndex]
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || !controls) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, products);
      }, 5000);
      return () => clearInterval(interval);
    }
  });
  const selectNewImage = (index, products, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < products.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : products.length - 1;
      setSelectedProduct(products[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, products, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, products);
  };

  return (
    <div
      className={
        loaded
          ? "flex flex-col md:flex-row justify-center md:gap-4 items-center md:items-center  transition duration-[1000ms] opacity-100"
          : "flex flex-col md:flex-row justify-center md:gap-4 items-center md:items-center transition duration-[500ms] opacity-0"
      }
    >
      <img
        src={selectedProduct.img}
        alt={selectedProduct.titulo}
        className="w-6/6 mt-24 md:w-3/12 md:mr-8"
        onLoad={() => setLoaded(true)}
      />
      <div className="md:w-4/12 md:flex md:flex-col md:items-start">
        {selectedProduct.linea ? (
          <h3 className="bg-[#39B5FF] w-max f-mplus font-bold text-sm text-white rounded-[3px] p-1 text-center shadow-portada mx-auto md:mx-0">
            {selectedProduct.linea}
          </h3>
        ) : (
          <></>
        )}
        <h2 className="bg-[#39B5FF] px-2 py-1 f-mplus font-bold text-2xl text-white rounded-[3px] text-center mt-4 mx-auto md:mx-0 shadow-portada">
          {selectedProduct.titulo}
        </h2>
      </div>
      <div>
        {props.controls ? (
          <>
            <button onClick={previous}>{"<"}</button>
            <button onClick={next}>{">"}</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Carrousel;
