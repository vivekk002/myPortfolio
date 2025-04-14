/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";

import Vivek from "../assets/Vivek.png";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="EXPERIENCE p-5 mt-[5rem] font-['Poppins'] max-sm:p-2"
      >
        <div
          className="bg-gradient-to-br from-primary/10 to-primary-accent/10 dark:from-primary/30 dark:to-primary-accent/30 rounded-2xl shadow-lg WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2
          transition-all duration-300 ease-smooth
          hover:shadow-xl hover:scale-[1.01] hover:from-primary/20 hover:to-primary-accent/20 dark:hover:from-primary/40 dark:hover:to-primary-accent/40"
        >
          <div className="ABOUT p-7">
            <h2 className="text-primary-dark dark:text-white font-semibold leading-7 text-xl tracking-wider max-sm:text-center">
              Vivek Kumar
            </h2>
            <p className="text-primary-dark/70 dark:text-white/70 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
              Passionate Full-Stack Developer with expertise in the MERN stack,
              building scalable web applications. Driven by a love for
              technology and problem-solving. 🚀
            </p>
            <div className="SOCIALS text-primary-dark dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
              <a
                href="https://github.com/vivekk002"
                className="transition-all duration-300 hover:scale-110 hover:text-primary-accent"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek1107"
                className="transition-all duration-300 hover:scale-110 hover:text-primary-accent"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/vivekrajput_1025/"
                className="transition-all duration-300 hover:scale-110 hover:text-primary-accent"
              >
                <SiInstagram />
              </a>
              <a
                href="https://twitter.com/silent_saffer"
                className="transition-all duration-300 hover:scale-110 hover:text-primary-accent"
              >
                <SiTwitter />
              </a>
              <a
                href="mailto:vivekkumar.akvk@gmail.com"
                className="transition-all duration-300 hover:scale-110 hover:text-primary-accent"
              >
                <SiGmail />
              </a>
            </div>
            <div className="flex gap-5 max-sm:justify-center">
              <button
                className="py-3 px-4 bg-gradient-to-r from-primary to-primary-accent dark:from-primary-accent dark:to-primary 
                font-medium text-[12px] text-white dark:text-white outline-none mt-10 mr-3 rounded
                transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30
                active:scale-95"
              >
                <a href="https://drive.google.com/file/d/1AzsnWgReXI9s-SPmXock1U48Pdk4Sb2r/view?usp=drive_link">
                  Resume
                </a>
              </button>
              <button
                className="py-3 px-4 bg-gradient-to-r from-primary to-primary-accent dark:from-primary-accent dark:to-primary 
                font-medium text-[12px] text-white dark:text-white outline-none mt-10 mr-3 rounded
                transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30
                active:scale-95"
              >
                <a
                  href="https://github.com/vivekk002/myPortfolio.git"
                  className="flex gap-2 items-center justify-center"
                >
                  <SiGithub />
                  Star
                </a>
              </button>
            </div>
          </div>

          <div className="IMG p-0 max-sm:grid max-sm:place-content-center">
            <img
              src={Vivek}
              alt="Vivek Kumar"
              className="h-[200px] max-sm:h-[150px] rounded-full mt-12
                transition-all duration-300 ease-smooth
                hover:scale-110 hover:shadow-xl hover:shadow-primary/30"
            />
          </div>
        </div>

        <p className="text-primary-dark dark:text-white mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with 💚 by Vivek Kumar & the Open Source Community
        </p>
      </section>
    </>
  );
};
export default Contact;
