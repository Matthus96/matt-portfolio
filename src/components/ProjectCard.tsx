import Link from "next/link";

type ProjectCardProps = {
    title: string;
    type: string;
    description: string;
    href: string;
    tags: string[];
};

export default function ProjectCard({
    title,
    type,
    description,
    href,
    tags,
}: ProjectCardProps) {
    return (
        <Link
            href={href}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
        >
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

            <p className="mt-8 text-sm font-bold text-white">
                View case study →
            </p>
        </Link>
    );
}