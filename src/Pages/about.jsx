import PageHeader from "../components/PageHeader";
const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Github",
    "SQL",
    "NodeJs Basics",
    "REST API",
  ];

  return (
    <div
      className="min-h-screen h-auto w-full bg-#fafafa relative flex justify-center items-center py-16 sm:py-32"
      id="about"
    >
      <div className=" w-11/12 lg:w-9/12">
        {/* <div className="flex flex-col items-center gap-8">
          <h1 className="font-bold text-4xl uppercase">About Me</h1>
          <Design1 />
          <p className="mx-0 sm:mx-10 text-center  sm:text-xl text-gray-500">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div> */}
        <PageHeader heading="About Me" subheading="Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology"/>
        <div className="grid gap-16 lg:gap-32 grid-rows-1 grid-rows-auto lg:grid-cols-2 mt-16 sm:mt-32">
          <div>
            <p className="font-bold  text-xl sm:text-2xl mb-5">Get to know me!</p>
              <p className=" text-md sm:text-lg mb-4 leading-8 text-gray-600">
                I'm a <strong>Frontend Web Developer </strong>building the Front-end of Websites
                and Web Applications that leads to the success of the overall
                product. Check out some of my work in the <strong>Projects</strong> section.
              </p>
              <p className="text-md sm:text-lg  mb-4 leading-8 text-gray-600">
                I also like sharing content related to the stuff that I have
                learned over the years in <strong>Web Development  </strong>so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin where I post useful content related to Web
                Development and Programming.
              </p>
              <p className="text-md sm:text-lg  mb-4 leading-8 text-gray-600">
                I'm open to <strong>Job</strong> opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to <strong>contact</strong> me.
              </p>
             <a href="#contact"> <button className="bg-purple-600 px-8 py-3 font-bold text-white text-lg sm:text-xl rounded-lg hover:-translate-y-1 transition duration-150 ease-in-out shadow-md shadow-purple-400 mt-5">Contact</button></a>
          </div>
          <div>
            <p className="font-bold text-xl sm:text-2xl mb-5">My Skills</p>
            <div className="flex gap-3 sm:gap-5 flex-wrap">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="text-sm sm:text-md cursor-default px-4 py-3  bg-slate-200 text-[#808080] font-semibold rounded-sm shadow-gray-500 shadow-sm transition duration-150 ease-in-out hover:scale-110 hover:bg-gray-800 hover:text-slate-100"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
