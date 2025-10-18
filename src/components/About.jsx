import Vivek from "../assets/Vivek.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="section min-h-screen flex items-center max-sm:min-h-[80vh]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-12 max-lg:flex-col max-lg:text-center">
          {/* Text Content */}
          <div className="flex-1 space-y-6" data-aos="fade-right">
            {/* Greeting */}
            <div className="space-y-2">
              <h3 className="text-primary dark:text-white text-3xl font-medium max-sm:text-2xl">
                Hi, there! 👋
              </h3>
              <h1 className="text-6xl leading-tight font-bold max-sm:text-5xl max-sm:leading-tight">
                <span className="text-primary dark:text-white">I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-600 dark:from-accent-300 dark:to-white animate-gradient">
                  Vivek Kumar
                </span>
              </h1>
            </div>

            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange/10 to-accent/10 dark:from-orange/20 dark:to-accent/20 rounded-full border border-orange/30 dark:border-accent/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange"></span>
              </span>
              <p className="text-primary dark:text-white font-semibold text-base">
                Full-Stack Developer
              </p>
            </div>

            {/* Bio */}
            <p className="text-xl leading-relaxed text-primary/80 dark:text-white/80 max-w-2xl max-sm:text-lg">
              Passionate about building{" "}
              <span className="font-semibold text-orange">scalable</span> and{" "}
              <span className="font-semibold text-accent-600 dark:text-accent-400">
                user-centric
              </span>{" "}
              web applications using the <strong>MERN stack</strong>.
              Experienced in React, Node.js, MongoDB, and Tailwind CSS, with a
              focus on clean code and modern design.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex gap-4 max-sm:flex-col max-sm:items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-orange to-orange-600 text-white font-semibold rounded-lg
                  transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange/30
                  active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2
                  flex items-center gap-2"
              >
                View My Work
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white dark:bg-primary-light text-primary dark:text-white font-semibold rounded-lg
                  border-2 border-accent-600 dark:border-accent-400
                  transition-all duration-300 hover:scale-105 hover:bg-accent/10 dark:hover:bg-accent/20
                  active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Stats */}
            <div
              className="flex gap-8 pt-4 max-sm:justify-center max-sm:flex-wrap"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-orange">10+</p>
                <p className="text-sm text-primary/60 dark:text-white/60">
                  Projects
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-600 dark:text-accent-400">
                  15+
                </p>
                <p className="text-sm text-primary/60 dark:text-white/60">
                  Technologies
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-success">7.0</p>
                <p className="text-sm text-primary/60 dark:text-white/60">
                  CGPA
                </p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative" data-aos="fade-left">
            <div className="relative w-[360px] h-[360px] max-sm:w-[280px] max-sm:h-[280px]">
              {/* Animated background rings */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-accent/20 rounded-3xl animate-pulse blur-2xl"></div>
              <div
                className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-orange/30 rounded-3xl animate-pulse blur-xl"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Main image */}
              <img
                src={Vivek}
                alt="Vivek Kumar - Full Stack Developer"
                className="relative z-10 rounded-3xl w-full h-full object-cover shadow-2xl
                  ring-4 ring-accent/30 dark:ring-accent/50
                  transition-all duration-500 ease-smooth
                  hover:scale-105 hover:rotate-2 hover:ring-accent/50 dark:hover:ring-accent/70"
                loading="eager"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-primary-light px-4 py-2 rounded-full shadow-xl ring-4 ring-white dark:ring-primary z-20">
                <p className="text-primary dark:text-white font-bold flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <span>Available for work</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
