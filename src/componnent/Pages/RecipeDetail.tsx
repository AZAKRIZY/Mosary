import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import YoutubeCheck from "../small_componnent/YoutubeCheck";

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

  // Function to format instructions into steps
  const formatInstructions = (instructions: string) => {
    // Split by step if the word "step" is available followed by a number
    const steps = instructions.split(/(?=step \d+)/i);

    // If no steps found, return the whole text
    if (steps.length <= 1) {
      return (
        <p className="text-gray-700 dark:text-gray-300 font-Montserrat leading-relaxed text-justify">
          {instructions}
        </p>
      );
    }

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Instructions
        </h3>
        <div className="space-y-5">
          {steps.map((step, index) => {
            if (!step.trim()) return null;

            // Clean up the step text
            const cleanedStep = step.trim().replace(/^step \d+\s*/i, "");
            const stepNumber = index + 1;

            return (
              <div key={index} className="relative pl-10 pb-5">
                {/* Step number with decorative line */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-yellow-300/30 dark:bg-fuchsia-600/30 border border-yellow-300/30 dark:border-fuchsia-600/30 flex items-center justify-center">
                  <span className="font-bold text-yellow-700 dark:text-fuchsia-300 text-sm">
                    {stepNumber}
                  </span>
                </div>

                {/* Step text */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {cleanedStep}
                </p>

                {/* Divider line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="absolute bottom-0 left-4 w-0.5 h-5 bg-gray-300/30 dark:bg-gray-700/60"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen dark:bg-neutral-600">
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
    <div className="min-h-screen bg-neutral-200 dark:bg-neutral-600 pb-24">
      <div
        className="max-w-4xl mx-auto bg-white/30 dark:bg-gradient-to-br 
        dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-xl 
        rounded-3xl border border-gray-300/30 dark:border-gray-700/60
        shadow-2xl shadow-black/10 dark:shadow-[0_8px_30px_rgba(0,0,0,0.7)]
        overflow-hidden transition-all duration-500 ease-in-out"
      >
        {/* Fixed image container to prevent white lines */}
        <div className="relative h-[20vw] w-full overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="p-6 space-y-6">
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

          {/* Formatted instructions */}
          {formatInstructions(meal.strInstructions)}

          <YoutubeCheck url={meal.strYoutube} title={meal.strMeal} />

          <div className="flex justify-center mt-8 pt-6 border-t border-gray-300/30 dark:border-gray-700/60">
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
