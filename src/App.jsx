import { useEffect } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Productos from "./components/products/Productos";
import SeDistribuidor from "./components/seDistribuidor/SeDistribuidor";

function App() {
  useEffect(() => {
    document.title = "Aguas La Hilda | Inicio";
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Productos />
      <SeDistribuidor />
      <Footer />
    </>
  );
}

export default App;
