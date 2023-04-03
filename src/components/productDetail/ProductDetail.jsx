import React from "react";
import HeaderSecundario from "../header/HeaderSecundario";
import wsp from "../seDistribuidor/whatsapp.svg";
import Slider from "./Slider";
import { useParams } from "react-router-dom";
import data from "../../api";
import Footer from "../footer/Footer";

const ProductDetail = () => {
  let { rutaProducto } = useParams();
  const producto = data.products.filter(
    (producto) => producto.ruta === rutaProducto
  );
  return (
    <>
      <HeaderSecundario />
      <section>
        <div className="mt-24">
          <div>
            <img src={producto[0].img} alt={producto[0].titulo} />
          </div>
          <div className="px-4">
            <h1 className="text-2xl font-bold text-[#39B5FF] my-4 lg:text-lg lg:font-bold">
              {producto[0].titulo.toUpperCase()}
            </h1>
            <p className="text-zinc-700 mt-3">{producto[0].descripcion}</p>
            <h2 className="text-zinc-800 font-semibold text-lg mt-4">
              Se comercializa en packs de 12 unidades.
            </h2>
          </div>
          <div className="mt-5 px-4">
            <a
              href="https://api.whatsapp.com/send?phone=+5493515937318&text=Hola,%20quiero%20consultar%20para%20ser%20distribuidor"
              target="_blank"
            >
              <button className="bg-[#39B5FF] text-xl py-3 px-4 text-white font-bold flex items-center rounded-sm shadow-elementos hover:bg-[#2d8dc5] lg:text-xl lg:mt-8">
                <img className="pr-1 lg:h-6 " src={wsp} alt="wsp icon" />
                CONTACTANOS
              </button>
            </a>
            <h4 className="text-zinc-700 mt-4">
              Comercializá este u otros productos, contactanos!
            </h4>
          </div>
          <div className="mt-14">
            <h2 className="text-[#39B5FF] text-xl font-bold px-3 ">
              Otros productos similares
            </h2>
            <Slider productosSimilares={data.products} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
