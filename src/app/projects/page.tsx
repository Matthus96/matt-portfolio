import ProjectCard from "../../components/ProjectCard";
import PageHero from "../../components/PageHero";
import { projects } from "../../data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Selected development projects by Matt Wilkinson, including web, mobile, e-commerce and interactive app case studies.",
};

export default function ProjectsPage() {
    return (
        <>
            <PageHero
                eyebrow="Projects"
                title="Selected builds and case studies."
                description="A collection of web, mobile and interactive projects that show how I approach real-world development, user experience and product delivery."
            />

            <section className="mx-auto max-w-6xl px-5 pb-24">
                <div className="grid gap-5 md:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>
        </>
    );
}