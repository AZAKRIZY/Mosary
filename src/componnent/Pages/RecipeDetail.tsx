import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube?: string;
}

const RecipeDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setMeal(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Error fetching meal:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-700 dark:text-gray-300 animate-pulse">
          Loading recipe...
        </div>
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700 dark:text-gray-300">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 pb-24 animate-sliding_bottom">
      <div
        className="max-w-4xl mx-auto bg-white/30 dark:bg-gradient-to-br 
        dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-xl 
        rounded-3xl border border-gray-300/30 dark:border-gray-700/60
        shadow-lg shadow-black/10 dark:shadow-[0_8px_30px_rgba(0,0,0,0.7)]
        overflow-hidden transition-all duration-500 ease-in-out"
      >
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
            {meal.strMeal}
          </h1>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-yellow-300/20 dark:bg-fuchsia-600/20 text-yellow-700 dark:text-fuchsia-300 px-3 py-1 rounded-full border border-yellow-300/30 dark:border-fuchsia-600/30">
              {meal.strCategory}
            </span>
            <span className="bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full border border-gray-300/30 dark:border-gray-600/30">
              {meal.strArea}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            {meal.strInstructions}
          </p>

          {meal.strYoutube && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
                Watch Tutorial:
              </h3>
              <div className="aspect-video rounded-2xl overflow-hidden border border-gray-300/30 dark:border-gray-700/60">
                <iframe
                  src={meal.strYoutube.replace("watch?v=", "embed/")}
                  title={meal.strMeal}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}

          <div className="flex justify-center mt-8">
            <Link
              to="/List"
              className="px-6 py-3 rounded-xl text-sm sm:text-base font-medium
                bg-yellow-300/30 dark:bg-fuchsia-600/30 text-yellow-700 dark:text-fuchsia-300
                border border-yellow-300/30 dark:border-fuchsia-600/30
                hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out"
            >
              ← Back to Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
