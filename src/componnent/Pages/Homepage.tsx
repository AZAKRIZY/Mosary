const Homepage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 bg-[url('/home.jpg')] bg-center bg-cover bg-no-repeat transition-opacity duration-700 ease-in-out dark:opacity-0 opacity-100" />

      {/* Dark background */}
      <div className="absolute inset-0 bg-[url('/darkhome.jpg')] bg-center bg-cover bg-no-repeat transition-opacity duration-700 ease-in-out opacity-0 dark:opacity-100" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-50/10" />

      {/* Content */}
      <div className="relative z-10 w-full flex items-center dark:text-white font-Montserrat">
        <div className="w-[50vw] flex items-center h-[80vh]">
          <h1 className="text-[6rem] font-suse tracking-widest dark:text-white text-black transition-colors duration-500 ease-in-out">
            WELCOME!
          </h1>
        </div>
        <div className="w-[50vw] flex items-center justify-end h-[50vh]">
          <p className="w-[30vw] transition-colors duration-500 ease-in-out">
            Here in <span className="font-bold">Mosary</span> we offer a large list of recipes for your
            homecooking needs going from healthy meals to appetizing fatty food, we try to add more and more recipes from each region of 
            the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
