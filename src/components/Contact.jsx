import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white "
    >
      <div className="flex flex-col p-4 justify-center  max-w-screen-lg mx-auto h-full">
        <div className="max-w-3xl mx-auto pb-8 ">
          <p className=" flex flex-col items-center justify-center text-4xl font-bold  border-gray-500 p-2 inline">
            Contact
          </p>

          <p className="py6 text-center font-bold mt-6">
            Submit the form to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a032674c-bdd6-45d0-9771-9a0ce3d8f74f"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duratiopn-300">
              Lets talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
