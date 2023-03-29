import React from "react";
import wsp from "./whatsapp.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";

const Redes = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <img
          src={instagram}
          alt="Icono instagram embotelladora de agua la hilda"
        />
      </li>
      <li>
        <img
          src={facebook}
          alt="Icono facebook embotelladora de agua la hilda"
        />
      </li>
      <li>
        <img src={wsp} alt="Icono whatsapp embotelladora de agua la hilda" />
      </li>
    </ul>
  );
};

export default Redes;
