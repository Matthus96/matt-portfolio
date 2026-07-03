type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                {eyebrow}
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">
                {title}
            </h1>

            {description ? (
                <p className="mt-6 text-lg leading-8 text-zinc-400">
                    {description}
                </p>
            ) : null}
        </div>
    );
}