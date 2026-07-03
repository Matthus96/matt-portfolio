import PageHero from "../../components/PageHero";
import SectionBlock from "../../components/SectionBlock";
import InfoCard from "../../components/InfoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn more about Matt Wilkinson, a front-end and mobile developer with a professional graphic design background.",
};

const strengths = [
    {
        title: "Design-first development",
        description:
            "I approach development with a strong eye for layout, spacing, typography and visual polish.",
    },
    {
        title: "Real-world product thinking",
        description:
            "I build for actual users, business needs and practical workflows — not just static demos.",
    },
    {
        title: "Web and mobile experience",
        description:
            "I work across responsive websites, mobile apps, e-commerce interfaces and interactive experiences.",
    },
    {
        title: "Problem-solving mindset",
        description:
            "I’m comfortable debugging errors, refining UI, connecting backend data and improving user flow.",
    },
];

const timeline = [
    {
        year: "Design",
        title: "Professional Graphic Design Background",
        description:
            "Built a strong foundation in branding, layout, visual communication and user-facing design.",
    },
    {
        year: "Web",
        title: "Front-End Development",
        description:
            "Moved into React, Next.js, TypeScript and Tailwind CSS to build responsive websites and product interfaces.",
    },
    {
        year: "Mobile",
        title: "App Development",
        description:
            "Expanded into Expo and React Native, building mobile-first interfaces and app experiences.",
    },
    {
        year: "Product",
        title: "Real Project Delivery",
        description:
            "Worked on real commerce, catalogue, cart, backend and deployment flows across web and app projects.",
    },
];

const tools = [
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

export default function AboutPage() {
    return (
        <div>
            <PageHero
                eyebrow="About"
                title="I’m Matt Wilkinson — a developer with a design-first approach."
                description="I build clean websites, mobile apps and interactive digital products. My background in professional graphic design helps me create interfaces that don’t just work — they feel polished, intentional and easy to use."
            />

            {/* INTRO */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                            My Angle
                        </p>

                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                            I combine visual design with practical development.
                        </h2>
                    </div>

                    <div className="space-y-6 text-base leading-8 text-zinc-400">
                        <p>
                            My journey into development started from a design
                            background. That gives me a different way of looking
                            at software: I care about structure, visual hierarchy,
                            user flow and the small interface details that make a
                            product feel complete.
                        </p>

                        <p>
                            I’m focused on building real digital products —
                            websites, mobile apps, e-commerce experiences and
                            interactive systems that solve practical problems.
                            I enjoy working through the full process: planning,
                            building, debugging, refining and deploying.
                        </p>
                    </div>
                </div>
            </section>

            <SectionBlock
                eyebrow="Strengths"
                title="What I bring to a project."
            >
                <div className="grid gap-5 md:grid-cols-2">
                    {strengths.map((item) => (
                        <InfoCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </SectionBlock>

            <SectionBlock
                eyebrow="Journey"
                title="From design to development."
                bordered
                dark
            >
                <div className="space-y-5">
                    {timeline.map((item) => (
                        <div
                            key={item.title}
                            className="grid gap-5 rounded-3xl border border-white/10 bg-zinc-950 p-6 md:grid-cols-[160px_1fr]"
                        >
                            <p className="text-sm font-black uppercase tracking-[0.25em] text-zinc-500">
                                {item.year}
                            </p>

                            <div>
                                <h3 className="text-xl font-black text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-zinc-400">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionBlock>

            <SectionBlock
                eyebrow="Tools"
                title="Technologies I work with."
            >
                <div className="flex flex-wrap gap-3">
                    {tools.map((tool) => (
                        <span
                            key={tool}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-bold text-zinc-200"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </SectionBlock>

            {/* CTA */}
            <section className="mx-auto max-w-6xl px-5 pb-24">
                <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-zinc-950 sm:p-12">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                        Now
                    </p>

                    <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
                        I’m focused on building practical web and mobile products.
                    </h2>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600">
                        My goal is to keep growing as a developer by building
                        real projects, solving real problems and creating digital
                        experiences that look good, work well and are useful to
                        people.
                    </p>
                </div>
            </section>
        </div>
    );
}