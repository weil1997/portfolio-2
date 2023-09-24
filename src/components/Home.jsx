import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import weilbild from "../assets/weil-bg.png";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="flex items-center h-full px-4 flex-col-reverse md:flex-row justify-between mt-20 gap-24">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font bold text-white">
            I'm a Fullstack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-lg">
            I have experience in developing fullstack solutions with a strong
            understanding of databases and fullstack technologys
          </p>
          <div></div>
        </div>
        <div style={{width: "70%", marginTop: 80}}>
          <img
            src={weilbild}
            alt="My profile"
            className="rounded-full mx-auto"
            style={{ borderRadius: "10%",  }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
