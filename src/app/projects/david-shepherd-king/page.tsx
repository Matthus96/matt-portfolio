import type { Metadata } from "next";
import CaseStudyLayout from "../../../components/CaseStudyLayout";
import JsonLd from "../../../components/JsonLd";
import ProjectImageGrid from "../../../components/ProjectImageGrid";

export const metadata: Metadata = {
    title: "David: Rise of the Shepherd King Case Study",
    description:
        "Case study for David: Rise of the Shepherd King, an interactive mobile game project built with React Native, TypeScript and mobile-first game logic.",
};

const features = [
    "Interactive story progression",
    "Location-based journey map",
    "Multiple questions per location",
    "Completed-state menu cards",
    "Historically and biblically informed content",
    "Read-before-answer progression logic",
    "Restart and new journey flow",
    "Mobile-first game interface",
    "Offline-friendly app structure",
];

const techStack = [
    "React Native",
    "Expo",
    "TypeScript",
    "State Management",
    "Game Logic",
    "Mobile UI",
];

const challenges = [
    {
        title: "Progression logic",
        description:
            "Designed logic that controls when players can continue, answer questions and mark a location as completed.",
    },
    {
        title: "Multiple questions per location",
        description:
            "Expanded the quiz system so each location could support more than one question without breaking the journey structure.",
    },
    {
        title: "Completed state feedback",
        description:
            "Added visual changes to menu and map cards so players can immediately see which locations they have completed.",
    },
    {
        title: "Mobile screen flow",
        description:
            "Refined start screens, restart behaviour, scrolling and navigation so the experience felt smoother on mobile.",
    },
];

export default function DavidShepherdKingPage() {
    const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "David: Rise of the Shepherd King",
    applicationCategory: "GameApplication",
    operatingSystem: "iOS, Android",
    description:
        "A faith-based interactive mobile game project built around story progression, biblical locations, quiz logic, completed states and mobile-first gameplay flow.",
    creator: {
        "@type": "Person",
        name: "Matt Wilkinson",
    },
    about: [
        "Interactive Mobile Game",
        "React Native",
        "TypeScript",
        "Game Logic",
        "Story Progression",
        "Mobile UI",
    ],
    keywords: [
        "React Native",
        "TypeScript",
        "Mobile Game",
        "Game Logic",
        "Interactive Story",
        "Faith-Based Game",
    ],
};

    return (
        <>
        <JsonLd data={projectJsonLd} />

        <CaseStudyLayout
            eyebrow="Interactive Mobile Game"
            title="David: Rise of the Shepherd King"
            description="A faith-based interactive mobile game project built around story progression, biblical locations, quiz logic, completed states and mobile-first gameplay flow."
            links={{
                github: "",
            }}
            snapshot={[
                { label: "Role", value: "App / Game Developer" },
                { label: "Type", value: "Mobile Game" },
                { label: "Stack", value: "React Native" },
                { label: "Focus", value: "Story + Logic" },
            ]}
            overviewTitle="Turning a biblical journey into an interactive app."
            overview={[
                "David: Rise of the Shepherd King is an interactive mobile game concept focused on the life and journey of David. The app combines narrative passages, location cards, quiz interaction and progression systems.",
                "The project allowed me to work with game-like logic, conditional UI states, mobile navigation, restart behaviour and content-driven progression.",
            ]}
            features={features}
            challenges={challenges}
            techStack={techStack}
            outcomeTitle="A creative project showing logic, storytelling and UI thinking."
            outcomeDescription="This project adds creative depth to my portfolio by showing that I can build more than commerce interfaces. It demonstrates interactive thinking, game-like logic, content progression and mobile user experience design."
        >

            <ProjectImageGrid
                images={[
                    {
                        src: "/images/projects/david-game/map.png",
                        alt: "David Rise of the Shepherd King journey map screen",
                        label: "Journey map",
                    },
                    {
                        src: "/images/projects/david-game/quiz.png",
                        alt: "David Rise of the Shepherd King quiz screen",
                        label: "Quiz flow",
                    },
                    {
                        src: "/images/projects/david-game/cover.png",
                        alt: "David Rise of the Shepherd King app preview",
                        label: "Game preview",
                    },
                ]}
            />

            {/* GAME VISUAL PREVIEW */}
            <section className="mx-auto max-w-6xl px-5 pb-20">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl">
                    <div className="grid gap-5 rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5 lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="rounded-[1.5rem] bg-gradient-to-br from-zinc-900 to-zinc-800 p-6">
                            <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                                Journey Map
                            </p>

                            <h2 className="mt-4 text-3xl font-black tracking-tight">
                                From shepherd fields to kingdom calling.
                            </h2>

                            <div className="mt-8 space-y-4">
                                {[
                                    "Bethlehem",
                                    "The Wilderness",
                                    "Valley of Elah",
                                    "Saul’s Court",
                                ].map((location, index) => (
                                    <div
                                        key={location}
                                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-zinc-950">
                                            {index + 1}
                                        </div>

                                        <div>
                                            <p className="font-black text-white">
                                                {location}
                                            </p>
                                            <p className="text-xs text-zinc-500">
                                                Story • Question • Progress
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div className="rounded-[1.5rem] border border-white/10 bg-white p-6 text-zinc-950">
                                <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-400">
                                    Story Card
                                </p>

                                <h3 className="mt-5 text-2xl font-black tracking-tight">
                                    A young shepherd is called into a greater story.
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-zinc-500">
                                    Players read each location’s passage before
                                    unlocking the next step in the journey.
                                </p>

                                <div className="mt-6 rounded-full bg-zinc-950 px-5 py-3 text-center text-xs font-black text-white">
                                    I’ve read it
                                </div>
                            </div>

                            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                                <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                                    Quiz Logic
                                </p>

                                <h3 className="mt-5 text-2xl font-black tracking-tight text-white">
                                    More than one question per location.
                                </h3>

                                <div className="mt-6 space-y-3">
                                    {["Question 1", "Question 2", "Question 3"].map(
                                        (item) => (
                                            <div
                                                key={item}
                                                className="rounded-2xl bg-white/5 px-4 py-3 text-sm font-bold text-zinc-300"
                                            >
                                                {item}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </CaseStudyLayout>
        </>
    );
}