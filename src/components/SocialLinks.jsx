import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/weil-essaisi-430707195/",
      style: { marginBottom: "10px" },
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/weil1997",
    },
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 p-4">
      {links.map(({ id, child, href, style }) => (
        <a
          key={id}
          href={href}
          className="bg-gray-500 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700 transition duration-300"
          target="_blank"
          rel="noreferrer"
          style={{ ...style }}
        >
          {child}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
