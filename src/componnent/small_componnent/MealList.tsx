import { useEffect, useState } from "react";
import { MEAL_API_URL } from "../Constant";

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
}

const MealList = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(5);

  useEffect(() => {
    const fetchAllMeals = async () => {
      setLoading(true);
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      const allMeals: Meal[] = [];

      try {
        for (const letter of alphabet) {
          const res = await fetch(`${MEAL_API_URL}${letter}`);
          const data = await res.json();
          if (data.meals) allMeals.push(...data.meals);
        }

        // Remove duplicates
        const uniqueMeals = allMeals.reduce((acc: Meal[], current) => {
          const exists = acc.find(meal => meal.idMeal === current.idMeal);
          if (!exists) {
            return acc.concat([current]);
          }
          return acc;
        }, []);

        setMeals(uniqueMeals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMeals();
  }, []);

  // Get current meals for the page
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);
  const totalPages = Math.ceil(meals.length / mealsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl
         rounded-2xl border border-gray-300/30
          dark:border-gray-700/60 p-8 shadow-lg shadow-black/10 dark:shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
          <p className="text-lg text-gray-700 dark:text-gray-300 animate-pulse">
            Loading all recipes...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 pb-24">
      {/* Header */}
      <div className="text-center mb-8 animate-sliding_bottom">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-fuchsia-500 bg-clip-text text-transparent mb-4">
          Recipe Collection
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Discover {meals.length} delicious recipes from around the world
        </p>
      </div>

      {/* Meal Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
        {currentMeals.map((meal, index) => (
          <div
            key={meal.idMeal}
            className="animate-sliding_bottom bg-white/30 dark:bg-gradient-to-br dark:from-gray-900/80 dark:to-gray-800/80 
            backdrop-blur-xl rounded-2xl border border-gray-300/30 dark:border-gray-700/60
            shadow-lg shadow-black/10 dark:shadow-[0_8px_30px_rgba(0,0,0,0.7)]
            hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.9)]
            transition-all duration-500 ease-in-out overflow-hidden
            hover:scale-105 hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
                {meal.strMeal}
              </h3>
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-yellow-300/20 dark:bg-fuchsia-600/20 text-yellow-700 dark:text-fuchsia-300 px-3 py-1 rounded-full border border-yellow-300/30 dark:border-fuchsia-600/30">
                  {meal.strCategory}
                </span>
                <span className="bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full border border-gray-300/30 dark:border-gray-600/30">
                  {meal.strArea}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {meals.length > 0 && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 animate-sliding_bottom
          bg-white/30 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 
          backdrop-blur-xl rounded-2xl border border-gray-300/30 dark:border-gray-700/60
          shadow-lg shadow-black/10 dark:shadow-[0_4px_20px_rgba(0,0,0,0.7)]
          px-6 py-4 transition-all duration-500 ease-in-out">

          <div className="flex items-center gap-6">
            {/* Previous Button */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ease-in-out
                ${currentPage === 1
                  ? "bg-gray-300/30 dark:bg-gray-700/30 text-gray-500 dark:text-gray-600 cursor-not-allowed"
                  : "bg-yellow-300/30 dark:bg-fuchsia-600/30 text-yellow-700 dark:text-fuchsia-300 hover:scale-110 hover:shadow-md shadow-yellow-200/30 dark:shadow-fuchsia-900/40"
                }`}
            >
              ←
            </button>

            {/* Page Info */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-20 text-center">
                Page <span className="text-yellow-500 dark:text-fuchsia-400">{currentPage}</span> of{" "}
                <span className="text-yellow-500 dark:text-fuchsia-400">{totalPages}</span>
              </span>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => paginate(pageNum)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                        ${currentPage === pageNum
                          ? "bg-yellow-300/30 dark:bg-fuchsia-600/40 text-yellow-300 dark:text-fuchsia-400 shadow-md shadow-yellow-200/30 dark:shadow-fuchsia-900/40 scale-110"
                          : "text-gray-700 dark:text-gray-300 hover:text-yellow-300 dark:hover:text-fuchsia-400 hover:scale-110"
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ease-in-out
                ${currentPage === totalPages
                  ? "bg-gray-300/30 dark:bg-gray-700/30 text-gray-500 dark:text-gray-600 cursor-not-allowed"
                  : "bg-yellow-300/30 dark:bg-fuchsia-600/30 text-yellow-700 dark:text-fuchsia-300 hover:scale-110 hover:shadow-md shadow-yellow-200/30 dark:shadow-fuchsia-900/40"
                }`}
            >
              →
            </button>
          </div>

          {/* Results Info */}
          <div className="text-center mt-3 text-xs text-gray-600 dark:text-gray-400">
            Showing {indexOfFirstMeal + 1}-{Math.min(indexOfLastMeal, meals.length)} of {meals.length} recipes
          </div>
        </div>
      )}
    </div>
  );
};

export default MealList;