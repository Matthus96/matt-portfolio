import type { MetadataRoute } from "next";
import { siteConfig } from "../config/site";
import { projects } from "../data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ["", "/projects", "/about", "/contact"].map((route) => ({
        url: `${siteConfig.siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${siteConfig.siteUrl}${project.href}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...projectRoutes];
}