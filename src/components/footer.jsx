import socials from "../utils/constant";
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <div
      className=" bg-black text-[#fff] min-h-screen-1/2 h-auto w-full bg-#fafafa relative flex flex-col itens-center items-center"
      id="footer"
    >
        <div className="w-11/12 sm:w-9/12">
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between py-10 sm:py-16 border-[#444] border-b">
        <div className="w-full sm:w-5/12">
          <p className="uppercase font-bold text-xl tracking-widest mb-2 sm:mb-5">
            priyanshu singh
          </p>
          <p className="text-[12px] sm:text-sm">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div>
          <p className="uppercase font-bold text-xl tracking-widest  mb-2 sm:mb-5">
            socials
          </p>
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            {socials.map((social, index) => {
              return (
                <a key={index} href={social.link} className="">
                  <img
                    src={social.icon}
                    alt="icon"
                    className="w-6 h-6 bg-white"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-[10px] sm:text-sm w-full py-10 text-center">
      © Copyright {year}. Made by <a href="/" className="underline">Priyanshu Singh</a>
      </div>
        </div>
     
    </div>
  );
};

export default Footer;
