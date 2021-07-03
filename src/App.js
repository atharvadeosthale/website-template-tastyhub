import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Bestsellers from "./components/Bestsellers/Bestsellers";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Bestsellers />
    </div>
  );
}

export default App;
