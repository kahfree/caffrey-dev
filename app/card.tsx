"use client"
import { motion } from "motion/react"
import { DiGithubBadge } from "react-icons/di";

interface ICardProps {
    title: string,
    description: string,
    link: string,
    tags: string[],
}

export default function Card(props: ICardProps) {
    const { title, description, link, tags } = props
    return (
        <div className="h-full hover:-translate-y-1.5 hover:shadow-xl transition-[transform,box-shadow] duration-150 rounded-3xl" style={{ willChange: "transform" }}>
        {/*
          variants: a named map of animation states { hidden: {...}, visible: {...} }.
          Instead of inline initial/animate values, you name states and reference them
          by string. The parent ProjectsGrid sets initial="hidden" whileInView="visible",
          and FM propagates those state names down to all children that have matching
          variants — so this card animates in sync with its siblings automatically.
        */}
        <motion.div
            className="card-light"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="h-1 bg-emerald-600 w-full" />
            <div className="flex-grow px-6 pt-5 pb-2">
                <div className="font-bold text-2xl mb-2 text-black">{title}</div>
                <p className="text-stone-600 text-base leading-relaxed">{description}</p>
                <div className="border-t border-stone-200 my-4" />
                <div>
                    {tags.map(tag => (
                        <span key={tag} className="tag-amber">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="px-6 pb-5 pt-2 flex justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn-shimmer btn-primary">
                    <DiGithubBadge className="text-xl" />
                    View on GitHub
                </a>
            </div>
        </motion.div>
        </div>
    )
}
