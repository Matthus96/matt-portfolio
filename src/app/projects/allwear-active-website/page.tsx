import CaseStudyLayout from "../../../components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Allwear Active Website Case Study",
    description:
        "Case study for the Allwear Active Website, a responsive e-commerce-style website built with Next.js, TypeScript, Tailwind CSS and Appwrite.",
};

const features = [
    "Responsive product-focused website",
    "Category-based shopping structure",
    "Product cards and product detail flow",
    "Cart functionality",
    "Coupon section and discount logic",
    "Appwrite backend integration",
    "Paystack checkout preparation",
    "Mobile-first layout refinements",
    "Vercel deployment workflow",
];

const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Appwrite",
    "Paystack",
    "Vercel",
    "GitHub",
];

const challenges = [
    {
        title: "Responsive layout refinement",
        description:
            "Adjusted product grids, hero sections, footer proportions and mobile spacing so the interface remained clean across different screen sizes.",
    },
    {
        title: "Product filtering",
        description:
            "Built filtering logic so users could browse products by category and size, while keeping unavailable products from appearing incorrectly.",
    },
    {
        title: "Cart and coupon logic",
        description:
            "Added cart updates, delivery pricing and coupon handling, including the ability to validate discount codes through backend data.",
    },
    {
        title: "Deployment and debugging",
        description:
            "Worked through development, build and deployment issues using GitHub, Vercel and local debugging workflows.",
    },
];

export default function AllwearActiveWebsitePage() {
    return (
        <CaseStudyLayout
            eyebrow="E-commerce Website"
            title="Allwear Active Website"
            description="A responsive e-commerce-style website built for Allwear Active, focused on product discovery, clean category browsing, cart functionality and a polished retail user experience."
            snapshot={[
                { label: "Role", value: "Front-End Developer" },
                { label: "Type", value: "Web / E-commerce" },
                { label: "Stack", value: "Next.js, Appwrite" },
                { label: "Status", value: "Production Build" },
            ]}
            overviewTitle="Building a product-focused storefront."
            overview={[
                "Allwear Active Website was built as a modern product-facing platform for the Allwear Active brand. The goal was to create a clean shopping experience that could present product categories, support cart behaviour, handle customer-facing interactions and remain easy to expand as the product range grows.",
                "My work focused on the front-end build, responsive interface, product browsing structure, cart-related logic, Appwrite integration and deployment workflow. The project combines my visual design background with practical development skills.",
            ]}
            features={features}
            challenges={challenges}
            techStack={techStack}
            outcomeTitle="A real-world commerce platform with room to scale."
            outcomeDescription="This project demonstrates my ability to build a polished, responsive business website with real product logic, backend integration and deployment workflows. It also shows how my design background helps me create interfaces that are both functional and visually considered."
        >
            {/* VISUAL PREVIEW */}
            <section className="mx-auto max-w-6xl px-5 pb-20">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl">
                    <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950">
                        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                            <span className="h-3 w-3 rounded-full bg-white/20" />
                            <span className="h-3 w-3 rounded-full bg-white/20" />
                            <span className="h-3 w-3 rounded-full bg-white/20" />

                            <div className="ml-4 hidden flex-1 rounded-full bg-white/5 px-4 py-2 text-xs text-zinc-500 sm:block">
                                allwear-active.vercel.app
                            </div>
                        </div>

                        <div className="grid gap-4 p-5 lg:grid-cols-[1.3fr_0.7fr]">
                            <div className="min-h-[360px] rounded-[1.5rem] bg-white p-8 text-zinc-950">
                                <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-400">
                                    Allwear Active
                                </p>

                                <h2 className="mt-6 max-w-xl text-4xl font-black tracking-tight sm:text-6xl">
                                    Premium activewear and lifestyle apparel.
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
                                    A product-focused shopping interface designed
                                    for clean browsing, strong visuals and
                                    responsive customer journeys.
                                </p>

                                <div className="mt-8 flex gap-3">
                                    <div className="rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold text-white">
                                        Shop Now
                                    </div>
                                    <div className="rounded-full border border-zinc-200 px-5 py-3 text-xs font-bold text-zinc-950">
                                        View Range
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4">
                                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                                        Features
                                    </p>

                                    <div className="mt-5 space-y-3">
                                        {[
                                            "Product categories",
                                            "Cart flow",
                                            "Coupon logic",
                                            "Responsive design",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="rounded-2xl bg-white/5 px-4 py-3 text-sm font-bold text-zinc-300"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                                        Build Stack
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {[
                                            "Next.js",
                                            "TypeScript",
                                            "Appwrite",
                                            "Vercel",
                                        ].map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-zinc-300"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </CaseStudyLayout>
    );
}