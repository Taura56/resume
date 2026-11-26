import PrintButton from './components/PrintButton.jsx';
import Header from './components/Header.jsx';
import Summary from './components/Summary.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Languages from './components/Languages.jsx';
import Links from './components/Links.jsx';

export default function App() {
  return (
    <div className="resume">
      <PrintButton />

      {/* Page 1 */}
      <div className="page page-1">
        <Header />
        <Summary />
        <Education />
        <Experience />
      </div>

      {/* Page 2 */}
      <div className="page page-2">
        <Skills />
        <Projects />
        <Certifications />
        <Languages />
        <Links />
      </div>
    </div>
  );
}
