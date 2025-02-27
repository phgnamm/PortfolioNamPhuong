import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import TechStack from "./components/TechStack";
function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <TechStack />
      </div>
    </>
  );
}

export default App;
