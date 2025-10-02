// src/components/Navbar.tsx
import { House, Info, List } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/90 text-white px-6 py-3 flex gap-8 rounded-2xl shadow-lg border border-gray-700 z-50">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "font-bold text-yellow-300"
            : "hover:text-yellow-300"
        }
      >
        <House />
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-yellow-300"
            : "hover:text-yellow-300"
        }
      >
        <List />
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-yellow-300"
            : "hover:text-yellow-300"
        }
      >
        <Info />
      </NavLink>
      <button
       
      >
        
      </button>
    </nav>
  );
}

export default Navbar;
