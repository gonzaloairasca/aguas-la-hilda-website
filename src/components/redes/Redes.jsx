import React from "react";
import wsp from "./whatsapp.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";

const Redes = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <a href="https://www.instagram.com/aguaslahilda" target="_blank">
          <img
            src={instagram}
            alt="Icono instagram embotelladora de agua la hilda"
          />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/AguasLaHilda" target="_blank">
          <img
            src={facebook}
            alt="Icono facebook embotelladora de agua la hilda"
          />
        </a>
      </li>
      <li>
        <a
          href="https://api.whatsapp.com/send?phone=+5493515937318&text=Hola,%20quiero%20realizar%20una%20consulta"
          target="_blank"
        >
          <img src={wsp} alt="Icono whatsapp embotelladora de agua la hilda" />
        </a>
      </li>
    </ul>
  );
};

export default Redes;
