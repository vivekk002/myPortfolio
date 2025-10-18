import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BIET, Educations } from "../constants/Constant";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-20 mb-10 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5 flex flex-col justify-center"
    >
      <div className="WRAPPER">
        {/* Section Header */}
        <div className="mb-16 max-sm:mb-10">
          <h1 className="text-primary-dark dark:text-white text-center font-extrabold text-5xl mb-3 max-sm:text-4xl">
            Education
          </h1>
          <p className="text-primary-dark/60 dark:text-white/60 text-center text-lg max-sm:text-base">
            My academic journey
          </p>
        </div>

        {/* Education Card */}
        <div
          className="EDUCATION flex justify-center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <article
            className="group max-w-3xl w-full
            bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/30 dark:to-accent/30 
            rounded-2xl shadow-lg p-8 max-sm:p-5
            transition-all duration-300 ease-smooth
            hover:shadow-2xl hover:scale-[1.01] hover:from-primary/15 hover:to-accent/15 dark:hover:from-primary/35 dark:hover:to-accent/35
            border border-transparent hover:border-accent/20 dark:hover:border-accent/30"
          >
            {/* Header with Logo and College Name */}
            <div className="flex gap-5 items-start mb-6 max-sm:gap-3">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 max-sm:w-20 max-sm:h-20 rounded-xl overflow-hidden bg-white dark:bg-primary/20 p-2 ring-2 ring-accent/20 dark:ring-accent/30 transition-all duration-300 group-hover:ring-accent/40 dark:group-hover:ring-accent/50 group-hover:scale-105">
                  <img
                    src={BIET}
                    alt="BIET Jhansi Logo"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h2
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-600 dark:from-accent-300 dark:to-white 
                  font-bold text-2xl max-sm:text-xl tracking-wide leading-tight mb-2"
                >
                  Bundelkhand Institute of Engineering and Technology
                </h2>
                <p className="text-primary-dark/70 dark:text-white/70 text-base max-sm:text-sm font-medium">
                  Jhansi, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Degree Information */}
            <div className="space-y-4 pl-4 max-sm:pl-0">
              {/* Degree Title */}
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-1">🎓</span>
                <div>
                  <h3 className="text-primary-dark dark:text-white font-semibold text-xl max-sm:text-lg">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-primary-dark/70 dark:text-white/70 text-base max-sm:text-sm mt-1">
                    Information Technology
                  </p>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-1">📅</span>
                <div>
                  <p className="text-primary-dark/70 dark:text-white/70 text-base max-sm:text-sm">
                    <span className="font-medium">Duration:</span> November 2022
                    - May 2026
                  </p>
                </div>
              </div>

              {/* CGPA with Badge */}
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-1">📊</span>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-primary-dark/70 dark:text-white/70 text-base max-sm:text-sm font-medium">
                    CGPA:
                  </span>
                  <div
                    className="bg-gradient-to-r from-success to-success-light text-white 
                    px-4 py-1.5 rounded-lg font-bold text-lg shadow-md
                    transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    7.00 / 10.0
                  </div>
                </div>
              </div>

              {/* Additional Info (Optional) */}
              <div className="mt-6 pt-6 border-t border-accent/20 dark:border-accent/30">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 dark:bg-accent/20 rounded-full text-sm font-medium text-primary-dark dark:text-white">
                    <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                    Currently Pursuing
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-sm font-medium text-primary-dark dark:text-white">
                    🏆 Final Year
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;
