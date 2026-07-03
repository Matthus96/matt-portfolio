import { siteConfig } from "../config/site";

export default function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} {siteConfig.name}.</p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="transition hover:text-white"
                    >
                        Email
                    </a>

                    {siteConfig.socials.github ? (
                        <a
                            href={siteConfig.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-white"
                        >
                            GitHub
                        </a>
                    ) : null}

                    {siteConfig.socials.linkedin ? (
                        <a
                            href={siteConfig.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-white"
                        >
                            LinkedIn
                        </a>
                    ) : null}
                </div>
            </div>
        </footer>
    );
}