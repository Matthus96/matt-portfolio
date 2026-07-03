import Link from "next/link";
import PageHero from "../../components/PageHero";
import SectionBlock from "../../components/SectionBlock";
import InfoCard from "../../components/InfoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact Matt Wilkinson for front-end development, mobile app development, responsive websites, e-commerce interfaces and digital product work.",
};

const contactOptions = [
    {
        title: "Project Work",
        description:
            "Websites, mobile apps, front-end builds, e-commerce interfaces and product-focused digital experiences.",
    },
    {
        title: "Development Support",
        description:
            "UI improvements, responsive fixes, debugging, Appwrite integration, deployment help and feature builds.",
    },
    {
        title: "Design + Code",
        description:
            "Projects that need both clean visual direction and practical development implementation.",
    },
];

const availability = [
    "Front-end development",
    "Mobile app development",
    "Responsive website builds",
    "E-commerce interfaces",
    "Appwrite-backed projects",
    "UI refinement and debugging",
];

export default function ContactPage() {
    return (
        <div>
            <PageHero
                eyebrow="Contact"
                title="Let’s build something useful, clean and real."
                description="I’m available for web development, mobile app development, front-end builds and digital product work — especially projects that need both strong visuals and practical code."
            >
                <div className="flex flex-wrap gap-3">
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
            </PageHero>

            <section className="mx-auto max-w-6xl px-5 pb-20">
                <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-zinc-950">
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                            Email
                        </p>

                        <h2 className="mt-4 text-3xl font-black tracking-tight">
                            Start with a message.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-zinc-600">
                            Send me a quick overview of what you want to build,
                            improve or fix. Include the project type, timeline and
                            any links or screenshots that help explain the idea.
                        </p>

                        <a
                            href="mailto:matthuswilkinson0@gmail.com"
                            className="mt-8 inline-flex break-all text-lg font-black text-zinc-950 underline decoration-zinc-300 underline-offset-8 transition hover:decoration-zinc-950"
                        >
                            matthuswilkinson0@gmail.com
                        </a>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-3">
                        {contactOptions.map((option) => (
                            <InfoCard
                                key={option.title}
                                title={option.title}
                                description={option.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <SectionBlock
                eyebrow="Available For"
                title="The kind of work I can help with."
                bordered
                dark
            >
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {availability.map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-zinc-950 px-5 py-4 text-sm font-bold text-zinc-200"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </SectionBlock>

            <SectionBlock
                eyebrow="Before You Email"
                title="A good project message can be simple."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        "What do you want built?",
                        "What problem should it solve?",
                        "When do you need it?",
                    ].map((question) => (
                        <div
                            key={question}
                            className="rounded-2xl bg-white/5 px-5 py-4 text-sm font-bold text-zinc-200"
                        >
                            {question}
                        </div>
                    ))}
                </div>
            </SectionBlock>
        </div>
    );
}