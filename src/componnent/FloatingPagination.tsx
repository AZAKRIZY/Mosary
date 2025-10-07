import React from "react";

interface FloatingPaginationProps {
  currentPage: number;
  totalPages: number;
  onPaginate: (pageNumber: number) => void;
  indexOfFirstMeal: number;
  indexOfLastMeal: number;
  totalMeals: number;
}

const FloatingPagination: React.FC<FloatingPaginationProps> = ({
  currentPage,
  totalPages,
  onPaginate,
  indexOfFirstMeal,
  indexOfLastMeal,
  totalMeals,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div
      className="
        w-full mt-10 mb-10 
        flex flex-col items-center justify-center gap-4
        backdrop-blur-xl bg-white/20 dark:bg-gray-900/40
        border border-white/30 dark:border-gray-700/50 
        rounded-2xl shadow-md shadow-black/10 
        px-4 py-5 sm:px-6 transition-all duration-300
      "
    >
      {/* Pagination Controls */}
      <div
        className="
          flex flex-col sm:flex-row items-center justify-center
          gap-3 sm:gap-6 w-full
        "
      >
        {/* Prev Button */}
        <button
          onClick={() => onPaginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300
            ${
              currentPage === 1
                ? "bg-gray-300/30 dark:bg-gray-700/30 text-gray-500 dark:text-gray-600 cursor-not-allowed"
                : "bg-yellow-300/30 dark:bg-fuchsia-600/30 text-yellow-700 dark:text-fuchsia-300 hover:scale-110 hover:shadow-md"
            }`}
        >
          ←
        </button>

        {/* Page Info + Numbers */}
        <div
          className="
            flex flex-col items-center gap-2 sm:flex-row sm:gap-4
            justify-center text-center
          "
        >
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Page{" "}
            <span className="text-yellow-500 dark:text-fuchsia-400">
              {currentPage}
            </span>{" "}
            of{" "}
            <span className="text-yellow-500 dark:text-fuchsia-400">
              {totalPages}
            </span>
          </span>

          <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) pageNum = i + 1;
              else if (currentPage <= 3) pageNum = i + 1;
              else if (currentPage >= totalPages - 2)
                pageNum = totalPages - 4 + i;
              else pageNum = currentPage - 2 + i;

              return (
                <button
                  key={pageNum}
                  onClick={() => onPaginate(pageNum)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-all duration-300
                    ${
                      currentPage === pageNum
                        ? "bg-yellow-300/30 dark:bg-fuchsia-600/40 text-yellow-300 dark:text-fuchsia-400 shadow-md scale-110"
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
          onClick={() => onPaginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300
            ${
              currentPage === totalPages
                ? "bg-gray-300/30 dark:bg-gray-700/30 text-gray-500 dark:text-gray-600 cursor-not-allowed"
                : "bg-yellow-300/30 dark:bg-fuchsia-600/30 text-yellow-700 dark:text-fuchsia-300 hover:scale-110 hover:shadow-md"
            }`}
        >
          →
        </button>
      </div>

      {/* Results Info */}
      <div className="text-center mt-2 text-xs text-gray-600 dark:text-gray-400">
        Showing {indexOfFirstMeal + 1}–{Math.min(indexOfLastMeal, totalMeals)} of {totalMeals} recipes
      </div>
    </div>
  );
};

export default FloatingPagination;
