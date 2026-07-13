import Image from "next/image";
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
    image?: string;
    tags: string[];
    links?: ProjectLinks;
};

export default function ProjectCard({
    title,
    type,
    description,
    href,
    image,
    tags,
    links,
}: ProjectCardProps) {
    const hasLiveLink = Boolean(links?.live);

    return (
        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-white/[0.04]">
                {image ? (
                    <Image
                        src={image}
                        alt={`${title} project preview`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 768px) 33vw, 100vw"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm font-black uppercase tracking-[0.25em] text-zinc-600">
                        Preview
                    </div>
                )}
            </div>

            <div className="p-6">
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
        </div>
    );
}