import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo2.png";
import close from "../close.svg";
import arrow from "../arrow.svg";
import data from "../../../api";

const NavMobile = ({ setNav, nav }) => {
  const [productosNav, setProductosNav] = useState(false);

  return (
    <div className="flex justify-end">
      <div className="w-5/6 h-screen  bg-[#39B5FF]">
        <div className="flex justify-between border-b-2 border-b-white">
          <img
            src={logo}
            alt="logo embotelladora de agua La Hilda, Córdoba capital."
            className="h-32"
          />
          <img
            src={close}
            alt="cerrar"
            className="p-4 mr-2"
            onClick={() => setNav(!nav)}
          />
        </div>
        <ul className="text-slate-50 ">
          <li
            className="p-3 border-b-2 bordewhite"
            onClick={() => setNav(false)}
          >
            <Link to={"/"}>Inicio</Link>
          </li>
          <li
            className="p-3 border-b-2 border-b-white"
            onClick={() => setProductosNav(!productosNav)}
          >
            <div className="flex justify-between items-center mr-4">
              <p>Productos</p>
              <img className="h-4" src={arrow} alt="flecha abrir productos" />
            </div>
            <ul
              className={productosNav ? "pl-4 pt-1 block" : "pl-4 pt-1 hidden"}
            >
              {data.products.map((producto) => (
                <Link to={`/productos/${producto.ruta}`} key={producto.id}>
                  <li className="p-2">{producto.titulo}</li>
                </Link>
              ))}
            </ul>
          </li>
          <li
            className="p-3 border-b-2 border-b-white"
            onClick={() => setNav(false)}
          >
            <Link to={"/nosotros"}>Nosotros</Link>
          </li>
          <li
            className="p-3 border-b-2 border-b-white"
            onClick={() => setNav(false)}
          >
            <Link to={"/contacto"}>Contactanos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
