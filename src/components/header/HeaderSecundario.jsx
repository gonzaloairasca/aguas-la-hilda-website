import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import menu from "./menu.svg";
import close from "./close.svg";
import arrow from "./arrow.svg";
import Redes from "../redes/Redes";
import Linea from "./lineaseparadora.svg";

const HeaderSecundario = () => {
  const [nav, setNav] = useState(false);
  const [productosNav, setProductosNav] = useState(false);

  return (
    <header className="absolute z-50 top-0 right-0 left-0 bg-transparent ">
      <nav className="flex justify-between items-center md:h-24">
        <img
          src={logo}
          alt="logo aguas la hilda cordoba capital, distribucion en todas las sierras"
          className="h-24  ml-2 hidden md:block"
        />
        <ul className="hidden md:flex gap-6 f-montserrat ml-4 font-semibold text-[#044F98] lg:pr-60">
          <li>
            <Link to={"/"}>INCIO</Link>
          </li>
          <li>PRODUCTOS</li>
          <li>
            <Link to={"/nosotros"}>NOSOTROS </Link>
          </li>
          <Link to={"/contacto"}>CONTACTENOS</Link>
        </ul>
        <div className=" hidden md:flex gap-10 items-center mr-10">
          <img src={Linea} alt="linea separadora" className="mr-6 opacity-30" />
          <Redes />
        </div>
        <img
          src={logo}
          alt="logo aguas la hilda cordoba capital, distribucion en todas las sierras"
          className="h-24  ml-2 md:hidden"
        />
        <img
          src={menu}
          alt="menu de navegacion aguas la hilda cordoba distribucion en todas las sierras"
          className="px-7 h-6 md:hidden"
          onClick={() => setNav(!nav)}
        />
        <div
          className={
            nav
              ? "fixed  right-0 top-0  h-screen w-full bg-[#ffffffc0] font-semibold transition duration-[1000ms] translate-x-0 opacity-100"
              : "fixed translate-x-96 right-0 top-0 h-screen w-full md:hidden transition duration-[1000ms]  opacity-0"
          }
        >
          <div className="flex justify-end">
            <div className="w-5/6 h-screen  bg-[#39B5FF]">
              <div className="flex justify-between border-b-2 border-b-teal-200">
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
                  className="p-3 border-b-2 border-b-teal-200"
                  onClick={() => setNav(false)}
                >
                  <Link to={"/"}>Inicio</Link>
                </li>
                <li
                  className="p-3 border-b-2 border-b-teal-200"
                  onClick={() => setProductosNav(!productosNav)}
                >
                  <div className="flex justify-between items-center mr-4">
                    <p>Productos</p>
                    <img
                      className="h-4"
                      src={arrow}
                      alt="flecha abrir productos"
                    />
                  </div>
                  <ul
                    className={
                      productosNav ? "pl-4 pt-1 block" : "pl-4 pt-1 hidden"
                    }
                  >
                    <li className="p-2">Producto</li>
                    <li className="p-2">Producto</li>
                    <li className="p-2">Producto</li>
                    <li className="p-2">Producto</li>
                    <li className="p-2">Producto</li>
                    <li className="p-2">Producto</li>
                  </ul>
                </li>
                <li
                  className="p-3 border-b-2 border-b-teal-200"
                  onClick={() => setNav(false)}
                >
                  <Link to={"/nosotros"}>Nosotros</Link>
                </li>
                <li
                  className="p-3 border-b-2 border-b-teal-200"
                  onClick={() => setNav(false)}
                >
                  <Link to={"/contacto"}>Contactanos</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSecundario;