import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import projects from "../projects.json";
import RedesignBackground from "./background";

const geist = Geist({ subsets: ["latin"] });
const doto = Geist_Mono({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["600"] });

const accent = "text-emerald-400";

// Reordered + one description enriched with CV detail, for this page only —
// projects.json also feeds the live homepage, so it stays untouched.
const projectOrder = ["Liked Song Memories", "TV Backlog", "Planning Poker", "Pettopia"];
const descriptionOverrides: Record<string, string> = {
  "Liked Song Memories":
    "On-this-day memories for Spotify liked songs, with album art rendered in a terminal UI. Built without AI assistance, to sharpen the fundamentals.",
};
const redesignProjects = projectOrder.map((title) => {
  const p = projects.projects.find((pr) => pr.title === title)!;
  return descriptionOverrides[title] ? { ...p, description: descriptionOverrides[title] } : p;
});

export default function Redesign() {
  return (
    <div className={`${geist.className} min-h-screen text-white`}>
      <RedesignBackground />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className={`${fraunces.className} text-5xl sm:text-6xl font-bold tracking-tight mb-3`}>
          Full-stack engineer.
        </h1>
        <p className={`${doto.className} text-sm tracking-widest text-zinc-400 uppercase mb-10`}>
          Ethan Caffrey — Software Engineer II @ Canto
        </p>

        <div className="space-y-5 text-zinc-300 leading-relaxed mb-12">
          <p>
            Full-stack engineer spanning <span className={accent}>customer-facing SaaS</span> at Canto to{" "}
            <span className={accent}>cloud infrastructure security</span> at Ericsson — React/TypeScript
            frontends, Java/Spring Boot backends, Kubernetes/Helm hardening across 115+ services.
          </p>
          <p>
            I build my own tooling to move faster: <span className={accent}>spec-driven AI workflows</span>,
            internal process automation.
          </p>
          <p>
            — <span className="italic">Get in touch</span>:{" "}
            <a href="mailto:ethancaff@gmail.com" className={`${accent} hover:underline`}>
              ethancaff@gmail.com
            </a>
          </p>
        </div>

        <div className={`${doto.className} text-sm space-y-2 text-zinc-400 mb-16`}>
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
            <a href="https://github.com/kahfree" target="_blank" rel="noopener noreferrer" className={`${accent} hover:underline`}>
              GITHUB.COM/KAHFREE
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span>🔗</span>
            <a href="https://linkedin.com/in/ethan-caffrey-0b2976136" target="_blank" rel="noopener noreferrer" className={`${accent} hover:underline`}>
              LINKEDIN.COM/IN/ETHAN-CAFFREY
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span>📄</span>
            <a href="/ethan-caffrey-resume.pdf" target="_blank" rel="noopener noreferrer" className={`${accent} hover:underline`}>
              RESUME.PDF
            </a>
          </div>
        </div>

        <h2 className={`${fraunces.className} text-2xl font-bold tracking-tight mb-6`}>Experience</h2>
        <div className="flex flex-col gap-10 mb-16">
          <div className="border-l-2 border-emerald-500/40 pl-6">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-bold text-lg">Canto</span>
              <span className="text-zinc-400 text-sm">Software Engineer II</span>
            </div>
            <div className={`${doto.className} text-xs tracking-widest uppercase text-zinc-600 mb-3`}>
              Feb 2025 – Present
            </div>
            <ul className="list-disc list-outside pl-5 text-zinc-300 text-sm space-y-1.5 leading-relaxed">
              <li>Co-developed asset collection, used daily by 75%+ of customers, ported from the legacy UI</li>
              <li>Led routing migration to TanStack Router, fixing a long-standing customer-facing scroll bug</li>
              <li>Cut CI/CD pipeline time ~25% by auditing and de-flaking the e2e suite</li>
            </ul>
          </div>
          <div className="border-l-2 border-emerald-500/40 pl-6">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-bold text-lg">Ericsson</span>
              <span className="text-zinc-400 text-sm">Software Engineer</span>
            </div>
            <div className={`${doto.className} text-xs tracking-widest uppercase text-zinc-600 mb-3`}>
              Jul 2023 – Jan 2025
            </div>
            <ul className="list-disc list-outside pl-5 text-zinc-300 text-sm space-y-1.5 leading-relaxed">
              <li>Hardened container security across ~115 services (Docker/Kubernetes/Helm)</li>
              <li>Built full-stack internal tool visualizing Git repo metrics for cross-team codebase health</li>
              <li>Automated Helm chart generation, cutting test turnaround from ~2 days to ~3 hours</li>
            </ul>
          </div>
        </div>

        <h2 className={`${fraunces.className} text-2xl font-bold tracking-tight mb-6`}>Projects</h2>
        <div className="flex flex-col gap-4 mb-16">
          {redesignProjects.map((p) => {
            const label = p.link.startsWith("/") ? "Open Project →" : "View on GitHub →";
            const linkProps = {
              href: p.link,
              target: p.link.startsWith("/") ? undefined : "_blank",
              rel: p.link.startsWith("/") ? undefined : "noopener noreferrer",
            };
            // Trying an outline-button variant on the first item only, matching the
            // card's own corner radius rather than a pill — comparing against the
            // plain text-link treatment used on the rest.
            return (
              <div key={p.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
                <div className="h-1 bg-emerald-500" />
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div className="font-semibold text-white text-lg">{p.title}</div>
                    <a {...linkProps} className="whitespace-nowrap text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                      {label}
                    </a>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${doto.className} text-xs text-emerald-400/80 border border-emerald-400/30 rounded-full px-2.5 py-1 whitespace-nowrap`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
