// src/components/SearchBar.tsx
import React, { useState } from "react";
import { Search } from "lucide-react";
interface props{
    placeholder:string,
    
}
const SearchBar = ({placeholder}:props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
    //put the search logic here
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();//handle the keyboard press
  };

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button
          onClick={handleSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
