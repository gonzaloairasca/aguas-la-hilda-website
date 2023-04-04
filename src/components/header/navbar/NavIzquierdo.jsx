import React from "react";
import { useState } from "react";
import DropdownProductos from "./DropdownProductos";
import { Link } from "react-router-dom";
const NavIzquierdo = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    <ul className="hidden md:flex gap-6 f-montserrat ml-4 font-semibold md:text-base text-[#044F98] 2xl:text-xl">
      <li className="hover:text-[#F7100C]">
        <Link to={"/"}>INCIO</Link>
      </li>
      <li
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
        className="hover:text-[#F7100C] cursor-pointer"
      >
        PRODUCTOS {dropdown ? <DropdownProductos /> : <></>}
      </li>
      <li className="hover:text-[#F7100C]">
        <Link to={"/nosotros"}>NOSOTROS </Link>
      </li>
    </ul>
  );
};

export default NavIzquierdo;
