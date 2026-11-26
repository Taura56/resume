export default function Skills() {
  const categories = [
    {
      title: 'Programming',
      items: ['JavaScript', 'Python', 'Java', 'C++', 'Dart'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
    },
    {
      title: 'Frontend',
      items: ['React', 'HTML', 'CSS'],
    },
    {
      title: 'Mobile',
      items: ['Flutter', 'Android development'],
    },
    {
      title: 'Databases &amp; tools',
      items: ['MongoDB', 'MySQL', 'Firebase', 'Git', 'GitHub', 'VS Code', 'Android Studio'],
    },
    {
      title: 'Other',
      items: ['Basic penetration testing', 'Firewall installation', 'Kali Linux', 'Metasploit', 'Burp Suite'],
    },
  ];

  return (
    <section className="section">
      <h2 className="section-label navy">Technical Skills</h2>
      <div className="skills-grid">
        {categories.map((cat) => (
          <div className="skill-cat" key={cat.title}>
            <div className="cat-title">{cat.title}</div>
            <ul>
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
