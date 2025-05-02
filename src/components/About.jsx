import Vivek from "../assets/Vivek.png";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 flex justify-between items-center p-5 max-sm:flex-col gap-5">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold max-w-[600px]">
            <h3 className="text-primary-dark dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-accent dark:from-primary-accent dark:to-white">
              Vivek Kumar
            </span>

            <p className="ABOUT h-auto text-xl max-sm:text-[15px] bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary-dark/70 dark:from-white dark:to-white/70 max-w-[470px] mt-5 pl-1">
              Full-stack web developer skilled in the MERN stack, building
              scalable and user-centric applications. Experienced in React,
              Node.js, MongoDB, and Tailwind CSS, with a focus on clean code and
              responsive design.
            </p>
          </div>

          <img
            src={Vivek}
            alt="Vivek"
            className="rounded-full w-[360px] h-[360px] object-cover transition-all duration-300 ease-smooth hover:scale-105 hover:shadow-xl hover:shadow-primary/30 max-sm:hidden"
          />
        </div>
      </section>
    </>
  );
};
export default About;
