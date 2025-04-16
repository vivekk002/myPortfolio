/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const Project_prop = (props) => {
  return (
    <>
      <div
        className="shadow-lg rounded-xl bg-gradient-to-br from-primary/10 to-primary-accent/10 dark:from-primary/30 dark:to-primary-accent/30 h-auto max-sm:h-auto p-7 max-sm:p-3 
        transition-all duration-300 ease-smooth
        hover:shadow-xl hover:scale-[1.02] hover:from-primary/20 hover:to-primary-accent/20 dark:hover:from-primary/40 dark:hover:to-primary-accent/40
        active:scale-[0.98]"
      >
        <div className="HEADER">
          <div className="HEADING flex gap-7 max-sm:gap-0">
            <div className="p-3">
              <img
                src={props.img}
                alt=""
                className="max-w-[100px] rounded-full transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-3">
              <h1 className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r p-1 from-primary to-primary-accent dark:from-primary-accent dark:to-white text-xl mb-2">
                {props.title}
              </h1>
              <h3 className="text-primary-dark dark:text-white p-1">
                Tech Stack
              </h3>

              <div className="grid grid-cols-4 gap-1 p-1 max-sm:grid-cols-3 -translate-x-2">
                {props.html5}
                {props.css3}
                {props.javascript}
                {props.tailwindcss}
                {props.react}
                {props.vite}
                {props.nodejs}
                {props.mongodb}
                {props.expressjs}
                {props.redux}
                {props.cloudinary}
              </div>
            </div>
          </div>
        </div>

        <p className="text-primary-dark/70 dark:text-white/70 mt-5 text-lg px-5">
          {props.para}
        </p>

        <div className="flex gap-4 text-primary-dark dark:text-white p-2 pl-5 mt-5 text-3xl">
          <a
            href={props.github_link}
            className="transition-transform duration-300 hover:scale-110 hover:text-primary-accent"
          >
            <SiGithub />
          </a>
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="transition-transform duration-300 hover:scale-110 hover:text-primary-accent"
          >
            <SlLink />
          </a>
        </div>
      </div>
    </>
  );
};
export default Project_prop;
