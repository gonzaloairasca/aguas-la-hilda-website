import React from "react";
import logo from "./logo.png";
import menu from "./menu.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white fixed top-0 left-0 right-0">
      <img
        src={logo}
        alt="logo aguas la hilda cordoba capital, distribucion en todas las sierras"
        className="h-32 ml-2"
      />

      <img
        src={menu}
        alt="menu de navegacion aguas la hilda cordoba distribucion en todas las sierras"
        className="px-7 h-8"
      />
    </header>
  );
};
