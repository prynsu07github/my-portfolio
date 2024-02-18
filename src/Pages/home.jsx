import socials from "../utils/constant.js";
const Home = () => {
  return (
    <div id="home" className="h-screen w-full relative">
      <div className="bg-white px-1 py-2 hidden flex-col gap-2 shadow-xl sm:flex absolute top-1/2 transform -translate-y-1/2">
        {socials.map((social, index) => {
          return (
            <a key={index} href={social.link} className="p-3 hover:bg-purple-200">
              <img src={social.icon} alt="icon" className="w-8 h-8" />
            </a>
          );
        })}
      </div>
      <div className="flex flex-col items-center  absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-11/12 lg:w-auto">
        <h1 className="font-bold text-5xl sm:text-7xl text-center uppercase" id="name">
          hey, i'm priyanshu
        </h1>
        <p className="mx-0 my-10 sm:m-10 text-center  sm:text-xl text-gray-500">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>

        <button className="bg-purple-600 px-10 py-4 font-bold text-white text-xl rounded-lg hover:-translate-y-1 transition duration-150 ease-in-out shadow-md shadow-purple-400">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Home;
