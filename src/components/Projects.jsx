import Project_prop from "./Project_prop";
import {
  GPT4,
  Portfolio,
  Employee,
  Airbnb,
  Game,
  Ecommerce,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-primary-dark dark:text-white text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Portfolio Website"
            para="Personal portfolio website created with react and Tailwind CSS"
            img={Portfolio}
            link="https://vivekkumar.space/"
            github_link="https://github.com/vivekk002/myPortfolio.git"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Employee Management System"
            para="Employee Management System is a website which allows the user to manage the employee details along with the task assigned to them"
            img={Employee}
            link="https://employee-management-system-vert-eight.vercel.app/"
            github_link="https://github.com/vivekk002/ems.git"
            html5={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Airbnb Clone"
            para="Airbnb Clone is a website which allows the user to book the hotel according to their choice"
            img={Airbnb}
            link="https://delta-project-l5xc.onrender.com"
            github_link="https://github.com/vivekk002/delta-project.git"
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            nodejs={
              <Tooltip title="NodeJS" arrow>
                <IconButton>
                  <SiNodedotjs className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            mongodb={
              <Tooltip title="MongoDB" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            expressjs={
              <Tooltip title="ExpressJS" arrow>
                <IconButton>
                  <SiExpress className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="E-Commerce Website"
            para="A MERN stack e-commerce site with client/admin dashboards, secure auth, product management, and image upload functionality. Used Redux for smooth state handling."
            img={Ecommerce}
            link="https://e-com-website-1-zahm.onrender.com"
            github_link="https://github.com/vivekk002/e-com-website.git"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            nodejs={
              <Tooltip title="NodeJS" arrow>
                <IconButton>
                  <SiNodedotjs className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            mongodb={
              <Tooltip title="MongoDB" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            redux={
              <Tooltip title="Redux" arrow>
                <IconButton>
                  <SiRedux className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            cloudinary={
              <Tooltip title="Cloudinary" arrow>
                <IconButton>
                  <FaCloud className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
