
import { House, List, Info } from "lucide-react";

export const navItems = [
  { to: "/", icon: House, end: true },
  { to: "/list", icon: List },
  { to: "/about", icon: Info },
];
export const techStack=[
  {
    name:"React",
    image:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  },
  {
    name:"TypeScript",
    image:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
  },
  {
    name:"TailwindCSS",
    image:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
  },
  {
    name:"Vite",
    image:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
  },
  

  
  ]

// src/constants/meals.ts
export const MEAL_API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
