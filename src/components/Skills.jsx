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
    <section className="SKILLS p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5">
      <div className="mb-16 max-sm:mb-10">
        <h1 className="text-primary-dark dark:text-white font-extrabold text-5xl text-center max-sm:text-4xl mb-3">
          Skills
        </h1>
        <p className="text-primary-dark/60 dark:text-white/60 text-center text-lg max-sm:text-base">
          Technologies I work with
        </p>
      </div>

      <div data-aos="zoom-out-up">
        {/* Frontend & Backend Stack */}
        <div className="mb-12 max-sm:mb-8">
          <h2 className="text-primary-dark dark:text-white font-semibold text-2xl text-center mb-8 max-sm:text-xl max-sm:mb-6">
            Full-Stack Development
          </h2>
          <div className="grid grid-cols-7 gap-6 max-sm:grid-cols-3 max-sm:gap-5 place-items-center">
            <Image img={HTML} label="HTML" />
            <Image img={CSS} label="CSS" />
            <Image img={Javascript} label="JavaScript" />
            <Image img={react} label="React" />
            <Image img={TailwindCSS} label="Tailwind" />
            <Image img={ExpressJs} label="Express" />
            <Image img={NodeJs} label="Node.js" />
          </div>
        </div>

        {/* Languages & Tools */}
        <div>
          <h2 className="text-primary-dark dark:text-white font-semibold text-2xl text-center mb-8 max-sm:text-xl max-sm:mb-6">
            Languages & Tools
          </h2>
          <div className="grid grid-cols-7 gap-6 max-sm:grid-cols-3 max-sm:gap-5 place-items-center">
            <Image img={CPP} label="C++" />
            <Image img={C} label="C" />
            <Image img={Python} label="Python" />
            <Image img={Vite} label="Vite" />
            <Image img={Git} label="Git" />
            <Image img={Github} label="GitHub" />
            <Image img={MongoDB} label="MongoDB" />
          </div>
        </div>
      </div>

      {/* Tech Stack Badge */}
      <div
        className="mt-12 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="inline-block bg-gradient-to-r from-primary/10 to-primary-accent/10 dark:from-primary/20 dark:to-primary-accent/20 
          rounded-full px-8 py-3 shadow-md
          transition-all duration-300 hover:shadow-xl hover:scale-105
          border border-primary/20 dark:border-primary-accent/20"
        >
          <p className="text-primary-dark dark:text-white font-medium text-base max-sm:text-sm">
            Specializing in{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-accent dark:from-primary-accent dark:to-white">
              MERN Stack Development
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
