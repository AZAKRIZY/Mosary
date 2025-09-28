import { Search } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent } from "react";
interface props {
  placeholder: string;
  onSearch: (value: string) => void;
}
const SearchBar = ({ placeholder = "Search...", onSearch }: props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value); // calls parent callback
  };
  const SearchBar = ({ placeholder, onSearch }: props) => {
    return (
      <div className="relative">
        <Search className="absolute hover:scale-2" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  };
};
export default SearchBar;
