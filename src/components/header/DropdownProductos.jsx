import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../api";

const DropdownProductos = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? "absolute top-14 hidden ml-[-15px] text-blue-600 bg-white"
            : "absolute top-14 ml-[-15px] text-xs drop-shadow-2xl text-zinc-600 bg-white pt-6"
        }
      >
        {data.products.map((product, index) => {
          return (
            <li
              className="py-2 px-4 hover:text-[#F7100C]"
              key={index}
              onClick={() => setClick(false)}
            >
              <Link className="block" to={`/productos/${product.ruta}`}>
                {product.titulo}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownProductos;
