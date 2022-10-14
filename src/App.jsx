import "./App.css";

import mainBG from "./assets/bg.png";
import logo from "./assets/logo.png";
import Hero from "./components/Hero";
import CTA from "./components/CTA";

function App() {
  return (
    <div
      className="main relative w-full h-screen bg-no-repeat bg-cover bg-center "
      style={{
        backgroundImage: `url(${mainBG})`,
      }}
    >
      <Hero logo={logo} />
      <div className="h-full flex items-center justify-center">
        <CTA />
      </div>
    </div>
  );
}

export default App;
