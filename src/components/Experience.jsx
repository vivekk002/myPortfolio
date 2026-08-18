"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import { NomadNx, Projects } from "../constants/assets";

const Experience = () => {
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
              title="Software Developer Intern"
              subtitle="NomadNx | BIICF, BIET Jhansi"
              date="Nov 2024 - Apr 2025"
              highlights={[
                "Engineered responsive React and Tailwind interfaces for 3+ client projects.",
                "Integrated REST APIs with Axios, including request, response, and error-state handling.",
                "Created Postman workflows for authentication and edge cases, reducing production bugs by 15%.",
              ]}
              badge="Internship"
            />
            <Exp_prop
              img={Projects}
              title="Backend Developer"
              subtitle="Ziksir | Project: Nile"
              date="Jun 2026 - Present"
              highlights={[
                "Implemented NextAuth/JWT authentication, bcrypt, RBAC, email verification, password reset, and Redis-backed rate limiting.",
                "Designed a Prisma/PostgreSQL schema across 10 models and built 20 Zod-validated REST APIs for booking, user, and admin workflows.",
                "Built order processing and admin management, backed by Jest tests and automated Vercel deployment.",
              ]}
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
