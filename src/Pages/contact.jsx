import PageHeader from "../components/PageHeader";
const Contact = () => {
  return (
    <div
      className="min-h-screen h-auto w-full bg-#fafafa relative flex justify-center items-center py-16 sm:py-32"
      id="contact"
    >
      <div className=" w-11/12 lg:w-9/12 flex justify-center items-center flex-col">
      <PageHeader heading="contact" subheading="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible" />
      <form className="bg-[#fff] flex flex-col p-5 sm:p-16 shadow-lg shadow-gray-400 rounded-lg w-full sm:w-8/12 mt-16 sm:mt-32 ">
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          className="text-[#333] bg-gray-100 p-5 rounded-lg outline-none border-none mb-5"
          placeholder="Enter your name"
        />
        <label htmlFor="email">Email</label>
        <input
          required
          type="text"
          id="email"
          className="text-[#333] bg-gray-100 p-5 rounded-lg outline-none border-none mb-5"
          placeholder="Enter your email"
        />
        <label htmlFor="msg">Message</label>
        <textarea
          required
          type="text"
          id="msg"
          className="text-[#333] bg-gray-100 p-5 rounded-lg outline-none border-none mb-5"
          rows="10"
          placeholder="Enter your message"
        />
        <button className="bg-purple-600 px-8 py-3 font-bold text-white text-lg sm:text-xl rounded-lg hover:-translate-y-1 transition duration-150 ease-in-out shadow-md shadow-purple-400 mt-5">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
