export default function Certifications() {
  return (
    <section className="section">
      <h2 className="section-label navy">Certifications</h2>

      <div className="cert">
        <div className="cert-name">Dart with Flutter Specialisation</div>
        <div className="cert-org">Power Learn Project</div>
        <div className="cert-date">April 2024</div>
        <a
          className="cert-link"
          href="/PLP Academy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 14, height: 14 }}>
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2l8-2.67v2.67zM13 6v2l4 2.67v-2.67L13 6z" fill="currentColor"/>
          </svg>
          View PLP Academy.pdf
        </a>
      </div>

      <div className="cert">
        <div className="cert-name">Cybersecurity and Emerging Technologies Awareness Training</div>
        <div className="cert-org">ICT Authority Kenya &amp; Cyber Shujaa</div>
        <div className="cert-date">June 12, 2024</div>
        <a
          className="cert-link"
          href="/Security-Cert.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 14, height: 14 }}>
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2l8-2.67v2.67zM13 6v2l4 2.67v-2.67L13 6z" fill="currentColor"/>
          </svg>
          View Security-Cert.pdf
        </a>
      </div>
    </section>
  );
}
