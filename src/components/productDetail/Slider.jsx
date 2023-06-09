import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Slider = ({ productos, producto }) => {
  const productosSimilares = productos.filter(
    (item) => item.titulo != producto.titulo
  );

  console.log(productosSimilares);
  return (
    <motion.div className="slider-container mt-8">
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -2000 }}
      >
        {productosSimilares.map((producto) => (
          <motion.div className="item" key={producto.id}>
            <img className="" src={producto.img} alt="" />
            <Link to={`/productos/${producto.ruta}`}>
              <h2 className="text-center text-sm font-bold text-blue-900 lg:text-lg lg:font-bold">
                {producto.titulo}
              </h2>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
