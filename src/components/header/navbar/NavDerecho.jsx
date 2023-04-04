import React from "react";
import Redes from "../../redes/Redes";
import Linea from "../lineaseparadora.svg";
import { Link } from "react-router-dom";

const NavDerecho = () => {
  return (
    <div className=" hidden md:flex gap-10 items-center">
      <ul className=" f-montserrat font-semibold text-[#044F98] 2xl:text-xl">
        <li className="hover:text-[#F7100C]">
          <Link to={"/contacto"}>CONTACTENOS</Link>
        </li>
      </ul>
      <img src={Linea} alt="linea separadora" />
      <Redes />
    </div>
  );
};

export default NavDerecho;
