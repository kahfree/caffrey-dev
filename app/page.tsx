"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Hero from "./hero";
import ProjectsGrid from "./projects-grid";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans animated-bg">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <Hero/>

        {/*
          This outer motion.div is a "variant orchestrator" — its own variants are
          empty ({}) so it doesn't animate itself. Its only job is to own the
          whileInView trigger. When it enters the viewport, FM sets the active
          variant to "visible" and propagates that name to all descendant
          motion elements that have matching variant keys.
        */}
        <motion.div
          className="w-full"
          variants={{ hidden: {}, visible: {} }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Image src="/transition-background.svg" alt="" width={2560} height={1024} className="w-full h-auto" />

          <div className="bg-section-tan w-full h-full text-center pb-6">
            <div className="px-6 sm:px-0 sm:w-[85%] lg:w-[60%] mx-auto">
              {/*
                This child inherits "hidden"/"visible" from the parent orchestrator.
                delay: 0.05 fires first, right as this section enters view.
              */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                className="pt-6 pb-14 text-left"
              >
                <div className="text-5xl text-black font-semibold gradient-heading text-center">About</div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-8 gap-y-4">
                  <div className="flex flex-wrap content-start gap-2 text-sm lg:flex-col lg:items-start">
                    <span className="pill-amber">
                      🌍 Ireland
                    </span>
                    <span className="pill-amber">
                      💼 SWE II @ Canto
                    </span>
                    <span className="pill-amber">
                      🔧 SaaS w/ SDD
                    </span>
                    <a
                      href="https://github.com/kahfree"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-amber-link"
                    >
                      🔗 github
                    </a>
                    <a
                      href="https://linkedin.com/in/ethan-caffrey-0b2976136"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-amber-link"
                    >
                      🔗 linkedIn
                    </a>
                  </div>
                  <p className="leading-8 text-stone-700 text-lg">
                    Full-stack engineer at Canto, building customer-facing SaaS in React/TypeScript and Java/Spring Boot.
                    Previously hardened cloud infrastructure security at Ericsson across 115+ services. I build my own
                    tooling to move faster — spec-driven AI workflows, internal automation — and I ship things end to
                    end, from system design to production.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-5xl text-black font-semibold pt-6 gradient-heading"
              >
                Experience
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 text-left"
              >
                <div className="border-l-2 border-emerald-600/50 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-3 gap-y-0.5">
                    <div className="flex items-baseline flex-wrap gap-x-2">
                      <span className="font-bold text-xl text-black">Canto</span>
                      <span className="font-semibold text-stone-700">Software Engineer II</span>
                    </div>
                    <span className="text-stone-400 text-sm whitespace-nowrap">Feb 2025 – Present</span>
                  </div>
                  <ul className="mt-3 list-disc list-outside pl-5 text-stone-600 leading-relaxed space-y-1.5">
                    <li>Co-developed asset collection, used daily by 75%+ of customers — ported from the legacy UI, full-stack delivery + system design</li>
                    <li>Led routing migration to TanStack Router, fixing a long-standing customer-facing scroll bug</li>
                    <li>Cut CI/CD pipeline time ~25% by auditing and de-flaking the e2e suite</li>
                  </ul>
                </div>

                <div className="border-l-2 border-emerald-600/50 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-3 gap-y-0.5">
                    <div className="flex items-baseline flex-wrap gap-x-2">
                      <span className="font-bold text-xl text-black">Ericsson</span>
                      <span className="font-semibold text-stone-700">Software Engineer</span>
                    </div>
                    <span className="text-stone-400 text-sm whitespace-nowrap">Jul 2023 – Jan 2025</span>
                  </div>
                  <ul className="mt-3 list-disc list-outside pl-5 text-stone-600 leading-relaxed space-y-1.5">
                    <li>Hardened container security across ~115 services (Docker/Kubernetes/Helm) for internal compliance</li>
                    <li>Built full-stack internal tool visualizing Git repo metrics for cross-team codebase health</li>
                    <li>Automated Helm chart generation, cutting test turnaround from ~2 days to ~3 hours</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-5xl text-black font-semibold pt-16"
                id="my-work"
              >
                My Work
              </motion.div>
              <ProjectsGrid />
              {/* delay: 0.2 — fades in slightly after the heading */}
              <motion.div
                className="mt-10 mb-4"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                <a href="https://github.com/kahfree" target="_blank" rel="noopener noreferrer" className="btn-shimmer btn-outline">
                  More on GitHub →
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="w-full animated-bg text-center py-20 px-6">
          {/*
            This section uses inline initial/whileInView instead of variants —
            no parent orchestration needed since it animates independently.
            whileInView here acts as both the trigger and the target state.
          */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-3xl font-semibold text-zinc-50 mb-4">Get in touch</div>
            <p className="text-zinc-300 mb-8 max-w-sm mx-auto leading-7">Open to opportunities and collaborations. Drop me a line.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:ethancaff@gmail.com" className="btn-light">ethancaff@gmail.com</a>
              <a href="https://linkedin.com/in/ethan-caffrey-0b2976136" target="_blank" rel="noopener noreferrer" className="btn-light-outline">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
