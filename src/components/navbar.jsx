import ProfilePic from "../assets/profile-pic.jpeg"
const Navbar = () => {

 const routes = [
    {
      name:"HOME",
      id:"home"
    },
    {
      name:'ABOUT',
      id:"about"} ,
    {
      name:'PROJECTS',
      id:"projects"},
    {
      name: 'CONTACT',
      id:"contact"
    }
  ]
  return (
    <div className="bg-white-100 w-full py-5 px-10 lg:px-20 flex justify-center lg:justify-between shadow-xl z-10">
      <div className="flex gap-5 items-center">
        <div className="h-12 w-12 rounded-full border border-black overflow-hidden object-fit">
          <img src={ProfilePic} alt="profile" />
        </div>
        <p className="font-bold hover:text-purple-600 text-lg transition duration-150 ease-in-out uppercase">
          priyanshu singh
        </p>
      </div>
      <ul className="hidden lg:flex gap-10 items-center">
        {
          routes.map((route , index) => 
             <li key={index} className="font-semibold hover:text-purple-600 text-lg transition duration-150 ease-in-out" >
             <a href={`#`+route.id}> {route.name}</a>
            </li>)
        }
      </ul>
    </div>
  );
};

export default Navbar;
