import React from "react";
import HeaderSecundario from "../header/HeaderSecundario";
import wsp from "../seDistribuidor/whatsapp.svg";
import Slider from "./Slider";
import { useParams } from "react-router-dom";
import data from "../../api";

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
          <div>
            <h1>{producto[0].titulo}</h1>
            <p>{producto[0].descripcion}</p>
            <h2>Se comercializa en packs de 12 unidades.</h2>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=+5493515937318&text=Hola,%20quiero%20consultar%20para%20ser%20distribuidor"
              target="_blank"
            >
              <button className="bg-[#39B5FF] text-xl py-3 px-4 m-3 text-white font-bold flex items-center rounded-sm shadow-elementos hover:bg-[#2d8dc5] lg:text-xl lg:mt-8">
                <img className="pr-1 lg:h-6 " src={wsp} alt="wsp icon" />
                CONTACTANOS
              </button>
            </a>
            <h4>Comercializá este u otros productos, contactanos!</h4>
          </div>
          <div>
            <h2>Otros productos similares</h2>
            <Slider productosSimilares={data.products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
