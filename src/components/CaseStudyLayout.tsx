import Link from "next/link";

type Challenge = {
    title: string;
    description: string;
};

type SnapshotItem = {
    label: string;
    value: string;
};

type CaseStudyLayoutProps = {
    eyebrow: string;
    title: string;
    description: string;
    snapshot: SnapshotItem[];
    overviewTitle: string;
    overview: string[];
    features: string[];
    challenges: Challenge[];
    techStack: string[];
    outcomeTitle: string;
    outcomeDescription: string;
    children?: React.ReactNode;
};

export default function CaseStudyLayout({
    eyebrow,
    title,
    description,
    snapshot,
    overviewTitle,
    overview,
    features,
    challenges,
    techStack,
    outcomeTitle,
    outcomeDescription,
    children,
}: CaseStudyLayoutProps) {
    return (
        <article>
            {/* HERO */}
            <section className="mx-auto max-w-6xl px-5 py-24">
                <Link
                    href="/projects"
                    className="text-sm font-bold text-zinc-400 transition hover:text-white"
                >
                    ← Back to Projects
                </Link>

                <div className="mt-10 max-w-4xl">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                        {eyebrow}
                    </p>

                    <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">
                        {title}
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                        {description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#overview"
                            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-200"
                        >
                            Read Case Study
                        </a>

                        <Link
                            href="/contact"
                            className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                        >
                            Discuss a project
                        </Link>
                    </div>
                </div>
            </section>

            {children}

            {/* PROJECT SNAPSHOT */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
                    {snapshot.map((item) => (
                        <div key={item.label}>
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                                {item.label}
                            </p>
                            <p className="mt-3 font-bold text-white">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* OVERVIEW */}
            <section id="overview" className="mx-auto max-w-6xl px-5 py-20">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                            Overview
                        </p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                            {overviewTitle}
                        </h2>
                    </div>

                    <div className="space-y-6 text-base leading-8 text-zinc-400">
                        {overview.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto max-w-6xl px-5 py-20">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                        Key Features
                    </p>

                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                        What the project includes.
                    </h2>

                    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature}
                                className="rounded-2xl border border-white/10 bg-zinc-950 px-5 py-4 text-sm font-bold text-zinc-200"
                            >
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CHALLENGES */}
            <section className="mx-auto max-w-6xl px-5 py-20">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                    Problem Solving
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                    Challenges I worked through.
                </h2>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {challenges.map((challenge) => (
                        <div
                            key={challenge.title}
                            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                        >
                            <h3 className="text-xl font-black">
                                {challenge.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-zinc-400">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TECH STACK */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto max-w-6xl px-5 py-20">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                        Tech Stack
                    </p>

                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                        Tools used on this build.
                    </h2>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-zinc-950 px-5 py-3 text-sm font-bold text-zinc-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUTCOME */}
            <section className="mx-auto max-w-6xl px-5 py-20">
                <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-zinc-950 sm:p-12">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                        Outcome
                    </p>

                    <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
                        {outcomeTitle}
                    </h2>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600">
                        {outcomeDescription}
                    </p>
                </div>
            </section>
        </article>
    );
}