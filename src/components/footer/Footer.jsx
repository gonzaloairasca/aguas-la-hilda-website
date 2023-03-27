import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0080C6] ">
      <div className="flex justify-center flex-col items-center py-8">
        <h1 className="f-Alex-Brush text-5xl text-[#F7100C] font-semibold text-shadow textstroke">
          La Hilda
        </h1>

        <h3 className="text-white font-semibold text-base f-mplus text-center">
          EMBOTELLADORA DE AGUA LA HILDA S.R.L
        </h3>
        <hr className="w-10/12 my-6" />
        <h5 className="text-blue-200 font-light text-sm f-mplus text-center px-4">
          Laprida 2882 - B° Alto Alberdi, Córdoba capital. | Tel:(+54) 9 351
          5937318
        </h5>
        <h6 className="text-sm text-center font-light text-blue-200 px-4 mt-4">
          AGUAS LA HILDA © 2023 | DISEÑO Y DESARROLLO WEB{" "}
          <a className="underline" href="https://gonzaloairascaweb.com.ar">
            {">>"}GONZALO AIRASCA WEB
          </a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
