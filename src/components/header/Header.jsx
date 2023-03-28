import React, { useState } from "react";
import logo from "./logo.png";
import menu from "./menu.svg";
import close from "./close.svg";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="flex items-center justify-between bg-white fixed top-0 left-0 right-0 z-50">
      <img
        src={logo}
        alt="logo aguas la hilda cordoba capital, distribucion en todas las sierras"
        className="h-32 ml-2"
      />
      <img
        src={menu}
        alt="menu de navegacion aguas la hilda cordoba distribucion en todas las sierras"
        className="px-7 h-8"
        onClick={() => setNav(!nav)}
      />
      <nav
        className={
          nav
            ? "absolute right-0 top-0 h-screen w-full bg-[#ffffffc0] font-semibold transition duration-[1000ms] opacity-100"
            : "absolute translate-x-96 right-0 top-0 h-screen w-full transition duration-[1000ms]  opacity-0"
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
                <a href="#sobrenosotros">Inicio</a>
              </li>
              <li
                className="p-3 border-b-2 border-b-teal-200"
                onClick={() => setNav(false)}
              >
                <a href="#queOfrecemos">Productos</a>
              </li>
              <li
                className="p-3 border-b-2 border-b-teal-200"
                onClick={() => setNav(false)}
              >
                <a href="#servicios">Nosotros</a>
              </li>
              <li
                className="p-3 border-b-2 border-b-teal-200"
                onClick={() => setNav(false)}
              >
                <a href="#tarifas">Contactanos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
