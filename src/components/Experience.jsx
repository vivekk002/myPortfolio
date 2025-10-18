"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { NomadNx, Projects } from "../constants/Constant";

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
          {/* Section Header */}
          <div className="mb-16 max-sm:mb-10">
            <h1 className="text-primary-dark dark:text-white font-extrabold text-5xl text-center max-sm:text-4xl mb-3">
              Experience
            </h1>
            <p className="text-primary-dark/60 dark:text-white/60 text-center text-lg max-sm:text-base">
              My professional journey
            </p>
          </div>

          {/* Experience Cards */}
          <div
            className="EXPERIENCE mt-16 grid gap-10 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={NomadNx}
              title="Software Development Intern"
              subtitle="NomadNX Services"
              date="Nov 2024 - Apr 2025"
              para="Designed and developed responsive front-end interfaces for ERP systems and client websites using React and modern CSS frameworks. Collaborated with cross-functional teams to deliver features aligned with business objectives, contributing to improved user experience and system efficiency."
              badge="Internship"
            />
            <Exp_prop
              img={Projects}
              title="Full-Stack Web Developer"
              subtitle="Freelance / Personal Projects"
              date="Aug 2024 - Present"
              para="Built and deployed multiple full-stack applications using the MERN stack with TypeScript. Implemented features including JWT authentication, RESTful APIs, real-time updates, vector embeddings for AI search, and cloud image management. Focused on scalable architecture and responsive UI design."
              badge="Active"
            />
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
};

export default Experience;
