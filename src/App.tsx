import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
