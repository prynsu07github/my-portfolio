import ecomAPI from "../assets/projectsImages/Ecommerce API.png";
import videoNexImage from "../assets/projectsImages/videoNex.png";
import hotelParadise from "../assets/projectsImages/hotelParadise.png";
import PageHeader from "../components/PageHeader";

const Projects = () => {
  const projects = [
    {
      name: "videoNex(YT Clone)",
      description:
        "videoNex revolutionizes video streaming by leveraging YouTube API to offer ad-free content across diverse categories. With intuitive search features, personalized user accounts, and seamless playback, it provides a superior viewing experience. Enjoy uninterrupted entertainment, track history, and explore content effortlessly on this user-centric platform.",
      image: videoNexImage,
      techStack: ["ReactJs", "Tailwind", "NodeJs" ,"Express" , "Matrial UI", "MongoDB", ],
      github: "https://github.com/prynsu07github/MERN-stack-yt-clone",
    },
    {
      name: "Ecommerce API with full Authentication",
      description:
        "A robust eCommerce API facilitating seamless integration, enabling developers to access and manage products, orders, payments, and user data securely for enhanced online shopping experiences.",
      image: ecomAPI,
      techStack: ["NodeJs", "Express"],
      github: "https://github.com/prynsu07github/Ecommerce-API",
    },
    {
      name: "Hotel Paradise",
      description:
        "Hotel Paradise Frontend is a visually stunning web project crafted with HTML, CSS, and Bootstrap. Designed to captivate visitors with its modern aesthetics and user-friendly interface, it offers seamless navigation and rich imagery to showcase the luxurious amenities and serene ambiance of Hotel Paradise. With responsive design, it ensures an optimal viewing experience across all devices, inviting guests to explore and book their dream getaway effortlessly.",
      image: hotelParadise,
      github: "https://github.com/prynsu07github/HOTEL-PROJECT",
      techStack: ["HTML", "CSS", "Bootstrap"],
      live: "https://prynsu07github.github.io/HOTEL-PROJECT/",
    },
  ];
  return (
    <div
      className="min-h-screen h-auto w-full bg-[#fafafa] relative flex justify-center items-center py-16 sm:py-32"
      id="projects"
    >
      <div className=" w-11/12 lg:w-9/12">
        {/* <div className="flex flex-col items-center gap-8">
          <h1 className="font-bold text-4xl uppercase">projects</h1>
          <Design1 />
          <p className="mx-0 sm:mx-10 text-center  sm:text-xl text-gray-500">
            Here are some projects done by me.
          </p>
        </div> */}
        <PageHeader
          heading="projects"
          subheading=" Here are some projects done by me."
        />
        <div className="mt-16 sm:mt-32">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="sm:h-92 p-4 sm:p-10 bg-gray-100 rounded-lg mt-16 sm:mt-32 grid grid-rows-auto grid-row-1 xl:grid-cols-2 gap-5 lg:gap-20"
              >
                <div>
                  {/* <div className="bg-purple-400 absolute left-6 bottom-6 h-full w-full z-1 rounded-lg shadow-md shadow-gray-600"></div> */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full sm:h-96 w-auto shadow-lg shadow-gray-400"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg sm:text-2xl mb-4 sm:mb-8">
                    {project.name}
                  </p>
                  <div className="mb-4 sm:mb-8 flex flex-wrap">
                    {project.techStack.map((tech, index) => (
                      <p
                        key={index}
                        className="text-blue-500 font-semibold text-md sm:text-lg mr-2"
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                  <p className="leading-7 text-gray-500 mb-4 sm:mb-8 text-md sm:text-lg">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    <a href={project.github}>
                      <button className="bg-purple-600 px-8 py-3 font-bold text-white text-lg sm:text-xl rounded-lg hover:-translate-y-1 transition duration-150 ease-in-out shadow-md shadow-purple-400 mt-5 w-32 sm:w-auto">
                        Github
                      </button>
                    </a>
                    {project.live && (
                      <a href={project.live}>
                        <button className="bg-purple-600 px-8 py-3 font-bold text-white text-lg sm:text-xl rounded-lg hover:-translate-y-1 transition duration-150 ease-in-out shadow-md shadow-purple-400 mt-5 w-32">
                          Live
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
