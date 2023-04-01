import React from "react";
import celular from "./whatsapp.svg";
import email from "./email.svg";
import ubicacion from "./ubicacion.svg";

const InfoContacto = () => {
  return (
    <div className="w-full">
      <ul className="bg-[#39B5FF] flex flex-col gap-3 p-3 m-3">
        <li className="flex items-center gap-4">
          <div className="rounded-full bg-white p-3 border-8 border-[#39b6ff5d]">
            <img className="h-6" src={celular} alt="whatsapp" />
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold">
              Whatsapp y teléfono
            </h5>
            <p className="text-white">351 5937318</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="rounded-full bg-white p-3  border-8 border-[#39b6ff5d]">
            <img className="h-6" src={email} alt="" />
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold">
              Correo Electronico
            </h5>
            <p className="text-white">embotelladoralahilda@gmail.com</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="rounded-full bg-white p-3 border-8 border-[#39b6ff5d]">
            <img className="h-6" src={ubicacion} alt="" />
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold">
              Whatsapp y teléfono
            </h5>
            <p className="text-white">351 5937318</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InfoContacto;
