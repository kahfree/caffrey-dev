import projects from "./projects.json";

const FONT = "Tahoma, Verdana, 'Segoe UI', Arial, sans-serif";
const NAVY = "#0a0a5c";
const LINK = "#00248f";
const PANEL = "#d4d0c8";
const BG = "#ece9d8";
const TEXT = "#1a1a1a";
const SUBTEXT = "#4a4a4a";

const bevelOut = {
  background: PANEL,
  boxShadow: "inset -1px -1px #404040, inset 1px 1px #fff, inset -2px -2px #808080, inset 2px 2px #dfdfdf",
};

const bevelIn = {
  background: "#fff",
  boxShadow: "inset -1px -1px #fff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #404040",
};

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ ...bevelOut, padding: 3, marginBottom: 20 }}>
      <div
        style={{
          background: `linear-gradient(90deg, ${NAVY}, #4060c0)`,
          color: "#fff",
          fontWeight: 700,
          fontSize: 13,
          padding: "4px 8px",
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <div style={{ padding: "2px 10px 10px" }}>{children}</div>
    </div>
  );
}

export default function RetroHome() {
  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: FONT, color: TEXT }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px 64px" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: NAVY, marginBottom: 4 }}>Full-stack engineer.</h1>
        <p style={{ fontSize: 12, letterSpacing: 1, color: SUBTEXT, marginBottom: 24, textTransform: "uppercase" }}>
          Ethan Caffrey — Software Engineer II @ Canto
        </p>

        <Panel title="About">
          <p style={{ lineHeight: 1.6, marginBottom: 10, fontSize: 13 }}>
            Full-stack engineer spanning customer-facing SaaS at Canto to cloud infrastructure security at
            Ericsson — React/TypeScript frontends, Java/Spring Boot backends, Kubernetes/Helm hardening across
            115+ services.
          </p>
          <p style={{ lineHeight: 1.6, marginBottom: 14, fontSize: 13 }}>
            I build my own tooling to move faster: spec-driven AI workflows, internal process automation.
          </p>
          <div style={{ ...bevelIn, padding: "8px 12px", fontSize: 12, lineHeight: 1.9 }}>
            <div>🇮🇪 Based in Ireland</div>
            <div>💼 Software Engineer II @ Canto</div>
            <div>🔧 Building: SaaS w/ spec-driven AI workflows</div>
            <div>
              🔗 <a href="https://github.com/kahfree" target="_blank" rel="noopener noreferrer" style={{ color: LINK }}>github.com/kahfree</a>
            </div>
            <div>
              🔗 <a href="https://linkedin.com/in/ethan-caffrey-0b2976136" target="_blank" rel="noopener noreferrer" style={{ color: LINK }}>linkedin.com/in/ethan-caffrey</a>
            </div>
            <div>
              ✉️ <a href="mailto:ethancaff@gmail.com" style={{ color: LINK }}>ethancaff@gmail.com</a>
            </div>
            <div>
              📄 <a href="/ethan-caffrey-resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: LINK }}>resume.pdf</a>
            </div>
          </div>
        </Panel>

        <Panel title="Experience">
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 2 }}>
              <span style={{ fontWeight: 700, fontSize: 14 }}>Canto</span>
              <span style={{ fontSize: 12, color: SUBTEXT }}>Software Engineer II</span>
            </div>
            <div style={{ fontSize: 11, color: SUBTEXT, marginBottom: 6, letterSpacing: 0.5 }}>Feb 2025 – Present</div>
            <ul style={{ fontSize: 12, lineHeight: 1.7, paddingLeft: 18 }}>
              <li>Co-developed asset collection, used daily by 75%+ of customers — ported from the legacy UI, full-stack delivery + system design</li>
              <li>Led routing migration to TanStack Router, fixing a long-standing customer-facing scroll bug</li>
              <li>Cut CI/CD pipeline time ~25% by auditing and de-flaking the e2e suite</li>
            </ul>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 2 }}>
              <span style={{ fontWeight: 700, fontSize: 14 }}>Ericsson</span>
              <span style={{ fontSize: 12, color: SUBTEXT }}>Software Engineer</span>
            </div>
            <div style={{ fontSize: 11, color: SUBTEXT, marginBottom: 6, letterSpacing: 0.5 }}>Jul 2023 – Jan 2025</div>
            <ul style={{ fontSize: 12, lineHeight: 1.7, paddingLeft: 18 }}>
              <li>Hardened container security across ~115 services (Docker/Kubernetes/Helm) for internal compliance</li>
              <li>Built full-stack internal tool visualizing Git repo metrics for cross-team codebase health</li>
              <li>Automated Helm chart generation, cutting test turnaround from ~2 days to ~3 hours</li>
            </ul>
          </div>
        </Panel>

        <Panel title="Projects">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {projects.projects.map((p) => {
              const label = p.link.startsWith("/") ? "Open Project →" : "View on GitHub →";
              return (
                <div key={p.title} style={{ ...bevelIn, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 700, fontSize: 13 }}>{p.title}</span>
                    <a
                      href={p.link}
                      target={p.link.startsWith("/") ? undefined : "_blank"}
                      rel={p.link.startsWith("/") ? undefined : "noopener noreferrer"}
                      style={{ color: LINK, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}
                    >
                      {label}
                    </a>
                  </div>
                  <p style={{ fontSize: 12, color: SUBTEXT, lineHeight: 1.6, marginBottom: 10 }}>{p.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          ...bevelOut,
                          fontSize: 10,
                          padding: "2px 8px",
                          letterSpacing: 0.5,
                          textTransform: "uppercase",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>

        <a
          href="https://github.com/kahfree"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...bevelOut,
            display: "inline-block",
            padding: "8px 18px",
            fontSize: 12,
            fontWeight: 700,
            color: TEXT,
            textDecoration: "none",
          }}
        >
          More on GitHub →
        </a>
      </div>
    </div>
  );
}
