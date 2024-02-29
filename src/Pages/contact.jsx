import { useRef } from "react";
import emailjs from '@emailjs/browser'
// import emailjs from 'emailjs-com'
import PageHeader from "../components/PageHeader";
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    emailjs
      .sendForm('service_5v1gdkb', 'template_fdk0nmg', form.current ,'j2X7GbLqQichs3QhH')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div
      className="contact min-h-screen h-auto w-full bg-#fafafa relative flex justify-center items-center py-16 sm:py-32"
      id="contact" 
    >
      <div className=" w-11/12 lg:w-9/12 flex justify-center items-center flex-col">
      <PageHeader heading="contact" subheading="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible" />
      <form id="form" ref={form} onSubmit={sendEmail} className="bg-[#fff] flex flex-col p-5 sm:p-16 shadow-lg shadow-gray-400 rounded-lg w-full sm:w-8/12 mt-16 sm:mt-32">
        <label>Name</label>
        <input
          required
          type="text"
          name="user_name"
          className="text-[#333] bg-gray-100 p-5 rounded-lg outline-none border-none mb-5"
          placeholder="Enter your name"
        />
        <label>Email</label>
        <input
          required
          type="text"
          name="user_email"
          className="text-[#333] bg-gray-100 p-5 rounded-lg outline-none border-none mb-5"
          placeholder="Enter your email"
        />
        <label>Message</label>
        <textarea
          required
          type="text"
          name="message"
          className="text-[#333] bg-gray-100 p-5 rounded-lg outline-none border-none mb-5"
          rows="10"
          placeholder="Enter your message"
        />
        <button type="submit" className="bg-purple-600 px-8 py-3 font-bold text-white text-lg sm:text-xl rounded-lg hover:-translate-y-1 transition duration-150 ease-in-out mt-5 active:bg-gray-400 active:text-white">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
