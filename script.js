// Array of technical skills
const skills = [
    "Programming Languages:",
    "Java",
    "Python",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "Dart",
    "Mobile Development:",
    "Android (Java, Kotlin)",
    "Flutter (Dart)",
    "Web Development:",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Security:",
    "Basic penetration testing techniques",
    "Firewall installation",
    "Tools & Technologies:",
    "Git",
    "Android Studio",
    "Visual Studio Code",
    "Kali Linux",
    "Metasploit Frameworks",
    "Burpsuit",
    "Firebase"
];

// Function to add skills to the skills section
function addSkills() {
    const skillsContainer = document.querySelector('.skills');
    let skillsList = '';

    for (let i = 0; i < skills.length; i++) {
        if (skills[i] === "Programming Languages:" || skills[i] === "Mobile Development:" || skills[i] === "Web Development:" || skills[i] === "Security:" || skills[i] === "Tools & Technologies:") {
            skillsList += `<ul><li>${skills[i]}</li>`;
        } else {
            skillsList += `<li>${skills[i]}</li>`;
        }

        if (skills[i + 1] === "Programming Languages:" || skills[i + 1] === "Mobile Development:" || skills[i + 1] === "Web Development:" || skills[i + 1] === "Security:" || skills[i + 1] === "Tools & Technologies:") {
            skillsList += `</ul>`;
        }
    }

    skillsContainer.innerHTML = skillsList;
}

// Call the function to add skills
addSkills();