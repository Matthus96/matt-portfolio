"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "../config/site";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black tracking-tight text-zinc-950"
                >
                    {siteConfig.initials}
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-zinc-300 md:flex">
                    {siteConfig.nav.map((link) => {
                        const active = isActive(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                                    active
                                        ? "bg-white text-zinc-950"
                                        : "text-zinc-400 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <Link
                    href="/contact"
                    className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10 md:inline-flex"
                >
                    Let’s Talk
                </Link>

                {/* MOBILE BUTTON */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((current) => !current)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-black text-white md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "×" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            {menuOpen ? (
                <div className="border-t border-white/10 bg-zinc-950 px-5 py-4 md:hidden">
                    <nav className="mx-auto grid max-w-6xl gap-2">
                        {siteConfig.nav.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                                        active
                                            ? "bg-white text-zinc-950"
                                            : "bg-white/[0.03] text-zinc-300 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            ) : null}
        </header>
    );
}