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
      className="EXPERIENCE p-5 mx-20 mb-10 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-primary-dark dark:text-white text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Education
        </h1>

        <div
          className="EDUCATION flex gap-4 justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-right"
        >
          <div
            className="w-1/2 max-w-[500px] p-7 max-sm:p-3 max-sm:w-full
            transition-all duration-300 ease-smooth
            hover:shadow-xl hover:scale-[1.02] hover:from-primary/20 hover:to-primary-accent/20 dark:hover:from-primary/40 dark:hover:to-primary-accent/40
            active:scale-[0.98] rounded-2xl bg-gradient-to-br from-primary/10 to-primary-accent/10 dark:from-primary/30 dark:to-primary-accent/30"
          >
            <div className="flex gap-5">
              <img
                src={BIET}
                alt="BIET JHANSI"
                className="w-[90px] h-[90px] transition-transform duration-300 hover:scale-110"
              />
              <h1
                className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] 
                from-primary to-primary-accent dark:from-primary-accent dark:to-white 
                font-semibold text-2xl tracking-wider"
              >
                Bundelkhand Institute of Engineering and Technology, Jhansi
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize text-primary-dark dark:text-white text-xl max-sm:text-lg">
                Bachelor of Technology
              </h3>
              <p className="italic capitalize text-primary-dark/70 dark:text-white/70 text-xl max-sm:text-lg leading-9">
                November 2022 - may 2026
              </p>

              <p className="capitalize text-primary-dark/70 dark:text-white/70 text-xl max-sm:text-lg leading-9">
                Information Technology
              </p>
            </div>
          </div>
          <div className="w-1/2 max-w-[400px] max-sm:w-full flex justify-center items-center">
            <img
              src={Educations}
              alt="education"
              className="w-[350px] h-[350px] object-cover rounded-xl transition-all duration-300 ease-smooth hover:scale-[1.02] hover:shadow-2xl max-sm:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
