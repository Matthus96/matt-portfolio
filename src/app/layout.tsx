import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteConfig } from "../config/site";
import JsonLd from "../components/JsonLd";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    keywords: [
        "Matt Wilkinson",
        "Front-End Developer",
        "Mobile Developer",
        "Next.js Developer",
        "React Developer",
        "React Native Developer",
        "Portfolio",
        "Web Developer",
        "App Developer",
        "South Africa Developer",
    ],
    openGraph: {
        type: "website",
        locale: "en_ZA",
        url: siteConfig.siteUrl,
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const personJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        jobTitle: siteConfig.role,
        email: siteConfig.email,
        address: {
            "@type": "PostalAddress",
            addressCountry: "ZA",
        },
        knowsAbout: [
            "Front-End Development",
            "Mobile App Development",
            "React",
            "Next.js",
            "React Native",
            "Expo",
            "TypeScript",
            "Tailwind CSS",
            "Appwrite",
            "E-commerce Development",
        ],
    };

    const websiteJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        description: siteConfig.description,
    };

    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
        >
            <body className="min-h-screen bg-zinc-950 text-white antialiased">
                <JsonLd data={personJsonLd} />
                <JsonLd data={websiteJsonLd} />

                <Navbar />

                <main className="min-h-screen">{children}</main>

                <Footer />
            </body>
        </html>
    );
}