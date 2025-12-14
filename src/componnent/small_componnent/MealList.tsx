import { useEffect, useState } from "react";
import { MEAL_API_URL } from "../Constant";
import FloatingPagination from "../FloatingPagination";
import { Link } from "react-router-dom";

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
}

interface MealListProps {
  searchResults?: Meal[];
  loading?: boolean;
}

const MealList = ({ searchResults = [], loading = false }: MealListProps) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 6;

  useEffect(() => {
    const fetchAllMeals = async () => {
      setIsLoading(true);
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

      try {
        const responses = await Promise.all(
          alphabet.map(letter =>
            fetch(`${MEAL_API_URL}${letter}`).then(res => res.json())
          )
        );

        const allMeals = responses
          .flatMap(data => data.meals || [])
          .reduce((acc: Meal[], current) => {
            if (!acc.find(meal => meal.idMeal === current.idMeal)) acc.push(current);
            return acc;
          }, []);

        setMeals(allMeals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllMeals();
  }, []);

  const effectiveMeals =
    searchResults && searchResults.length > 0 ? searchResults : meals;
  const effectiveLoading = loading || isLoading;

  const totalPages = Math.ceil(effectiveMeals.length / mealsPerPage);
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = effectiveMeals.slice(indexOfFirstMeal, indexOfLastMeal);

  const paginate = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (effectiveLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen transition-colors duration-700">
        <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-300/30 shadow-lg transition-colors duration-700">
          <p className="text-lg text-white animate-pulse transition-colors duration-700">
            Loading recipes...
          </p>
        </div>
      </div>
    );
  }

  if (effectiveMeals.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] transition-colors duration-700">
        <p className="text-gray-700 text-lg transition-colors duration-700">
          No recipes found. Try searching something else!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 pb-24 transition-colors duration-700">
      <header className="text-center mb-8 animate-sliding_bottom transition-colors duration-700">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-fuchsia-500 bg-clip-text text-transparent mb-2 transition-colors duration-700">
          Recipe Collection
        </h1>
        <p className="text-white text-lg transition-colors duration-700">
          Discover {effectiveMeals.length} delicious recipes from around the world
        </p>
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 transition-colors duration-700">
        {currentMeals.map((meal, index) => (
          <Link to={`/List/${meal.idMeal}`} key={meal.idMeal}>
            <article
              className="animate-appear dark:bg-gray-500 backdrop-blur-xl rounded-2xl border border-gray-100 dark:border-gray-500
                shadow-lg hover:shadow-xl hover:shadow-black/20 transition-all duration-700 ease-in-out
                overflow-hidden hover:scale-101 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-5 transition-colors duration-700">
                <h3 className="text-xl font-semibold dark:text-gray-200 mb-2 line-clamp-2 transition-colors duration-700">
                  {meal.strMeal}
                </h3>
                <div className="flex items-center gap-3 text-sm transition-colors duration-700">
                  <p className="p-2 bg-amber-200/30 rounded-full dark:bg-fuchsia-400/70 dark:text-gray-200">{meal.strCategory}</p>
                  <p className="p-2 bg-amber-200/30 rounded-full dark:bg-fuchsia-400/70 dark:text-gray-200">{meal.strArea}</p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {effectiveMeals.length > mealsPerPage && (
        <FloatingPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPaginate={paginate}
          indexOfFirstMeal={indexOfFirstMeal}
          indexOfLastMeal={indexOfLastMeal}
          totalMeals={effectiveMeals.length}
        />
      )}
    </div>
  );
};
;

export default MealList;
