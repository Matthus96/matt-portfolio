import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import SectionBlock from "../components/SectionBlock";
import InfoCard from "../components/InfoCard";
import { featuredProjects } from "../data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description:
        "Matt Wilkinson is a front-end and mobile developer building clean websites, mobile apps, e-commerce interfaces and practical digital products.",
};

const stats = [
    {
        value: "3",
        label: "Featured Projects",
    },
    {
        value: "Web",
        label: "Next.js / React",
    },
    {
        value: "Mobile",
        label: "Expo / React Native",
    },
    {
        value: "Design",
        label: "Professional Background",
    },
];

const services = [
    {
        title: "Front-End Development",
        description:
            "Responsive websites, clean layouts, reusable components and polished user interfaces.",
    },
    {
        title: "Mobile App Development",
        description:
            "Expo and React Native app interfaces, product flows, cart systems and mobile-first experiences.",
    },
    {
        title: "E-commerce Interfaces",
        description:
            "Product cards, category pages, filters, cart logic, coupon flows and checkout-ready layouts.",
    },
    {
        title: "UI Refinement",
        description:
            "Fixing spacing, responsiveness, navigation, visual hierarchy and user experience issues.",
    },
];

const stack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Expo",
    "React Native",
    "Appwrite",
    "Vercel",
    "GitHub",
    "EAS",
    "App Store Connect",
    "Paystack",
];

export default function Home() {
    return (
        <div>
            {/* HERO */}
            <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
                <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div>
                        <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-zinc-400">
                            Developer Portfolio
                        </p>

                        <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
                            I build clean websites, mobile apps and practical
                            digital products.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                            I’m Matt Wilkinson, a front-end and mobile developer
                            with a design-first background. I create responsive
                            interfaces, commerce platforms, app experiences and
                            interactive products that are built for real users.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/projects"
                                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-200"
                            >
                                View Projects
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl">
                        <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6">
                            <div className="flex items-center justify-between border-b border-white/10 pb-5">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                                        Current Focus
                                    </p>
                                    <h2 className="mt-2 text-2xl font-black">
                                        Building real products
                                    </h2>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-black text-zinc-950">
                                    MW
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                {[
                                    "Responsive website builds",
                                    "Mobile app interfaces",
                                    "Product and cart systems",
                                    "Design-to-code implementation",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl bg-white/5 px-4 py-3 text-sm font-bold text-zinc-300"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-2xl bg-white p-5 text-zinc-950">
                                <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-400">
                                    Strongest Angle
                                </p>

                                <p className="mt-3 text-lg font-black leading-7">
                                    Developer who understands visual design,
                                    layout and real-world business needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto grid max-w-6xl gap-5 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-3xl border border-white/10 bg-zinc-950 p-6"
                        >
                            <p className="text-3xl font-black text-white">
                                {stat.value}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-zinc-500">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-20">
                <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                            Selected Work
                        </p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                            Featured Projects
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="text-sm font-bold text-zinc-300 transition hover:text-white"
                    >
                        See all projects →
                    </Link>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>

            <SectionBlock
                eyebrow="What I Build"
                title="Practical development for web and mobile."
                bordered
                dark
            >
                <div className="grid gap-5 md:grid-cols-2">
                    {services.map((service) => (
                        <InfoCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </SectionBlock>

            <SectionBlock
                eyebrow="Tech Stack"
                title="Tools I use to build."
            >
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {stack.map((skill) => (
                        <div
                            key={skill}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-bold text-zinc-200"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </SectionBlock>

            {/* CTA */}
            <section className="mx-auto max-w-6xl px-5 pb-24">
                <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-zinc-950 sm:p-12">
                    <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">
                        Need a developer who understands both design and code?
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600">
                        I combine visual design experience with practical
                        development skills to build interfaces that look polished,
                        feel responsive and solve real business problems.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
                    >
                        Let’s connect
                    </Link>
                </div>
            </section>
        </div>
    );
}