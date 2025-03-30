import Vivek from "../assets/Vivek.png";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins']  max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 flex justify-center items-center p-5 max-sm:flex-col gap-5">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
              Vivek Kumar
            </span>

            <p className="ABOUT h-auto text-xl max-sm:text-[15px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1">
              Full-stack web developer skilled in the MERN stack, building
              scalable and user-centric applications. Experienced in React,
              Node.js, MongoDB, and Tailwind CSS, with a focus on clean code and
              responsive design.
            </p>
          </div>

          <img
            src={Vivek}
            alt="Vivek"
            className="rounded-full  max-sm:hidden"
          />
        </div>
      </section>
    </>
  );
};
export default About;
