import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import projects from "./projects.json";
import Background from "./background";
import GlassCard from "./glass-card";

const geist = Geist({ subsets: ["latin"] });
const doto = Geist_Mono({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["600"] });

const emphasis = "text-[var(--ctp-green)]";
const link = "text-[var(--ctp-blue)]";

export default function Home() {
  return (
    <div className={`${geist.className} min-h-screen`} style={{ color: "var(--ctp-text)" }}>
      <Background />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1
          className={`${fraunces.className} text-5xl sm:text-6xl font-bold tracking-tight mb-3`}
          style={{ color: "var(--ctp-text)" }}
        >
          Full-stack engineer.
        </h1>
        <p
          className={`${doto.className} text-sm tracking-widest uppercase mb-10`}
          style={{ color: "var(--ctp-subtext0)" }}
        >
          Ethan Caffrey — Software Engineer II @ Canto
        </p>

        <div className="space-y-5 leading-relaxed mb-12" style={{ color: "var(--ctp-subtext1)" }}>
          <p>
            Full-stack engineer spanning <span className={emphasis}>customer-facing SaaS</span> at Canto to{" "}
            <span className={emphasis}>cloud infrastructure security</span> at Ericsson — React/TypeScript
            frontends, Java/Spring Boot backends, Kubernetes/Helm hardening across 115+ services.
          </p>
          <p>
            I build my own tooling to move faster: <span className={emphasis}>spec-driven AI workflows</span>,
            internal process automation.
          </p>
          <p>
            — <span className="italic">Get in touch</span>:{" "}
            <a href="mailto:ethancaff@gmail.com" className={`${link} hover:underline`}>
              ethancaff@gmail.com
            </a>
          </p>
        </div>

        <div className={`${doto.className} text-sm space-y-2 mb-16`} style={{ color: "var(--ctp-subtext0)" }}>
          <div className="flex items-center gap-3">
            <span>🌍</span>
            <span>BASED IN IRELAND</span>
          </div>
          <div className="flex items-center gap-3">
            <span>💼</span>
            <span>SOFTWARE ENGINEER II @ CANTO</span>
          </div>
          <div className="flex items-center gap-3">
            <span>🔧</span>
            <span>BUILDING: SAAS W/ SPEC-DRIVEN AI WORKFLOWS</span>
          </div>
          <div className="flex items-center gap-3">
            <span>🔗</span>
            <a href="https://github.com/kahfree" target="_blank" rel="noopener noreferrer" className={`${link} hover:underline`}>
              GITHUB.COM/KAHFREE
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span>🔗</span>
            <a href="https://linkedin.com/in/ethan-caffrey-0b2976136" target="_blank" rel="noopener noreferrer" className={`${link} hover:underline`}>
              LINKEDIN.COM/IN/ETHAN-CAFFREY
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span>📄</span>
            <a href="/ethan-caffrey-resume.pdf" target="_blank" rel="noopener noreferrer" className={`${link} hover:underline`}>
              RESUME.PDF
            </a>
          </div>
        </div>

        <h2 className={`${fraunces.className} text-2xl font-bold tracking-tight mb-6`} style={{ color: "var(--ctp-text)" }}>
          Experience
        </h2>
        <div className="flex flex-col gap-10 mb-16">
          <div className="border-l-2 pl-6" style={{ borderColor: "rgba(203,166,247,0.4)" }}>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-bold text-lg" style={{ color: "var(--ctp-text)" }}>Canto</span>
              <span className="text-sm" style={{ color: "var(--ctp-subtext0)" }}>Software Engineer II</span>
            </div>
            <div className={`${doto.className} text-xs tracking-widest uppercase mb-3`} style={{ color: "var(--ctp-overlay0)" }}>
              Feb 2025 – Present
            </div>
            <ul className="list-disc list-outside pl-5 text-sm space-y-1.5 leading-relaxed" style={{ color: "var(--ctp-subtext1)" }}>
              <li>Co-developed asset collection, used daily by 75%+ of customers — ported from the legacy UI, full-stack delivery + system design</li>
              <li>Led routing migration to TanStack Router, fixing a long-standing customer-facing scroll bug</li>
              <li>Cut CI/CD pipeline time ~25% by auditing and de-flaking the e2e suite</li>
            </ul>
          </div>
          <div className="border-l-2 pl-6" style={{ borderColor: "rgba(203,166,247,0.4)" }}>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-bold text-lg" style={{ color: "var(--ctp-text)" }}>Ericsson</span>
              <span className="text-sm" style={{ color: "var(--ctp-subtext0)" }}>Software Engineer</span>
            </div>
            <div className={`${doto.className} text-xs tracking-widest uppercase mb-3`} style={{ color: "var(--ctp-overlay0)" }}>
              Jul 2023 – Jan 2025
            </div>
            <ul className="list-disc list-outside pl-5 text-sm space-y-1.5 leading-relaxed" style={{ color: "var(--ctp-subtext1)" }}>
              <li>Hardened container security across ~115 services (Docker/Kubernetes/Helm) for internal compliance</li>
              <li>Built full-stack internal tool visualizing Git repo metrics for cross-team codebase health</li>
              <li>Automated Helm chart generation, cutting test turnaround from ~2 days to ~3 hours</li>
            </ul>
          </div>
        </div>

        <h2 className={`${fraunces.className} text-2xl font-bold tracking-tight mb-6`} style={{ color: "var(--ctp-text)" }}>
          Projects
        </h2>
        <div className="flex flex-col gap-4 mb-16">
          {projects.projects.map((p) => {
            const label = p.link.startsWith("/") ? "Open Project →" : "View on GitHub →";
            const linkProps = {
              href: p.link,
              target: p.link.startsWith("/") ? undefined : "_blank",
              rel: p.link.startsWith("/") ? undefined : "noopener noreferrer",
            };
            return (
              <GlassCard key={p.title} className="overflow-hidden">
                <div className="h-[3px]" style={{ background: "var(--ctp-mauve)" }} />
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div className="font-semibold text-lg" style={{ color: "var(--ctp-text)" }}>{p.title}</div>
                    <a
                      {...linkProps}
                      className="whitespace-nowrap text-sm font-semibold hover:underline transition-colors"
                      style={{ color: "var(--ctp-blue)" }}
                    >
                      {label}
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ctp-subtext0)" }}>{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${doto.className} text-xs rounded-full px-2.5 py-1 whitespace-nowrap`}
                        style={{
                          color: "var(--ctp-mauve)",
                          border: "1px solid rgba(203,166,247,0.3)",
                          background: "rgba(203,166,247,0.08)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <div className="mb-4">
          <a
            href="https://github.com/kahfree"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 text-sm font-semibold transition duration-200 hover:bg-[var(--ctp-text)] hover:text-[var(--ctp-base)]"
            style={{ borderColor: "var(--ctp-text)", color: "var(--ctp-text)" }}
          >
            More on GitHub →
          </a>
        </div>
      </div>

      <div className="w-full text-center py-20 px-6" style={{ background: "var(--ctp-mantle)" }}>
        <div className="text-3xl font-semibold mb-4" style={{ color: "var(--ctp-text)" }}>Get in touch</div>
        <p className="mb-8 max-w-sm mx-auto leading-7" style={{ color: "var(--ctp-subtext1)" }}>
          Open to opportunities and collaborations. Drop me a line.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:ethancaff@gmail.com"
            className="inline-block px-6 py-3 rounded-full font-semibold transition duration-200"
            style={{ background: "var(--ctp-mauve)", color: "var(--ctp-base)" }}
          >
            ethancaff@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/ethan-caffrey-0b2976136"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border-2 font-semibold transition duration-200 hover:bg-[var(--ctp-blue)] hover:text-[var(--ctp-base)]"
            style={{ borderColor: "var(--ctp-blue)", color: "var(--ctp-blue)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
