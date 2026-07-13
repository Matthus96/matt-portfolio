import Link from "next/link";

type ProjectLinks = {
    live?: string;
    github?: string;
    appStore?: string;
    playStore?: string;
};

type ProjectCardProps = {
    title: string;
    type: string;
    description: string;
    href: string;
    tags: string[];
    links?: ProjectLinks;
};

export default function ProjectCard({
    title,
    type,
    description,
    href,
    tags,
    links,
}: ProjectCardProps) {
    const hasLiveLink = Boolean(links?.live);

    return (
        <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                {type}
            </p>

            <h2 className="mt-5 text-2xl font-black tracking-tight text-white">
                {title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
                <Link
                    href={href}
                    className="rounded-full bg-white px-4 py-2 text-xs font-black text-zinc-950 transition hover:bg-zinc-200"
                >
                    Case Study
                </Link>

                {hasLiveLink ? (
                    <a
                        href={links?.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 px-4 py-2 text-xs font-black text-white transition hover:bg-white/10"
                    >
                        Live Site
                    </a>
                ) : null}
            </div>
        </div>
    );
}