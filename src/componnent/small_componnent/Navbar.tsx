// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { navItems } from "../Constant"; // 👈 import here

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 animate-sliding_bottom
      flex gap-8 px-8 py-4 rounded-2xl border
      bg-white/30 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 
      backdrop-blur-xl
      border-gray-300/30 dark:border-gray-700/60
      shadow-lg shadow-black/10 dark:shadow-[0_4px_20px_rgba(0,0,0,0.7)]
      transition-colors duration-500 ease-in-out z-50"
    >
      {navItems.map(({ to, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `relative flex items-center justify-center w-10 h-10 rounded-xl
            transition-all duration-300 ease-in-out
            ${isActive
              ? "bg-yellow-300/30 dark:bg-fuchsia-600/40 text-yellow-500 dark:text-fuchsia-400 shadow-md shadow-yellow-200/30 dark:shadow-fuchsia-900/40 scale-110"
              : "text-gray-700 dark:text-gray-300 hover:text-yellow-300 dark:hover:text-fuchsia-400 hover:scale-110"
            }`
          }
        >
          <Icon className="w-6 h-6" />
        </NavLink>
      ))}

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 rounded-xl 
        transition-all duration-300 ease-in-out cursor-pointer
        text-gray-700 dark:text-gray-200 hover:scale-110 focus:outline-none focus:ring-0"
      >
        <span className="text-xl transition-transform duration-300 ease-in-out">
          {theme === "dark" ? "🌙" : "☀️"}
        </span>
      </button>
    </nav>
  );
}

export default Navbar;
