import React, { useEffect, useState } from "react";
import HeaderSecundario from "../header/HeaderSecundario";
import HeroNosotros from "./heroNosotros/HeroNosotros";
import Footer from "../footer/Footer";
import Loader from "../loader/Loader";
const Nosotros = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  return (
    <>
      <HeaderSecundario />
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroNosotros />
          <Footer />
        </>
      )}
    </>
  );
};

export default Nosotros;
