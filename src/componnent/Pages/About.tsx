import { techStack } from "../Constant"

const About = () => {
  return (
    <>
      <div className="w-min-full h-min-screen flex flex-col dark:bg-black justify-center">
        <section className="text-center bg-orange_gold p-[1%]">
          <h1 className="text-4xl font-BBH m-[1%] bg text-black/70">
            {" "}
            About this project{" "}
          </h1>
          <p className="max-w-prose mx-auto text-black/80">
            This website was built to practice and improve my front end skill
            when it comes to modern frontend development while trying to keep
            the experience light and intuitive for the user.
          </p>
        </section>
        <section className="text-center p-[1%] bg-black-800">
          <h1 className="text-4xl font-BBH m-[1%] text-beige">
            {" "}
            What the app does?{" "}
          </h1>
          <p className="max-w-prose mx-auto text-beige">
            This app allows users to search for meals and recipes from a vast
            database using TheMealdb API the features are the following:
            <ul className=" max-w-prose text-lg space-y-4 list-disc list-inside  text-center marker:text-2xl leading-relaxed">
              <li>Search for meals by name🔎</li>
              <li>View detailed information about each meal🤤</li>
              <li>Responsive design for various devices📱</li>
              <li>Dark mode support for better user experience🌃</li>
            </ul>
          </p>
        </section>
        <section className="text-center px-4 py-10 bg-black-300">
  <h1 className="text-4xl font-BBH mb-8 text-black/70">
    Tech stack
  </h1>

  <div className="
    grid
    grid-cols-2
    sm:grid-cols-4
    gap-6
    place-items-center
    max-w-6xl
    mx-auto
  ">
    {techStack.map(({ name, image }) => (
      <div
        key={name}
        className="
          bg-black-800/60
          shadow-lg shadow-black-800
          flex flex-col items-center justify-center
          gap-3 p-4
          h-[28dvh]
          w-full
          rounded-3xl
        "
      >
        <img
          src={image}
          alt={name}
          className="w-14 h-14 object-contain"
        />
        <h3 className="text-beige text-sm text-center">
          {name}
        </h3>
      </div>
    ))}
  </div>
</section>
      </div>
    </>
  );
};

export default About;
