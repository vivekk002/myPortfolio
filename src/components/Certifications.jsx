const certifications = [
  { title: "Full Stack Web Development", issuer: "100xDevs", date: "Nov 2025" },
  { title: "TypeScript Handbook", issuer: "FreeCodeCamp", date: "Jul 2025" },
  { title: "Full Stack Curriculum", issuer: "FreeCodeCamp", date: "Dec 2024" },
];

const Certifications = () => (
  <section className="section" aria-labelledby="certifications-heading">
    <div className="mb-12 max-sm:mb-8">
      <h2 id="certifications-heading" className="section-heading">
        Certifications
      </h2>
      <p className="section-subtitle">Continuous learning in modern web development</p>
    </div>

    <div className="grid gap-6 md:grid-cols-3" data-aos="fade-up">
      {certifications.map(({ title, issuer, date }) => (
        <article
          key={title}
          className="rounded-2xl border border-accent/20 bg-gradient-to-br from-primary/10 to-accent/10 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:from-primary/30 dark:to-accent/20"
        >
          <p className="mb-3 text-2xl" aria-hidden="true">🏅</p>
          <h3 className="text-lg font-bold text-primary-dark dark:text-white">{title}</h3>
          <p className="mt-2 font-medium text-accent-700 dark:text-accent-300">{issuer}</p>
          <time className="mt-4 block text-sm text-primary-dark/60 dark:text-white/60">{date}</time>
        </article>
      ))}
    </div>
  </section>
);

export default Certifications;
