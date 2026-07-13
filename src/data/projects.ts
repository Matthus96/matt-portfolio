export const projects = [
    {
        title: "Allwear Active Website",
        type: "E-commerce Website",
        description:
            "A responsive product-focused website for Allwear Active, built with Next.js, TypeScript, Tailwind CSS and Appwrite.",
        href: "/projects/allwear-active-website",
        image: "/images/projects/allwear-website/allwear-web.png",
        tags: ["Next.js", "TypeScript", "Tailwind", "Appwrite", "Vercel"],
        featured: true,
        links: {
            live: "https://allwearactive.co.za",
            github: "",
            appStore: "",
            playStore: "",
        },
    },
    {
        title: "Allwear App",
        type: "Mobile Commerce App",
        description:
            "A live mobile app for product browsing, cart management, order flow, product catalogues and customer account management.",
        href: "/projects/allwear-app",
        image: "/images/projects/allwear-app/Allwear_App.png",
        tags: ["Expo", "React Native", "Appwrite", "EAS", "App Store"],
        featured: true,
        links: {
            live: "",
            github: "",
            appStore: "",
            playStore: "",
        },
    },
    {
        title: "David: Rise of the Shepherd King",
        type: "Interactive Mobile Game",
        description:
            "A faith-based interactive mobile game project using story progression, location cards, quiz logic and mobile-first UI systems.",
        href: "/projects/david-shepherd-king",
        image: "/images/projects/david-game/cover.png",
        tags: ["React Native", "TypeScript", "Game Logic", "UX"],
        featured: true,
        links: {
            live: "",
            github: "",
            appStore: "",
            playStore: "",
        },
    },
];

export const featuredProjects = projects.filter((project) => project.featured);