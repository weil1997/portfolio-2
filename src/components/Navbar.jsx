import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
      idName: "experience-section",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed top-0 px-4">
      <div>
        <h1 className="text-md font-medium ml-1 sm:text-md md:text-lg lg:text-2xl">
          Weil Essaisi
        </h1>
      </div>

      {/* Hamburgarmeny */}
      <div className="md:hidden">
        <div
          onClick={toggleNav}
          className="cursor-pointer pr-4 z-10 text-gray-500"
        >
          {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {navOpen && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  activeClass="text-white"
                  to={link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleNav} // Stäng hamburgarmenyn när en länk klickas
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Huvudmeny */}
      <ul className="hidden md:flex md:flex-row ">
        {links.map(({ id, link, idName }) => (
          <li
            key={id}
            className="px-2 cursor-pointer capitalize font-medium text-gray-500 hover:scale-100 duration-200 hover:text-white"
          >
            <Link
              activeClass="text-white"
              to={link}
              spy={true}
              smooth={true}
              duration={500}
              offset={idName === "experience-section" ? -100 : -70}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
