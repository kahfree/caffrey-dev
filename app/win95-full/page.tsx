import "98.css/dist/98.css";
import projects from "../projects.json";

export const metadata = {
  title: "Ethan Caffrey — Win95 Edition",
};

export default function Win95Full() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#008080",
        fontFamily: "Arial, sans-serif",
        color: "#222",
        paddingBottom: 44,
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px" }}>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">ETHAN_CAFFREY.EXE</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body">
            <p style={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>Full-stack engineer.</p>
            <p style={{ fontSize: 11, letterSpacing: 1, marginBottom: 16 }}>
              ETHAN CAFFREY — SOFTWARE ENGINEER II @ CANTO
            </p>

            <fieldset style={{ marginBottom: 16 }}>
              <legend>About</legend>
              <p style={{ marginBottom: 8, lineHeight: 1.5 }}>
                Full-stack engineer with 3+ years of experience, focused on backend and platform work. At Canto I
                build Node.js/TypeScript gRPC services on AWS and work on the React frontend. At Ericsson I
                hardened Kubernetes/Helm deployments across ~115 services.
              </p>
              <p style={{ marginBottom: 12, lineHeight: 1.5 }}>
                I care most about API and data design, reliability, and spec-driven development with AI coding
                tools.
              </p>
              <ul className="tree-view" style={{ listStyle: "none", margin: 0 }}>
                <li>🇮🇪 Based in Ireland</li>
                <li>💼 Software Engineer II @ Canto</li>
                <li>🔧 Building: SaaS w/ spec-driven AI workflows</li>
                <li>
                  🔗 <a href="https://github.com/kahfree" target="_blank" rel="noopener noreferrer">github.com/kahfree</a>
                </li>
                <li>
                  🔗 <a href="https://linkedin.com/in/ethan-caffrey-0b2976136" target="_blank" rel="noopener noreferrer">linkedin.com/in/ethan-caffrey</a>
                </li>
                <li>
                  ✉️ <a href="mailto:ethancaff@gmail.com">ethancaff@gmail.com</a>
                </li>
                <li>
                  📄 <a href="/ethan-caffrey-resume.docx" target="_blank" rel="noopener noreferrer">resume.docx</a>
                </li>
              </ul>
            </fieldset>

            <fieldset style={{ marginBottom: 16 }}>
              <legend>Experience</legend>

              <fieldset style={{ marginBottom: 12 }}>
                <legend>Canto — Software Engineer II</legend>
                <div className="status-bar" style={{ marginBottom: 8 }}>
                  <p className="status-bar-field">Feb 2025 – Present</p>
                </div>
                <ul style={{ marginLeft: 18, lineHeight: 1.5 }}>
                  <li>Built core parts of a service that scores assets and products for the new Canto Asset Library (Node.js/TypeScript, gRPC, PostgreSQL, Kafka), then added filtering by score across 7 repos</li>
                  <li>Launched a new gRPC tenant service in 5 regions, with Terraform infrastructure and blue/green ECS deploys</li>
                  <li>Co-developed asset collection, which 75%+ of customers use daily, and led the move to TanStack Router</li>
                  <li>Cut CI/CD time ~25% by auditing the e2e suite and removing flaky Cypress tests</li>
                </ul>
              </fieldset>

              <fieldset>
                <legend>Ericsson — Software Engineer</legend>
                <div className="status-bar" style={{ marginBottom: 8 }}>
                  <p className="status-bar-field">Jul 2023 – Jan 2025</p>
                </div>
                <ul style={{ marginLeft: 18, lineHeight: 1.5 }}>
                  <li>Hardened container security across ~115 services (Docker/Kubernetes/Helm) for internal compliance</li>
                  <li>Built a full-stack internal tool that shows Git repository metrics, so teams could track codebase health</li>
                  <li>Automated Helm chart generation, cutting test turnaround from ~2 days to ~3 hours</li>
                </ul>
              </fieldset>
            </fieldset>

            <fieldset style={{ marginBottom: 16 }}>
              <legend>Projects</legend>
              {projects.projects.map((p) => {
                const label = p.link.startsWith("/") ? "Open Project" : "View on GitHub";
                return (
                  <div className="window" key={p.title} style={{ marginBottom: 12 }}>
                    <div className="title-bar">
                      <div className="title-bar-text">{p.title}</div>
                      <div className="title-bar-controls">
                        <button aria-label="Close" />
                      </div>
                    </div>
                    <div className="window-body">
                      <p style={{ lineHeight: 1.5, marginBottom: 8 }}>{p.description}</p>
                      <div className="status-bar" style={{ marginBottom: 10, flexWrap: "wrap", gap: 4 }}>
                        {p.tags.map((tag) => (
                          <p className="status-bar-field" key={tag} style={{ flexGrow: 0 }}>{tag}</p>
                        ))}
                      </div>
                      <a
                        href={p.link}
                        target={p.link.startsWith("/") ? undefined : "_blank"}
                        rel={p.link.startsWith("/") ? undefined : "noopener noreferrer"}
                      >
                        {label} →
                      </a>
                    </div>
                  </div>
                );
              })}
            </fieldset>

            <a href="https://github.com/kahfree" target="_blank" rel="noopener noreferrer">
              <button style={{ minWidth: 160 }}>More on GitHub →</button>
            </a>
          </div>

          <div className="status-bar">
            <p className="status-bar-field">Ready</p>
            <p className="status-bar-field">caffrey.dev</p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          background: "silver",
          boxShadow: "inset 0 1px #fff, 0 -1px #0a0a0a",
          display: "flex",
          alignItems: "center",
          padding: "0 4px",
          gap: 8,
        }}
      >
        <button className="default" style={{ fontWeight: 700 }}>🪟 Start</button>
        <div style={{ flex: 1 }} />
        <div className="status-bar-field" style={{ margin: 0 }}>3:16 PM</div>
      </div>
    </div>
  );
}
