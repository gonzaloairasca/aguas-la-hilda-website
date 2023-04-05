import React from "react";
import HeaderSecundario from "../header/HeaderSecundario";
import wsp from "../seDistribuidor/whatsapp.svg";
import Slider from "./Slider";
import { useParams } from "react-router-dom";
import data from "../../api";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import Loader from "../loader/Loader";

const ProductDetail = () => {
  let { rutaProducto } = useParams();
  const producto = data.products.filter(
    (producto) => producto.ruta === rutaProducto
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [rutaProducto]);

  return (
    <>
      <HeaderSecundario />
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="lg:mt-32">
            <div className="mt-28 lg:flex">
              <div className="lg:w-1/2 lg:flex lg:justify-center">
                <img
                  className="mx-auto"
                  src={producto[0].img}
                  alt={producto[0].titulo}
                />
              </div>
              <div className="lg:w-1/2  lg:pr-20 lg:mt-14">
                <div className="px-4">
                  <h1 className="text-2xl font-bold text-[#39B5FF] my-4  lg:text-3xl lg:font-bold">
                    {producto[0].titulo.toUpperCase()}
                  </h1>
                  <hr />
                  {/* <p className="text-zinc-700 mt-3">{producto[0].descripcion}</p> */}

                  {producto[0].comercializacion ? (
                    <h2 className="text-zinc-800 font-semibold text-lg mt-4">
                      {producto[0].comercializacion}
                    </h2>
                  ) : (
                    <></>
                  )}
                  <h4 className="text-zinc-700 mt-4">
                    Comercializá este u otros productos, contactanos!
                  </h4>
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
                </div>
              </div>
            </div>
            <div className="mt-14">
              <h2 className="text-[#39B5FF] text-xl font-bold px-3 lg:text-center lg:text-3xl lg:mt-35 lg:mb-16">
                Otros productos similares
              </h2>
              <Slider productosSimilares={data.products} />
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default ProductDetail;
