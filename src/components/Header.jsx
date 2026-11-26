const Icon = ({ children, ...props }) => (
  <span className="icon" {...props}>
    {children}
  </span>
);

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img
          src="/taura.jpeg"
          alt="Taura Anderson"
          className="profile-photo"
          width="48"
          height="48"
          style={{
            width: 48,
            height: 48,
            borderRadius: 4,
            objectFit: 'cover',
          }}
        />
        <div>
          <div className="name">Taura Anderson</div>
          <span className="title">Software Developer | Backend &amp; Full-Stack Development</span>
        </div>
      </div>

      <div className="contact">
        <a href="mailto:tauraanderson56@gmail.com">
          <Icon>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
          </Icon>
          tauraanderson56@gmail.com
        </a>
        <span className="sep">·</span>
        <a href="tel:+254114759110">
          <Icon>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44-2.83 3.76-5.14 6.59-6.59l2.2-2.2c.27-.27.67-.36 1.02-.24s.36.67.24 1.02l-2.2 2.2c-2.64 2.64-5.52 4.08-8.29 3.86l-1.4-.18c-.45-.06-.9.14-1.01.54l-.23.85c-.21.79.17 1.62.81 2.04l1.84 1.19c.42.27.74.79.8 1.35l.07.72c0 .49-.32.9-.68 1.09l-1.17.61c-.46.24-.72.76-.64 1.26l.17 1.08c.08.49.41.83.84.83h1.03c.42 0 .78-.31.85-.74l.51-3.21c.06-.38-.2-.74-.55-.89l-3.9-1.56c-1.17-.47-2.28-.25-3.07.53l-1.4 1.4c-1.88 1.88-1.79 4.85.53 7.32l.21.08c.53.21 1.11.09 1.5-.23l3.49-2.25c.68-.44.97-1.29.81-2.03l-.85-.23c-.4-.11-.6.34-.54 1.03l.18 1.4c-.22 2.77 1.22 5.65 3.86 8.29l2.2-2.2c.35-.35.93-.03 1.02.24s-.03.93-.24 1.02l-2.2 2.2c-1.45 1.45-3.76 5.15-6.59 6.59l-2.2 2.2c-.27.27-.67.36-1.02.24s-.36-.67-.24-1.02l2.2-2.2c2.64-2.64 5.52-4.08 8.29-3.86l1.4.18c.45.06.9-.14 1.01-.54l.23-.85c.21-.79-.17-1.62-.81-2.04l-1.84-1.19c-.42-.27-.74-.79-.8-1.35l-.07-.72c0-.49.32-.9.68-1.09l1.17-.61c.46-.24.72-.76.64-1.26l-.17-1.08c-.08-.49-.41-.83-.84-.83h-1.03c-.42 0-.78.31-.85.74l-.51 3.21c-.06.38.2.74.55.89l3.9 1.56c1.17.47 2.28.25 3.07-.53l1.4-1.4c1.88-1.88 1.79-4.85-.53-7.32z" fill="currentColor"/></svg>
          </Icon>
          +254114759110
        </a>
      </div>
    </header>
  );
}
