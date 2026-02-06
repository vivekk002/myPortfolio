import Project_prop from "./Project_prop";
import {
  GPT4,
  Portfolio,
  Employee,
  Airbnb,
  Game,
  Ecommerce,
  SecondBrain,
  LodgeLogic,
  DevCollab,
  SwiftCart,
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
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-primary-dark dark:text-white text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="DevCollab"
            para="A modern, real-time team collaboration platform built with Next.js 15. Features workspace management, document editing, task tracking, and team chat in a unified green-themed interface."
            img={DevCollab}
            link=""
            github_link="https://github.com/vivekk002/dev-collab.git"
            status="In Progress"
            nextjs={
              <Tooltip title="Next.js" arrow>
                <IconButton>
                  <SiNextdotjs className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="Tailwind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            postgresql={
              <Tooltip title="PostgreSQL" arrow>
                <IconButton>
                  <SiPostgresql className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            prisma={
              <Tooltip title="Prisma" arrow>
                <IconButton>
                  <SiPrisma className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            socketio={
              <Tooltip title="Socket.io" arrow>
                <IconButton>
                  <SiSocketdotio className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="LodgeLogic"
            para="A full-stack hotel booking platform revolutionizing discovery and management. Features smart search, real-time availability, secure payments, and comprehensive dashboards."
            img={LodgeLogic}
            link=""
            github_link="https://github.com/vivekk002/L-L-hm.git"
            status="Completed"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="TypeScript" arrow>
                <IconButton>
                  <SiTypescript className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="Tailwind CSS" arrow>
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
              <Tooltip title="Node.js" arrow>
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
              <Tooltip title="Express.js" arrow>
                <IconButton>
                  <SiExpress className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="MindVault"
            para="AI-powered MERN stack content organizer with vector embeddings for intelligent search and retrieval. Features tag-based organization, real-time updates, and semantic search using OpenAI embeddings stored in MongoDB."
            img={SecondBrain}
            link="https://secontbrainfe.onrender.com/"
            github_link="https://github.com/vivekk002/secontBrainfe.git"
            status="Live"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="TypeScript" arrow>
                <IconButton>
                  <SiTypescript className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="Tailwind CSS" arrow>
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
              <Tooltip title="Node.js" arrow>
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
              <Tooltip title="Express.js" arrow>
                <IconButton>
                  <SiExpress className="dark:text-white text-primary-dark" />
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
          />

          <Project_prop
            title="SwiftCart"
            para="Full-featured MERN e-commerce with dual dashboards for customers and admins. Includes JWT authentication, Redux state management, Cloudinary image uploads, product CRUD, order tracking, and responsive design."
            img={SwiftCart}
            link="https://e-com-website-1-zahm.onrender.com"
            github_link="https://github.com/vivekk002/e-com-website.git"
            status="Live"
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
              <Tooltip title="Tailwind CSS" arrow>
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
              <Tooltip title="Node.js" arrow>
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
              <Tooltip title="Express.js" arrow>
                <IconButton>
                  <SiExpress className="dark:text-white text-primary-dark" />
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

          <Project_prop
            title="Portfolio Website"
            para="Modern, responsive portfolio built with React and Tailwind CSS. Features dark mode, smooth animations with AOS, sections for projects/experience/skills, and optimized performance with Vite bundling."
            img={Portfolio}
            link="https://vivekkumar.space/"
            github_link="https://github.com/vivekk002/myPortfolio.git"
            status="Live"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="Tailwind CSS" arrow>
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
            para="React-based EMS for managing employee records and task assignments. Features role-based dashboards, task tracking with status updates, local storage persistence, and clean UI with Tailwind CSS."
            img={Employee}
            link="https://employee-management-system-vert-eight.vercel.app/"
            github_link="https://github.com/vivekk002/ems.git"
            status="Live"
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
              <Tooltip title="Tailwind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
          />

          <Project_prop
            title="Airbnb Clone"
            para="Full-stack hotel booking platform with CRUD operations for listings, user authentication, reviews/ratings system, and map integration. Built with EJS templating, Express routing, and MongoDB for data persistence."
            img={Airbnb}
            link="https://delta-project-l5xc.onrender.com"
            github_link="https://github.com/vivekk002/delta-project.git"
            status="Live"
            html5={
              <Tooltip title="HTML5" arrow>
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
              <Tooltip title="CSS3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-white text-primary-dark" />
                </IconButton>
              </Tooltip>
            }
            nodejs={
              <Tooltip title="Node.js" arrow>
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
              <Tooltip title="Express.js" arrow>
                <IconButton>
                  <SiExpress className="dark:text-white text-primary-dark" />
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
