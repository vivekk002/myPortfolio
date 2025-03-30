import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
  CPP,
  C,
  ExpressJs,
  NodeJs,
  MongoDB,
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className=" grid grid-cols p-15 text-center "
          data-aos="zoom-out-up"
        >
          <div className="grid grid-cols-7 mt-10 max-sm:grid-cols-3  max-sm:gap-5">
            <Image img={HTML} label="HTML"></Image>
            <Image img={CSS} label="CSS"></Image>
            <Image img={Javascript} label="JavaScript"></Image>
            <Image img={react} label="React"></Image>
            <Image img={TailwindCSS} label="TailwindCSS"></Image>
            <Image img={ExpressJs} label="Express.js"></Image>
            <Image img={NodeJs} label="Node.js"></Image>
          </div>
          <div className="grid grid-cols-7 mt-10 max-sm:grid-cols-3  max-sm:gap-5">
            <Image img={CPP} label="C++"></Image>
            <Image img={C} label="C"></Image>
            <Image img={Python} label="Python"></Image>
            <Image img={Vite} label="Vite"></Image>
            <Image img={Git} label="Git"></Image>
            <Image img={Github} label="Github"></Image>
            <Image img={MongoDB} label="MongoDB"></Image>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
