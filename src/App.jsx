import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Productos from "./components/products/Productos";
import SeDistribuidor from "./components/seDistribuidor/SeDistribuidor";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Productos />
      <SeDistribuidor />
    </div>
  );
}

export default App;
