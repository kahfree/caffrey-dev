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
                Full-stack engineer spanning customer-facing SaaS at Canto to cloud infrastructure security at
                Ericsson — React/TypeScript frontends, Java/Spring Boot backends, Kubernetes/Helm hardening
                across 115+ services.
              </p>
              <p style={{ marginBottom: 12, lineHeight: 1.5 }}>
                I build my own tooling to move faster: spec-driven AI workflows, internal process automation.
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
                  📄 <a href="/ethan-caffrey-resume.pdf" target="_blank" rel="noopener noreferrer">resume.pdf</a>
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
                  <li>Co-developed asset collection, used daily by 75%+ of customers — ported from the legacy UI, full-stack delivery + system design</li>
                  <li>Led routing migration to TanStack Router, fixing a long-standing customer-facing scroll bug</li>
                  <li>Cut CI/CD pipeline time ~25% by auditing and de-flaking the e2e suite</li>
                </ul>
              </fieldset>

              <fieldset>
                <legend>Ericsson — Software Engineer</legend>
                <div className="status-bar" style={{ marginBottom: 8 }}>
                  <p className="status-bar-field">Jul 2023 – Jan 2025</p>
                </div>
                <ul style={{ marginLeft: 18, lineHeight: 1.5 }}>
                  <li>Hardened container security across ~115 services (Docker/Kubernetes/Helm) for internal compliance</li>
                  <li>Built full-stack internal tool visualizing Git repo metrics for cross-team codebase health</li>
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
