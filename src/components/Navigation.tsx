import { Sun, Moon } from "lucide-react";
interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}
function Navigation({ isDark, toggleTheme }: NavigationProps) {
  return (
    <nav
      className={`fixed w-full top-0 z-50 ${
        isDark ? "bg-[#1a1a1a]/80" : "bg-white/80"
      } backdrop-blur-sm`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Suzy
        </div>
        <div className="flex items-center gap-8">
          <div className="flex space-x-8 ">
            <a
              href="#home"
              className={`hover:text-[#ff6b6b] ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Home
            </a>
            <a
              href="#projects"
              className={`hover:text-[#ff6b6b] ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Project
            </a>
            <a
              href="#experience"
              className={`hover:text-[#ff6b6b] ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Experience
            </a>
            <a
              href="#certificates"
              className={`hover:text-[#ff6b6b] ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Certificates
            </a>
            <a
              href="#contact"
              className={`hover:text-[#ff6b6b] ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Contact
            </a>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDark ? "bg-white/10 text-white" : "bg-gray-100 text-gray-900"
            } hover:bg-opacity-80 cursor-pointer`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
