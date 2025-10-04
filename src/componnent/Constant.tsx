import { House, List, Info } from "lucide-react";

export const navItems = [
  { to: "/", icon: House, end: true },
  { to: "/list", icon: List },
  { to: "/contact", icon: Info },
];

// src/constants/meals.ts
export const MEAL_API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
