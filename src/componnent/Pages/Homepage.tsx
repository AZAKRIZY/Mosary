const Homepage = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 bg-[url('/home.jpg')] bg-center bg-cover bg-no-repeat transition-opacity duration-700 ease-in-out dark:opacity-0 opacity-100" />

      {/* Dark background */}
      <div className="absolute inset-0 bg-[url('/darkhome.jpg')] bg-center bg-cover bg-no-repeat transition-opacity duration-700 ease-in-out opacity-0 dark:opacity-100" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-50/10" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center dark:text-white font-Montserrat px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        {/* Title Section */}
        <div className="w-full lg:w-[50vw] flex items-center justify-center lg:justify-start h-[40vh] lg:h-[80vh] mb-4 lg:mb-0">
          <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] animate-sliding_left font-Italianno font-semibold 
          tracking-wider dark:text-white text-black text-center lg:text-left
          transition-colors duration-500 ease-in-out">
            WELCOME!
          </h1>
        </div>
        
        {/* Description Section */}
        <div className="w-full lg:w-[50vw] flex items-center justify-center lg:justify-end h-auto lg:h-[50vh]">
          <p className="w-full lg:w-[30vw] text-base sm:text-lg transition-colors animate-appear duration-500 ease-in-out text-center lg:text-left px-4 sm:px-0">
            Here in <span className="font-bold">Mosary</span> we offer a large list of recipes for your
            homecooking needs going from healthy meals to appetizing indulgent comfort foods, we try to add more and more recipes from each region of
            the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;