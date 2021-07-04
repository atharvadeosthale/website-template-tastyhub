import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Order from "./components/Order/Order";
import Location from "./components/Location/Location";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Bestsellers />
      <Order />
      <Location />
      <Contact />
    </div>
  );
}

export default App;
