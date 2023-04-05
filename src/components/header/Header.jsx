import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../api";
import logo from "./logo.png";
import menu from "./menu.svg";
import NavDerecho from "./navbar/NavDerecho";
import NavIzquierdo from "./navbar/NavIzquierdo";
import NavMobile from "./navbar/NavMobile";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  window.onscroll = function () {
    let y = window.scrollY;

    if (y > 400) {
      setHeader(true);
    } else if (y < 200) {
      setHeader(false);
    }
  };
  console.log(header);
  return (
    <header
      className={
        header
          ? "fixed z-50 top-0 right-0 left-0 bg-white  shadow-elementos animacion"
          : "absolute z-50 top-0 right-0 left-0 bg-transparent"
      }
    >
      <nav
        className={
          header
            ? "flex items-center justify-between md:justify-around md:h-[5rem] 2xl:h-32"
            : "flex items-center justify-between md:justify-around md:h-24 2xl:h-32"
        }
      >
        <Link to={"/"} className=" hidden md:block lg:hidden">
          <img
            src={logo}
            alt="logo aguas la hilda cordoba capital, distribucion en todas las sierras 1"
            className="h-32 lg:h-40 ml-2 md:h-24 md:ml-0 md:relative  2xl:h-44 2xl:mb-[-90px]"
          />
        </Link>
        <NavIzquierdo />
        <Link to={"/"} className="md:hidden lg:block">
          <img
            src={logo}
            alt="logo aguas la hilda cordoba capital, distribucion en todas las sierras 2"
            className={
              header
                ? "h-32 lg:h-28 bg-white rounded-full ml-2 md:h-24 md:ml-0 md:relative md:mb-[-40px] 2xl:h-44 2xl:mb-[-90px]"
                : "h-32 lg:h-40 ml-2 md:h-24 md:ml-0 md:relative md:mb-[-60px] 2xl:h-44 2xl:mb-[-90px]"
            }
          />
        </Link>
        <img
          src={menu}
          alt="menu de navegacion aguas la hilda cordoba distribucion en todas las sierras"
          className="px-7 h-8 md:hidden"
          onClick={() => setNav(!nav)}
        />
        <NavDerecho productos={data} />
        <div
          className={
            nav
              ? "fixed  right-0 top-0  h-screen w-full bg-[#ffffffc0] font-semibold transition duration-[1000ms] translate-x-0 opacity-100"
              : "fixed translate-x-[-30rem] right-0 top-0 h-screen w-full md:hidden transition duration-[1000ms]  opacity-0"
          }
        >
          <NavMobile nav={nav} setNav={setNav} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
