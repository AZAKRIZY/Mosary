// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex gap-6">
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    isActive ? "font-bold underline" : "hover:underline"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "font-bold underline" : "hover:underline"
                }
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive ? "font-bold underline" : "hover:underline"
                }
            >
                Contact
            </NavLink>
        </nav>
    );
}

export default Navbar;
