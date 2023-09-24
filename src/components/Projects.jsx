import React from "react";
import spotify from "../assets/spotify-bild.jpg";
import kanban from "../assets/kanban-bild.jpg";
import klarna from "../assets/klarna-bild.jpg";
import advice from "../assets/advice-bild.jpg";
import agecalculator from "../assets/agecalculator.jpg";

const Projects = () => {
  const Portfolios = [
    {
      id: 1,
      src: kanban,
      link: "https://incredible-gnome-bdceb0.netlify.app",
    },
    {
      id: 2,
      src: spotify,
      link: "https://spotify-batch5.vercel.app/",
    },
    {
      id: 3,
      src: klarna,
      link: "https://klarna.herokuapp.com/",
    },
    {
      id: 4,
      src: advice,
      link: "https://endearing-custard-8c166b.netlify.app",
    },
    {
      id: 5,
      src: agecalculator,
      link: "https://jazzy-pavlova-e39f67.netlify.app",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white "
    >
      <div className="container mx-auto py-16 px-5 flex flex-col justify-center items-center h-full">
        <div className="pb-8">
          <p className="flex flex-col items-center justify-center text-4xl font-bold p-2 inline">
            Portfolio
          </p>
          <p className="py-6 text-center font-bold">
            Check out some of my work right here
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 px-12 sm:px-0">
          {Portfolios.map(({ id, src, link }) => (
            <a
              href={link}
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={src} alt="" className="w-48 mx-auto sm:w-full" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
