import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <>
      <div className={`min-h-screen ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}>
        <Navigation isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        <Hero isDark={isDark} />
        <TechStack isDark={isDark} />
        <Experience isDark={isDark} />
        <Projects />
        <Certificates isDark={isDark} />
        <Contact isDark={isDark} />
      </div>
    </>
  );
}

export default App;
