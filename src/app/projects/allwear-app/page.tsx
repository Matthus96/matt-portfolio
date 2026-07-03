import CaseStudyLayout from "../../../components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Allwear App Case Study",
    description:
        "Case study for the Allwear App, a mobile commerce app built with Expo, React Native, TypeScript and Appwrite.",
};

const features = [
    "Mobile product catalogue",
    "Category and product browsing",
    "Cart and order flow",
    "Delivery fee handling",
    "User account flow",
    "Appwrite backend integration",
    "Expo development workflow",
    "EAS update and build process",
    "App Store deployment experience",
];

const techStack = [
    "Expo",
    "React Native",
    "TypeScript",
    "Appwrite",
    "EAS",
    "App Store Connect",
    "GitHub",
];

const challenges = [
    {
        title: "Live app updates",
        description:
            "Worked with Expo and EAS updates to push app improvements without rebuilding every small front-end change.",
    },
    {
        title: "Product and catalogue structure",
        description:
            "Built product catalogue logic that could be expanded with new products, collections and categories from backend data.",
    },
    {
        title: "Mobile-first user experience",
        description:
            "Refined spacing, loading states, product cards and navigation patterns for a smoother mobile shopping experience.",
    },
    {
        title: "Backend connection issues",
        description:
            "Debugged Appwrite configuration, collection IDs, environment variables and data fetching errors during development.",
    },
];

export default function AllwearAppPage() {
    return (
        <CaseStudyLayout
            eyebrow="Mobile Commerce App"
            title="Allwear App"
            description="A mobile commerce app built for Allwear, focused on product browsing, cart flow, ordering, catalogue management and app-store-ready deployment."
            snapshot={[
                { label: "Role", value: "Mobile Developer" },
                { label: "Type", value: "Mobile / Commerce" },
                { label: "Stack", value: "Expo, Appwrite" },
                { label: "Status", value: "Live App Build" },
            ]}
            overviewTitle="Building a mobile commerce experience."
            overview={[
                "The Allwear App was built to give customers a mobile way to browse products, manage their cart and interact with Allwear’s catalogue and ordering flow.",
                "My work focused on building the app interface, connecting it to backend data, handling product and cart logic, improving the mobile experience and working through the deployment/update process.",
            ]}
            features={features}
            challenges={challenges}
            techStack={techStack}
            outcomeTitle="A practical app build with real deployment experience."
            outcomeDescription="This project shows my ability to move beyond static interface work and build functional mobile experiences connected to real data, real devices and real release workflows."
        >
            {/* APP VISUAL PREVIEW */}
            <section className="mx-auto max-w-6xl px-5 pb-20">
                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                    <div className="mx-auto w-full max-w-[320px] rounded-[3rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
                        <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-zinc-950">
                            <div className="flex justify-center border-b border-white/10 px-5 py-4">
                                <div className="h-1.5 w-20 rounded-full bg-white/20" />
                            </div>

                            <div className="p-5">
                                <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                                    Allwear
                                </p>

                                <h2 className="mt-5 text-3xl font-black tracking-tight">
                                    Shop your next range.
                                </h2>

                                <div className="mt-6 h-48 rounded-[2rem] bg-white" />

                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <div className="rounded-2xl bg-white/5 p-3">
                                        <div className="h-20 rounded-xl bg-white/10" />
                                        <p className="mt-3 text-xs font-bold text-zinc-300">
                                            Product Card
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-white/5 p-3">
                                        <div className="h-20 rounded-xl bg-white/10" />
                                        <p className="mt-3 text-xs font-bold text-zinc-300">
                                            Cart Flow
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 rounded-full bg-white px-5 py-3 text-center text-xs font-black text-zinc-950">
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                            Mobile Build
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                            Built for real users, real products and real release
                            workflows.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
                            The Allwear App was designed as a practical mobile
                            shopping and ordering experience. Beyond the interface,
                            the project involved backend data, app updates,
                            deployment preparation and real-world testing on
                            physical devices.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {[
                                "Mobile-first UI",
                                "Product data",
                                "Cart handling",
                                "Live updates",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-bold text-zinc-200"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </CaseStudyLayout>
    );
}