/* eslint-disable react/no-unescaped-entities */
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Resume from "/MyResume.pdf";
import socials from "../utils/constant.js";
const Home = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".slider", {
        xPercent: "-100",
        delay: "0.3",
        duration: "1",
      })
        .from([".title-1", ".title-2", ".title-3"], {
          opacity: "0",
          stagger: ".5",
          y: "20px",
        })
        .to([".title-1", ".title-2", ".title-3"], {
          opacity: "0",
          stagger: ".5",
          y: "-20px",
        })
        .to(".slider", {
          xPercent: "-100",
          delay: "0.3",
          duration: "1",
        })
        .from('#intro-msg' , {
          opacity:"0",
          duration:".5",
          y:"10rem"
        })
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} id="home" className="h-screen w-full relative">
      <div className="slider absolute top-0 left-0 h-screen w-full bg-white z-10 flex flex-col flex-wrap gap-4 sm:gap-8 py-10 px-2">
        <h1 className="title-1 text-6xl  sm:text-9xl font-bold">Web Developer</h1>
        <h1 className=" title-2 text-6xl  sm:text-9xl font-bold">Freelancer</h1>
        <h1 className="title-3 text-6xl  sm:text-9xl font-bold">Designer</h1>
      </div>
      <div className="bg-white px-1 py-2 hidden flex-col gap-2 shadow-xl sm:flex absolute top-1/2 transform -translate-y-1/2">
        {socials.map((social, index) => {
          return (
            <a
              key={index}
              href={social.link}
              className="p-3 hover:bg-purple-200"
            >
              <img src={social.icon} alt="icon" className="w-8 h-8" />
            </a>
          );
        })}
      </div>
      <div id="intro-msg" className="flex flex-col items-center  absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-11/12 lg:w-auto">
        <h1
          className="font-bold text-5xl sm:text-7xl text-center uppercase "
          id="name"
        >
          hey, i'm priyanshu
        </h1>
        <p className="mx-0 my-10 sm:m-10 text-center  sm:text-xl text-gray-500">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <a href={Resume} download="Resume" target="_blank" rel="noreferrer">
          <button className="bg-purple-600 px-10 py-4 font-bold text-white text-xl rounded-lg hover:-translate-y-1 transition duration-150 ease-in-out shadow-md shadow-purple-400">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
