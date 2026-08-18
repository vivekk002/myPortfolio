import {
  CSS,
  ExpressJs,
  Git,
  Github,
  HTML,
  Javascript,
  MongoDB,
  NodeJs,
  react,
  TailwindCSS,
} from "../constants/assets";
import Image from "./Img_prop";

const coreStack = [
  [HTML, "HTML"],
  [CSS, "CSS"],
  [Javascript, "JavaScript"],
  [react, "React"],
  [TailwindCSS, "Tailwind CSS"],
  [NodeJs, "Node.js"],
  [ExpressJs, "Express.js"],
  [MongoDB, "MongoDB"],
  [Git, "Git"],
  [Github, "GitHub"],
];

const skillGroups = [
  {
    title: "Backend & APIs",
    skills: ["TypeScript", "REST APIs", "JWT", "RBAC", "Zod", "Redis", "NextAuth"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Database Design", "Query Optimization"],
  },
  {
    title: "Frontend & Delivery",
    skills: ["Next.js", "Redux", "Docker", "Postman", "Jest", "Vercel", "Render"],
  },
];

const Skills = () => (
  <section className="section" aria-labelledby="skills-heading">
    <div className="mb-16 max-sm:mb-10">
      <h2 id="skills-heading" className="section-heading">Skills</h2>
      <p className="section-subtitle">Backend, data, and full-stack technologies I use to ship reliable products</p>
    </div>

    <div data-aos="zoom-out-up">
      <div className="mb-14">
        <h3 className="mb-8 text-center text-2xl font-semibold text-primary-dark dark:text-white max-sm:text-xl">
          Core Stack
        </h3>
        <div className="grid grid-cols-5 gap-6 place-items-center max-md:grid-cols-4 max-sm:grid-cols-3 max-sm:gap-5">
          {coreStack.map(([img, label]) => <Image key={label} img={img} label={label} />)}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map(({ title, skills }) => (
          <article
            key={title}
            className="rounded-2xl border border-accent/20 bg-gradient-to-br from-primary/10 to-accent/10 p-6 shadow-lg dark:from-primary/30 dark:to-accent/20"
          >
            <h3 className="mb-4 text-xl font-bold text-primary-dark dark:text-white">{title}</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill} className="rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-primary-dark shadow-sm dark:bg-primary/50 dark:text-white">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
