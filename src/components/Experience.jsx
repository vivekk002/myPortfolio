"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { BIET, Projects } from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12">
          <h1 className="text-primary-dark dark:text-white font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={BIET}
              title="Student Council, Information Technology, BIET Jhansi"
              subtitle=""
              date="March 2023 - present"
              para="- I worked as a part of the student council of the IT department of BIET Jhansi. I was responsible for managing the department's social media handles and organizing events."
            />
            <Exp_prop
              img={Projects}
              title="Full-Stack Web Developer"
              subtitle=""
              date="September 2024 - present"
              para="- As a full-stack web developer, I worked on several projects, applying my skills in MERN stack and modern web technologies to build scalable and responsive applications. "
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
