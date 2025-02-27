import { Sun } from "lucide-react";
function Navigation() {
  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-sm bg-white/80">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl">Suzy</div>
        <div className="flex items-center gap-8">
          <div className="flex space-x-8 ">
            <a href="">Home</a>
            <a href="">Project</a>
            <a href="">Experience</a>
            <a href="">Contact</a>
          </div>
          <button>
            <Sun />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
