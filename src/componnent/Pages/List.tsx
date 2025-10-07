import { useState } from "react";
import MealList from "../small_componnent/MealList";
import Searchbar from "../small_componnent/Searchbar";

const List = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return; // prevent empty searches
    setLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setSearchResults(data.meals || []); // fallback to empty array if no results
    } catch (error) {
      console.error("Error fetching meals:", error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark:bg-black">
      <div className="flex justify-center items-center ">
        <Searchbar placeholder="Search for your favorite recipe" onSearch={handleSearch} />
      </div>

      <div className="p-10">
        <MealList searchResults={searchResults} loading={loading} />
      </div>
    </div>
  );
};

export default List;
