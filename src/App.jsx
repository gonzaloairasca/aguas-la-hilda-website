import "./App.css";
import { Header } from "./components/header/Header";
import { Carrousel } from "./components/hero/carrousel/Carrousel";
import Hero from "./components/hero/Hero";
import Productos from "./components/products/Productos";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Productos />
    </div>
  );
}

export default App;
