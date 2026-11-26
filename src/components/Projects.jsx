export default function Projects() {
  const projects = [
    {
      name: 'Business Manager / Point of Sale',
      stack: 'Flutter · Dart · Node.js · Express.js · MongoDB',
      desc: 'Point-of-sale and business management application.',
      github: 'https://github.com/Taura56/point-of-sale',
      live: 'https://point-of-sale-1-tghr.onrender.com',
    },
    {
      name: 'BuzManager',
      stack: 'Flutter · Dart',
      desc: 'Business stock, income and expense management application.',
      github: 'https://github.com/Taura56/BuzManager',
      live: null,
    },
    {
      name: 'TjTech Management System',
      stack: 'Collaborative management system (backend contribution)',
      desc: 'Collaborative management system project with backend contribution.',
      github: 'https://github.com/Taura56/TjTech-Management-System',
      live: null,
    },
    {
      name: 'Quiz Craze',
      stack: 'Flutter · Dart · Firebase',
      desc: 'Christian quiz application built with Flutter and Firebase Authentication.',
      github: 'https://github.com/Taura56/Quiz_App',
      live: null,
    },
  ];

  return (
    <section className="section">
      <h2 className="section-label navy">Projects</h2>
      {projects.map((p) => (
        <div className="project" key={p.name}>
          <div className="proj-name">{p.name}</div>
          <div className="proj-stack">{p.stack}</div>
          <div className="proj-desc">{p.desc}</div>
          <div className="project-links">
            <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live</a>}
          </div>
        </div>
      ))}
    </section>
  );
}
