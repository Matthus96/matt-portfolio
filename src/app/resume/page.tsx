import Link from "next/link";

const experienceHighlights = [
    "Professional graphic design background",
    "Front-end development with React, Next.js and TypeScript",
    "Mobile app development with Expo and React Native",
    "Responsive e-commerce website builds",
    "Product catalogue, cart and coupon logic",
    "Appwrite backend integration",
    "Deployment experience with Vercel and EAS",
    "App Store Connect release workflow experience",
];

const technicalSkills = [
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

const projectExperience = [
    {
        title: "Allwear Active Website",
        role: "Front-End Developer",
        description:
            "Built a responsive e-commerce-style website focused on product discovery, category browsing, cart functionality, coupon handling and backend integration.",
    },
    {
        title: "Allwear App",
        role: "Mobile App Developer",
        description:
            "Developed a mobile commerce app experience with product browsing, cart flow, catalogue data, Appwrite integration and app release/update workflows.",
    },
    {
        title: "David: Rise of the Shepherd King",
        role: "Interactive App / Game Developer",
        description:
            "Built an interactive mobile game concept using story progression, location cards, quiz logic, completed states and mobile-first UI systems.",
    },
];

export default function ResumePage() {
    return (
        <div>
            {/* HERO */}
            <section className="mx-auto max-w-6xl px-5 py-24">
                <div className="max-w-4xl">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                        Resume
                    </p>

                    <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">
                        Matt Wilkinson
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                        Front-end and mobile developer with a professional design
                        background, focused on building clean, responsive websites,
                        mobile apps, e-commerce interfaces and practical digital
                        products.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="mailto:matthuswilkinson0@gmail.com"
                            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-200"
                        >
                            Email Me
                        </a>

                        <Link
                            href="/projects"
                            className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* SNAPSHOT */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                            Role
                        </p>
                        <p className="mt-3 font-bold text-white">
                            Front-End Developer
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                            Focus
                        </p>
                        <p className="mt-3 font-bold text-white">
                            Web + Mobile
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                            Strength
                        </p>
                        <p className="mt-3 font-bold text-white">
                            Design + Code
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                            Location
                        </p>
                        <p className="mt-3 font-bold text-white">
                            South Africa
                        </p>
                    </div>
                </div>
            </section>

            {/* PROFILE */}
            <section className="mx-auto max-w-6xl px-5 py-20">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                            Profile
                        </p>

                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                            Developer with a design-first foundation.
                        </h2>
                    </div>

                    <div className="space-y-6 text-base leading-8 text-zinc-400">
                        <p>
                            I build practical digital products across web and
                            mobile. My background in graphic design gives me a
                            strong understanding of layout, visual hierarchy,
                            typography, spacing and user-facing polish.
                        </p>

                        <p>
                            My development work focuses on real-world interfaces:
                            responsive websites, product catalogues, cart flows,
                            mobile app screens, backend-connected data and
                            deployable product experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE HIGHLIGHTS */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto max-w-6xl px-5 py-20">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                        Highlights
                    </p>

                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                        Experience highlights.
                    </h2>

                    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {experienceHighlights.map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-white/10 bg-zinc-950 px-5 py-4 text-sm font-bold text-zinc-200"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECT EXPERIENCE */}
            <section className="mx-auto max-w-6xl px-5 py-20">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                    Project Experience
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                    Practical builds.
                </h2>

                <div className="mt-10 space-y-5">
                    {projectExperience.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                        >
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-xl font-black text-white">
                                    {project.title}
                                </h3>

                                <p className="text-sm font-bold text-zinc-500">
                                    {project.role}
                                </p>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-zinc-400">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SKILLS */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto max-w-6xl px-5 py-20">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                        Skills
                    </p>

                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                        Technical skills.
                    </h2>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {technicalSkills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-white/10 bg-zinc-950 px-5 py-3 text-sm font-bold text-zinc-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-6xl px-5 py-20">
                <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-zinc-950 sm:p-12">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                        Contact
                    </p>

                    <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
                        Interested in working together?
                    </h2>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600">
                        I’m available for web development, mobile app development,
                        front-end builds, responsive fixes and practical digital
                        product work.
                    </p>

                    <a
                        href="mailto:matthuswilkinson0@gmail.com"
                        className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
                    >
                        Send an email
                    </a>
                </div>
            </section>
        </div>
    );
}