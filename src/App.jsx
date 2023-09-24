import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
