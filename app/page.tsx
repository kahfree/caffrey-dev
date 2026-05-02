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

          <div id="my-work" className="bg-section-tan w-full h-full text-center pb-6">
            <div className="sm:w-[85%] lg:w-[60%] mx-auto">
              {/*
                This child inherits "hidden"/"visible" from the parent orchestrator.
                delay: 0.1 staggers it slightly after the parent triggers.
              */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-5xl text-black font-semibold pt-6 gradient-heading"
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
            <a href="mailto:ethancaff@gmail.com" className="btn-light">ethancaff@gmail.com</a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
