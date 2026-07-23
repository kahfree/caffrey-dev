"use client"
import { motion } from "motion/react"
import Card from "./card"
import myJson from "./projects.json"

// variants with empty objects — this parent exists only to broadcast
// the "hidden"/"visible" state name to its children. FM propagates
// the active variant name down the tree, so every Card's variants
// respond to this parent's whileInView trigger without any extra wiring.
const container = {
    hidden: {},
    visible: {}
}

export default function ProjectsGrid() {
    return (
        /*
          whileInView: triggers the "visible" variant when this element
          enters the viewport, replacing the "hidden" initial state.

          viewport.once: animation fires once only — won't reset if user scrolls away and back.
          viewport.margin: "-80px" means FM waits until the element is 80px inside
          the viewport before triggering, so it doesn't fire too early.
        */
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 text-base font-medium justify-items-center pt-15 text-left"
        >
            {myJson.projects.map((project) => (
                <div key={project.title} className="w-full 2xl:last:col-span-3 2xl:last:justify-self-center 2xl:last:w-1/3">
                    <Card title={project.title} description={project.description} link={project.link} tags={project.tags}/>
                </div>
            ))}
        </motion.div>
    )
}
