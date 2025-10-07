import React, { useState } from "react";
import { Search } from "lucide-react";

interface Props {
  placeholder: string;
  onSearch: (query: string) => void; // 👈 new prop
}

const Searchbar = ({ placeholder, onSearch }: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex items-center justify-center pt-5 rounded-full">
      <div className="relative w-full max-w-md round-full">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-700 
                     bg-white/70 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
        />
        <button
          onClick={handleSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-fuchsia-500 transition"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
